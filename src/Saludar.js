import Hola from './Hola.js';

export default class Saludar extends Hola{
    constructor(){
        super("saludar");
    }
    
    decirHola(){
        return "en saludar";
    }
}