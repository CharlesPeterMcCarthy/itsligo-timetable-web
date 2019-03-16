import Class from './class.model';
import Break from './break.model';

export default class Day {
    public day: string;
    public classes: Class[];
    public breaks?: Break[];

    constructor(json) {
        Object.assign(this, json);
    }
}