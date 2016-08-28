#Angular-Component

Es wird schrittweise erläutert, wie eine Component in Angular 2 funktioniert. Die Schritte sind in der Anwendung abgebildet. Den Code dazu findet man unter src/app/stepX. 

Um einen sinnvollen Kontext zu haben, wollen wir eine Todo-App erstellen.

## Schritt 1: Eine Komponente, die alle Todos anzeigt

Im ersten Schritt soll eine Angular Component erzeugt werden, die Zugriff auf alle bisherigen Todos hat und diese anzeigt.

Hierzu erstellen wir zu erst eine Component, in dem wir eine Klasse erzeugen und dort die Annotation @Component hinzufügen. Hierbei werden der Annotation noch einige wichtige Informationen übergeben. 

* Der "selector" gibt an, wie die Komponente als Tag im HTML benutzt wird.
* In "styleUrls" können beliebig viele CSS-Dateien referenziert werden, die für die Komponente das Styling festlegen.
* "templateUrl" referenziert die HTML-Datei, in der das Template für die Komponente definiert wird.

```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'step1',
  styleUrls: ['./step1.css'],
  templateUrl: './step1.html'
})
export class Step1 {
}
```

Dieses Component kann jetzt in unserer App auf zwei möglichen Wegen genutzt werden. Als Subkomponente in einer anderen Komponente oder als möglichen View für eine Route. Beides wird später erläutert. 

Als nächstes wollen wir auf die Todos, die angezeigt werden sollen, über einen Service zugreifen. Normalerweise würden die Todos auf einem Server persistent gehalten werden. Auch wenn wir dies nur imitieren, wollen wir doch die Schnittstelle in einen Service auslagern.

Hierzu muss eine Klasse erzeugt werden, die mit der Annotation Injectable versehen wird. Diese brauchen wir, da wir später den Service in die Component benutzen wollen und er dazu injektiert werden muss. Die Klasse enthält ein Array todos, welches im Konstruktor mit drei Todos initialisiert wird. In einer Methode getTodos wird dieses Array dann zurückgegeben. Normalerweise würden wir in getTodos einen Request zum Server ausführen, aber da es in diesem Tutorial nur um Komponenten gehen soll, mocken wir die Daten hier nur.

```typescript
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
```

Innerhalb der Komponente muss der Service nun als provider referenziert werden, damit wir ihn dann benutzen können. Wenn wir im Konstruktor nun den Service als private Variable hinzufügen wird er automatisch erzeugt. Es ist das gleiche, als wenn wir eine Variable erzeugen und dann im Konstruktor dieser Variable einen todoService, der bei der Initialisierung der Komponente injektiert wird, zuweisen. Folgender Codeblock zeigt beide Alternativen.

```typescript
@Component({
  selector: 'step1',
  styleUrls: ['./step1.css'],
  templateUrl: './step1.html',
  providers: [TodoService]
})
export class Step1 {
	todos:String[];
	//Alternative: todoService:TodoService

	constructor(private todoService:TodoService){ //Alternative: constructor(todoService:TodoService){ 
		//Alternative: this.todoService = todoService;
		this.todos = this.todoService.getTodos();
	}
}
```

Nun müssen wir nur noch über den Service die Todos holen und sie dem Array an Todos zuweisen. Jetzt können wir diese Todos im Template benutzen. Hierzu verwenden wir ngFor, welches über die todos iteriert und für jedes ein li-Tag erzeugt.

```html
<h3>Todos</h3>
<ul>
	<li *ngFor="let todo of todos">{{todo}}</li>
</ul>
```

## Schritt 2: Erzeugen eines Todo-Eintrags

Im Folgenden wollen wir nun ein Todo-Eintrag erstellen. Hierzu fügen wir im Template ein Input-Feld und einen Button hinzu. Das Input-Feld wird als Referenzvariable "#addInput" hinzugefügt. Diese brauchen wir, weil wir beim Klicken des Buttons und auch wenn der Nutzer Enter drückt, den Wert des Input-Feldes übergeben müssen. Die beiden Eventhandler werden mit geschweiften Klammern hinzugefügt. Für das keypress-Event benötigen wir noch als Übergabeparameter das Event, um dann in der Methode herauszufinden, ob Enter gedrückt wurde.  

```html
<h3>Todos</h3>
<input type="text" #addInput  (keypress)="keypressed($event, addInput.value)"/>
<button (click)="addTodo(addInput.value)">Hinzufügen</button>
<ul>
	<li *ngFor="let todo of todos">{{todo}}</li>
</ul>
```

In der Komponente werden zwei Methoden hinzugefügt: "keypressed" und "addTodo". Erstere ruft "addTodo" auf, wenn der Event-Code dem von Enter entspricht. Weiterhin wird hier noch das input-Feld gelehrt. Hierzu wird mit der Annotation ViewChild eine Elemenet-Referenz erzeugt, die dann in der Methode genutzt werden kann.

```typescript
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
```

"addTodo" selber ruft die Methode addTodo vom Todoservice auf. In diesem wird dem Array der Wert aus dem Input-Feld hinzugefügt.

```typescript
addTodo(value){
	this.todos.push(value);
}
```

## Schritt 3

## Schritt 4