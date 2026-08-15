export function echoScore(memory,current){
let hit=0,total=0;

for(const c of memory){
if(c.fvgBull===current.fvgBull &&
   c.sweepBull===current.sweepBull &&
   c.emaBull===current.emaBull){
total++;
if(c.result==="CALL") hit++;
}
}

return total?Math.round(hit/total*100):50;
}
