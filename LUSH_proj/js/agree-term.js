const box = document.getElementById('all-agree');
const totalCK = document.querySelectorAll('totalCK');
const allCheck = document.getElementById('allAgree');
const ck1 = document.getElementById('agree1');
const ck2 = document.getElementById('agree2');
const ck3 = document.getElementById('agree3');
const ck4 = document.getElementById('agree4');

let cnt=1;   
const STANDARD = 3;
let all_check = box.childNodes;
let a1 = ck1.childNodes;
let a2 = ck2.childNodes;
let a3 = ck3.childNodes;
let a4 = ck4.childNodes;

allCheck.addEventListener("click", checked);

console.log(`전체: ${allCheck.checked}`)
function changeNameOn(){
    all_check[3].className = 'on';
    a1[3].className = 'on';
    a2[3].className = 'on';
    a3[3].className = 'on';
    a4[3].className = 'on';
}
function changeNameOff(){
    all_check[3].className = 'off';
    a1[3].className = 'off';
    a2[3].className = 'off';
    a3[3].className = 'off';
    a4[3].className = 'off';
}
function checked(){
    if(allCheck.checked == true){
        allCheck.check = true;
        ck1.checked = true;
        ck2.checked = true;
        ck3.checked = true;
        changeNameOn();
        console.log(all_check[3])
    }else if(allCheck.checked == false){
        allCheck.check = false;
        ck1.checked = false;
        ck2.checked = false;
        ck3.checked = false;
        changeNameOff();
    }
}

console.log(all_check[3])
/* if(cnt%2==1){
    box.addEventListener("click", allChecked);
}else{
    box.addEventListener("click", allUnChecked);
}
 */
/* function allChecked(){
    all_check[3].className = 'on'
        if(all_check[3].className == 'on'){
            for(let i=0; i<arr.length; i++){
                arr[i][STANDARD].className='on'
            }
        }
        console.log(cnt)
}
function allUnChecked(){
    if(cnt%2!=0){
    all_check[3].className ='off'
        if(all_check[3].className == 'off'){
            for(let i=0; i<arr.length; i++){
                arr[i][STANDARD].className='off'
            }
        }
    }
}


// 전체 동의 체크 여부 확인
function allChecked(){
    console.log(all_check[3])
    if(cnt%2==1){
        all_check[3].className = 'on'
        if(all_check[3].className == 'on'){
            for(let i=0; i<arr.length; i++){
                arr[i][STANDARD].className='on'
            }
        }    console.log(all_check[3])
    }
    else if(cnt%2!=1){
        allUnChecked()
        cnt--;
    }
    console.log(cnt)
}
 */