import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Observable, from, of } from "rxjs";
import { UserRegister } from "./user.model";
import { Friends } from "./friends.model";

@Injectable()
export class StaticDataSource {

    // Repository and methods for Post
    private posts: Post[] = [
        new Post(1, 123, 'ucheanota', 'ucheanota@yahoo.com', "By withholding his support from President Biden’s $2.2 trillion Build Back Better bill, Senator Joe Manchin has significantly dimmed the prospects for climate action that scientists say the U.S. must take to keep the planet from dangerously overheating", new Date().getMinutes(), "../../assets/avatar1.png",4,0,"../../assets/content-image/image1.jpg"),
        new Post(2, 124, 'irisuche', 'irisuche@yahoo.com', 'Hurayyy! Iris is plus one', new Date().getMinutes(), "../../assets/avatar1.png",100,0, undefined),
        new Post(3, 125, 'preciousanota', 'preciousanota@yahoo.com', 'I am Uche fiancee', new Date().getMinutes(), "../../assets/avatar1.png", 54, 0, undefined),
        new Post(4, 126, 'chidozieanota', 'chidozieanota@yahoo.com', 'My first Prince', new Date().getMinutes(), "../../assets/avatar1.png",200, 2, undefined),
        new Post(5, 127, 'tochukwuanota', 'tochukwuanota@yahoo.com', 'I am the star here', new Date().getMinutes(), "../../assets/avatar1.png",1000,1, undefined)
    ]

     // Repository and methods for User
     private users: UserRegister[] = [
        { id: 1, username: "ucheobiefula", email: "ucheanota@yahoo.com", password: "", repeatPassword: "", policyAgreement: true, 
            post: [], 
            friends: [
                {id: 2, username: "preciouslady", avatarUrl: "../../assets/content-image/avatar2.jpg" },
                {id: 3, username: "tochuz", avatarUrl: "../../assets/content-image/avatar3.jpg" },
                {id: 4, username: "irisbaby", avatarUrl: "../../assets/content-image/avatar4.jpg" },
                {id: 5, username: "dozie", avatarUrl: "../../assets/content-image/avatar5.jpg" },
            ]
        }, 
    ]

    private friends: Friends[] = [];

    getPosts(): Observable<Post[]> {
        return from([this.posts]);
    }

    addPost(post: Post): Observable<Post> {
        console.log(JSON.stringify(post));      
        return from([post]);
    }

    getUsers(): Observable<UserRegister[]> {
        return from([this.users])
    }

//    getUserFriends(id: number)

    saveUser(user: UserRegister): Observable<UserRegister> {
        console.log(JSON.stringify(user));    
        return from([user]);
    }

    addFriend(friend: Friends): Observable<Friends> {
        return from([friend])
    }
}