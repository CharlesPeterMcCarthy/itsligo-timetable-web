export default class User {

    public name: string;
    public username: string;
    public verified: boolean;
    public timetableURL: string;

    constructor(json) {
        Object.assign(this, json);
    }

}
