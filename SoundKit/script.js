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
recordButton.addEventListener('click', () =>{
    startTime = Date.now();
    recording = true;
    soundRecorder = [];
})

stopButton.addEventListener('click', () =>{
    recording = false;
})


playButton.addEventListener('click', () => {
    soundRecorder.forEach(sound => {
        setTimeout(
            () => {
                let soundElement = document.querySelector(`#${sound.name}`); // odtwarzaj player
                
                soundElement.currentTime = 0;
                
                soundElement.play();
            }
            , sound.time);
    })
})
recordButton1 = document.querySelector('#startRecording1');
    
    stopButton1 = document.querySelector('#stopRecording1');
   
    playButton1 = document.querySelector('#playRecording1');
    

    recordButton1.addEventListener('click', () =>{
        startTime1 = Date.now();
        recording1 = true;
        soundRecorder1 = [];
    })
  
    stopButton1.addEventListener('click', () =>{
        recording1 = false;
    })
   

    playButton1.addEventListener('click', () => {
        soundRecorder1.forEach(sound => {
            setTimeout(
                () => {
                    let soundElement = document.querySelector(`#${sound.name}1`); // odtwarzaj player
                    
                    soundElement.currentTime = 0;
                    
                    soundElement.play();
                }
                , sound.time);
        })
    })

    
    recordButton2 = document.querySelector('#startRecording2');
    
    stopButton2 = document.querySelector('#stopRecording2');
   
    playButton2 = document.querySelector('#playRecording2');
    

    recordButton2.addEventListener('click', () =>{
        startTime2 = Date.now();
        recording2 = true;
        soundRecorder2 = [];
    })
  
    stopButton2.addEventListener('click', () =>{
        recording2 = false;
    })
   

    playButton2.addEventListener('click', () => {
        soundRecorder2.forEach(sound => {
            setTimeout(
                () => {
                    let soundElement = document.querySelector(`#${sound.name}2`); // odtwarzaj player
                    
                    soundElement.currentTime = 0;
                    
                    soundElement.play();
                }
                , sound.time);
        })
    })
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
playAll.addEventListener('click',function(){
    soundRecorder.forEach(sound => {
        setTimeout(
            () => {
                let soundElement = document.querySelector(`#${sound.name}`); // odtwarzaj player
                
                soundElement.currentTime = 0;
                
                soundElement.play();
            }
            , sound.time);
    })
    soundRecorder1.forEach(sound => {
        setTimeout(
            () => {
                let soundElement = document.querySelector(`#${sound.name}1`); // odtwarzaj player
                
                soundElement.currentTime = 0;
                
                soundElement.play();
            }
            , sound.time);
    })
    soundRecorder2.forEach(sound => {
        setTimeout(
            () => {
                let soundElement = document.querySelector(`#${sound.name}2`); // odtwarzaj player
                
                soundElement.currentTime = 0;
                
                soundElement.play();
            }
            , sound.time);
    })
});
if (recording == true) {
        
    soundRecorder.push({
        name: sound.name,             // zapisz nagranie
        time: Date.now() - startTime
        
    })
    
    
}
/////////////////////////////////////////////////////////////
if (recording1 == true) {
    
    soundRecorder1.push({
        name: sound.name,             // zapisz nagranie
        time: Date.now() - startTime1
        
    })
    
    
}

if (recording2 == true) {
    
    soundRecorder2.push({
        name: sound.name,             // zapisz nagranie
        time: Date.now() - startTime2
        
    })
    
    
}
///////////////////////////////////////////////////////////////




