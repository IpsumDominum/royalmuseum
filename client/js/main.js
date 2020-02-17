var mode = "show";
var progress = 100;
var slideprogress = 0;
var contentprogress =0 ;
var slideup = false;
var contenttype = "";
var prevcontent = "";
var curtab = ""
var animating = false;
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
        if(animating){
            break;
        }
        if(curtab!="About"){
            contentprogress = 0;    
            prevcontent = contenttype;
            contenttype = "about";
            window.requestAnimationFrame(slideleftnav);    
        }
        curtab = "About"
          break;
        case "Opening":
                if(animating){
                    break;
                }
        if(curtab!="Opening"){
        contentprogress = 0;    
        prevcontent = contenttype;
        contenttype = "opening";
        window.requestAnimationFrame(slideleftnav);    
        }
        curtab = "Opening"
          break;
        case "News":
 
        case "Contact":
                            


        default:
          // code block
      } 
}
function slideleftnav(){
    if(slideup){
        if(prevcontent!=""){
            document.getElementById(prevcontent).style.display = "none";
        }
        document.getElementById(contenttype).style.display = "block";       
        window.requestAnimationFrame(showcontent);        
        return;
    }
    if(slideprogress<100){
        document.getElementById("navmain").style["margin-top"] = (20*(1-slideprogress/105)).toString() + "%";           
        slideprogress +=1;
        window.requestAnimationFrame(slideleftnav);
    }else{        
        slideup = true;
        if(prevcontent!=""){
            document.getElementById(prevcontent).style.display = "none";
        }
        document.getElementById(contenttype).style.display = "block";       
        window.requestAnimationFrame(showcontent);                
        return;
    }
}
function showcontent(){    
    if(contentprogress<100){
        document.getElementById(contenttype).style["opacity"] = (contentprogress/99);             
    contentprogress +=1;
    window.requestAnimationFrame(showcontent);        
    }else{     
        contentprogress = 0;    
        animating = false;
        return;
    }
}