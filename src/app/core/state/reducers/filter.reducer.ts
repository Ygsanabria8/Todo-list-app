import { createReducer, on } from '@ngrx/store';
import * as filterActions from '../actions/filter.actions';

export const initialState: string = 'ALL';

export const filterReducer = createReducer(
    initialState,
    on(filterActions.setFilter, (state, { filter }) => filter),
);