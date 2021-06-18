import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
  //  this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue')
  }

  @HostListener('mousenter') mousover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue',false)
  }
  @HostListener('mousleave') mousleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent',false)
  }
  
}
