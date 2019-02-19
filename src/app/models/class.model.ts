export class Class {
    public activity: string;
    public duration: string;
    public groups: {
        code: string,
        year: number
    }[];
    public lecturers: string[];
    public module: {
        code: string,
        name: string
    };
    public rooms: {
        code: string,
        seats: number,
        type: string
    }[];
    public times: {
        start: string,
        end: string
    };
    public type: string;
    public weeks: Object[];

    constructor(json) {
        Object.assign(this, json);
    }
}