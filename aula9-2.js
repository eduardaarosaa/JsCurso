var agora = new Date();
var hora = agora.getHours(); //pega a hora atual da máquina ou servidor

console.log(`Agora são ${hora} horas`)

if( hora < 12){
    console.log("Bom dia!!")
}else if(hora >12 && hora <= 18){
    console.log("Boa tade");
}else{
    console.log("Boa noite");
}