import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./post.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class ApiDataSource {
    _url: string;

    constructor(private http: HttpClient){
        this._url = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this._url + "posts", post )
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this._url + "posts")
    }

    getUsers(): Observable<User[]> {
       return this.http.get<User[]>(this._url + "users")
    }
}