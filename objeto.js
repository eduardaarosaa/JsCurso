let amigo = { nome:'Jose', sexo: 'M', peso:85.4, engordar(p = 0){
    console.log('engordou');
    this.peso += p 
}}

amigo.engordar(2)
console.log(amigo)

//Funcoes dentro de um objeto.