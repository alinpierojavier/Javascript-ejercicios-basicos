/*
//ARREGLOS: Una lista de elementos ordenados
const arreglo = [1, "Pedro", true, [1, "Juan"]]
//La longitud de un arreglo
console.log(arreglo.length)

//Obtener el valor de una posición
console.log(arreglo[0])
console.log(arreglo[1])
console.log(arreglo[2])
console.log(arreglo[3])
//console.log(arreglo[4])
//console.log(arreglo[arreglo.length - 1])

for (let i = 0; i <= arreglo.length; i++) {
	console.log(i+":"+ arreglo[i])

}
//cómo reemplazar un elemento
arreglo[0]=30
console.log(arreglo) */

//insertar nuevo elemento: 2 formas hay
const arreglo = [1,"pedro", true, [1, "Juan"]]

//arreglo.push("Maria")
//console.log(arreglo)
arreglo.splice(2,1,"Alin Javier")
console.log(arreglo)