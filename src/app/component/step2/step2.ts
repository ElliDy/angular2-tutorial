import {Component, ViewChild, ElementRef} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step2',
  styleUrls: ['./step2.css'],
  templateUrl: './step2.html',
  providers: [TodoService]
})
export class Step2 {
	todos:String[];

	@ViewChild('addInput') addInput: ElementRef;

	constructor(private todoService:TodoService){
		this.todos = this.todoService.getTodos();
	}

	addTodo(value){
		this.todoService.addTodo(value);
	}

	keypressed(event, value){
		if(event.keyCode===13){
			this.addTodo(value);
			this.addInput.nativeElement.value = '';
		}
	}
}
