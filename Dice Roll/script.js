function diceRoll(){
    return Math.floor(Math.random()*6)+1
}
if (navigationType()===1){p1Score = diceRoll();
p2Score= diceRoll();
document.querySelector(".img1").setAttribute("src",`./images/dice${p1Score}.png`);
document.querySelector(".img2").setAttribute("src",`./images/dice${p2Score}.png`);

if (p1Score>p2Score){
    document.querySelector("h1").innerHTML= "🚩Player 1 Wins!";
}
else if(p1Score==p2Score){
    document.querySelector("h1").innerHTML= "Draw!";

}
else{
    document.querySelector("h1").innerHTML= "Player 2 Wins!🚩";
}
}
// Checks if the user is loading the webPage for the first time.
// External Code
function navigationType(){

    var result;
    var p;

    if (window.performance.navigation) {
        result=window.performance.navigation;
        if (result==255){result=4} // 4 is my invention!
    }

    if (window.performance.getEntriesByType("navigation")){
       p=window.performance.getEntriesByType("navigation")[0].type;

       if (p=='navigate'){result=0}
       if (p=='reload'){result=1}
       if (p=='back_forward'){result=2}
       if (p=='prerender'){result=3} //3 is my invention!
    }
    return result;
}
