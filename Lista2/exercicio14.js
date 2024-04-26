var prompt = function(){return lines.shift();};
var N = Number(prompt(""))
var F = 1
for(C=1;C<=N;C++){
    F = F*C
}
console.log(F)