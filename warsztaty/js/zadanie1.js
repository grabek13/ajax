const btn = document.getElementById('button');
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
            let html = `${data.userId} <hr> ${data.userName} <hr> ${data.userURL}`;
            output.innerHTML = html;
            /*for (let i=0; i<data.length;i++) {
                console.log(data[i]);
            }*/
        }
    });
}

/*function adddata(method, url) {
    console.log("sss");
    ajax("GET", url);
    

}*/

btn.addEventListener('click', function () {
    ajax("GET", url);
});
