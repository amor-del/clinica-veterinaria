export declare abstract class Animal {
    private nome;
    private idade;
    private tutor;
    constructor(nome: string, idade: number, tutor: string);
    getNome(): string;
    getIdade(): number;
    getTutor(): string;
    setNome(nome: string): void;
    setIdade(idade: number): void;
    setTutor(tutor: string): void;
    abstract emitirSom(): void;
    abstract descreverCuidados(): void;
}
//# sourceMappingURL=Animal.d.ts.map