import {Routes} from '@angular/router';
import {Step1} from './step1/step1';
import {Step2} from './step2/step2';
import {Step3} from './step3/step3';
import {Step4} from './step4/step4';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'step1', component: Step1},
  {path: 'step2', component: Step2},
  {path: 'step3', component: Step3},
  {path: 'step4', component: Step4},
  {path: 'github', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':org', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':repo', component: RepoDetail}
        ]
      }]
  }
];

