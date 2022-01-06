import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostForm } from '../../model/post-form.model';
import { NgForm } from '@angular/forms';
import { PostRepository } from '../../repository/post.repository';
import { User } from 'src/app/model/user.model';
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
  postModel = new Post(8 ,8, 'username', 'MeeTweet@yahoo.com', "Heey, I'm loving MeeTweet", new Date().getMinutes(),"../../../assets/Anota_passport_pics.jpg",undefined, undefined, undefined)

  postSubmit(form: NgForm) {
    this.submitted = true;

    if(form.valid) {
      
    }
  }

  getUser(id: number): User {
    return this.userService.getUser(id);
  }

  onSubmit() {
    console.log(this.postModel);
    
    this.postService.addPost(this.postModel)
      .subscribe(
        data => console.log("Success!", data),
        error => console.log("Error!", error)    
      )
  }
}
