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
  selector: '[appHeroDesign]'
})
export class HeroDesignDirective {

  private renderer = inject(Renderer2)
  private el = inject(ElementRef)

  constructor() { }

  OnInit(){
    this.renderer.setStyle(this.el.nativeElement, "font-style", "italic")
  }

}
