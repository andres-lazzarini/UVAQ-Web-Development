import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './_components/main/main.component';
import { RemoveVocalsPipe } from './_pipes/remove-vocals.pipe';
import { FormComponent } from './_components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':userID',
    component: FormComponent,
  },
];

@NgModule({
  declarations: [MainComponent, RemoveVocalsPipe, FormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class UsersModule {}
