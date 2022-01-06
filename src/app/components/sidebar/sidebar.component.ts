import { Component, OnInit } from '@angular/core';
import { faHouseUser, faUser, faBell, faEnvelope, faUserFriends } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  faHouse = faHouseUser;
  faUser = faUser;
  faBell = faBell;
  faEnvelop = faEnvelope;
  faUserFriends = faUserFriends;

  ngOnInit(): void {

  }

}
