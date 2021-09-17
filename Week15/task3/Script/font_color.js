function getColor() {
    let color1 = document.getElementById('background_color').value;

    if (color1 == 'color_w') {
        document.body.style.backgroundColor = 'white';
    } else {
        if (color1 == 'color_b') {
            document.body.style.backgroundColor = 'blue';
        } else if (color1 == 'color_r') {
            document.body.style.backgroundColor = 'red';
        } else if (color1 == '#056789') {
            document.body.style.backgroundColor = '#056789';
        }
    }
}

