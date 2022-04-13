export class Model {
  user: string;
  items: TodoItem[];
  constructor() {
    this.user = 'Marat';
    this.items = [
      new TodoItem('Angular - пет-проект из книги', false),
      new TodoItem('Angular - пет-проект Tour of Heroes', false),
      new TodoItem('Я.Практикум - 8 спринт', false),
      new TodoItem('Я.Практикум - задачи с CodeWars', false),
    ];
  }
}
export class TodoItem {
  action: string;
  done: boolean;
  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}
