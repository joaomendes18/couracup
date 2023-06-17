import { Component, ViewEncapsulation } from '@angular/core';
import { U13Of1706Page } from '../17-06/U13/U13-17-06.page';
import { U11Of1706Page } from './U11/U11-17-18-06.page';

@Component({
  selector: 'page-17-18-06',
  templateUrl: './17-18-06.page.html',
  styleUrls: ['./17-18-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [U13Of1706Page, U11Of1706Page],
})
export class SeventeenEighteenOfJunePage {}
