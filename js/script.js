const arrNum = [];
const contNum = document.getElementById("container-num");
const contAns = document.getElementById("container-answ");

// generazione numeri e visualizzazione
while(arrNum.length < 5){
    const n = Math.floor(Math.random()*100 + 1);
    if(!arrNum.includes(n)){
        arrNum.push(n);
    }
}

for(let i=0; i<5; i++){
    contNum.innerHTML+=`<div class="box">${arrNum[i]}</div>`
}

// countdown
let index=30;
const time=document.getElementById("timer");
time.innerHTML=index;
const timer = setInterval(
    () => {
        index--
        time.innerHTML=index;
        if(index==0){
            clearInterval(timer);
        }
    }, 1000
);

// delay per dare le risposte
setTimeout(
    function(){
        contNum.classList.add("hide");
        contAns.classList.remove("hide");
    }, 30000
);

// inserimento numeri e controllo
let aux = 0;
let score = 0;
const answ = document.querySelector("input");
const result = document.querySelector("h2");
const yep = [];
document.querySelector("button").addEventListener("click",
    () => {
        if(aux<5){
            const num=parseInt(answ.value);
            if(arrNum.includes(num)){
                score++;
                yep.push(num);
            }
            answ.value="";
            aux++;
            if(aux==5){
                result.innerHTML=`Hai indovinato ${score} numeri, ovvero`
                for(let i=0; i < yep.length; i++){
                    result.innerHTML+=` ${yep[i]}`
                    if(i < yep.length - 1){
                        result.innerHTML+= ",";
                    }
                    else{
                        result.innerHTML+= ".";
                    }
                }
            }
        }
    }
);