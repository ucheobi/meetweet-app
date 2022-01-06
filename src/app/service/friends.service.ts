import { Injectable } from '@angular/core';
import { Friends } from "../model/friends.model";
import { StaticDataSource } from "../model/static.datasource";
import { Observable } from "rxjs";
import { User } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private friends: any[] = [];


    constructor(private dataSource: StaticDataSource, private userService: UserService) {
        dataSource.getUsers().subscribe(data => {
            data.map((user, i) => {
                this.friends.push(user.friends);          
            })
        })
    }

    getUserFriends(userId: number): Friends[] {
        //return this.friends[userId];
        return this.userService.getUserFriends(userId);
    }
    

    getFriend(id: number): any {
        // return this.friends.map(item => {
        //     item.friends.find(friend => friend == id);
        // })
    }

    addFollower(friend: Friends): Observable<Friends> {
        return this.dataSource.addFriend(friend);
    }    
}
