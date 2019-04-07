import * as moment from 'moment';

export default class User {

    public name: string;
    public username: string;
    public displayUsername: string;
    public verified: boolean;
    public timetableURL: string;
    public registerAt: moment.Moment;
    public registerAtForSorting: string;

    constructor(json) {
        this.registerAt = moment(json.times.registerAt);
        this.registerAtForSorting = this.registerAt.format('YYYY:MM:DD HH:mm:ss');
        delete json.times;

        Object.assign(this, json);
    }

}
