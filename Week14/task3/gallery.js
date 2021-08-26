

let slider_img = document.querySelector('slider_img');
let images = ['Assets/Images/code.jpg', 'Assets/Images/javascript.jpg', 'Assets/Images/js.jpg', 'Assets/Images/laptop.png'];
let i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'Assets/Images/' + images[i]);
}


function btnPrevious() {
let pic1 = document.getElementById('image');
pic1.src = "Assets/Images/code.jpg";
} 

function btnNext() {
    let pic3 = document.getElementById('image');
    pic3.src = "Assets/Images/laptop.png";
}