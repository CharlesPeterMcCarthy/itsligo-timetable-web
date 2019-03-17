export default class Break {
    public times: {
        start: string,
        end: string  
    }

    constructor(json) {
        Object.assign(this, json);
    }
}
