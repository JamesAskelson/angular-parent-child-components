import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  @Input() title: string = '';
  @Input() postIsLogged: boolean = false;

  childMessage: string = 'Hellow from Child Component';
  parentMessage: string = 'Message from the child using Click event.'

  @Output() MessageEvent = new EventEmitter();

  sendToParent(){
    this.MessageEvent.emit(this.parentMessage)
  }
}
