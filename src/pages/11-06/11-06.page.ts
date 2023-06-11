import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { GroupComponent } from 'src/components/group/group.component';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'page-11-06',
  templateUrl: './11-06.page.html',
  styleUrls: ['./11-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatchesComponent, TableComponent],
})
export class ElevenOfJunePage implements OnInit {
  private dataService = inject(DataService);

  protected campo1: any[] | undefined;
  protected campo2: any[] | undefined;
  protected grupo1: any[] | undefined;
  protected grupo2: any[] | undefined;
  protected grupo3: any[] | undefined;

  ngOnInit(): void {
    const resultados: any[] = this.dataService?.couracup?.find(
      (d) => d.name === 'Resultados'
    )?.data;

    if (!resultados) {
      console.log('Erro!!!');
      return;
    }
    console.log(resultados);

    this.campo1 = resultados.splice(0, 15);
    this.campo2 = resultados.splice(1, 15);

    this.grupo1 = this.dataService?.couracup?.find(
      (d) => d.name === 'U10_A'
    )?.data;

    this.grupo2 = this.dataService?.couracup?.find(
      (d) => d.name === 'U10_B'
    )?.data;

    this.grupo3 = this.dataService?.couracup?.find(
      (d) => d.name === 'U10_C'
    )?.data;

    // console.log(this.data);
  }
}
