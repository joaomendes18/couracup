import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
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

  async ngOnInit() {
    await this.dataService.getData();

    this.router.navigateByUrl(`u7`);
  }
}
