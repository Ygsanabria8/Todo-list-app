import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import * as actionsTodo from '../../core/state/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  isToggleAll = false;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  toggleAll(): void {
    this.isToggleAll = !this.isToggleAll;
    this.store.dispatch(actionsTodo.toggleAllTodo({ completed: this.isToggleAll }))
  }

}
