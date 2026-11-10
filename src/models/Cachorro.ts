import { Animal } from './Animal';

export class Cachorro extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public latir(): void {
        console.log("Au Au!");
    }

    public emitirSom(): void {
        this.latir();
    }

    public descreverCuidados(): void {
        console.log("Necessita de passeio diário.");
    }
}