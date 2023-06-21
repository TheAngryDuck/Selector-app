export class userDto{

    constructor(
        public id?: number,
        public name?: string,
        public selectors?: number[],
        public agreeTermsConditions?: boolean
    ){}
}