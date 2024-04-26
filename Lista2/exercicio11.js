var prompt = function(){return lines.shift();};
var N = Number(prompt(""))
for(C=0;C<N;C++){
    var [X,Y] = prompt().split(" ").map(Number)
    if(Y === 0){
        console.log("divisao impossivel")
    }else{
        console.log((X/Y).toFixed(1))
    }
}