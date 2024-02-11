keyArray= document.querySelectorAll(".drum");
let audioArray = [new Audio("sounds/crash.mp3"),
new Audio("sounds/kick-bass.mp3"),
new Audio("sounds/snare.mp3"),
new Audio("sounds/tom-1.mp3"),
new Audio("sounds/tom-2.mp3"),
new Audio("sounds/tom-3.mp3"),
new Audio("sounds/tom-4.mp3")]
for (let i = 0;i<keyArray.length;i++){
    keyArray[i].addEventListener("click", ()=> 
        {audioArray[i].currentTime=0; // reset the audio to start for smooth play
        audioArray[i].play();
});
}
// detecting key press

document.addEventListener("keydown", (e)=>{
    const keys = ["w","a","s","d","j","k","l"];
    if (keys.includes(e.key))
    {for(let i =0;i<keys.length;i++){
        if (keys[i]===e.key){
            audioArray[i].currentTime=0;
            audioArray[i].play();
        }
    }}
}

);




// function add(num1, num2){
//     return num1+num2;
// }
// function subtract(num1, num2){
//     return num1-num2;
// }

// function multiply(num1, num2){
//     return num1*num2;
// }
// function divide(num1, num2){
//     return num1/num2;
// }
// function calculator(num1,num2, operator){
//     return operator(num1,num2);
// }