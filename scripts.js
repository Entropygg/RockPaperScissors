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
    
    if(pc == npc){console.log("It's a draw");
    return;} 

    if (pc == "rock"){
        if(npc == "paper"){console.log("You've lost");}
        else {console.log("You've won");}
    }else if (pc == "paper"){
        if(npc =="scissors"){console.log("You've lost");}
        else {console.log("You've won");}
    }else if (pc == 'scissors'){
        if(npc == "rock"){console.log("You've lost");}
        else {console.log("You've won");}
    }else {console.log("Invalid Choice")}
}

let playerChoice = prompt("Please enter your choice.", "rock").toLowerCase();
result(playerChoice);