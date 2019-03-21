export default class Course {

    public name: string;
    public url: {
        semester1: string,
        semester2: string
    }
    public courseDetails: {
        courseCode: string,
        courseLevel: string | number,
        courseYear: string | number
    }

    constructor(json) {
        Object.assign(this, json);
    }

}
