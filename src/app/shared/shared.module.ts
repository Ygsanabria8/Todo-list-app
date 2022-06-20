import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterAppComponent } from './components/footer/footer.component';
import { TodoFilterPipe } from '../core/pipe/todo-filter.pipe';



@NgModule({
  declarations: [
    FooterAppComponent,
    TodoFilterPipe,
  ],
  exports: [
    FooterAppComponent,
    TodoFilterPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
