import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgFor, CarouselModule],
})
export class SlideComponent {
  protected customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoHeight: true,
    autoWidth: true,
    margin: 12,
    autoplayTimeout: 1000,
    dots: false,
    autoplayHoverPause: false,
    slideTransition: 'linear',
    autoplaySpeed: 600,
  };
}
