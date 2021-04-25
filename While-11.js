/* Imprimir y contar los multiplos de 3 desde la unidad hasta un numero que
introducimos por teclado.*/

var i=1;
var C=0;
var Result;
var Num = prompt('Ingrese un número');
while(i<=Num){
    if(Result=Num%3===0){
        console.log(Num%3);
        C=C+Result;
    }
    i=i+1;
}
console.log(C);

