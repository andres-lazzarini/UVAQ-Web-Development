import { NotFoundComponent } from './_global/_components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import { Routes, RouterModule} from'@angular/router';

import { AppComponent } from './app.component';
// import { PruebaComponent } from './prueba/prueba.component';
// import { HeaderComponent } from './_global/_components/header/header.component';
// import { FooterComponent } from './_global/_components/footer/footer.component';
// import { SidebarComponent } from './_global/_components/sidebar/sidebar.component';
// import { ContentComponent } from './_global/_components/content/content.component';
// import { HighlightDirective} from './_global/_directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_global/global.module').then((m) => m.GlobalModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
    // PruebaComponent,
    // HeaderComponent,
    // SidebarComponent,
    // ContentComponent,
    // FooterComponent,
    // HighlightDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
