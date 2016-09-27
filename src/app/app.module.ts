import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Step1} from './component/step1/step1';
import {Step2} from './component/step2/step2';
import {Step3} from './component/step3/step3';
import {Step4} from './component/step4/step4';
import {Step5} from './component/step5/step5';
import {TodoItem} from './component/step5/todoItem';
import {ComponentTutorial} from './component/componentTutorial';
import {Home} from './home/home';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, Step1, Step2, Step3, Step4, TodoItem, Step5, Home, ComponentTutorial],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
