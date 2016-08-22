import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
	todos: String[];

	constructor(){
		this.todos = ["Aufwaschen","Tasche packen","Bad sauber machen"];
	}

	getTodos() {
		return this.todos;
	}
}