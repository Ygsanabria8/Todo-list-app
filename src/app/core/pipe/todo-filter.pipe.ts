import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {
    switch ( filter ) {
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'PENDING':
        return todos.filter(todo => !todo.completed);
      default: 
        return todos;
    }
  }

}
