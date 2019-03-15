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

    appKey = "notepad_project"
    //Zapisuje notatki do localstorage
    saveNote(notes){
        localStorage.setItem(this.appKey,JSON.stringify(notes));
    }
    getNotes(){
        return JSON.parse(localStorage.getItem(this.appKey));
    }
        
}
//localStorage
let ls = new Storage();
let notes = new Array();
let pin = false;
let retriveNotes = function(){
    notes = [];
    let data = ls.getNotes();
    
    if(data != null)notes = data;
}
//Zapisz przycisk
let buttonSave = function(){
    //Tworzy nowy obiekt
    n = new Note(document.querySelector('#title').value, document.querySelector('#note-color').value, pin, document.querySelector('#note').value);
    notes.push(n);
    //Zapisuje do localstorage
    ls.saveNote(notes);
    retriveNotes();
    //Wyświetl liste
    displayList();
    
}

let displayList = function(){
    document.querySelector('#note-list-pin').innerHTML='';
    notes.forEach(n => {
        //Tworzy HTML ELEMENT
        item = document.createElement('li');
        time = document.createElement('p');
        item.style.background = n.color;
        item.innerHTML = n.title;
        item.onclick = function(){selectNote(n)}
      document.querySelector('#note-list-pin').appendChild(item);
      
        
            
    });
}

let selectNote = function(n) {

    document.querySelector('#title').value = n.title;
    document.querySelector('#note-color').value = n.color;
    document.querySelector('#pin').checked = n.pinned;
    document.querySelector('#note').value = n.text;
    
    pin = n.pinned;
}
//ładuje dane
window.onload = function(){
    retriveNotes();
    displayList();
}