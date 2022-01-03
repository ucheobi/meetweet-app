import { Post } from "./post";

export interface user {
    username: string;
    password: string;
    email: string;
    post?: Post[];
     
}


