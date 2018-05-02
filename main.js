function getData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

const repoLink = 'https://api.github.com/orgs/HackYourFuture/repos';
const btn = document.querySelector('#myButton');
/*
btn.addEventListener('click', function () {
    console.log('You clicked me.');
    //showRepoList();
    //searchRepoList();
});
*/

const filterInput = document.querySelector('#userInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {

    const filterValue = document.querySelector('#userInput').value;

    getData(repoLink, function (repoList) {

        for (let i = 0; i < repoList.length; i++) {

            const githubLink = ' https://api.github.com/repos/HackYourFuture/' + repoList[i].name;
            let ul = document.querySelector('#repositories');
            let newLi = document.createElement('li');


            if ((repoList[i].name.indexOf(filterValue)) > -1) {
                ul.appendChild(newLi);

                newLi.innerHTML = `<a href = "${githubLink}" target = "_blank">` + githubLink + `</a>`;
            } else {

                newLi.innerHTML = '';
            }
        }

    })
}






// Display the RepoList on html
/*
function showRepoList() {
    getData(repoLink, function (repoList) {
        //console.log(repoList);

        let output = '';
        for (let i = 0; i < repoList.length; i++) {
            const siteLink = ' https://api.github.com/repos/HackYourFuture/' + repoList[i].name;
            output += '<li>' + "<a href=\"" + siteLink + "\" target =\"_blank\">" + siteLink + "</a>" + '</li>'

            //console.log(repoList[i].name );

        }
        document.getElementById("repositories").innerHTML = output;
    });
}
showRepoList();*/

