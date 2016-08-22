import {Component} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step1',
  styleUrls: ['./step1.css'],
  templateUrl: './step1.html',
  providers: [TodoService]
})
export class Step1 {
	todos:String[];

	constructor(private todoService:TodoService){
		this.todos = this.todoService.getTodos();
	}
}
