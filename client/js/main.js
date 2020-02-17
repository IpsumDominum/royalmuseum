var mode = "show";
var progress = 100;
var slideprogress = 0;
var contentprogress =0 ;
var slideup = false;
var contenttype = "";
var prevcontent = "";
var curtab = ""
var animating = false;
const tabs = ["about","news","opening","contact"];
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
    if(tab =="News"){
        if(animating){
            return;
        }
        if(curtab!="News"){
        contentprogress = 0;    
        contenttype = "news";
        window.requestAnimationFrame(slideleftnav);    
        curtab = "News";
        }
        return;
    }
    switch(tab) {
        case "About": 
        if(animating){
            break;
        }
        if(curtab!="About"){
            contentprogress = 0;    
            contenttype = "about";
            window.requestAnimationFrame(slideleftnav);    
            curtab = "About";
        }
          break;
        //////
        case "Opening":
        if(animating){
            break;
        }
        if(curtab!="Opening"){
        contentprogress = 0;    
        contenttype = "opening";
        window.requestAnimationFrame(slideleftnav);    
        curtab = "Opening";
        }
          break;
        case "Contact":
        if(animating){
        break;
        }
        if(curtab!="Contact"){
        contentprogress = 0;    
        contenttype = "contact";
        window.requestAnimationFrame(slideleftnav);    
        curtab = "Contact";
        }                   
        default:
          /*pass*/
      } 
}
function slideleftnav(){
    if(slideup){
        for(var content in tabs){
            if(tabs[content]!=contenttype){
            document.getElementById(tabs[content]).style.display = "none";
            }
        }
        document.getElementById(contenttype).style.display = "block";       
        return;
    }
    if(slideprogress<100){
        document.getElementById("navmain").style["margin-top"] = (20*(1-slideprogress/105)).toString() + "%";           
        slideprogress +=1;
        window.requestAnimationFrame(slideleftnav);
    }else{        
        slideup = true;
        for(var content in tabs){
            if(tabs[content]!=contenttype){
            document.getElementById(tabs[content]).style.display = "none";
            }
        }document.getElementById(contenttype).style.display = "block";       
        return;
    }
}
