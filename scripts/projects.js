$.githubUser = function(username, callback) {
    $.getJSON("https://github.com/api/v1/json/" + username + "?callback=?", callback)
}