import { Entity } from "./Entity";
import { Date } from "./Date";

export class Kingdom extends Entity {
    Government: string;
    Monarch: string;
    Usurper: string;
    Council: string;
    Capital: string;
    Religion: string;
    Demonym: string;
    Established: Date;
    Fragmented: Date;
    Reorganized: Date;
    Dissolved: Date;
    Restored: Date;

    constructor() {
        super();
        this.Capital = "";
        this.Religion = "";
        this.Demonym = "";
    }
}

export default Kingdom;