import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { IMatch } from 'src/interfaces/match.interface';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
})
export class MatchesComponent implements OnChanges {
  protected matches: IMatch[] = [];
  protected Object = Object;

  @Input() data: any[] | undefined;
  @Input() title: string = 'Jogos';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.setData();
    }
  }

  private setData() {
    this.matches = [];
    this.data?.forEach((element) => {
      if (element.hasOwnProperty('A')) {
        this.matches.push({
          time: element['A'],
          home: element['C'],
          homeGoals: element['D'],
          away: element['G'],
          awayGoals: element['F'],
        });
      }
    });
  }
}
