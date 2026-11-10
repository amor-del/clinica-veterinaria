import { Animal } from './Animal';

export class Ave extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public cantar(): void {
        console.log("Piu piu!");
    }

    public emitirSom(): void {
        this.cantar();
    }

    public descreverCuidados(): void {
        console.log("Necessita de gaiola.");
    }
}