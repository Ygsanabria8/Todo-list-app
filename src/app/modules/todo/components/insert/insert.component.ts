import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import * as todoActions from '../../../../core/state/actions/todo.actions';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  todoForm!: FormControl;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(): void {
    this.todoForm = this.fb.control('', [Validators.required]);
  }

  addTodo(): void {
    if (this.todoForm.invalid) { return; }
    this.store.dispatch(todoActions.createTodo({text: this.todoForm.getRawValue()}))
    this.todoForm.reset();
  }
 
}
