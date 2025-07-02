let choice=document.querySelectorAll(".choice");
let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let compScorePara=document.querySelector("#comp-score");
let userScorePara=document.querySelector("#user-score");

choice.forEach((choice)=>{
      choice.addEventListener("click",()=>{
                    console.log(choice);
                    const userChoice=choice.getAttribute("id");
                    playGame(userChoice);
      })
});

const playGame=(userChoice)=>{
      //user choice
     console.log("userChoice=",userChoice);
     //computer choice
     const compChoice=genCompChoice();
     console.log("computer choice=",compChoice);
     if(userChoice === compChoice){
            //game drawn
            drawGame();
      }else{
                    let userWin=true;
                    if(userChoice === "rock"){
                        //scissor,paper
                        userWin=compChoice === "paper" ? false : true;
                    }else if(userChoice === "paper"){
                       //rock,scissor
                    userWin=compChoice === "scissor" ? false : true;
                    }else{
                       //paper,rock
                       userWin=compChoice === "rock" ? false : true;
                    }
                    showWinner(userWin,userChoice,compChoice);
}

};

const genCompChoice=()=>{
                    const options=["rock","paper","scissor"];
                    const randIdx=Math.floor(Math.random()*3);
                    return options[randIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
      if(userWin){
        userScore++;
        userScorePara.innerText=(`${userScore}`);
        msg.innerText=(`Supriya Win ! Your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor="rgb(221, 174, 54)";
      }else{
        compScore++;
        compScorePara.innerText=`${compScore}`
        msg.innerText=(`COMP Win ! COMP ${compChoice} beats ${userChoice}`);
        msg.style.backgroundColor="rgb(225, 47, 47)";
      }
}

const drawGame=()=>{
                    console.log("Game Drawn");
}