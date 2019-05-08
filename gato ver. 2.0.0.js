/* Juego de gato:
Realizar un juego de gato donde se muestre la base y se determine si gana alguien o no 
( usar JSON para el tablero "Investigar") con validaciones y aguacate. */

    var turno = 1;
    var seccion = document.getElementsByClassName('cuadro');
    var reinicio = document.getElementById('reinicio');
    var mensaje = document.getElementById('mensaje');
    
    var J1 = {nombre: '', turno: 1 , tipo: 'X'};
    var J2 = {nombre: '', turno: 2 , tipo: 'O'};

    function comenzar(){
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

   document.getElementById('juego').onclick = function(event){
            if (event.target.className == 'cuadro') {
                if (J1.turno == turno) {
                    ValTurno();
                    if (ValTurno()== true){
                        event.target.innerHTML = 'X';
                        mensaje.innerText = 'Turno de '+ J2.nombre;
                        turno++;
                    }
                    else{
                        alert("Esa casilla ya esta ocupada, intenta de nuevo en otra casilla");
                    }
                }
                if (J2.turno == turno) {
                    ValTurno();
                    if (ValTurno()== true){
                        event.target.innerHTML = 'O';
                        mensaje.innerText = 'Turno de '+ J1.nombre;
                        turno--;
                    }
                    else{
                        alert("Esa casilla ya esta ocupada, intenta de nuevo en otra casilla");
                    }
                }
            checkWinner();
        }
    }

    var ValTurno = function(){
        if(event.target.id != ''){
            return true;
        }
        else {
            return false;
        }
    }

    function checkWinner(){
        // combinacion de X
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
        // combinations: 0
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
        }

        
    }

    function reiniciar() {
        for (let i = 0; i < seccion.length; i++) {
            cuadro[i].innerText = '';
        }
        J1 = {nombre: "", turno: 1 , tipo: 'X'};
        J2 = {nombre: "", turno: 2 , tipo: 'O'};
        mensaje.innerText = '';
        turno = 1;
        comenzar();
    }