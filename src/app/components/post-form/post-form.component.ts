import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { NgForm } from '@angular/forms';
import { PostRepository } from '../../repository/post.repository';
import { UserRegister, } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private userService: UserService, private postService: PostService) {}

  currentUser = {}

  ngOnInit(): void {
    this.currentUser = this.getUser(1)
  }
  
  
  submitted: boolean = false;
  postModel = new Post(8 ,8, 'username', 'MeeTweet@yahoo.com', "What's on your mind - MeeTweet!", new Date().getMinutes(),"../../../assets/Anota_passport_pics.jpg",undefined, undefined, undefined)

  postSubmit(form: NgForm) {
    this.submitted = true;

    if(form.valid) {
      
    }
  }

  getUser(id: number): UserRegister {
    return this.userService.getUser(id);
  }

  onSubmit() {  
    this.postService.addPost(this.postModel)
      .subscribe(
        data => console.log("Success!", data),
        error => console.log("Error!", error)    
      )
  }
}
