// 회원가입 페이지 전환

const agreeTerm = document.location.href;
const term = agreeTerm.split("/");

console.log(term)
if(term[3] == 'agree_term.html'){
    const pg = document.getElementById("part1");
    pg.style.color = "black"; 
}