function createElement(data){
    paragraph =document.createElement('p').innerHTML = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback){
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Over';

    xhr.open('GET', url);
}