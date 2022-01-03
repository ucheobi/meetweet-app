import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Observable, from } from "rxjs";
import { User } from "./user.model";
import { Follower } from "./follower.model";

@Injectable()
export class StaticDataSource {

    // Repository and methods for Post
    private posts: Post[] = [
        new Post(1, 123, 'ucheanota', 'ucheanota@yahoo.com', "By withholding his support from President Biden’s $2.2 trillion Build Back Better bill, Senator Joe Manchin has significantly dimmed the prospects for climate action that scientists say the U.S. must take to keep the planet from dangerously overheating", new Date().getMinutes(), "../../assets/avatar1.png","../../assets/content-image/image1.jpg",undefined,4,0),
        new Post(2, 124, 'irisuche', 'irisuche@yahoo.com', 'Hurayyy! Iris is plus one', new Date().getMinutes(), "../../assets/avatar1.png",undefined,undefined,100,0),
        new Post(3, 125, 'preciousanota', 'preciousanota@yahoo.com', 'I am Uche fiancee', new Date().getMinutes(), "../../assets/avatar1.png",undefined,undefined,54,0),
        new Post(4, 126, 'chidozieanota', 'chidozieanota@yahoo.com', 'My first Prince', new Date().getMinutes(), "../../assets/avatar1.png",undefined,undefined,200,2),
        new Post(5, 127, 'tochukwuanota', 'tochukwuanota@yahoo.com', 'I am the star here', new Date().getMinutes(), "../../assets/avatar1.png",undefined,undefined,1000,1)
    ]

    getPosts(): Observable<Post[]> {
        return from([this.posts]);
    }

    addPost(post: Post): Observable<Post> {
        console.log(JSON.stringify(post));      
        return from([post]);
    }

    // Repository and methods for User
    private users: User[] = [
        new User(1,'ucheanota', 'ucheanota@yahoo.com', "12345", [], []),  
    ]

    getUsers(): Observable<User[]> {
        return from([this.users])
    }

    saveUser(user: User): Observable<User> {
        console.log(JSON.stringify(user));    
        return from([user]);
    }


    // Repository and methods for Followers
    private followers: Follower[] = [
        new Follower(1, [1,2,3])
    ]

    getFollowers(): Observable<Follower[]> {
        return from([this.followers])
    }

    addFollower(follower: Follower): Observable<Follower> {
        return from([follower])
    }
}