
var resultado="";
do{
    var texto = prompt('Ingrese un texto');
    if(resultado==""){
        resultado=resultado+texto;
    }else{
        resultado=resultado+" "+texto;
    }

}while (confirm('Desea continuar?'));
console.log(resultado);