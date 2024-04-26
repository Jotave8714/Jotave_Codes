var prompt = function(){return lines.shift();};
var C = 0;
var Vi = 0;
var Vg = 0;
var Gr = 0;
var E = 0;
while(C!=1){
    var [A,B] = prompt().split(" ").map(Number);
    Gr++
    if(A>B){
        Vi++
    }
    if(A<B){
        Vg++
    }
    if(A===B){
        E++
    }
    console.log("Novo grenal (1-sim 2-nao)")
    var P = Number(prompt("Novo grenal (1-sim 2-nao)"))
    if(P===2){
        C++
        console.log((Gr)+" grenais")
        console.log("Inter:"+(Vi))
        console.log("Gremio:"+(Vg))
        console.log("Empates:"+(E))
        if(Vi>Vg){
            console.log("Inter venceu mais")
        }else if(Vg>Vi){
            console.log("Gremio venceu mais")
        }
    }
}