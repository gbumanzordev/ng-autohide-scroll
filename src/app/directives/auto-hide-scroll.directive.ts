import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoHideScroll]',
})
export class AutoHideScrollDirective {
  @HostBinding('class.hidden-scrollbar') isScrollbarHidden: boolean;

  constructor() {
    this.isScrollbarHidden = true;
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    this.isScrollbarHidden = false;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
    this.isScrollbarHidden = true;
  }
}
