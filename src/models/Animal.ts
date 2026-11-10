export abstract class Animal {
    private nome: string;
    private idade: number;
    private tutor: string;

    constructor(nome: string, idade: number, tutor: string) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getTutor(): string {
        return this.tutor;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setTutor(tutor: string): void {
        this.tutor = tutor;
    }

    public abstract emitirSom(): void;
    public abstract descreverCuidados(): void;
}