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