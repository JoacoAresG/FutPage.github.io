function PreguntarPrecio(pPregunta){
    let Numero = prompt(pPregunta) ;         
    return Numero ;
}

var Jugadorjugador = prompt('Que jugador deseas analizar') ;
var Preciojugador = PreguntarPrecio('Cual es su precio(En dolares)(Escribir sin puntos)') ;
var Salariojugador = PreguntarPrecio('Cuanto pide de salario por mes(En dolares)(Escribir sin puntos)') ;
var AñosdeContrato = PreguntarPrecio('Cuantos años de contrato quiere') ;

/* Funciones que verifican que los datos ingresados sean potables */
while (Preciojugador <= 0 || isNaN(Preciojugador)) {
    alert('Porfavor ingrese solo numeros o datos validos al precio del jugador') ;
    console.log('El usuario ingreso ' + Preciojugador + ' que no es valido para el precio del jugador' ) ;
    var Preciojugador = prompt('Cual es su precio(En dolares)') ;
}

while (Salariojugador <= 0 || isNaN(Salariojugador)) {
    alert('Porfavor ingrese solo numeros o datos validos al salario por mes') ;
    console.log('El usuario ingreso ' + Salariojugador + ' que no es valido para el salario del jugador' ) ;
    var Salariojugador = prompt('Cuanto pide de salario por mes(En dolares)') ;
}

while (AñosdeContrato <= 0 || isNaN(AñosdeContrato)) {
    alert('Porfavor ingrese solo numeros o datos validos a los años de contrato del jugador') ;
    console.log('El usuario ingreso ' + AñosdeContrato + ' que no es valido para los años de contrato del jugador' ) ;
    var AñosdeContrato = prompt('Cuantos años de contrato quiere') ;
}

/* Moldeador para generar un objeto Jugador con los datos del usuario */
class ClaseJugadorIngresado {
    constructor (pNombre, pValor, pSalario, pContrato) {
        this.Nombre = pNombre;
        this.Valor = pValor;
        this.Salario = pSalario;
        this.Contrato = pContrato;
    }
}

JugadorIngresado1 = new ClaseJugadorIngresado(Jugadorjugador,Preciojugador,Salariojugador,AñosdeContrato)


/* Mensaje que dice al usuario sus datos ingresados*/
console.log('El jugador es ' + JugadorIngresado1.Nombre + ', el precio del jugador es ' + JugadorIngresado1.Valor + ', el salario del jugador es ' + JugadorIngresado1.Salario + ' y tiene ' + JugadorIngresado1.Contrato + ' años de contrato') ;
alert('El jugador es ' + JugadorIngresado1.Nombre + ', el precio del jugador es ' + JugadorIngresado1.Valor + ', el salario del jugador es ' + JugadorIngresado1.Salario + ' y tiene ' + JugadorIngresado1.Contrato + ' años de contrato') ;

var Eleccion = prompt('Elija si quiere saber cuanto le costara por dia, por año, o en total(escribiendo dia, año o total), sino escriba ESC') ;

/* Permite al Usuario interactuar con datos ingresados */
while(Eleccion != 'ESC') {
 switch (Eleccion) {
    case 'Dia':
    case 'dia':
            alert ('El jugador, ' + JugadorIngresado1.Nombre + ' cobrara por dia(en dolares): ' + ((JugadorIngresado1.Salario * 12) / 365 )) ;
        break
    case 'Año':
    case 'año':
            alert ('El jugador, ' + JugadorIngresado1.Nombre + ' cobrara por año(en dolares): ' + (12 * JugadorIngresado1.Salario)) ;
        break 
    case 'total':
    case 'Total': 
            alert ('El jugador, ' + JugadorIngresado1.Nombre + ' saldra en total(en dolares): ' + (JugadorIngresado1.Salario * 12 * JugadorIngresado1.Contrato)) ;
        break
    default: alert('Por favor solo escriba algunas de las palabras presentadas')
 }
var Eleccion = prompt('Quiere saber cuanto le costara por dia, por año, o en total(escribiendo dia, año o total), si desea dejar de utilizar la herramienta, escriba ESC')
}
