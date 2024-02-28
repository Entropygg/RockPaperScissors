let playerScore = 0;
let npcScore = 0;

function getComputerChoice(){
    let x = Math.random();
    if(x <= 0.33){
        return "rock";
    }else if (x <= 0.66){
        return "paper";
    }
    else{return "scissors";}
}

function result(pc){
    let npc = getComputerChoice();
    let results = document.querySelector('#results');
    
    if(pc == npc){results.textContent += 'The game is a draw.';
                results.appendChild(document.createElement("br"));
    return;} 

    if (pc == "Rock"){
        if(npc == "paper"){results.textContent += 'You have lost the round.';
        results.appendChild(document.createElement("br"));
        npcScore +=1;}
        else {results.textContent += 'You have won the round.';
        results.appendChild(document.createElement("br"));
        playerScore +=1;}
    }else if (pc == "Paper"){
        if(npc =="scissors"){results.textContent += 'You have lost the round.';
        results.appendChild(document.createElement("br"));
        npcScore +=1;;}
        else {results.textContent += 'You have won the round.';
        results.appendChild(document.createElement("br"));
        playerScore +=1;}
    }else if (pc == 'Scissors'){
        if(npc == "rock"){results.textContent += 'You have lost the round.';
        results.appendChild(document.createElement("br"));
        npcScore +=1;;}
        else {results.textContent += 'You have won the round.';
        results.appendChild(document.createElement("br"));
        playerScore +=1;}
    }else {console.log("Invalid Choice")}


    determineWinner();
    displayScore();
}

function displayScore(){
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#npcScore').textContent = npcScore;
}

function determineWinner(){
    if(playerScore >= 5){
        results.textContent += 'You have won the match!';
        results.appendChild(document.createElement("br"));
        npcScore = 0;
        playerScore = 0;
    }
    else if(npcScore >=5 ){
        results.textContent += 'You have lost the match!\n';
        results.appendChild(document.createElement("br"));
        npcScore = 0;
        playerScore = 0;
    }
}
window.addEventListener('DOMContentLoaded', ()=> {
    let buttons = document.querySelectorAll('button');
    buttons.forEach( (value)=> {
       let choice = value.textContent;
       value.addEventListener("click", () =>{
            result(choice);
       });
    })
})
