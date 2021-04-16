import { Entity } from "./Entity";
import { Kingdom } from "./Kingdom";

export enum Race {
    Human,
    Elf,
}

export enum BeingStatus {
    Alive,
    Dead,
}

export enum Gender {
    Male,
    Female,
    NotApplicable,
}

export class Being extends Entity {
    Race: Race;
    Gender: Gender;
    Status: BeingStatus;
    Kingdom: Kingdom;

    constructor() {
        super();
        this.Race = Race.Human;
        this.Gender = Gender.NotApplicable;
        this.Status = BeingStatus.Alive;
        this.Kingdom = new Kingdom();
    }
}