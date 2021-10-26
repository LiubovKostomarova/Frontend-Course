/*const api = {
    endpoint: "https://api.giphy.com/v1/gifs/",
    key: "e1dc1D5IhYvob3Wq8xVyAbWBB5WcxYWW"
}

let input = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
let showResult = document.querySelector('.showResult');


btn.addEventListener('click', getInfo);



async function getInfo() {

    const res = await fetch(`${api.endpoint}search?api_key=${api.key}&q=${input.value}&limit=5&offset=0&rating=g&lang=en`);

    const result = await res.json();




    postImages(result)


}

function postImages(result) {

    for (let i = 0; i < result.data.length; i++) {
        showResult.innerHTML += `
        <img class="img" alt="picture" src="${result.data[i].images.original.url}"><br>`
    }
    input.value = '';
}*/

document.getElementById('btn').addEventListener('click', function(){
    let searchTopic = document.getElementById('inputText').value;
    const apiKey = 'e1dc1D5IhYvob3Wq8xVyAbWBB5WcxYWW';
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTopic}&limit=5&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(json => {
            if(document.getElementsByClassName('gifImg').length != 0){
                document.querySelectorAll('.gifImg').forEach(e => e.remove())
            }
            json.data
                .map(gif => gif.images.fixed_height.url)
                .forEach(url => {
                        let imgBlock = document.createElement('div');
                        imgBlock.innerHTML = `<img src=${url} alt="gif" class='gifImg'>`;
                        document.body.append(imgBlock);
                })
        })
        .catch(error => console.log(error))
        });