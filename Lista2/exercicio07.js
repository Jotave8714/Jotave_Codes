var prompt = function(){return lines.shift();};
var N = Number(prompt(""))

for(var C = 1;C<=10;C++){
    console.log((C)+" x "+(N)+" = "+(C*N))
}