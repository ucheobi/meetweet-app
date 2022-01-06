import { Injectable } from "@angular/core";
import { Follower } from "../model/friends.model";
import { StaticDataSource } from "../model/static.datasource";
import { Observable } from "rxjs";

@Injectable()
export class FollowersRepository {
    private followers: Follower[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getFollowers().subscribe(data => {
            this.followers = data;
        })
    }

    getFollowers(): Follower[] {
        return this.followers;
    }

    getFollower(id: number): any {
        return this.followers.map(item => {
            item.followers.find(follower => follower == id);
        })
    }

    addFollower(follower: Follower): Observable<Follower> {
        return this.dataSource.addFollower(follower);
    }    
}