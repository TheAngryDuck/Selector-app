export class userDto{

    constructor(
        public id?: number,
        public name?: string,
        public selectors?: NodeList,
        public agreeTermsConditions?: boolean
    ){}
}