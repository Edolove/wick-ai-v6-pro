import { connectBinance } from "./market.js";

export function createAnalyzer(){

    let socket=null;

    return{

        start(symbol,tf){

            socket=connectBinance(symbol,tf);

            document.getElementById("status").innerText="Observation";

        }

    };

}
