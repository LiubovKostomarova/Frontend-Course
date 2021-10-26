function onSearch() {
    let searchText = document.getElementById('searchText').value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=e1dc1D5IhYvob3Wq8xVyAbWBB5WcxYWW" + searchText + "&limit=5&offset=0&rating=g&lang=ru")
        .then(response => response.json())
        .then(gifs => {
            console.dir(gifs); //это массив картинок, результат поиска
            let gifPic = "";
            //проверка вывода одной картинки (работает)
            // gifPic += `<img class="img" src="${gifs.data[1].images.original.url}">`;
            // document.getElementById("result").innerHTML = gifPic;

            for (let i = 0; i < gifs.data.length; i++) {
                gifPic += `<img class="img" src="${gifs.data[i].images.original.url}">`;
            }
            document.getElementById("result").innerHTML = gifPic;
            console.dir(document.getElementById("result"))
        })

        .catch(error => console.log(error));
};
console.dir(document.getElementById("result"))