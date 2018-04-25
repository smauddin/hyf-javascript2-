
const btn = document.querySelector('#btn');
btn.addEventListener ('click', function (){
     console.log('You clicked me.');



function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
       // console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}


fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
    //console.log(repoList);

    let output = '';
    for (let i = 0; i < repoList.length; i ++){
        const siteLink = ' https://api.github.com/repos/HackYourFuture/' + repoList[i].name;
        output += '<li>' + "<a href=\"" + siteLink + "\" target =\"_blank\">" + siteLink + "</a>" + '</li>'

    //console.log(repoList[i].name );
  
    }
    document.getElementById("demo").innerHTML = output;
});

});
