import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/app-state.model';
import { Todo } from 'src/app/core/models/todo.model';
import * as todoActions from '../../../../core/state/actions/todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputTodo') inputTodo!: ElementRef;
  todoForm!: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.todoForm.controls['checked'].valueChanges.subscribe( (checked: boolean) =>{
      this.store.dispatch(todoActions.toggleTodo({id: this.todo.id}));
    })
  }

  buildForm(): void {
    this.todoForm = this.fb.group({
      checked: this.fb.control(this.todo.completed),
      todoText: this.fb.control(this.todo.text, [Validators.required]),
    });
  }

  edit(): void {
    this.editing = true;
    setTimeout(() => {
      this.inputTodo.nativeElement.select();
    },1)
  }

  finishEditing(): void {
    this.editing = false;
    const todoText = this.todoForm.controls['todoText'].getRawValue();
    if ( this.todoForm.invalid) { return; }
    if (  todoText === this.todo.text) { return; }

    this.store.dispatch(todoActions.editTodo({id: this.todo.id, text: todoText}))
  }

  deleteTodo(): void {
    this.store.dispatch(todoActions.deleteTodo({id: this.todo.id}))
  }

}
