import { Entity } from "./Entity";

export class Race extends Entity {
    constructor(name?: string) {
        super();
        this.name = name ? name : "";
    }

    public name;
}