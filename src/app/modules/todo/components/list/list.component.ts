import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoItems: Todo[] = [];
  currentFilter!: string;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.subscribeStore();
  }

  subscribeStore(): void{
    this.store.subscribe(state => {
      this.todoItems = state.todos;
      this.currentFilter = state.filter;
    });
  }

}
