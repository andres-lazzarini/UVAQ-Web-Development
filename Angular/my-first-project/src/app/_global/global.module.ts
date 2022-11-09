import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './_components/main/main.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import {NotFoundComponent} from './_components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'tiers',
        loadChildren: () => import('../tiers/tiers.module').then((m) => m.TiersModule),
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then((m) => m.ProductsModule),
      },
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class GlobalModule { }
