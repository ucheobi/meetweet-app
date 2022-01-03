import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { StaticDataSource } from '../model/static.datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor(private dataSource: StaticDataSource) {
      dataSource.getPosts().subscribe(data => {
          this.posts = data;
      })
  }

  getPosts(): Post[] {
      return this.posts;
  }

  getPost(id: number): any {
      return this.posts.find(post => post.id == id)
  }

  addPost(post: Post): Observable<Post> {
      return this.dataSource.addPost(post);
  }   
}
