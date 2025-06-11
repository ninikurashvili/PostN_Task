import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../interfaces';

@Component({
  selector: 'app-post-details',
  imports: [],
  standalone:true,
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  @Input() post!: Post;
  @Output() close=new EventEmitter<void>();
  onClose() {
    this.close.emit();
  }
}
