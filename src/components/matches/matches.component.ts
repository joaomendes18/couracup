import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IMatch } from 'src/interfaces/match.interface';

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
      if (index > 10) {
        if (element.hasOwnProperty('A')) {
          this.matches.push({
            time: element['A'],
            home: element['C'],
            homeGoals: element['D'],
            away: element['G'],
            awayGoals: element['F'],
          });
        }
      }
    });

    // console.log(this.matches);
  }
}
