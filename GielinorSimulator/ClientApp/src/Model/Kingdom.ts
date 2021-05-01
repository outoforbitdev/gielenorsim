import { Entity } from "./Entity";
import { Date } from "./Date";
import * as Functions from "./Functions";

interface KingdomInterface {
    Environment: string,
    Name: string,
    Government: string,
    Monarch: string,
    Usurper: string,
    Council: string,
    Capital: string,
    Religion: string,
    Demonym: string,
    Established: Date | undefined,
    Fragmented: Date | undefined,
    Reorganized: Date | undefined,
    Dissolved: Date | undefined,
    Restored: Date | undefined,
}

export class Kingdom extends Entity {
    Government: string;
    Monarch: string;
    Usurper: string;
    Council: string;
    Capital: string;
    Religion: string;
    Demonym: string;
    Established: Date | undefined;
    Fragmented: Date | undefined;
    Reorganized: Date | undefined;
    Dissolved: Date | undefined;
    Restored: Date | undefined;

    constructor();
    constructor(initData?: KingdomInterface);
    constructor(private initData?: KingdomInterface) {
        super();
        this.Environment = "";
        this.Name = initData?.Name || "";
        this.Government = initData?.Government || "";
        this.Monarch = initData?.Monarch || "";
        this.Usurper = initData?.Usurper || "";
        this.Council = initData?.Council || "";
        this.Capital = initData?.Capital || "";
        this.Religion = initData?.Religion || "";
        this.Demonym = initData?.Demonym || "";
        this.Established = initData?.Established ? new Date(Functions.standardize(initData.Established)) : undefined;
        this.Fragmented = initData?.Fragmented ? new Date(initData.Fragmented) : undefined;
        this.Reorganized = initData?.Reorganized ? new Date(initData.Reorganized) : undefined;
        this.Dissolved = initData?.Dissolved ? new Date(initData.Dissolved) : undefined;
        this.Restored = initData?.Restored ? new Date(initData.Restored) : undefined;
    }
}

export default Kingdom;