import { Being } from "./Being";
import Entity, { EntityType } from "./Entity";
import Kingdom from "./Kingdom";

export class Response {
    public Success: boolean;
    public ErrorMessage: string;

    constructor() { }
}

export class EntityRequest {
    public Name: string;
    public EntityType: EntityType;
    public Key: string;

    constructor() { }
}

export class EntityResponse extends Response {
    public Entity: Entity;

    constructor() {
        super();
    }
}