import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-U11-18-06',
  templateUrl: './U11-18-06.page.html',
  styleUrls: ['./U11-18-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatchesComponent, TableComponent, NgIf, AsyncPipe],
})
export class U11Of1806Page implements OnInit {
  private dataService = inject(DataService);

  protected campo1: any[] | undefined;
  protected campo2: any[] | undefined;
  protected campo3: any[] | undefined;
  protected campo4: any[] | undefined;
  protected grupo1: any[] = [];
  protected grupo2: any[] = [];
  protected grupo3: any[] = [];
  protected grupo4: any[] = [];
  protected grupo5: any[] = [];
  protected grupo6: any[] = [];
  protected grupo7: any[] = [];
  protected grupo8: any[] = [];
  protected final: any[] = [];

  protected ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  async ngOnInit() {
    await this.readData();

    setInterval(async () => {
      this.readData();
    }, 10000);
  }

  private async readData() {
    try {
      const data = await this.dataService.getData('./assets/files/u11_n.xlsm');

      this.setData(data);
    } catch {
      console.log('error');
    }
  }

  private setData(data: any[]) {
    const resultados: any[] = data?.find((d) => d.name === 'Resultados')?.data;

    this.campo1 = [...resultados]
      .splice(10, 3)
      .concat([...resultados].splice(31, 6));
    this.campo2 = [...resultados]
      .splice(26, 3)
      .concat([...resultados].splice(43, 6));

    this.campo3 = [...resultados].splice(37, 3);
    this.campo4 = [...resultados].splice(49, 3);

    this.grupo1 = data?.find((d) => d.name === 'U11_A')?.data.slice(2, 5);
    this.grupo2 = data?.find((d) => d.name === 'U11_B')?.data.slice(2, 5);
    this.grupo3 = data?.find((d) => d.name === 'U11_C')?.data.slice(2, 5);
    this.grupo4 = data?.find((d) => d.name === 'U11_D')?.data.slice(2, 5);
    this.grupo5 = data?.find((d) => d.name === 'U11_E')?.data.slice(2, 5);
    this.grupo6 = data?.find((d) => d.name === 'U11_F')?.data.slice(2, 5);
    this.grupo7 = data?.find((d) => d.name === 'U11_M')?.data.slice(2, 5);
    this.grupo8 = data?.find((d) => d.name === 'U11_N')?.data.slice(2, 5);

    this.final = [...resultados].splice(40, 1);

    this.ready$.next(true);
  }
}
