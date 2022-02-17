import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./post.model";
import { UserRegister } from "./user.model";
import { map } from "rxjs/operators"

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class ApiDataSource {
    _url: string;
    _token: string | undefined

    constructor(private http: HttpClient){
        
        this._url = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this._url + "posts", post )
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this._url + "posts")
    }

    getUsers(): Observable<UserRegister[]> {
       return this.http.get<UserRegister[]>(this._url + "users")
    }

    authenticateUser(user: string, _password: string ): Observable<boolean> {
        const auth = this.http.post<any>(this._url + "login", {
            name: user, password: _password
        }).pipe(map(res => {
            this._token = res.success ? res.token : null;
            return res.success;
        }))

        return auth;
    }
 }