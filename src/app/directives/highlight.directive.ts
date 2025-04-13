import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private el = inject(ElementRef);

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontWeight = 'normal'
  }
}
