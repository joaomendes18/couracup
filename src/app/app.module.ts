import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from 'src/components/slide/slide.component';

const routes: Routes = [
  {
    path: '1006',
    loadComponent: () =>
      import('../pages/10-06/10-06.page').then((mod) => mod.TenOfJunePage),
  },
  {
    path: '1106',
    loadComponent: () =>
      import('../pages/11-06/11-06.page').then((mod) => mod.ElevenOfJunePage),
  },
  {
    path: '1706',
    loadComponent: () =>
      import('../pages/17-06/17-06.page').then(
        (mod) => mod.SeventeenOfJunePage
      ),
  },
  {
    path: '171806',
    loadComponent: () =>
      import('../pages/17-18-06/17-18-06.page').then(
        (mod) => mod.SeventeenEighteenOfJunePage
      ),
  },
  {
    path: '1806',
    loadComponent: () =>
      import('../pages/18-06/18-06.page').then((mod) => mod.EighteenOfJunePage),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    SlideComponent,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
