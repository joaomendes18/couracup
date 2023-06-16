import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { ITable } from 'src/interfaces/table.interface';
import { LocalizationPipe } from 'src/pipes/localization.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgFor, NgIf, LocalizationPipe],
})
export class TableComponent implements OnChanges {
  protected table: ITable[] = [];
  protected Object = Object;

  @Input() data: any[] | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.setData();
    }
  }

  private setData() {
    this.table = [];
    let position = 0;
    this.data?.forEach((element) => {
      this.table.push({
        position: ++position,
        team: element['C'],
        points: element['D'],
        played: element['E'],
        wins: element['F'],
        draws: element['G'],
        losses: element['H'],
        goalsFor: element['I'],
        goalsAgainst: element['J'],
        goalsDifference: element['K'],
      });
    });
  }
}
