import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  inject,
  OnInit
} from '@angular/core';
import { MyDatePipe } from '../pipes/my-date.pipe';


@Directive({
  selector: '[HeroDesign]'
})
export class HeroDesignDirective {

  private renderer = inject(Renderer2)
  private el = inject(ElementRef)

  constructor() {
    this.el.nativeElement.style.fontStyle="italic"
   }


}
