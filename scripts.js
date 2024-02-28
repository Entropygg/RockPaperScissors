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
    pc = pc.toLowerCase();
    document.querySelector('#npcChoice').textContent = npc;
    let resultsContainer = document.querySelector('#results');
    let results = document.createElement('div');
    
    if(pc == npc){results.textContent = 'The game is a draw.';
                resultsContainer.appendChild(results);
    return;} 

    if (pc == "rock"){
        if(npc == "paper"){results.textContent = 'You have lost the round.';
        resultsContainer.appendChild(results);
        npcScore +=1;}
        else {results.textContent = 'You have won the round.';
        resultsContainer.appendChild(results);
        playerScore +=1;}
    }else if (pc == "paper"){
        if(npc =="scissors"){results.textContent = 'You have lost the round.';
        resultsContainer.appendChild(results);
        npcScore +=1;}
        else {results.textContent = 'You have won the round.';
        resultsContainer.appendChild(results);
        playerScore +=1;}
    }else if (pc == 'scissors'){
        if(npc == "rock"){results.textContent = 'You have lost the round.';
        resultsContainer.appendChild(results);;
        npcScore +=1;;}
        else {results.textContent = 'You have won the round.';
        resultsContainer.appendChild(results);
        playerScore +=1;}
    }


    determineWinner(resultsContainer);
    displayScore();
}

function displayScore(){
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#npcScore').textContent = npcScore;
}

function determineWinner(container){
    let finalResults = document.createElement('div');
    if(playerScore >= 5){
        finalResults.textContent = 'You have won the match!';
        container.appendChild(finalResults);
        npcScore = 0;
        playerScore = 0;
    }
    else if(npcScore >=5 ){
        finalResults.textContent = 'You have lost the match!';
        container.appendChild(finalResults);
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
