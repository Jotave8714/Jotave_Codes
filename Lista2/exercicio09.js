var prompt = function(){return lines.shift();};
var X = 0
var Y = 1
while(X!=Y){
    var [X,Y] = prompt().split(" ").map(Number)
    if(X>Y){
        console.log("Decrescente")
    }
    if(X<Y){
        console.log("Crescente")
    }
}
console.log() 