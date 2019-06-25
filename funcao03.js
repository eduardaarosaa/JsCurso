function fatorial(n){
    if(n ==1){
        return 1
    }else{
        return n * fatorial (n-1);
    }

}

//função recursiva
//recursividade é quando uma função chama ela mesmo.

console.log(fatorial(5));