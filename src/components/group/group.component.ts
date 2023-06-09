import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { MatchesComponent } from 'src/components/matches/matches.component';
import { TableComponent } from 'src/components/table/table.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TableComponent, MatchesComponent, NgIf],
})
export class GroupComponent implements OnInit {
  private dataService = inject(DataService);

  protected data: any[] | undefined;

  @Input() sheet: string = '';

  ngOnInit(): void {
    this.data = this.dataService?.couracup?.find(
      (d) => d.name === this.sheet
    )?.data;

    if (!this.data) {
      console.log('Erro!!!');
      return;
    }

    // console.log(this.data);
  }
}
