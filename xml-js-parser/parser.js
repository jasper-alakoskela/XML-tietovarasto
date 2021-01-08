function loadXML() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parseXMLData(this.responseXML);
        }
    }
    xhttp.open("GET", "data3.xml");
    xhttp.send();
}

function parseXMLData(data) {
    console.log(data);

    const movies = data.getElementsByTagName('elokuva');

    let i;
    let name = '';
    let htmlData = '';
    for (i = 0; i < movies.length; i++) {
        name = movies[i].getElementsByTagName('nimi')[0].childNodes[0].nodeValue;
        director = movies[i].getElementsByTagName('ohjaaja')[0].childNodes[0].nodeValue;
        year = movies[i].getElementsByTagName('julkaisuvuosi')[0].childNodes[0].nodeValue;
        genre = movies[i].getElementsByTagName('genre')[0].childNodes[0].nodeValue;
        age = movies[i].getElementsByTagName('ikäraja')[0].childNodes[0].nodeValue;

        htmlData += `<h2>${name}</h2>
        <p>
            ${director}<br>
            ${year}<br>
            ${genre}<br>
            ${age}<br>
        </p>`;
    }

    document.getElementById('movies').innerHTML = htmlData;
}

