import TimetableModule from './timetable-module.model';
import Break from './break.model';
import HiddenModule from './hidden-module';

export default class Day {

    public day: string;
    public modules: TimetableModule[];
    public hiddenModules?: HiddenModule[];
    public breaks?: Break[];

    constructor(json) {
        Object.assign(this, json);
    }
    
}