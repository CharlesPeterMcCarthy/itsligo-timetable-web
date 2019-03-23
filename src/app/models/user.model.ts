export default class User {

    public name: string;
    public studentID: string;
    public verified: boolean;
    public timetableURL: string;

    constructor(json) {
        Object.assign(this, json);
    }

}
