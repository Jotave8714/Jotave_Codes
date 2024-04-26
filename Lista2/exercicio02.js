var prompt = function(){return lines.shift();};
var pares = 0;
for(var C = 0;C<5;C++){
    var N = Number(prompt(""));
    if(N%2===   0){
        pares++
    }
}
console.log((pares)+" valores pares");