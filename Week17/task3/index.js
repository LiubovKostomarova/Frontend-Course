//taken from https://learn.javascript.ru/date#tasks

function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // меньше 1 секунды
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
        return min + ' мин. назад';
    }

    // отформатировать дату
    // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

//alert(formatDate(new Date(new Date - 12 * 60 * 60 * 1000))); // "12 час. назад"

// вчерашняя дата в формате "дд.мм.гг чч:мм"
alert(formatDate(new Date(new Date - 86400 * 1000)));

//Alternative way:
/*const date = new Date();

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    //formatting:
    year = year.toString().slice(-2);
    month = month < 10 ? `0` + month : month;
    dayOfMonth = dayOfMonth < 10 ? `0` + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? `0` + hour : hour;
    minutes = minutes < 10 ? `0` + minutes : minutes;

    if (diffSec < 1) {
        return `right now`;
    } else if (diffMin < 1) {
        return `${diffSec} seconds ago`;
    } else if (diffHour < 1) {
        return `${diffMin} minutes ago`;
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

alert(formatDate(date));

function showAlert() {
    alert(formatDate(date));
}
setInterval(showAlert, 30000);*/