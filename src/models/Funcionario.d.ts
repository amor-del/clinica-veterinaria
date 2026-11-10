export declare abstract class Funcionario {
    private nome;
    private matricula;
    private salario;
    constructor(nome: string, matricula: string, salarioInicial: number);
    getNome(): string;
    getMatricula(): string;
    getSalario(): number;
    setNome(nome: string): void;
    setMatricula(matricula: string): void;
    setSalario(novoSalario: number): boolean;
    abstract calcularBonus(): number;
}
//# sourceMappingURL=Funcionario.d.ts.map