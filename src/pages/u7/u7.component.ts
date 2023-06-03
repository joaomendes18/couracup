import { Component, ViewEncapsulation } from '@angular/core';
import { GroupComponent } from 'src/components/group/group.component';

@Component({
  selector: 'page-u7',
  templateUrl: './u7.component.html',
  styleUrls: ['./u7.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [GroupComponent],
})
export class U7Component {}
