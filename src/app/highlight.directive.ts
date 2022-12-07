import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef) { }
  @HostListener('mouseenter') onmouseenter() {
    console.log('------', this.element.nativeElement);
    this.element.nativeElement.style['background-color']='white';
  }
  @HostListener('mouseleave') onmouseleave(){
  this.element.nativeElement.style['background-color']='';
  }

}
