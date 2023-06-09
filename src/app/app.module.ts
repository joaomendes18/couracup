import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from 'src/services/data.service';

const routes: Routes = [
  {
    path: '1006',
    loadComponent: () =>
      import('../pages/10-06/10-06.page').then((mod) => mod.TenOfJunePage),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

function initializeAppFactory(dataService: DataService): () => void {
  return async () => await dataService.getData();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [DataService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
