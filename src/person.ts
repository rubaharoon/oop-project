export class Person {
    private _personality: string;

    constructor() {
        this._personality = "Mystery";
    }

    ask_question(answer: number) {
        if (answer === 1) {
            this._personality = "Extrovert";
        } else if (answer === 2) {
            this._personality = "Introvert";
        } else {
            this._personality = "Mystery";
        }
    }

    get personality() {
        return this._personality;
    }
}