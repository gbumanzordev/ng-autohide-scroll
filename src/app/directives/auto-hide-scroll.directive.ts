import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoHideScroll]',
})
export class AutoHideScrollDirective {
  @HostBinding('class.scroll-out') visible: boolean;

  constructor() {
    this.visible = true;
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    this.visible = false;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
    this.visible = true;
  }
}
