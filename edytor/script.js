document.getElementById('photo').onchange = function(e) {
  let img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]); // Tworzy ścieżkę do pliku
  
};
function draw() {
  
  let canvas = document.getElementById('myCanvas');
  canvas.width = this.width;
  canvas.height = this.height;
  
  let ctx = canvas.getContext('2d');
  ctx.drawImage(this, 0,0);
  
 
  
}
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}


window.onload = function()
{
  
  const brightness = document.getElementById('brightness');
  const contrast   = document.getElementById('contrast');
  const sepia = document.getElementById('sepia');
  const invert = document.getElementById('invert');

  // filtry
  contrast.onkeyup = contrast.onchange = function()
   {
       let contrast = document.getElementById('myCanvas'),
         val = parseInt(this.value);

           if (val > 100 || val < 0)
       return false;

      
       contrast.style.filter = "contrast("+val+"%)";
   }

  brightness.onkeyup = brightness.onchange = function()
  {
      let brightness = document.getElementById('myCanvas'),
          val = parseInt(this.value);

          if (val > 100 || val < 0)
      return false;

      
      brightness.style.filter = "brightness("+val+"%)";
  }

  sepia.onkeyup = sepia.onchange = function()
  {
      let sepia = document.getElementById('myCanvas'),
          val = parseInt(this.value);

          if (val > 100 || val < 0)
      return false;

      
      sepia.style.filter = "sepia("+val+"%)";
  }
  invert.onkeyup = invert.onchange = function()
  {
      let invert = document.getElementById('myCanvas'),
          val = parseInt(this.value);

          if (val > 100 || val < 0)
      return false;

      
      invert.style.filter = "invert("+val+"%)";
  }

  
   
}

      
var el = document.getElementById('myCanvas');
var ctx = el.getContext('2d');
var isDrawing;

el.onmousedown = function(e) {
  isDrawing = true;
  ctx.lineWidth = 10;
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.moveTo(e.clientX, e.clientY);
};
el.onmousemove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
};
el.onmouseup = function() {
  isDrawing = false;
};