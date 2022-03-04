//LISTA DE PALABRAS
var lista = ['mundo', 'hielo', 'fuego', 'nuevo'];
//PALABRA FINAL
var palabraBuscada = [];
//var palabraBuscada = ("mundo");
var palabraEscrita = [];
//Array

// Guarda el número de la fila actual
var filas = 1;

//SUMA DE PUNTOS
var puntuacion = 0;

//OCULTAR CASILLAS
function hidden() {
	for (let i = 2; i < 6; i++) {
		$('#F' + i).css('display', 'none');

	}
}

function FilaDeshabilitada() {
	$('#F' + filas).children().prop('disabled', true);
	filas = filas + 1;
	$('#F' + filas).css('display', 'block');
}

function capturarPalabra() {
	palabraEscrita = '';
	//Obteniendo la palabra que ha escrito el jugador
	for (i = 0; i < 5; i++) {
		palabraEscrita = palabraEscrita + $("#F" + filas).children().eq(i).val();
	}
	console.log(palabraEscrita);
}

function haGanado(){
	if(palabraEscrita == palabraBuscada) return true;
	else return false;
}

function ComprobarPalabra() {
	var inputs = $('#F' + filas).children();
	
	var palabra = [];
	//

	for (i = 0; i < 5; i++) {
		palabra[i] = inputs.eq(i).val();

		//
		for (j = 0; j < 5; j++) {
			if (palabra[i]== palabraBuscada[j]) {
				if (i == j) {
					//
					inputs.eq(i).css('background-color', 'green');
					puntuacion = puntuacion + 50;
					$('#Puntos').text(puntuacion);
					//
					break; //termina el bucle y continua

				}
				else {
					/*if ( i != j) {
						inputs.eq(i).css('background-color', 'red');
					}
					else {
					//*/
				inputs.eq(i).css('background-color', 'yellow');
				puntuacion = puntuacion + 25;
				$('#Puntos').text(puntuacion);
				//}
				}	
			}
		}
	}
}
//Conecta los puntos a la casilla de puntos
$('.Puntos')
function palabraAleatoria() {
	palabraBuscada = lista[ Math.floor( Math.random() * lista.length) ]
	console.log(palabraBuscada);
}
