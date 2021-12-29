import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class DirectiveDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
