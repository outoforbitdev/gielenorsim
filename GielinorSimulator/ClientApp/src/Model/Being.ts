import { Entity, NetworkedEntity } from "./Entity";
import { stat } from "fs";
import { NetworkedKingdom } from "./Kingdom";

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
    Kingdom: NetworkedKingdom;

    constructor() {
        super();
        this.Race = Race.Human;
        this.Gender = Gender.NotApplicable;
        this.Status = BeingStatus.Alive;
        this.Kingdom = new NetworkedKingdom();
    }
}

export class NetworkedBeing extends NetworkedEntity {
    Table = "Beings";
}