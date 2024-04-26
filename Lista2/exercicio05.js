var prompt = function(){return lines.shift();};
var X = Number(prompt(""))
var Y = Number(prompt(""))
var SmImpar = 0
if(X>Y){
    for(var C = (Y+1);C<X;C++){
        if(C%2!=0){
            SmImpar = SmImpar + C  
        }
    }
}else if(X<Y){
    for(var C = (X+1);C<Y;C++){
        if(C%2!=0){
            SmImpar = SmImpar + C  
        }
    }
}
console.log(SmImpar)