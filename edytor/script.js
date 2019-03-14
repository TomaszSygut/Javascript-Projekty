
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
let points=new Array();	
colorInput = document.getElementById("color");
		function start(e){
		  let mouseX = e.pageX - canvas.offsetLeft;
		  let mouseY = e.pageY - canvas.offsetTop;
		  paint = true;
		  ctx.beginPath();
		  ctx.moveTo(mouseX,mouseY);
		  points[points.length]=[mouseX,mouseY];
		};

		function draww(e){

		  if(paint){
            let mouseX = e.pageX - canvas.offsetLeft;
            let mouseY = e.pageY - canvas.offsetTop; 
			 ctx.lineTo(mouseX,mouseY);
			 ctx.stroke();	
			 ctx.strokeStyle = colorInput.value;
			 ctx.lineJoin = ctx.lineCap = 'round';

			 points[points.length]=[mouseX,mouseY];
		  }
		  
		}
		function stop(e){
		  paint=false;
		//  var s=JSON.stringify(points);
		// 	localStorage['lines']=s;
		}  
	

		
		let paint=false;
		let canvas = document.getElementById('myCanvas');
		let ctx=canvas.getContext("2d");
		canvas.addEventListener('mousedown',start);
		canvas.addEventListener('mousemove',draww);
        canvas.addEventListener('mouseup',stop);
        let color = document.getElementById('color');