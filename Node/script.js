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
let retriveNotes = function(){
    notes = [];
    let data = ls.getNotes();
    
    if(data != null)notes = data;
}
//Zapisz przycisk
let buttonSave = function(){
    //Tworzy nowy obiekt
    n = new Note(document.querySelector('#title').value, document.querySelector('#note-color').value, document.querySelector('#pin').checked, document.querySelector('#note').value);
    notes.push(n);
    //Zapisuje do localstorage
    ls.saveNote(notes);
    retriveNotes();
    //Wyświetl liste
    displayList();
    
}

let displayList = function(){
    document.querySelector('.note-list-pin').innerHTML='';
    document.querySelector('.note-list-unpin').innerHTML='';
    notes.forEach(n => {
        //Tworzy HTML ELEMENT
        item = document.createElement('li');
        title = document.createElement('p');
        text = document.createElement('p');
        time = document.createElement('p');
        item.style.background = n.color;
        title.innerHTML = n.title;
        text.innerHTML = n.text;
        time.innerHTML = "Created: "+(new Date(n.id)).toLocaleString();
        item.appendChild(title);
        item.appendChild(text);
        item.appendChild(time);
        item.onclick = function(){selectNote(n)}
        if(n.pinned)
            document.querySelector('.note-list-pin').appendChild(item);
        else
            document.querySelector('.note-list-unpin').appendChild(item);
      
        
            
    });
}

let selectNote = function(n) {

    document.querySelector('#title').value = n.title;
    document.querySelector('#note-color').value = n.color;
    document.querySelector('#pin').checked = n.pinned;
    document.querySelector('#note').value = n.text;
}
//ładuje dane
window.onload = function(){
    retriveNotes();
    displayList();
}