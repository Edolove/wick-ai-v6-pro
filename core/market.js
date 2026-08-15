export function connectBinance(symbol, tf, onUpdate) {
  const ws = new WebSocket(
    `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${tf}`
  );

  ws.onmessage = (e) => {
    const k = JSON.parse(e.data).k;
    onUpdate({
      t:+k.t,T:+k.T,o:+k.o,h:+k.h,l:+k.l,c:+k.c,
      prev:{}, ema9:0, ema21:0, range:false
    });
  };

  return ws;
}
