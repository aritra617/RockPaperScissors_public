alert(`Hi User! Let's play the game...`)
let l=prompt(`Enter Your Name:`);

let userScore=0;
let compScore=0;

const unUpdate=document.querySelector("#user-name");
unUpdate.innerText=l;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usUpdate=document.querySelector("#user-score");
const csUpdate=document.querySelector("#comp-score");


choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
        const uc=choice.getAttribute("id")
        console.log("choice was clicked", uc);
        play(uc)
    })

})

const genComp=() =>{
    const opt=["rock","paper","scissors"];
    const i=Math.floor(Math.random() * 3);
    return opt[i];
}

//main func
const play =(uc) => {

    console.log("user choice =", uc);
    const cc=genComp();
    console.log("comp choice =", cc);

    if(uc===cc){
        console.log("Ok it's a Draw")
        msg.innerText="Ok it's a Draw";
        alert(`Computer chose ${cc}`)
        msg.style.backgroundColor="#872341";

    }else{
    let userwin=true;
    if(uc==="rock"){
        userwin= cc==="paper"? false : true;
    }else if(uc==="paper"){
        userwin= cc==="scissors"? false : true;
    }else if(uc==="scissors"){
        userwin= cc==="rock"? false : true;
    }

    if(userwin){
        userScore++;
        usUpdate.innerText=userScore;
        console.log("You WIN!");
        alert(`Computer chose ${cc}`)
        msg.innerText=`Yayy you WIN !! your ${uc} beats ${cc}`;
        msg.style.backgroundColor="#1F7D53";
    }else{
        compScore++;
        csUpdate.innerText=compScore;
        console.log("You lost");
        alert(`Computer chose ${cc}`)
        msg.innerText=`You LOSE, ${cc} beats your ${uc}`;
        msg.style.backgroundColor="#7D0A0A";
    }
    }
    
    }


