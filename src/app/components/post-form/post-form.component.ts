import { ApplicationRef, Component } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostForm } from '../../model/post-form.model';
import { NgForm } from '@angular/forms';
import { PostRepository } from '../../repository/post.repository';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  constructor() {}

  //newPost: Post = new Post();

  submitted: boolean = false;
  //tweet = new Post(1,1, 'ucheanota', 'ucheanota@yahoo.com', 'Heey, this is my first post', new Date().getMinutes(),undefined, undefined, undefined,undefined, undefined)

  postSubmit(form: NgForm) {
    this.submitted = true;

    if(form.valid) {
      
    }
  }

  addPost(post: Post){

  }

  onSubmit(): void {

  }
}
