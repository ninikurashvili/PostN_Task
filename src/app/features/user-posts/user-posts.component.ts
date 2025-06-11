import { User } from './../../shared/interfaces/user';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/interfaces';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  imports: [],
  standalone:true,
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export default class UserPostsComponent implements OnInit {
    private readonly userService = inject(UserService);
    private route=inject(ActivatedRoute);
    user: User | null = null;

    posts: Post[]=[];
    userId!:string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userId = id;
        this.userService.getUserById(this.userId).subscribe(user => {
          this.user = user;
        });

        this.userService.getPostsByUser(this.userId).subscribe(posts => {
          this.posts = posts;
        });
      }
    });
  }
}



