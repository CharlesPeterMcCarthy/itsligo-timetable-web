import Day from './day.model';

export default class Timetable {
    public Days: Day[];

    constructor(json) {
        this.Days = json;
    }
}
