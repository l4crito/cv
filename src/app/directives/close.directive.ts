import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClose]'
})
export class CloseDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.position = 'fixed';
    el.nativeElement.style.top = '2rem';
    el.nativeElement.style.right = '2rem';
    el.nativeElement.style.color = 'tomato';
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.cursor = 'pointer';
    el.nativeElement.style['justify-content'] = 'center';
    el.nativeElement.style['align-items'] = 'center';
    el.nativeElement.style['font-size'] = '3rem';
    el.nativeElement.style['border-radius'] = '50%';
    el.nativeElement.style['user-select'] = 'none';
    el.nativeElement.style.height = '60px';
    el.nativeElement.style.width = '60px';
    el.nativeElement.style.transition = '300ms';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }

}
