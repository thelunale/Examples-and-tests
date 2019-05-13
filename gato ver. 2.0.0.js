/* Juego de gato:
Realizar un juego de gato donde se muestre la base y se determine si gana alguien o no 
( usar JSON para el tablero "Investigar") con validaciones y exportarlo totalmente a polymer*/

var turno = 0;
var seccion = document.getElementsByClassName('cuadro');
var reinicio = document.getElementById('reinicio');
var mensaje = document.getElementById('mensaje');
var gato = document.getElementById("juego");

var J1 = {nombre: '', turno: 1 , tipo: 'X'};
var J2 = {nombre: '', turno: 2 , tipo: 'O'};

function comenzar(){
    document.getElementById('iniciar').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'inline';
    J1.nombre = prompt("Escriba el nombre del jugador 1:");
    while(J1.nombre == ''){
        alert("No puedes dejar el campo vacio");
        J1.nombre = prompt("Escriba el nombre del jugador 1:");
        
    }
    J2.nombre = prompt("Escriba el nombre del jugador 2:");
    while(!J2.nombre){
        alert("No puedes dejar el campo vacio");
        J2.nombre = prompt("Escriba el nombre del jugador 2:");
    }

    mensaje.innerText = 'Turno de '+ J1.nombre;        
        
    gato.onclick = function(event){
        if (event.target.className == 'cuadro') {
            if (turno % 2 == 0){
                if(event.target.innerHTML != ""){
                    alert('Accion no valida');
                }
                else{
                    event.target.innerHTML = 'X';
                    mensaje.innerText = 'Turno de '+ J2.nombre;
                }
            }
            else{
                if(event.target.innerHTML != ""){
                    alert('Accion no valida');
                }
                else{
                    event.target.innerHTML = 'O';
                    mensaje.innerText = 'Turno de '+ J1.nombre;
                }
            }
            turno++;            
            checkWinner();
        }
    }

    function checkWinner(){

        // combinaciones de X
        
        if (seccion[0].innerHTML=='X' && seccion[1].innerHTML=='X' && seccion[2].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[3].innerHTML=='X' && seccion[4].innerHTML=='X' && seccion[5].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[6].innerHTML=='X' && seccion[7].innerHTML=='X' && seccion[8].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[0].innerHTML=='X' && seccion[3].innerHTML=='X' && seccion[6].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[1].innerHTML=='X' && seccion[4].innerHTML=='X' && seccion[7].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[2].innerHTML=='X' && seccion[5].innerHTML=='X' && seccion[8].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[0].innerHTML=='X' && seccion[4].innerHTML=='X' && seccion[8].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');
        if (seccion[2].innerHTML=='X' && seccion[4].innerHTML=='X' && seccion[6].innerHTML=='X')
            return (mensaje.innerText = 'El Jugador '+ J1.nombre + ' gano');

        // combinaciones de O

        if (seccion[0].innerHTML=='O' && seccion[1].innerHTML=='O' && seccion[2].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[3].innerHTML=='O' && seccion[4].innerHTML=='O' && seccion[5].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[6].innerHTML=='O' && seccion[7].innerHTML=='O' && seccion[8].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[0].innerHTML=='O' && seccion[3].innerHTML=='O' && seccion[6].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[1].innerHTML=='O' && seccion[4].innerHTML=='O' && seccion[7].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[2].innerHTML=='O' && seccion[5].innerHTML=='O' && seccion[8].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[0].innerHTML=='O' && seccion[4].innerHTML=='O' && seccion[8].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');
        if (seccion[2].innerHTML=='O' && seccion[4].innerHTML=='O' && seccion[6].innerHTML=='O')
            return (mensaje.innerText = 'El Jugador '+ J2.nombre + ' gano');

        // Empate

        if (seccion[0].innerHTML != '' && seccion[1].innerHTML != '' && seccion[2].innerHTML != '' && seccion[3].innerHTML != '' && seccion[4].innerHTML != '' && seccion[5].innerHTML != '' && seccion[6].innerHTML != '' && seccion[7].innerHTML != '' && seccion[8].innerHTML != '')
            return (mensaje.innerText = 'Es empate!');
        
    }

}

function reiniciar() {
    document.getElementById('iniciar').style.display = 'inline';
    document.getElementById('reiniciar').style.display = 'none';
    for (let i = 0; i < seccion.length; i++) {
        seccion[i].innerText = '';
    }
    J1 = {nombre: "", turno: 1 , tipo: 'X'};
    J2 = {nombre: "", turno: 2 , tipo: 'O'};
    mensaje.innerText = '';
    turno = 0;
    comenzar();
}