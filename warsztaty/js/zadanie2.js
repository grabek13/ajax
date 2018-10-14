const btn = $('#button');
const output = $('#output');

url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";
btn.click(function () {

    $.getJSON(url, function (response) {
        let html = `UserID: ${response.userId} <hr> UserName ${response.userName}<hr>
    userUrl: ${response.userURL}`;

        document.getElementById('output').innerHTML = html;
    });

});
