import { Component, OnInit } from '@angular/core';
import { Post } from "../../model/post.model";
import { PostService } from '../../service/post.service';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private postService: PostService) { }

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  get posts(): Post[] {
    return this.postService.getPosts().reverse();
  }

  getPost(id: number): Post {
    return this.postService.getPost(id);
  }

}
