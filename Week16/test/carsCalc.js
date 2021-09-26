/*require(['jquery', 'fosrouter', 'sweetalert2', 'bootstrap', 'jquery.deserialize'], function ($, Routing, swal) {
    var vols = [],

        $calculator = $('.jt-calculator'),
        $calculation = $('.jt-calculation'),
        $spinner = $('<div/>')
            .addClass('sk-three-bounce')
            .append($('<div/>').addClass('sk-child sk-bounce1'))
            .append($('<div/>').addClass('sk-child sk-bounce2'))
            .append($('<div/>').addClass('sk-child sk-bounce3')),
        $clearanceSection = $calculator.find('#calculator_clearance_section'),
        $volumeInput = $calculator.find('#calculator_volume'),
        $volumeRow = $volumeInput.closest('.form-group'),
        $importerRow = $calculator.find('#calculator_importer').closest('.form-group'),
        $declaredCostInput = $calculator.find('#calculator_declared_cost'),
        $declaredCostRow = $declaredCostInput.closest('.form-group'),
        $gridModal = $('#clearancemodel_grid_modal'),
        setParams = function (data) {
            $calculator.find('form').deserialize(data, {
                change: function () {
                    $(this).change();
                },
            });
        },
        loadCalculation = function (data) {
            $calculation.empty().append($spinner);

            var request = $.ajax({
                url: Routing.generate('jt_portal_carcalculator_calculate'),
                type: 'post',
                dataType: 'json',
                data: data
            });

            request.done(function (data) {
                $calculation.empty();
                if (!data.status) {
                    $calculation.append(data.calculation);
                    $calculation.find('[data-toggle="tooltip"]').tooltip();
                } else {
                    if (data.message) {
                        swal('Не удалось выполнить.', data.message, 'error');
                    }
                }
            });

            request.fail(function () {
                swal('Не удалось выполнить.', 'Проверьте ваше интернет соединение и попытайтесь еще раз.', 'error');
            });
        };
    $calculator.find('#calculator_port').closest('.form-group').hide();
    $calculation.find('[data-toggle="tooltip"]').tooltip();

    $calculator.find('form').submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        history.pushState(null, null, '#calc-' + btoa(unescape(data)));

        loadCalculation(data);
    });

    $calculator.find('#calculator_service_type input[type=radio]')
        .change(function () {
            if ($(this).val() == 'cc_full') {
                $clearanceSection.show();
            } else {
                $clearanceSection.hide();
            }
        })
        .filter('[checked]')
        .trigger('change');

    $calculator.find('#calculator_fueltype input[type=radio]')
        .change(function () {
            if ($(this).val() == 'electro') {
                $volumeRow.hide().find('input').val('');
            } else {
                $volumeRow.show();
            }
        })
        .filter('[checked]')
        .trigger('change');

    $calculator.find('#calculator_age_class input[type=radio]')
        .change(function () {
            if ($(this).val() == 'new') {
                if ($importerRow.find('input[type=radio]:checked').val() == 'l') {
                    $importerRow.find('input[type=radio][value=p]')
                        .prop('checked', true)
                        .trigger('change');
                }
                $importerRow.find('input[type=radio][value=l]').prop('disabled', true);
            } else {
                $importerRow.find('input[type=radio][value=l]').prop('disabled', false);
            }
        })
        .filter('[checked]')
        .trigger('change');
    $importerRow.find('input[type=radio]')
        .change(function () {
            if ($(this).val() == 'p') {
                $declaredCostRow.hide();
            } else {
                $declaredCostRow.show();
            }
        })
        .filter('[checked]')
        .trigger('change');

    $gridModal
        .find('[data-clearance-volume]')
        .each(function () {
            var v = parseInt($(this).data('clearanceVolume'));
            if ($.inArray(v, vols) == -1) {
                vols.push(v);
            }
        });
    vols.sort();

    $gridModal
        .on('show.bs.modal', function (e) {
            var ageClassVal = $calculator.find('#calculator_age_class input:checked').val(),

                volumeVal = $volumeInput.val(),
                volumeProposed = false,

                $gridBody = $gridModal.find('.clearance-value-grid');
            $gridBody
                .removeClass('clearance-class-new')
                .removeClass('clearance-class-used-s')
                .removeClass('clearance-class-used-e')
                .removeClass('clearance-class-old');
            $gridBody
                .find('.clearance-model-proposal')
                .removeClass('.clearance-model-proposal');

            switch (ageClassVal) {
                case 'new':
                    $gridBody.addClass('clearance-class-new');
                    break;
                case 'used_s':
                    $gridBody.addClass('clearance-class-used-s');
                    break;
                case 'used_e':
                    $gridBody.addClass('clearance-class-used-e');
                    break;
                case 'old':
                    $gridBody.addClass('clearance-class-old');
                    break;
            }

            if (volumeVal) {
                for (var i = 0; i < vols.length && !volumeProposed; i++) {
                    if (volumeVal <= vols[i]) {
                        volumeProposed = vols[i];
                    }
                }
            }

            if (volumeProposed) {
                $gridBody.find('[data-clearance-volume=' + volumeProposed + ']').addClass('clearance-model-proposal');
            }
        })
        .find('.clearance-value')
        .click(function (e) {
            e.preventDefault();
            $declaredCostInput.val(parseInt($(this).text()));
            $gridModal.modal('hide');
        });

    $(window).on('hashchange', function () {
        if ('#calc-' == window.location.hash.substr(0, 6)) {
            var data = decodeURIComponent(escape(atob(decodeURIComponent(window.location.hash.substr(6)))));
            setParams(data);
            loadCalculation(data);
        }
    }).trigger('hashchange');

    $calculation.on('click', '.share-btn', function (e) {
        e.preventDefault();

        var request = $.ajax({
            url: Routing.generate('jt_portal_carcalculator_share'),
            type: 'post',
            dataType: 'json',
            data: $(this).data('formdata')
        });

        request.done(function (data) {
            if (!data.status) {
                swal({
                    title: 'Постоянная ссылка',
                    html: '<div class="m-t form-group">' +
                        '<div class="input-group input-group-lg">' +
                        '<input readonly="readonly" class="form-control link-text" value="' + data.link + '">' +
                        '<span class="input-group-btn">' +
                        '<button type="button" class="btn btn-default btn-outline clipboard-btn" title="Скопировать в буфер обмена"><i class="fa fa-copy"></i></button>' +
                        '</span>' +
                        '</div>' +
                        '<p class="copied-msg small m-t-sm text-info hidden"><i class="fa fa-info-circle m-r"></i>Текст скопирован в буфер обмена</p>' +
                        '</div>',
                    onOpen: function (m) {
                        var linkTxt = $(m).find('.link-text');
                        linkTxt.focus(function () {
                            linkTxt.select();
                        });
                        $(m).find('.clipboard-btn').click(function () {
                            linkTxt.focus();
                            document.execCommand('copy');
                            $(m).find('.copied-msg').removeClass('hidden');
                        });
                    },
                });
            } else {
                if (data.message) {
                    swal('Не удалось выполнить.', data.message, 'error');
                }
            }
        });

        request.fail(function () {
            swal('Не удалось выполнить.', 'Проверьте ваше интернет соединение и попытайтесь еще раз.', 'error');
        });
    });
});
