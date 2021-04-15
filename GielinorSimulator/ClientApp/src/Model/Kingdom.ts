import { Entity, NetworkedEntity } from "./Entity";

export class Kingdom extends Entity {
    

    constructor() {
        super();
    }
}

export class NetworkedKingdom extends NetworkedEntity {
    Table = "Kingdom";
}