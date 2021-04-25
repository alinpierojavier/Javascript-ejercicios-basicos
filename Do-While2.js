var SumaT=0;
do{
    var num = prompt('Ingrese un número');
    if(number(num)==num){
        SumaT=SumaT+num;
    }else(num!=undefined){
            console.log(num+' No es un número');
    }
}while(num!=undefined);
console.log(SumaT);
