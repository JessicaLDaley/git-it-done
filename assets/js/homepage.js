var getUserREpos = function(){
    fetch("https://api.github.com/users/octocat/repos");
};

getUserREpos();