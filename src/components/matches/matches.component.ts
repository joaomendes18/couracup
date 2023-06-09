import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from 'src/interfaces/match.interface';
import { ITable } from 'src/interfaces/table.interface';
import { LocalizationPipe } from 'src/pipes/localization.pipe';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
})
export class MatchesComponent implements OnInit {
  protected matches: IMatch[] = [];
  protected Object = Object;

  @Input() data: any[] | undefined;

  ngOnInit(): void {
    this.data?.forEach((element, index) => {
      if (index > 1) {
        if (element.hasOwnProperty('C')) {
          this.matches.push({
            time: element['C'],
            home: element['D'],
            homeGoals: element['E'],
            away: element['H'],
            awayGoals: element['G'],
          });
        }
      }
    });

    console.log(this.matches);
  }
}
