import { Friends } from "./friends.model";
import { Post } from "./post.model";

export class UserRegister {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public password: string,
        public repeatPassword: string,
        public policyAgreement: boolean,
        public post?: Post[],
        public friends?: Friends[]
    ) {}
}

export class UserSignin {
    constructor(
        public email: string,
        public password: string
    ){}
}