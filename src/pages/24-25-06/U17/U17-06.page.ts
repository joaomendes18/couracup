import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-U17-06',
  templateUrl: './U17-06.page.html',
  styleUrls: ['./U17-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatchesComponent, TableComponent, NgIf, AsyncPipe],
})
export class U1706Page implements OnInit {
  private dataService = inject(DataService);

  protected sabado: any[] | undefined;
  protected domingo: any[] | undefined;
  protected grupo: any[] = [];

  protected ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  async ngOnInit() {
    await this.readData();

    setInterval(async () => {
      this.readData();
    }, 30000);
  }

  private async readData() {
    try {
      const data = await this.dataService.getData(
        './assets/files/U15_U17.xlsm'
      );

      this.setData(data);
    } catch {
      console.log('error');
    }
  }

  private setData(data: any[]) {
    const resultados: any[] = data?.find((d) => d.name === 'U17')?.data;

    this.sabado = [...resultados].splice(7, 9);
    this.domingo = [...resultados].splice(16, 8);

    this.grupo = [...resultados].splice(1, 6);

    this.ready$.next(true);
  }
}
