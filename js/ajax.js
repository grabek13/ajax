const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

$.ajax({
    url: url,
    method: "GET",
    success: function(result) {
        let html = `UserID: ${result.userId} <hr> UserName ${result.userName}<hr>
    userUrl: ${result.userURL}`;
    
    document.getElementById('output').innerHTML = html;
    }
});