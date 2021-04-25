var Nota = prompt('Ingrese una nota');

if(Nota>=0 && Nota<3){
    console.log('MUY DEFICIENTE');
}else if(Nota>=3 && Nota<5){
    console.log('INSUFICIENTE');
}else if(Nota>=5 && Nota<6){
    console.log('SUFICIENTE');
}else if (Nota>=6 && Nota<7){
    console.log('BIEN');
}else if (Nota>=7 && Nota<9){
    console.log('NOTABLE');
}else if(Nota>=9 && Nota<=10){
    console.log('SOBRESALIENTE');
}else{
    console.log('ERROR');
}