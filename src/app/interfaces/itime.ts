import * as moment from 'moment';

export interface ITime {

    times: {
        start: moment.Moment,
        end: moment.Moment
    };

    StartTime();
    EndTime();

}
