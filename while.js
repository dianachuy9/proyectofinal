//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar

//noprotect

var opcion
while (opcion!="salir")
  {
  
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
var salario_5 = 0.05 // 5%
var propiedades_35 = 0.35 // 35%


var hijos_recargo = 0.2 // 20%



//Recargo
var recargo = 0
var recargoconyuge = 0
var recargohijos = 0
var recargo_total = 0
var recargo_salario = 0
var recargo_propiedades = 0


//Precio final 
var precio_final = 0


//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "numero")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}else ("NO" == casado.toUpperCase())

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt ("¿Cuantos hijos tiene?", "cantidad numero")
}else ("NO" == hijos.toUpperCase())

/**
 * 1. convierta la cantidad de hijos a numero
 */

var hijos_numero = parseInt(hijos)
var cantidad_hijos_numero = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}

// propiedades

var propiedades = prompt("¿Posee propiedades?", "si/no")
var cantidad_propiedades
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = prompt("¿Cuantas propiedades tiene?", "cantidad numero")
}else ("NO" == propiedades.toUpperCase())

var propiedades_numero = parseInt(propiedades)
var cantidad_propiedades_numero = 0
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades_numero = parseInt(cantidad_propiedades)
}

// Salario

var salario = prompt("¿Used devenga un salario", "si/no")
var cantidad_salario
if("SI" == salario.toUpperCase()){
  cantidad_salario = prompt("Ingrese su salario", "numero entero")
} else ("NO" == salario.toUpperCase())

var salario_numero = parseInt(salario)
var cantidad_salario_numero = 0
if("SI" == salario.toUpperCase()){
  cantidad_salario_numero = parseInt(cantidad_salario)
}




//Aquí debe calcular el recargo total basado en las respuestas ingresadas

if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
} else if (edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
} else if (edad_numero>=50){
  recargo = (precio_base * edad_50)
} 
/** 
 * 2. Recargo por la edad del conyuge
 */
if (edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargoconyuge = (precio_base * casado_18)
} else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50){
   recargoconyuge = (precio_base * casado_25)
} else if (edad_conyuge_numero>=50){
  recargoconyuge = (precio_base * casado_50)
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
recargohijos = ((precio_base * hijos_recargo) * cantidad_hijos_numero)




/**
* 4. Recargo por propiedades 
 */

recargo_propiedades = ((precio_base * propiedades_35) * cantidad_propiedades_numero)

/**
 * 5. Recargo por Salario
 
  */


recargo_salario = (cantidad_salario_numero * salario_5)


//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango

recargo_total = (recargo + recargoconyuge + recargohijos + recargo_propiedades + recargo_salario)

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

opcion = prompt("¿Desea ingresar otra cotizacion?", "salir")
  }

console.log("Adios")
  
