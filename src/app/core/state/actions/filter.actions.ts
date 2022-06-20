import { createAction, props } from "@ngrx/store";

export const setFilter = createAction(
    '[FILTER] set filter',
    props<{ filter: string }>()
);