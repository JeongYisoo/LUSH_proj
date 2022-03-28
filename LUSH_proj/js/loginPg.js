const user = document.location.href;

console.log(user)

const test = user.split("/");

console.log(test)

if(test[3] == 'userLogin.html'){
    const userPage = document.getElementById('user');
    const aTag = userPage.firstChild
    console.log(aTag)
    aTag.style.fontWeight = "800";
}else if(test[3] == 'notUserLogin.html'){
    const userPage = document.getElementById('not-user');
    const aTag = userPage.firstChild
    console.log(aTag)
    aTag.style.fontWeight = "800";
}