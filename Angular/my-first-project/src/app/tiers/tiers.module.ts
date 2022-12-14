import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MainComponent } from './_components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TiersModule { }
