let arroz = parseInt(lines.shift());
let carne = 0;
let feijao = 0;

while(true){
  if(arroz < 0){
    break;
  }
  carne += arroz;
  feijao++;
  arroz = parseInt(lines.shift());
}

console.log(`${(carne / feijao).toFixed(2)}`);