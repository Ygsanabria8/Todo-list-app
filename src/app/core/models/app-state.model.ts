import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "../state/reducers/filter.reducer";
import { todoReducer } from "../state/reducers/todo.reducer";
import { Todo } from "./todo.model";

export interface AppState {
    todos: Todo[],
    filter: string,
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer,
}