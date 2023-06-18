import { Component, ViewEncapsulation } from '@angular/core';
import { U13Of1806Page } from './U13/U13-18-06.page';
import { U11Of1806Page } from './U11/U11-18-06.page';

@Component({
  selector: 'page-18-06',
  templateUrl: './18-06.page.html',
  styleUrls: ['./18-06.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [U13Of1806Page, U11Of1806Page],
})
export class EighteenOfJunePage {}
