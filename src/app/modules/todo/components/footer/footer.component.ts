import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import * as filterActions from '../../../../core/state/actions/filter.actions';
import * as todoActions from '../../../../core/state/actions/todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentFilter = 'ALL';
  pendings = 0;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: string): void {
    this.store.dispatch(filterActions.setFilter({ filter }))
  }

  clearCompleted(): void {
    this.store.dispatch(todoActions.clearCompletedTodo());
  }

}
