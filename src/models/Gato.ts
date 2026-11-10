import { Animal } from './Animal';

export class Gato extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public miar(): void {
        console.log("Miau!");
    }

    public emitirSom(): void {
        this.miar();
    }

    public descreverCuidados(): void {
        console.log("Necessita de arranhador.");
    }
}