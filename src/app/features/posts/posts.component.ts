import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Post, User } from '../../shared/interfaces';
import { forkJoin } from 'rxjs';
import { PostDetailsComponent } from "../../shared/ui/post-details/post-details.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [PostDetailsComponent,NgIf],
  standalone:true,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export default class PostsComponent implements OnInit {
    private readonly userService = inject(UserService);
    posts: Post[]=[];
    users: User[]=[];
    selectedPost: Post | null = null;


ngOnInit(): void {
  forkJoin({
    posts: this.userService.getAllPosts(),
    users: this.userService.getAllUsers()
  }).subscribe(({ posts, users }) => {
    const userMap = new Map(users.map(user => [user.id, user.name]));
    this.posts = posts.map(post => ({
      ...post,
      userName: userMap.get(post.userId) || 'Unknown'
    }));

    console.log(this.posts);
  });
}
showDetails(post: Post) {
  this.selectedPost = post;
}

closeModal() {
  this.selectedPost = null;
}
}