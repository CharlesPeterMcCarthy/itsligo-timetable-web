import TimetableModule from './timetable-module.model';
import Break from './break.model';

export default class Day {
    public day: string;
    public modules: TimetableModule[];
    public breaks?: Break[];

    constructor(json) {
        Object.assign(this, json);
    }
}