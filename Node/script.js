class Note{
    constructor(title, color, pinned, text){
        this.id = Date.now();
        this.title = title;
        this.color = color;
        this.pinned = pinned;
        this.text = text;
    }
}
class Storage{
    constructor(){}
    //key by which we call our data from localstorage
    appKey = "notepad_project"
    //saving notes to localStorage using out appkey as JSON stringified data. 
    saveNote(notes){
        localStorage.setItem(this.appKey,JSON.stringify(notes));
    }
    //retrieving notes as JSON data and parsing it to JS array;
    getNotes(){
        return JSON.parse(localStorage.getItem(this.appKey));
    }
        
}
//localStorage
let ls = new Storage();
//notes array to store our notes
let notes = new Array();
//pin variable for editor (used to pin notes top of the list)
let pin = false;
//retrieving notes from localStorage
let retriveNotes = function(){
    //clear array before getting data
    notes = [];
    let data = ls.getNotes();
    //leave empty array if localStorage returns empty JSON
    if(data != null)notes = data;
}
//Save button handler
let buttonSave = function(){
    //create new Note object
    n = new Note(document.querySelector('#title').value, document.querySelector('#note-color').value, pin, document.querySelector('#note').value);
    //push note object to notes array
    notes.push(n);
    //save notes array to local storage
    ls.saveNote(notes);
    //retrieve new version of data from local storage
    retriveNotes();
    //display notes in list.
    displayList();
}

let displayList = function(){
    //clean list views for pinned and unpinned notes
    document.querySelector('#note-list-pin').innerHTML='';
    document.querySelector('#note-list-pin').innerHTML='';
    //iterate through notes.
    notes.forEach(n => {
        //create html element 
        item = document.createElement('li');
        //append styles (color) from n array.
        item.style.background = n.color;
        //appned title text
        item.innerHTML = n.title;
        //event handler for selecting item in list
        item.onclick = function(){selectNote(n)}
        //check if notes is set as pinned
        if(n.pinned){
            //if pinned display in pinned notes section
            document.querySelector('#note-list-pin').appendChild(item);
        }else{
            //else display in lower section
            document.querySelector('#note-list-pin').appendChild(item);
        }
            
    });
}
//handling note selection from list (variable n - note object)
let selectNote = function(n) {

    document.querySelector('#title').value = n.title;
    document.querySelector('#note-color').value = n.color;
    document.querySelector('#pin').checked = n.pinned;
    document.querySelector('#note').value = n.text;
    pin = n.pinned;
}
//styled chceckbox behaves like normal button so we need to handle clicks. (flip-flop?)
let pinCheck = function(){
    if(pin){
        pin = false;
    }else{
        pin = true;
    }
    console.log(pin);
}
//load data on  'onLoad' window event
window.onload = function(){
    retriveNotes();
    displayList();
}