export class TodoItem {
  action: string;
  isDone: boolean;
  isWork: boolean;
  constructor(action: string, isDone: boolean, isWork: boolean) {
    this.action = action;
    this.isDone = isDone;
    this.isWork = isWork;
  }
}
