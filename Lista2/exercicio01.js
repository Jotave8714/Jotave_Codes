var prompt = function(){return lines.shift();};
var positivos = 0;
for(var C = 0;C<6;C++){
    var N = Number(prompt(""));
    if(N>0){
        positivos++
    }
}
console.log((positivos)+" valores positivos")