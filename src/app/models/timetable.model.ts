import Day from './day.model';

export default class Timetable {

    public url: string;
    public days: Day[];

    constructor(url: string, days: Day[]) {
        this.url = url;
        this.days = days;
    }
}
