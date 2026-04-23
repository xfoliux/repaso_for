function mostrar(opcion){
    switch(opcion){
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            mostrarMensaje1();
            break;
        case 5:
            mostrarMensaje2();
            break;
        case 6:
            mostrarMensaje3();
            break;
        case 7:
            mostrarMensaje4();
            break;
        case 8:
            imprimirTabla3();
            break;
    }
}
function ejercicio1(){
    for(let i=0; i<=5; i++){
        console.log(i)
    }
}
function ejercicio2(){
    for(let i=100; i<=1000; i+=100){
        console.log(i)
    }
}
function ejercicio3(){
    for(let i=1000; i>=800; i-=100){
        console.log(i)
    }
}
function mostrarMensaje1(){
    for( let i=5; i<8; i++){
        console.log("Mensaje 1")
    }
}
function mostrarMensaje2(){
    for(let i=10; i<=12; i++){
        console.log("Mensaje 2")
    }
}
function mostrarMensaje3(){
    for(let i=0; i<3; i++){
        console.log("Mensaje 3")
    }
}
function mostrarMensaje4(){
    for(let i=8; i>5; i--){
        console.log("Mensaje 4")
    }
}
function imprimirTabla3(){
    for(let i=1; i<=10; i++){
        console.log("3x " + i + " = " + (3 * i))
    }
}