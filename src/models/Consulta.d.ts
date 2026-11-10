import { Animal } from './Animal';
import { Veterinario } from './Veterinario';
export declare class Consulta {
    private animal;
    private veterinario;
    private data;
    private motivo;
    constructor(animal: Animal, veterinario: Veterinario, data: string, motivo: string);
    getAnimal(): Animal;
    getVeterinario(): Veterinario;
    getData(): string;
    getMotivo(): string;
    setAnimal(animal: Animal): void;
    setVeterinario(veterinario: Veterinario): void;
    setData(data: string): void;
    setMotivo(motivo: string): void;
    realizarConsulta(): void;
}
//# sourceMappingURL=Consulta.d.ts.map