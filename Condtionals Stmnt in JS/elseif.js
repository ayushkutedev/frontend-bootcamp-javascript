//elseif in JavaScript 

//if Batsman Scored 70 he will get the Indian team from

//if Batsman Scored 80 to 90 he will get Australian team from

//if Batsman Scored 90 to 100 he will get Newzeland team

//if Batsman Scored 150 to 160 he will get England team 

// if Batsman Scored less than 50 You get Bangla
var score = 78

if(score>100){
    console.log(" Congrats You got England Team ! ")
}
else if(score>=70 && score<=80){
    console.log("You got South Africa team")
}

else if(score>=60 && score<=70){
    console.log(" Congrats You got Australian Team !")
}

else if(score>=50 && score<=60){
    console.log(" Congrats You got NewZeland Team !")
}

else if(score>=40 && score<=50){
    console.log("Congrats You got Indian Team ! ")
}
else{
    console.log('Sorry but! You have to Score Atleast 50 to got into anyteam.! Try Next Year....!')

}