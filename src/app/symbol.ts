import { SYMBOLS } from './machineData/symbols';

export class Symbol {
    id: number;
    name: string;
    src: string;
    currency: number;

    constructor() {
        let rand = Math.floor(Math.random()*6);
        this.id = SYMBOLS[rand].id;
        this.name = SYMBOLS[rand].name;
        this.src = SYMBOLS[rand].src;
        this.currency = SYMBOLS[rand].currency;
    }
}

export class CustomSymbol {
    id: number = 0;
    name: string = "banana";
    src: string = '../../assets/images/Banana.jpeg';
    currency: number = 3;

    // constructor() {
    //     let rand = Math.floor(Math.random()*6);
    //     this.id = SYMBOLS[rand].id;
    //     this.name = SYMBOLS[rand].name;
    //     this.src = SYMBOLS[rand].src;
    //     this.currency = SYMBOLS[rand].currency;
    // }
}