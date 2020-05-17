/*  Ejercicio Piedra Papel tijeras Propio

*/

//  console.log("Piedra \=0, papel\=1 tijera\=2");

//  Array 
var elemento_juego = ["Piedra", "Papel", "Tijera"];

function game(jugador1, jugador2){

    switch(elemento_juego) {
        case  jugador1 == jugador2 :
         console.log('Empate');
        break;
    
        case  jugador1 == 0 && jugador2 == 1 :
            console.log('Gana Jugador jugador2');
        break;

        case  jugador1 == 0 && jugador2 == 2 :
            console.log('Gana Jugador jugador1');
        break;

        case  jugador1 == 1 && jugador2 == 0 :
            console.log('Gana Jugador jugador1');
        break;

        case  jugador1 == 1 && jugador2 == 2 :
            console.log('Gana Jugador jugador2');
        break;

    }
}

