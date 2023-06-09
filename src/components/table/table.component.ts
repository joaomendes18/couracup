import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
export class TableComponent implements OnInit {
  protected teams: string[] = [];
  protected table: ITable[] = [];
  protected Object = Object;

  @Input() data: any[] | undefined;

  ngOnInit(): void {
    let position = 0;
    this.data?.forEach((element, index) => {
      if (index > 1 && index < 9) {
        // if (element.hasOwnProperty('A')) {
        //   this.teams.push(element['A']);
        // }

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
      }
    });

    // console.log(this.teams);
    // console.log(this.table);
  }
}
