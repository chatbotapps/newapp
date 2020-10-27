import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[invoke]' })
export class SetwidthDirective {
  @Output() invoke:EventEmitter<any> = new EventEmitter();
  ngAfterContentInit() {
    this.invoke.emit(null);
  }
  constructor(private el: ElementRef) {}
    
}