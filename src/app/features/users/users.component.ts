import { routes } from './../../app.routes';
import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces';
import { NgFor, NgIf } from '@angular/common';
import { tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent implements OnInit {
    private readonly userService = inject(UserService);
    users: User[]=[];
    newusers: User[]=[];
    searchedusers: User[]=[];
    userSearch:string="";


constructor(private router: Router){

}
ngOnInit(): void {
  this.userService.getAllUsers().subscribe((users) => {
    this.newusers = users;
    this.users=users;
    console.log(this.users);
   });
  };

viewPosts(userId:number){
  this.router.navigate(['/users',userId,'posts'])
}
viewTodos(userId:number){
  this.router.navigate(['/users',userId,'todos'])
}

searchUser(users: User[]): User[] {
  const search = this.userSearch.trim().toLowerCase();
  return users.filter((user) => {
    return (
      user.name?.toLowerCase().includes(search) ||
      user.email?.toLowerCase().includes(search)
    );
  });
}


applySearch(): void {
  this.users = this.searchUser(this.newusers);
}

}

