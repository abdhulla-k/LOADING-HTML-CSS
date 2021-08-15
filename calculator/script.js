function button_click(val){
   document.getElementById("screen").value+=val
}

function clear_screen(){
    document.getElementById("screen").value=""
}
function EqualClic(){                         /*new model equal calculator*/
   var text = document.getElementById("screen").value
   var resrlt = eval(text)
   document.getElementById("screen").value=resrlt
}