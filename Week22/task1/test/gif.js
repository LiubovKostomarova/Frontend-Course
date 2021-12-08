const btnSearchGif = document.getElementById("btnSearchGif");
const inputClear = document.getElementById("inputSearchGif");
const btnClearGif = document.getElementById("btnClearGif");

let createGif = () => {
    let inputSearchGif = document.getElementById("inputSearchGif").value;
    
    fetch(`http://api.giphy.com/v1/gifs/search?q=${inputSearchGif}&api_key=Ab4l19iVbKayKoxKwD8vOJ8K3P7OZS8w&limit=5`)
        .then(response => response.json())
        .then(list => {
            //console.log(list);
            let firstDiv = document.getElementById('firstDiv');
            if(list.data.length == 0){
                Swal.fire('Такой гифки нет!');
                document.getElementById("inputSearchGif").value = "";
            } else {
                for(let i = 0; i < list.data.length; i++){
                    let img = document.createElement('img');
                    console.log(list.data[i].images.original.url);
                    img.src = list.data[i].images.original.url;          
                    firstDiv.appendChild(img);
                }
            }            
        })
        .catch(err => console.log(err));
}

btnSearchGif.addEventListener("click", () => {
    clearImg();
    createGif();
});

inputClear.addEventListener("input", () => {
    clearImg();
});

inputClear.addEventListener("keyup", (event) => {
    clearImg();
    if(event.key === "Enter" && event.code === "Enter" || event.key === "Enter" && event.code === "NumpadEnter" ){
        createGif();
    }
});

btnClearGif.addEventListener("click", () => {
    document.getElementById("inputSearchGif").value = "";
    clearImg();
});

let clearImg = () => {
    let img = document.images;
    for(let i = 0; i < img.length; i++){
        img[i].src = "";
    }
}