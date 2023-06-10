import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  private dataService = inject(DataService);
  private router = inject(Router);
  title: string = '10 de Junho';
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoHeight: true,
    autoWidth: true,
  };
  slidesStore: any = [
    'assets/images/slide/arcobarca.jpg',
    'assets/images/slide/courafit.jpg',
    'assets/images/slide/cozinhasbold.png',
  ];

  async ngOnInit() {
    setInterval(async () => {
      const result = await this.dataService.getData();
      if (result) {
        this.refresh();
      }
    }, 60000);

    this.router.navigateByUrl(`1006`);
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  refresh() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigateByUrl(`1006`));
  }
}
