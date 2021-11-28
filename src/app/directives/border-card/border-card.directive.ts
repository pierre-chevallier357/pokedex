import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
})
export class BorderCardDirective {
  initialColor: string = '#f5f5f5';
  defaultSelectedColor: string = '#009688';
  defaultHeight: number = 180;
  @Input('pokemonBorderCard') borderColor: string = '';

  constructor(private element: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultSelectedColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.element.nativeElement.style.height = height + 'px';
  }
}
