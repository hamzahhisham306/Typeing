// Array of words{

    const words = [
        "Hello",
        "Programming",
        "Code",
        "Javascript",
        "Town",
        "Country",
        "Testing",
        "Youtube",
        "Linkedin",
        "Twitter",
        "Github",
        "Leetcode",
        "Internet",
        "Python",
        "Scala",
        "Destructuring",
        "Paradigm",
        "Styling",
        "Cascade",
        "Documentation",
        "Coding",
        "Funny",
        "Working",
        "Dependencies",
        "Task",
        "Runner",
        "Roles",
        "Test",
        "Rust",
        "Playing"
      ];

// setting levels 
const lvls={
    "Easy":5,
    "Normal":3,
    "Hard":2,
}
// Default Level
let defaultLevelName="Easy";// Change Level from here
let defaultLevelSeconds=lvls[defaultLevelName];

//cat selectors
let startButton=document.querySelector('.start');
let lvlNameSpan=document.querySelector('.message .lvl');
let secondsSpan=document.querySelector(".message .seconds");
let theWord=document.querySelector(".the-word");
let upcomingWords=document.querySelector(".upcoming-words");
let input=document.querySelector('.input');
let timeLeftSpan=document.querySelector('.time span');
let scoreGot=document.querySelector(".score .got");
let scoreTotal=document.querySelector(".score .total");
let finishMessage=document.querySelector('.finish');


// setting level name +secods+score

lvlNameSpan.innerHTML=defaultLevelName;
secondsSpan.innerHTML=defaultLevelSeconds;
timeLeftSpan.innerHTML=defaultLevelSeconds;
scoreTotal.innerHTML=words.length;
// disable paset event 
input.onpaste=function(){
    return false;
}

// start game
startButton.onclick=function(){
    this.remove();
    input.focus();
    // Generate Word Function
    genWords();
}

function genWords(){
    // Get Random Word From Array
    let randomWord=words[Math.floor(Math.random()*words.length)]
    // Get Word Index
    let wordIndex=words.indexOf(randomWord);
    // Remove word From Array
    words.splice(wordIndex, 1);
    // show the random word
    theWord.innerHTML=randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML='';
    // Genreate Words
    for(let i=0;i<words.length;i++){
        // Create Div Element
     let div=document.createElement("div");
     let txt=document.createTextNode(words[i]);
     div.appendChild(txt);
     upcomingWords.appendChild(div);

    }
    // Start play Function
    startPlay();

}


function startPlay(){
     timeLeftSpan.innerHTML=defaultLevelSeconds;
    let start=setInterval(()=>{
      timeLeftSpan.innerHTML--;
      if(timeLeftSpan.innerHTML==='0')
      {
          // Stop timer
          clearInterval(start);
          // Compare Words
          if(theWord.innerHTML.toLowerCase()===input.value.toLowerCase()){
              // Empty INput Filed
              input.value='';
              scoreGot.innerHTML++;
              if(words.length>0){
                 
                genWords();
              }
              else{
                  let span=document.createElement("span");
                  span.className='good';
                  let spanText=document.createTextNode("Congreazt");
                  span.appendChild(spanText);
                  finishMessage.appendChild(span);

                  upcomingWords.remove();
              }
          }
          else{
              let span=document.createElement("span");
              span.className='bad';
              let spanText=document.createTextNode("Game Over");
              span.appendChild(spanText);
              finishMessage.appendChild(span);
          }
      }
    },1000);
}