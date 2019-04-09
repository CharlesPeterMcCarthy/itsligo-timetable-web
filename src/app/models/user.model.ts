import * as moment from 'moment';

export default class User {

    public username: string;
    public displayUsername: string;
    public verified: boolean;
    public timetableURL: string;
    public times: {
        registerAt: moment.Moment,
        lastLogin: moment.Moment
    }
    public registerAtForSorting: string;

    constructor(json) {
        Object.assign(this, json);

        this.times.registerAt = moment(this.times.registerAt);
        this.times.lastLogin = moment(this.times.lastLogin);
        this.registerAtForSorting = this.times.registerAt.format('YYYY:MM:DD HH:mm:ss');
    }

}
