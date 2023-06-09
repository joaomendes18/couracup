import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { ITable } from 'src/interfaces/table.interface';
import { LocalizationPipe } from 'src/pipes/localization.pipe';
import { DataService } from 'src/services/data.service';

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
    this.data?.forEach((element, index) => {
      if (index > 1) {
        if (element.hasOwnProperty('A')) {
          this.teams.push(element['A']);
        }

        if (element.hasOwnProperty('J')) {
          this.table.push({
            position: element['J'],
            team: element['K'],
            points: element['L'],
            played: element['M'],
            wins: element['N'],
            draws: element['O'],
            losses: element['P'],
            goalsFor: element['Q'],
            goalsAgainst: element['R'],
            goalsDifference: element['S'],
          });
        }
      }
    });

    console.log(this.teams);
    console.log(this.table);
  }
}
