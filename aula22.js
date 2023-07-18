var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); //readyState sera 0

xhr.open('GET', 'https://restcountries.com/v3.1/name/brazil', true);
console.log('OPENED', xhr.readyState); //readyState sera 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); //readyState sera 3
};
xhr.onload = function () {
    console.log('DONE', xhr.readyState); //readyState sera 4
    console.log(JSON.parse(xhr.responseText))
    let resultado = JSON.parse(xhr.responseText)
    let div = document.getElementById("bandeira")
    let element
    element = document.createElement("p");
    let img = document.createElement("img");
    img.src = resultado[0].flags.png
    div.appendChild(img)

};

xhr.send();
