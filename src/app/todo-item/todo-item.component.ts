import { Component, Input } from '@angular/core';
import { TodoItem } from '../scripts/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input()
  item!: TodoItem;
  @Input()
  idx!: number;
  setDone() {
    this.item.isDone = true;
  }
}
