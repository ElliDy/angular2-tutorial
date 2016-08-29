#Angular Routing

In dem Projekt, was ihr im Ordner src findet, ist ein nested routing vorhanden. Für die Struktur des Routings muss eine Router-Config-Konstante angelegt werden. Hier wird die Zuordnung zwischen Pfad und Komponente festgelegt.

```
import {Routes} from '@angular/router';
import {Step1} from './component/step1/step1';
import {Step2} from './component/step2/step2';
import {Step3} from './component/step3/step3';
import {Step4} from './component/step4/step4';
import {ComponentTutorial} from './component/componentTutorial';
import {Home} from './home/home';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'component', component: ComponentTutorial,
    children: [
      {path: '', component: Step1},
      {path: 'step1', component: Step1},
      {path: 'step2', component: Step2},
      {path: 'step3', component: Step3},
      {path: 'step4', component: Step4},
      ]
  }
];

```

Diese Config wird dann in einem ngModule wie folgt über die imports-property geladen.

```
@NgModule({
  	imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
})
export class AppModule {

}
```

Dieses Modul muss dann noch zusätzlich initialisiert werden. Folgender Code ermöglicht dies.

```
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

Nun kann die Route als Link innerhalb eines Templates einer Komponente genutzt werden. Beispielhaft siehst du das hier in der Navigation innerhalb des Templates unserer App-Root-Komponente. Die Property routerLinkActive fügt eine Klasse zu dem Tag hinzu, sobald dieser selektiert wurde.

```
<nav>
  <a [routerLink]="['/home']" [routerLinkActive]="['app__link-selected']">
    Home
  </a>
  <a [routerLink]="['/component']" [routerLinkActive]="['app__link-selected']">
    Component-Tutorial
  </a> 
</nav>
```


