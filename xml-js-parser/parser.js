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
    for (i = 0; i < movies.lenght; i++) {
        name = movies[i].getElementsByTagName('nimi')[0].childNodes[0].nodeValue;
        htmlData += name + '<br>';
    }

    document.getElementById('movies').innerHTML = htmlData;
}