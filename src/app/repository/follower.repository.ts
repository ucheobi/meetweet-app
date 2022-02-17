import { Injectable } from "@angular/core";
import { Friends } from "../model/friends.model";
import { StaticDataSource } from "../model/static.datasource";
import { Observable } from "rxjs";
import { UserRegister } from "../model/user.model";

@Injectable()
export class FollowersRepository {
    private followers: UserRegister[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getUsers().subscribe(data => {
            this.followers = data;
        })
    }

    getFollowers(): UserRegister[] {
        return this.followers;
    }

    // getFollower(id: number): any {
    //     return this.followers.map(item => {
    //         item.friends.find(follower => follower == id);
    //     })
    // }

    // addFollower(follower: Friends): Observable<Friends> {
    //     return this.dataSource.addFollower(follower);
    // }    
}