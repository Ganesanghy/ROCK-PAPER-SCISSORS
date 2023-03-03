function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberOf(randbotChoice());
    result=decideWinner(humanChoice,botChoice);//{0,1} / {1,0} / {0.5,0.5}
    message=finalMessage(result);// message:you win, color:green
    rpsFrontEnd(humanChoice,botChoice,message);
}
function randbotChoice(){
    return Math.floor(Math.random()*3);
}
function numberOf(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,compuerChoice){
    var rpsDataBase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}

    };
    var yourScore=rpsDataBase[yourChoice][compuerChoice];
    var compuerScore= rpsDataBase[compuerChoice][yourChoice];

    return [yourScore, compuerScore];
}
function finalMessage([yourScore,compuerScore]){
    if(yourScore === 0){
        return {'message':'you lost','color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'you tired','color':'yellow'};
    }
    else{
        return {'message':'you win','color':'green'};
    }
}

function rpsFrontEnd(humanimageChoice,botimageChoice,finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humdiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv= document.createElement('div');

    humdiv.innerHTML="<img src='" + imagesDatabase[humanimageChoice] +"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    messagediv.innerHTML="<h1 style='color:"+ finalMessage['color'] +"; font-size:50px; padding:30px;'>"+finalMessage['message']+ "</h1>"
    botdiv.innerHTML="<img src='" + imagesDatabase[botimageChoice] + " 'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>"
    document.getElementById('flex-box-rps-div').appendChild(humdiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

}