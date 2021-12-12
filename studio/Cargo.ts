import { Payload } from './Payload';
export class Cargo implements Payload{
    massKg: number;
    materials: string;
    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;


    }

}