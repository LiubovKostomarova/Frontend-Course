function splitName() {
    document.getElementById(`surname`).value = ``;
    document.getElementById(`name`).value = ``;
    document.getElementById(`patr`).value = ``;

    let snpEntered = document.getElementById(`snp`).value;
    console.log(snpEntered);

    //remove whitespace
    snpFinal = snpEntered.replace(/ +/g, ` `).trim();
    console.log(snpFinal);

    //make the entries show in lower case
    let lower = snpFinal.toLowerCase();
    console.log(lower);

    //split three name entries into an array
    let namesArr = lower.split(` `);
    console.log(namesArr);

    //Make first letters of items in the array capital
    namesArr.forEach(function (word, index) {
        namesArr[index] = word[0].toUpperCase() + word.slice(1);
    })
    console.log(namesArr);

    //take new values and place them in inputs
    document.getElementById(`surname`).value += namesArr[0];
    document.getElementById(`name`).value += namesArr[1];
    document.getElementById(`patr`).value += namesArr[2];

    console.log(namesArr.join(` `));
}