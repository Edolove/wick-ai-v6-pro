export function connectBinance(symbol,tf){

const ws=new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${tf}`
);

ws.onopen=()=>console.log("Flux connecté");

ws.onmessage=(e)=>{

const k=JSON.parse(e.data).k;

console.log(k.c);

};

return ws;

}
