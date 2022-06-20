import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import * as todoActions from '../actions/todo.actions';

export const initialState: Todo[] = [new Todo('Learn NgRx'),new Todo('User NgRx'),new Todo('Sleep')];

export const todoReducer = createReducer(
    initialState,
    on(todoActions.createTodo, (state, { text }) => [...state, new Todo(text)]),
    on(todoActions.toggleTodo, (state, { id }) => {
        return state.map( todo => {
            return todo.id === id ? {
                ... todo,
                completed: !todo.completed
            } : todo;
        } );
    }),
    on(todoActions.editTodo, (state, { id, text }) => {
        return state.map( todo => {
            return todo.id === id ? {
                ... todo,
                text
            } : todo;
        } );
    }),
    on(todoActions.deleteTodo, (state, { id }) => {
        return state.filter( todo => todo.id !== id);
    }),
    on(todoActions.toggleAllTodo, (state, { completed }) => state.map( todo => {
        return {
            ...todo,
            completed
        }
    })),
    on(todoActions.clearCompletedTodo, (state) => state.filter( todo => !todo.completed))
);