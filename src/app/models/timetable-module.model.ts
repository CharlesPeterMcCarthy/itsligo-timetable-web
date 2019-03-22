import * as moment from 'moment';
import { ITime } from '../interfaces/itime';

export default class TimetableModule implements ITime {
    
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
        start: moment.Moment,
        end: moment.Moment
    };
    public type: string;
    public weeks: Object[];
    public conflicting?: boolean;

    constructor(json) {
        Object.assign(this, json);
        this.times.start = moment(this.times.start, 'HH:mm');
        this.times.end = moment(this.times.end, 'HH:mm');
    }

    public StartTime = (): string => this.times.start.format('HH:mm');

    public EndTime = (): string => this.times.end.format('HH:mm');

}