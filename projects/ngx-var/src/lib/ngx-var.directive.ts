import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngxVar]',
})
export class NgxVarDirective {
  @Input() set ngxVar(context: unknown) {
    this._context.$implicit = this._context.ngxVar = context;

    if (!this._hasView) {
      this._vcRef.createEmbeddedView(this._templateRef, this._context);
      this._hasView = true;
    }
  }

  private _context: {
    $implicit: unknown;
    ngxVar: unknown;
  } = {
    $implicit: null,
    ngxVar: null,
  };
  private _hasView = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _vcRef: ViewContainerRef
  ) {}
}
