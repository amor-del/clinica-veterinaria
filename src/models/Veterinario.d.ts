import { Funcionario } from './Funcionario';
export declare class Veterinario extends Funcionario {
    private consultasRealizadas;
    private readonly BONUS_POR_CONSULTA;
    constructor(nome: string, matricula: string, salario: number);
    incrementarConsulta(): void;
    getConsultasRealizadas(): number;
    setConsultasRealizadas(consultas: number): void;
    prescreverTratamento(tratamento: string): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Veterinario.d.ts.map