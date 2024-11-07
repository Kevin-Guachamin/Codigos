var count = true;
//variable afuera
function cambiarFondo(){
    var elemento=document.getElementById("titulo");
    if(count){
        elemento.style.backgroundColor="#008000";
        count=false;
    }else{
        elemento.style.backgroundColor="#ffff00";
        count=true;
    }
}