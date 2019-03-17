import * as moment from 'moment';
import { ITime } from '../interfaces/itime';

export default class Break implements ITime {
    
    public times: {
        start: moment.Moment,
        end: moment.Moment
    };

    constructor(json) {
        Object.assign(this, json);
        this.times.start = moment(this.times.start, 'HH:mm');
        this.times.end = moment(this.times.end, 'HH:mm');
    }

    public StartTime = (): string => this.times.start.format('HH:mm');

    public EndTime = (): string => this.times.end.format('HH:mm');
    
}
