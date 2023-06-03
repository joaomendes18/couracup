import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { DataService } from 'src/services/data.service';
import { utils } from 'xlsx';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class GroupComponent implements OnInit {
  private dataService = inject(DataService);
  @Input() sheet: string = '';
  data: any;

  ngOnInit(): void {
    this.data = utils.sheet_to_json<any>(
      this.dataService.couracup?.Sheets?.[this.sheet]
    );

    console.log(this.data);
  }
}
