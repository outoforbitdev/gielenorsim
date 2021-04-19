import { Entity } from "./Entity";
import { Date } from "./Date";

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
    Environment: string;
    Name: string;
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
        this.Established = initData?.Established || undefined;
        this.Fragmented = initData?.Fragmented || undefined;
        this.Reorganized = initData?.Reorganized || undefined;
        this.Dissolved = initData?.Dissolved || undefined;
        this.Restored = initData?.Restored || undefined;
    }
}

export default Kingdom;