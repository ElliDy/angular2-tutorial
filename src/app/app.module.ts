import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Step1} from './step1/step1';
import {Step2} from './step2/step2';
import {Step3} from './step3/step3';
import {Step4} from './step4/step4';
import {Home} from './home/home';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, Step1, Step2, Step3, Step4, Home],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
