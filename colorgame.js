var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisp= document.getElementById("colorDisp");
var message= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");

for(var i=0;i<modeButton.length;i++)
{
	modeButton[i].addEventListener("click",function(){
	modeButton[0].classList.remove("selected");
	modeButton[1].classList.remove("selected");
    this.classList.add("selected");
     
     if(this.textContent==="Easy")
     	numSquares=3;
     else
     	numSquares=6;
	reset();
	});
}


function reset()
{
	    colors=generateRandomColors(numSquares);
    //pick randon colorfrom array
    pickedcolor=pickColor();
    //change colorDisp to match picked color
    colorDisp.textContent=pickedcolor;
 
    //change colors of square
    for(var i=0; i<squares.length; i++)
      {//add initial colors to squares
      	if(colors[i])
      		{squares[i].style.display="block";
 	    squares[i].style.backgroundColor=colors[i];}
 	   else
 	   	 squares[i].style.display="none";
 	   }
 	 h1.style.backgroundColor="steelblue";
     message.textContent="";
 	 resetButton.textContent="New Colors";
}


resetButton.addEventListener("click",function(){
	reset();});    



colorDisp.textContent=pickedcolor;

for(var i=0; i<squares.length; i++)
 {//add initial colors to squares
 	squares[i].style.backgroundColor=colors[i];

 	squares[i].addEventListener("click",function(){
 		//grab color of clicked
 		var clickedColor=this.style.backgroundColor;
 		//compare to pickedcolor
 		if(clickedColor===pickedcolor)
 		{
 			message.textContent="Correct!";
 			changeColors(pickedcolor);
 			h1.style.backgroundColor = clickedColor;
 			resetButton.textContent="Play Again";

 		}
 		else
 			{ 
 				this.style.backgroundColor= "#232323";
 				message.textContent="Try Again";
 		    }
 		});
}

 		function changeColors(color){

 		  for(var i=0; i<squares.length; i++)
             {
 			squares[i].style.backgroundColor =color;
 		      }
 		}

   function pickColor(){
          //rANDOM NUMBER
 	var random=	Math.floor(Math.random() * colors.length);
 	  return colors[random];  
 }   

 function generateRandomColors(num)
  {
  	//make an array
  	var arr=[];
  	//add num random colors
  	for(var i=0; i <num ; i++)
  	{
  		//get random color
  		arr.push(randomColor());
  	}
  	//return 
  	return(arr);
  }

  function randomColor(){
  	//pick a 'red,green,blue' from 0- 255
    var r=Math.floor(Math.random() * 256);
  	var g=Math.floor(Math.random() * 256);
  	var b=Math.floor(Math.random() * 256);
  return "rgb("+ r +", " + g + ", "+b + ")";
  }