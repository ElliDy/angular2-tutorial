import {Component, ViewChild, ElementRef} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step5',
  styleUrls: ['./step5.css'],
  templateUrl: './step5.html',
  providers: [TodoService],
})
export class Step5 {
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

	deleteTodo(index){
		this.todoService.deleteTodo(index);
	}
}
