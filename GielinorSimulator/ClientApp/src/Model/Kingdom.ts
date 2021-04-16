import { Entity } from "./Entity";

export class Kingdom extends Entity {
    Capital: string;
    Religion: string;
    Demonym: string;

    constructor() {
        super();
        this.Capital = "";
        this.Religion = "";
        this.Demonym = "";
    }
}

export default Kingdom;