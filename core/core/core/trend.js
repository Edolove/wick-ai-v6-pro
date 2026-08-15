export function trend(ema9,ema21,last,prev){
return{
emaBull:ema9>ema21,
emaBear:ema9<ema21,
hhhl:last.high>prev.high&&last.low>prev.low,
lhll:last.high<prev.high&&last.low<prev.low
};
}
