const btn = document.getElementById('get');


const output = document.getElementById('output');

const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

function ajax(method, endpoint) {


    let httpReq = new XMLHttpRequest();

    httpReq.open(method, endpoint);
    httpReq.send();

    httpReq.addEventListener('readystatechange', function () {
        console.log(`readyState ${httpReq.readyState}`);
        console.log(`status ${httpReq.status}`);
        if (httpReq.readyState == 4 && httpReq.status == 200) {
            let data = JSON.parse(httpReq.responseText);
            console.log(data);
        }
    });
}

function show(response) {
    console.log(response);
}


ajax("GET", url);

//ajax('GET', 'http://leguralnie.pl/json/ogloszenia-json.json');
