var colors=generaterandom(6);

var squares=document.querySelectorAll(".square");
var messagedisplay=document.querySelector("#message");
var pickedcolor=pick();
var colordisplay=document.getElementById("colordisplay"); 
colordisplay.textContent=pickedcolor;
for(var i=0 ;i<squares.length;i++)
{   
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click" , function()
    {
     var clickedclr=   this.style.background;
     if(clickedclr===pickedcolor)
     {
       for(var i=0; i<squares.length;i++)
       {
           squares[i].style.background=pickedcolor;
           var h1=document.querySelector("h1");
           messagedisplay.textContent="YOU WON"
           h1.style.color=pickedcolor;
       }
     }
     else{
        this.style.background="#232323";
        messagedisplay.textContent="TRY AGAIN"
     }
    
    })
}

function pick(){
    var random=Math.floor(Math.random()*colors.length)
    return colors[random];
}



function generaterandom(num)
{
    var arr=[];
    for( var i=0;i<num;i++)
    {
        arr.push(ranclr());
    }
    return arr;
}

function ranclr(){
   var r= Math.floor(Math.random()*256)
   var g= Math.floor(Math.random()*256)
   var b= Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}