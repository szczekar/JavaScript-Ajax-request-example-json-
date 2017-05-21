// ----USING WEB API FROM NBP WEBSITE TO GET ACTUAL GOLD PRICE FROM THEIR SERVER ------

window.onload = showDataFromServer;
var container = document.getElementById("container");

function showDataFromServer() {
    var request = "";
    request = new XMLHttpRequest(); // tworzymy obiekt zeby uzyc AJAX
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var ourData = JSON.parse(request.responseText);
            renderHTML(ourData);
        } else {
            var txt = "Status: ";
            container.innerHTML = txt + request.status;
        }
    }
    request.open("GET", "http://api.nbp.pl/api/cenyzlota?format=json", true);
    request.send();
}


function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + "Data : " + data[i].data + "<br />" + "Cena: " + data[i].cena + "</p>";
    }

    container.innerHTML = htmlString;

}



//----------USING PUBLIC WEB API TO GET PUBLIC IP ADDRESS 


var btn = document.getElementById("btn");
var container2 = document.getElementById("container2");

btn.addEventListener('click', function() {
    //  alert("Button działa ! ");
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var ourData = JSON.parse(request.responseText);
            container2.innerHTML = "<p>" + "My public IP is: " + ourData.ip;
        } else {
            var txt = "Status: ";
            container2.innerHTML = txt + request.status;
        }
    }
    request.open("GET", "https://api.ipify.org?format=json", true);
    request.send();
})