import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-U13-18-06',
  templateUrl: './U13-18-06.page.html',
  styleUrls: ['./U13-18-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatchesComponent, TableComponent, NgIf, AsyncPipe],
})
export class U13Of1806Page implements OnInit {
  private dataService = inject(DataService);

  protected campo1: any[] | undefined;
  protected campo2: any[] | undefined;
  protected grupo1: any[] = [];
  protected grupo2: any[] = [];
  protected grupo3: any[] = [];
  protected grupo4: any[] = [];
  protected oitavos1: any[] = [];
  protected oitavos2: any[] = [];
  protected quartos1: any[] = [];
  protected quartos2: any[] = [];
  protected meias1: any[] = [];
  protected meias2: any[] = [];
  protected final: any[] = [];
  protected terceiros: any[] = [];

  protected ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  async ngOnInit() {
    await this.readData();

    setInterval(async () => {
      await this.readData();
    }, 10000);
  }

  private async readData() {
    try {
      const data = await this.dataService.getData('./assets/files/u13.xlsm');

      this.setData(data);
    } catch {
      console.log('error');
    }
  }

  private setData(data: any[]) {
    const resultados: any[] = data?.find((d) => d.name === 'Resultados')?.data;

    this.campo1 = resultados.splice(0, 15);
    this.campo2 = resultados.splice(1, 15);
    this.grupo1 = data?.find((d) => d.name === 'U13_A')?.data.slice(2, 6);
    this.grupo2 = data?.find((d) => d.name === 'U13_B')?.data.slice(2, 6);
    this.grupo3 = data?.find((d) => d.name === 'U13_C')?.data.slice(2, 6);
    this.grupo4 = data?.find((d) => d.name === 'U13_D')?.data.slice(2, 6);

    const final: any[] = data?.find((d) => d.name === 'Fase Final')?.data;

    this.oitavos1 = [...final].splice(0, 4);
    this.oitavos2 = [...final].splice(5, 4);
    this.quartos1 = [...final].splice(10, 2);
    this.quartos2 = [...final].splice(13, 2);
    this.meias1 = [...final].splice(16, 1);
    this.meias2 = [...final].splice(17, 1);
    this.terceiros = [...final].splice(19, 1);
    this.final = [...final].splice(20, 1);

    this.ready$.next(true);
  }
}
