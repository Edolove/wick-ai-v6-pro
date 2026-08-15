export function detectPatterns(c){
return{
fvgBull:c.low>c.prevHigh,
bvgBear:c.high<c.prevLow,
retestBull:c.close>c.level,
retestBear:c.close<c.level,
sweepBull:c.low<c.prevLow&&c.close>c.prevLow,
sweepBear:c.high>c.prevHigh&&c.close<c.prevHigh
};
}
