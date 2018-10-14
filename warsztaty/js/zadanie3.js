const url = "https://jsonplaceholder.typicode.com/users";

const btn = document.getElementById('button');
const output = document.querySelector('ul');

//const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

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
            data.forEach(function (elem, ind) {
                let html = `${elem.id} ${elem.name} ${elem.username} ${elem.email}`;
                let list = document.createElement("li"); // tworzy element <button>
                list.innerHTML = html;
                output.appendChild(list);
                /*for (let i=0; i<data.length;i++) {
                    console.log(data[i]);
                }*/
            });
        }
    });
}

/*function adddata(method, url) {
    console.log("sss");
    ajax("GET", url);
    

}*/

window.addEventListener('scroll', function () {
    if (document.documentElement.offsetHeight == document.documentElement.scrollTop + window.innerHeight) {
        console.log("przewinales strone");
        ajax("GET", url);
    }
});
