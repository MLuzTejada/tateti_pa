var jugadas; //indica los movimientos dentro del tablero, si es =0 nadie gano.
var turno = "X"; //nos indica de quien es el turno para colocar X o O. El primer jugador siempre empieza con "X"

//lo obtenemos del input del formulario, para mostrar a que jugador le toca.
var jugador1;
var jugador2;
var celdas = [];


function comenzarjuego() {

    jugadas = 9;

    jugador1 = document.getElementById("fnamejugador1").value;
    jugador2 = document.getElementById("fnamejugador2").value;



    if (jugador1 == ("") || jugador2 == ("")) {
        alert("Debe agregar jugadores");
    } else {


        for (var x = 1; x <= 9; x++) {
            document.getElementById('celda' + x).disabled = false;
            document.getElementById('celda' + x).addEventListener('click', ponerficha, false);
        }

        document.getElementById("historial").innerText = ("Juega: " + jugador1 + " con " + turno);
    }
}

function ponerficha(evt) {

    evt.target.value = turno;

    if (turno == "X") {
        turno = "O";

        jugador1 = document.getElementById("fnamejugador1").value;
        jugador2 = document.getElementById("fnamejugador2").value;

        document.getElementById("historial").innerText = ("Juega: " + jugador2 + " con " + turno);

        jugadas = jugadas - 1;

    } else {
        turno = "X";

        document.getElementById("historial").innerText = ("Juega: " + jugador1 + " con " + turno);

        jugadas = jugadas - 1;
    }


    mostrarganador();

    if (jugadas == 0) {
        //desabilita el tablero cuando hay empate
        for (var t = 1; t <= 9; t++) {
            document.getElementById('celda' + t).disabled = true;
        }

        document.getElementById("ganador").innerText = ("Es un empate");

    }
}

function mostrarganador() {
    var j = 1;
    for (var i = 1; i <= 9; i++) {
        celdas[i] = document.getElementById('celda' + i).value;
    }


    /* combinaciones de X para ganar*/
    if (celdas[1] == "X" && celdas[2] == "X" && celdas[3] == "X") {
        //deshabilita el tablero si alguien gana
        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es: " + jugador1 + " con X");

    }
    if (celdas[4] == "X" && celdas[5] == "X" && celdas[6] == "X") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }

        document.getElementById("ganador").innerText = ("El ganador es: " + jugador1 + " con X");
    }
    if (celdas[7] == "X" && celdas[8] == "X" && celdas[9] == "X") {
        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador1 + " con X");
    }
    if (celdas[1] == "X" && celdas[4] == "X" && celdas[7] == "X") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador1 + " con X");
    }
    if (celdas[2] == "X" && celdas[5] == "X" && celdas[8] == "X") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador1 + " con X");
    }
    if (celdas[3] == "X" && celdas[6] == "X" && celdas[9] == "X") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador1 + " con X");
    }
    if (celdas[1] == "X" && celdas[5] == "X" && celdas[9] == "X") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador1 + " con X");
    }
    if (celdas[3] == "X" && celdas[5] == "X" && celdas[7] == "X") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador1 + " con X");
    }

    /*combinaciones de O para ganar*/
    if (celdas[1] == "O" && celdas[2] == "O" && celdas[3] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[4] == "O" && celdas[5] == "O" && celdas[6] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[7] == "O" && celdas[8] == "O" && celdas[9] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[1] == "O" && celdas[4] == "O" && celdas[7] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[2] == "O" && celdas[5] == "O" && celdas[8] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[3] == "O" && celdas[6] == "O" && celdas[9] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[1] == "O" && celdas[5] == "O" && celdas[9] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");
    }
    if (celdas[3] == "O" && celdas[5] == "O" && celdas[7] == "O") {

        for (j; j <= 9; j++) {
            document.getElementById('celda' + j).disabled = true;
        }
        document.getElementById("ganador").innerText = ("El ganador es:" + jugador2 + " con O");

    }

}

function reiniciarjuego() {
    document.getElementById("historial").innerText = " ";
    document.getElementById("ganador").innerText = " ";
    document.getElementById("fnamejugador1").value = " ";
    document.getElementById("fnamejugador2").value = " ";
    jugadas = 9;

    for (var k = 1; k <= 9; k++) {
        document.getElementById('celda' + k).value = " ";
        document.getElementById('celda' + k).disabled = true;
    }
}


/*  problemas:
deja poner otra ficha aunque haya una escrita
cuando pongo una ficha se mueve todo el tablero
*/