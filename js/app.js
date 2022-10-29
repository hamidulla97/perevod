let containerEl = document.querySelector(".container");
let eList = document.querySelector(".list");
let contEl = document.querySelector("#cont1");
let srchEl = document.querySelector("#inp");
let btnEl = document.querySelector("#btnsrch");
let cont2El = document.querySelector(".cont2");
let h4El = document.querySelector("#h4")
let audioEl = document.querySelector("#audi")
let partEl = document.querySelector(".part");
let parEl = document.querySelector(".par")



contEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${srchEl.value}`)
        .then((cor) => cor.json())
        .then((work) => {
            work.forEach((element) => {
                h4El.innerHTML = element.word + " - " + element.phonetics[1].text;
                eList.innerHTML = element.meanings[0].definitions[0].definition;
                parEl.innerHTML = element.meanings[2].definitions[0].definition;
                audioEl.setAttribute("controls", "")
                audioEl.src = element.phonetics[0].audio;
                partEl.innerHTML = element.meanings[0].partOfSpeech


                console.log(element);
            });
        });
});