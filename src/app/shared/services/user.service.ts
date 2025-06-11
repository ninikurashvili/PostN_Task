import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  Post, Todo, User,  } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http=inject(HttpClient);
    readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  getAllPosts(){
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
  }
  getPostsByUser(id: string){
    return this.http.get<Post[]>(`${this.baseUrl}/users/${id}/posts`)
  }
  getAllUsers(){
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }
  getUserById(id: string){
        return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }
  getTodosByUser(id: string){
    return this.http.get<Todo[]>(`${this.baseUrl}/users/${id}/todos`)
  }
}
