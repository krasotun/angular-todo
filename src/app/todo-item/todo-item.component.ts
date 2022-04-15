import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoItem } from '../model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input()
  item!: TodoItem;
  @Input()
  idx!: number;

  constructor() {}
  ngOnInit(): void {
    console.log('Created', this.item);
  }
  ngOnDestroy(): void {
    console.log('Destroyed', this.item);
  }
  setDone() {
    this.item.done = true;
  }
}
