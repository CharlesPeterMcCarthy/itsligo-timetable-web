import { Class } from './class.model';

export class Day {
    public day: string;
    public classes: Class[];

    constructor(json) {
        Object.assign(this, json);
    }
}