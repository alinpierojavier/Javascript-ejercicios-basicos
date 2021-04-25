/*Hacer un pseudocódigo que imprima los numeros impares hasta el 100 y que
imprima cuantos impares hay. */

var N=100;
var i=0;
var Resul;
var cont=0;
while(i<=N){
    Resul= i%2 !==0;
    if(Resul===true){
        console.log('i = '+i);
        cont=cont+Resul;
    }
    i=i+1;
}
console.log('Total impar es: '+cont);
