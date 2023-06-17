import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-U11-17-18-06',
  templateUrl: './U11-17-18-06.page.html',
  styleUrls: ['./U11-17-18-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatchesComponent, TableComponent, NgIf, AsyncPipe],
})
export class U11Of1706Page implements OnInit {
  private dataService = inject(DataService);

  protected campo117: any[] | undefined;
  protected campo217: any[] | undefined;
  protected campo118: any[] | undefined;
  protected campo218: any[] | undefined;
  protected grupo1: any[] = [];
  protected grupo2: any[] = [];
  protected grupo3: any[] = [];
  protected grupo4: any[] = [];
  protected grupo5: any[] = [];
  protected grupo6: any[] = [];

  protected ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  async ngOnInit() {
    await this.readData();
    await this.readData2();

    setInterval(async () => {
      await this.readData();
      await this.readData2();
    }, 10000);
  }

  private async readData() {
    try {
      const data = await this.dataService.getData('./assets/files/u11.xlsm');

      this.setData(data);
    } catch {
      console.log('error');
    }
  }

  private setData(data: any[]) {
    const resultados: any[] = data?.find((d) => d.name === 'Resultados')?.data;

    this.campo117 = resultados.splice(10, 3);
    this.campo217 = resultados.splice(23, 3);
    this.grupo1 = data?.find((d) => d.name === 'U11_A')?.data.slice(2, 5);
    this.grupo2 = data?.find((d) => d.name === 'U11_B')?.data.slice(2, 5);
    this.grupo3 = data?.find((d) => d.name === 'U11_C')?.data.slice(2, 5);
    this.grupo4 = data?.find((d) => d.name === 'U11_D')?.data.slice(2, 5);
    this.grupo5 = data?.find((d) => d.name === 'U11_E')?.data.slice(2, 5);
    this.grupo6 = data?.find((d) => d.name === 'U11_F')?.data.slice(2, 5);

    this.ready$.next(true);
  }

  private async readData2() {
    try {
      const data = await this.dataService.getData('./assets/files/u11_n.xlsm');

      this.setData2(data);
    } catch {
      console.log('error');
    }
  }

  private setData2(data: any[]) {
    const resultados: any[] = data?.find((d) => d.name === 'Resultados')?.data;

    this.campo118 = resultados.splice(31, 6);
    this.campo218 = resultados.splice(37, 6);

    this.ready$.next(true);
  }
}
