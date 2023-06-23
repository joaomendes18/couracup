import { Component, ViewEncapsulation } from '@angular/core';
import { U1706Page } from './U17/U17-06.page';
import { U1506Page } from './U15/U15-06.page';

@Component({
  selector: 'page-24-25-06',
  templateUrl: './24-25-06.page.html',
  styleUrls: ['./24-25-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [U1506Page, U1706Page],
})
export class TwentyFourTwentyFiveOfJunePage {}
