document.addEventListener('DOMContentLoaded', drumKit);

let playAll;//////////////

let soundRecorder = [];
let recordButton, stopButton, playButton;
let startTime;
let recording = false;
//////////////////////////
let soundRecorder1 = [];
let recordButton1, stopButton1, playButton1;
let startTime1;
let recording1 = false;

let soundRecorder2 = [];
let recordButton2, stopButton2, playButton2;
let startTime2;
let recording2 = false;
//////////////////////////

const sounds = [
    { id: 97, name: 'boom'},
    { id: 115, name: 'clap'},
    { id: 100, name: 'hihat'},
    { id: 102, name: 'kick'},
    { id: 103, name: 'snare'},
    { id: 104, name: 'tink'},
]

function drumKit() {
    document.body.addEventListener('keypress', playSound);
    playAll = document.querySelector('#playAllRecording');

    recordButton = document.querySelector('#startRecording');
    
    stopButton = document.querySelector('#stopRecording');
   
    playButton = document.querySelector('#playRecording');
    

   
}
function Box(className){
    
    document.querySelector(`.${className}`).classList.add('light');
   
    setTimeout(() =>{
        document.querySelector(`.${className}`).classList.remove('light');
    },500)
}
function playSound(get) {
    
    
    let sound = sounds.find(get1 => get1.id == get.keyCode); // wyszukaj dzwiek
    
    let soundElement = document.querySelector(`#${sound.name}`); 
    
   
    soundElement.currentTime = 0;
    soundElement.play()// odtworz dzwiek
    
    
    Box(sound.name)// podświetl klawisz 
    
    
    
        
        
}
    



