export function lockT7(sec,locked,decision,ctx){
if(sec<=7&&!locked){
return{locked:true,decision:decision(ctx)};
}
if(sec>7){
return{locked:false,decision:null};
}
return{locked,decision:null};
}
