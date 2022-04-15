import { Component } from '@angular/core';
import { Data } from './data/data';
import { TodoItem } from './scripts/TodoItem';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  data = new Data();
  getUserName() {
    return this.data.userName;
  }
  getTodoItems() {
    return this.data.items.filter((item) => !item.isDone);
  }
  setDone(item: TodoItem) {
    item.isDone = true;
  }
  addItem(item: TodoItem) {
    this.data.items.push(item);
  }
}
