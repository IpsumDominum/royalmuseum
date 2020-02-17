var mode = "show";
var progress = 4000;
document.onkeyup = function(e){
    mode = "show";
}
document.onkeydown = function(e){
    if(e.keyCode == 32){
        mode = "dim";
    }
}
setInterval(function(){
    try{
    if(mode=="dim"){
        document.getElementById("mainfga").style.opacity = (progress/100);
        progress -=1;
    }else{
        document.getElementById("mainfga").style.opacity = (progress/100);
        progress +=1;
    }
    if (progress >=100 ) {
        progress = 100;   
    }
    if(progress<=0){
        progress = 0;
    }
}catch(TypeError){
    /*pass*/
}

},10);


function showtab(tab){
    switch(tab) {
        case "About":
          // code block
          break;
        case "Opening":
          // code block
          break;
        case "News":
            console.log("news");
        case "Contact":

        default:
          // code block
      } 
}