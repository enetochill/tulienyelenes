function nuevaCaja(){ 
    var seccion = document.querySelector(".art");


    var botones1= document.createElement("button");

    seccion.appendChild(botones1);
    
    botones1.className="boton";

    botones1.innerHTML = "CLICKME";

}
