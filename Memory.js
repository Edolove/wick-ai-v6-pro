export const Memory={

candles:[],

add(c){

this.candles.push(c);

if(this.candles.length>500){

this.candles.shift();

}

}

};
