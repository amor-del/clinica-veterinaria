import { Funcionario } from './Funcionario';

export class Veterinario extends Funcionario {
    private consultasRealizadas: number;
    private readonly BONUS_POR_CONSULTA: number = 50.0;

    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }

    public incrementarConsulta(): void {
        this.consultasRealizadas++;
    }

    public getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    public setConsultasRealizadas(consultas: number): void {
        this.consultasRealizadas = consultas;
    }

    public prescreverTratamento(tratamento: string): void {
        console.log(`Tratamento prescrito: ${tratamento}`);
    }

    public calcularBonus(): number {
        return this.consultasRealizadas * this.BONUS_POR_CONSULTA;
    }
}