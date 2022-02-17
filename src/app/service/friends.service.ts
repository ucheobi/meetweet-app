import { Injectable } from '@angular/core';
import { Friends } from "../model/friends.model";
import { StaticDataSource } from "../model/static.datasource";
import { Observable } from "rxjs";
import { UserRegister } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

    //public friends: Friends[] = [];

    constructor(private dataSource: StaticDataSource, private userService: UserService) {    }
    

    getUserFriends(userId: number): Friends[] {
        return this.userService.getUser(userId).friends;    
    }

    getFriend(id: number): any {
        let userFriends = this.getUserFriends(2);
        return userFriends.find(friend => friend.id == id);
    }

    addFollower(friend: Friends): Observable<Friends> {
        return this.dataSource.addFriend(friend);
    }    
}
