const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}

// let slider_img = document.querySelector('slider_img');
// let images = ['Assets/Images/code.jpg', 'Assets/Images/javascript.jpg', 'Assets/Images/js.jpg', 'Assets/Images/laptop.png'];
// let i = 0;

// function prev() {
    // if (i <= 0) i = images.length;
    // i--;
    // return setImg();
// }

// function next() {
    // if (i >= images.length - 1) i = -1;
    // i++;
    // return setImg();
// }


   // function setImg() {
   // return slider_img.setAttribute('src', 'Assets/Images/' + images[i]);
//}


