import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '242506',
    loadComponent: () =>
      import('../pages/24-25-06/24-25-06.page').then(
        (mod) => mod.TwentyFourTwentyFiveOfJunePage
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
