
let valores = [8,1,7,4,2,8];
let i; 
valores.sort();

// for(i = 0; i<valores.length; i++){
//     console.log(valores[i]);
// }

// for de maneira simplificada - nova atualização ECMA
for(i in valores){

    console.log(valores[i]);

}

//Procura um elemento dentro do array.
var num = valores.indexOf(1);

console.log(num);

