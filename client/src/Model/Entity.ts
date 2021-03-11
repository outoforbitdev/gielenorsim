export class Entity {
    Name: string;
    ID: string;

    constructor() {
        this.Name = "";
        this.ID = "";
    }
}

export class NetworkedEntity {
    public ID: string;
    private static Table: string;

    constructor() {
        this.ID = "";
    }
}