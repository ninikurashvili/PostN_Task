import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/users/users.component'),
    title: 'Users',
  },
  {
    path: 'posts',
    loadComponent: () => import('./features/posts/posts.component'),
    title: 'Posts',
  },
  {
    path: 'users/:id/posts',
    loadComponent: () => import('./features/user-posts/user-posts.component'),
    title: 'User posts',
  },
  {
    path: 'users/:id/todos',
    loadComponent: () => import('./features/user-todo/user-todo.component'),
    title: 'User todos',
  },
];