import { Component, ViewEncapsulation } from '@angular/core';
import { GroupComponent } from 'src/components/group/group.component';

@Component({
  selector: 'page-10-06',
  templateUrl: './10-06.page.html',
  styleUrls: ['./10-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [GroupComponent],
})
export class TenOfJunePage {}
