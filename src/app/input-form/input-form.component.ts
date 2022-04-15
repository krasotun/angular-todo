import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../scripts/TodoItem';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  @Output()
  newItem = new EventEmitter<TodoItem>();

  addItem(title: string) {
    if (title != '') {
      this.newItem.emit(new TodoItem(title, false, true));
    }
  }
}
