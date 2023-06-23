import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  title: string = '24 e 25 de Junho';

  async ngOnInit() {
    this.router.navigateByUrl(`242506`);
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
