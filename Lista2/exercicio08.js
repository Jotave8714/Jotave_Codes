var prompt = function(){return lines.shift();};
var X = 0;
var Y = 0;
for(C=1;C<=100;C++){
    var N = Number(prompt(""));
    if(N>X){
        X = N
        Y = C
    }
}
console.log(X)
console.log(Y)
