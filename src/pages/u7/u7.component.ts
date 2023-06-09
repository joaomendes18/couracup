import { NgIf } from '@angular/common';
import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'page-u7',
  templateUrl: './u7.component.html',
  styleUrls: ['./u7.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TableComponent, MatchesComponent, NgIf],
})
export class U7Component {
  private dataService = inject(DataService);
  private router = inject(Router);

  protected data: any[] | undefined;

  private sheet: string = 'grupo A';

  constructor() {
    this.data = this.dataService?.couracup?.find(
      (d) => d.name === this.sheet
    )?.data;

    if (!this.data) {
      this.router.navigateByUrl('/');
      return;
    }

    console.log(this.data);
  }
}
