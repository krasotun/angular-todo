import { TodoItem } from '../scripts/TodoItem';

// Объект с данными
export class Data {
  userName: string;
  items: TodoItem[];
  isDone: boolean;
  isWork: boolean;
  constructor() {
    this.userName = 'Marat';
    this.isDone = false;
    this.isWork = true;
    this.items = [
      new TodoItem('Angular - пет-проект из книги', this.isDone, this.isWork),
      new TodoItem('Angular - Tour of Heroes', this.isDone, this.isWork),
      new TodoItem('Я.Практикум - 8 спринт', this.isDone, this.isWork),
      new TodoItem('Я.Практикум - задачи с CodeWars', this.isDone, this.isWork),
    ];
  }
}
