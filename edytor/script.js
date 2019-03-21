document.getElementById('file').onchange = function(e) {
  let img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]); // Tworzy ścieżkę do pliku
  
};
function draw() {
  
  let canvas = document.getElementById('myCanvas');
  // Ustawia szerokość i wysokość canvasa
  canvas.width = this.width;
  canvas.height = this.height;
  
  let ctx = canvas.getContext('2d');
  // Wyswietla zdjecie
  ctx.drawImage(this, 0,0);
  
 
  
}

function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}


window.onload = function()
{
  // Przypisanie zmiennych do przycisków
  const brightness = document.getElementById('brightness');
  const contrast   = document.getElementById('contrast');
  const sepia = document.getElementById('sepia');
  const invert = document.getElementById('invert');

  // filtr kontrastu
  contrast.onkeyup = contrast.onchange = function()
   {
       let contrast = document.getElementById('myCanvas'),
         val = parseInt(this.value);

           if (val > 100 || val < 0)
       return false;

      // Wybór filtru
       contrast.style.filter = "contrast("+val+"%)";
   }
// filtr przeźroczystości
  brightness.onkeyup = brightness.onchange = function()
  {
      let brightness = document.getElementById('myCanvas'),
          val = parseInt(this.value);

          if (val > 100 || val < 0)
      return false;

      // wybór filtru
      brightness.style.filter = "brightness("+val+"%)";
  }
// filtr sepii
  sepia.onkeyup = sepia.onchange = function()
  {
      let sepia = document.getElementById('myCanvas'),
          val = parseInt(this.value);

          if (val > 100 || val < 0)
      return false;

      // wybór filtru
      sepia.style.filter = "sepia("+val+"%)";
  }
  // filtr invert
  invert.onkeyup = invert.onchange = function()
  {
      let invert = document.getElementById('myCanvas'),
          val = parseInt(this.value);

          if (val > 100 || val < 0)
      return false;

      // wybór filtru
      invert.style.filter = "invert("+val+"%)";
  }

  
   
}

      
let el = document.getElementById('myCanvas');
let ctx = el.getContext('2d');
let isDrawing;

el.onmousedown = function(e) {
  isDrawing = true;
// szerokość pędzla 
  ctx.lineWidth = 10;
  ctx.lineJoin = ctx.lineCap = 'round';
  // pozycja myszy
  let pos = getMousePos(el,e);
  
  ctx.moveTo(pos.x,pos.y);
};
el.onmousemove = function(e) {
  if (isDrawing) {
    let pos = getMousePos(el,e);
    ctx.lineTo(pos.x,pos.y);
    ctx.stroke();
  }
};
function  getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect(), // wielkosc elementu
      scaleX = canvas.width / rect.width,    // związek bitmap vs. elementu dla X
      scaleY = canvas.height / rect.height;  // związek bitmap vs. elementu dla Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   //  współrzędne myszy po skalowaniu
    
    y: (evt.clientY - rect.top) * scaleY     // dostosowany do względnego elementu
  }
}
el.onmouseup = function() {
  isDrawing = false;
};


