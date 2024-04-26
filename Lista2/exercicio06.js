var prompt = function(){return lines.shift();};
var N = Number(prompt(""))
for(var C = 2;C<=N;C++){
    if(C%2===0){
        console.log((C)+"^2 = "+(Math.pow(C,2)))
    }
}