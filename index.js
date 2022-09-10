let chance=true;

const message=document.getElementById("turn");
const displayscore1=document.getElementById("display-score-1");
const displayscore2=document.getElementById("display-score-2");
const score1=document.getElementById("score-1");
const score2=document.getElementById("score-2");
const rolldice=document.getElementById("roll-dice");
const reset=document.getElementById("reset");

let player1score=0;
let player2score=0;

function appearRest(){
    rolldice.style.display="none";
    reset.style.display="block";
    displayscore1.textContent=0;
    displayscore2.textContent=0;
    score1.textContent=0;
    score2.textContent=0;
    message.textContent="Player 1 chance";
}


rolldice.addEventListener("click",()=>{
    console.log(chance);
    const randomNo=Math.floor(Math.random()*6)+1;

    if(chance){
        player1score+=randomNo;
        displayscore1.textContent=randomNo;
        score1.textContent=player1score;
        displayscore2.classList.remove("active");
        displayscore1.classList.add("active");
    }
    else{
        player2score+=randomNo;
        displayscore2.textContent=randomNo;
        score2.textContent=player2score;
        displayscore1.classList.remove("active");
        displayscore2.classList.add("active");
    }


    if(player1score>=20){
        message.textContent="Player 1 Won";
        appearRest();

    }else if(player2score>=20){
        message.textContent="Player 2 Won";
    }

    chance=!chance;
    console.log(chance);

});