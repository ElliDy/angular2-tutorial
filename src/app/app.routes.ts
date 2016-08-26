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

