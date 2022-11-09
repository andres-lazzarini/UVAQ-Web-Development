import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @Input() highlight = '';
  @Input() inactiveColor = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.inactiveColor;
  }

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'red';
    // this.el.nativeElement.addEventListener('mouseenter', () => {
    //   this.el.nativeElement.style.backgroundColor = 'red';
    // });
    // this.el.nativeElement.addEventListener('mouseleave', () => {
    //   this.el.nativeElement.style.backgroundColor = 'white';
    // });
  }
}
