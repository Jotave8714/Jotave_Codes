var prompt = function(){return lines.shift();};

var par = 0;
var impar = 0;
var positivo = 0;
var negativo = 0;
for(var C = 0;C<5;C++){
    var N = Number(prompt(""));
    if(N>0){
        positivo++
    }
    if(N<0){
        negativo++
    }
    if(N%2===0){
        par++
    }
    if(N%2!=0){
        impar++
    }
}
console.log((par)+" valor(es) par(es)");
console.log((impar)+" valor(es) impar(es)");
console.log((positivo)+" valor(es) positivo(s)");
console.log((negativo)+" valor(es) negativo(s)");