import { Component, inject, OnInit } from '@angular/core';
import { Todo, User } from '../../shared/interfaces';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-todo',
  imports: [],
  templateUrl: './user-todo.component.html',
  standalone:true,
  styleUrl: './user-todo.component.scss'
})
export default class UserTodoComponent implements OnInit{
  private readonly userService=inject(UserService);
  private route=inject(ActivatedRoute);

  todos:Todo[]=[];
  userId!:string;
  user: User | null = null;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id=params.get('id');
      if(id){
        this.userId= id;
        this.userService.getUserById(this.userId).subscribe(user => {
          this.user = user;
      });
      this.userService.getTodosByUser(this.userId).subscribe((todos)=>{
      this.todos=todos;
    });

  }
});
}
}