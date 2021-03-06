/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './pagination.directive';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/forms/src/directives/ng_model';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/security';
import * as import16 from '@angular/common/src/directives/ng_class';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
var renderType_PaginationDirective_Host:import0.RenderComponentType = (null as any);
class _View_PaginationDirective_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PaginationDirective_0_4:import3.PaginationDirective;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective_Host0,renderType_PaginationDirective_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-pagination',rootSelector,(null as any));
    this.renderer.setElementAttribute(this._el_0,'ngModel','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PaginationDirective0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PaginationDirective_0_4 = new import3.PaginationDirective(this.parentInjector.get(import8.NgModel));
    this._appEl_0.initComponent(this._PaginationDirective_0_4,[],compView_0);
    compView_0.create(this._PaginationDirective_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PaginationDirective) && (0 === requestNodeIndex))) { return this._PaginationDirective_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PaginationDirective_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PaginationDirective_Host === (null as any))) { (renderType_PaginationDirective_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_PaginationDirective_Host0(viewUtils,parentInjector,declarationEl);
}
export const PaginationDirectiveNgFactory:import10.ComponentFactory<import3.PaginationDirective> = new import10.ComponentFactory<import3.PaginationDirective>('ng-pagination[ngModel]',viewFactory_PaginationDirective_Host0,import3.PaginationDirective);
const styles_PaginationDirective:any[] = ['.center[_ngcontent-%COMP%]{\n    text-align: center;\n    display: block;\n    margin: 0 auto;\n    font-size: 1.5em;\n  }'];
var renderType_PaginationDirective:import0.RenderComponentType = (null as any);
class _View_PaginationDirective0 extends import1.AppView<import3.PaginationDirective> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import11.NgIf;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _appEl_8:import2.AppElement;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import11.NgIf;
  _text_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import12.NgFor;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import2.AppElement;
  _TemplateRef_15_5:any;
  _NgIf_15_6:import11.NgIf;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _TemplateRef_19_5:any;
  _NgIf_19_6:import11.NgIf;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective0,renderType_PaginationDirective,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','center');
    this._text_1 = this.renderer.createText(this._el_0,'\n              ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','pagination');
    this._text_3 = this.renderer.createText(this._el_2,'\n                  ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import13.TemplateRef_(this._appEl_4,viewFactory_PaginationDirective1);
    this._NgIf_4_6 = new import11.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,'\n                  ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,' ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._appEl_8 = new import2.AppElement(8,6,this,this._anchor_8);
    this._TemplateRef_8_5 = new import13.TemplateRef_(this._appEl_8,viewFactory_PaginationDirective2);
    this._NgIf_8_6 = new import11.NgIf(this._appEl_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_6,' ',(null as any));
    this._text_10 = this.renderer.createText(this._el_2,'\n                  ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_11 = new import2.AppElement(11,2,this,this._anchor_11);
    this._TemplateRef_11_5 = new import13.TemplateRef_(this._appEl_11,viewFactory_PaginationDirective3);
    this._NgFor_11_6 = new import12.NgFor(this._appEl_11.vcRef,this._TemplateRef_11_5,this.parentInjector.get(import14.IterableDiffers),this.ref);
    this._text_12 = this.renderer.createText(this._el_2,'                \n                  ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,' ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._appEl_15 = new import2.AppElement(15,13,this,this._anchor_15);
    this._TemplateRef_15_5 = new import13.TemplateRef_(this._appEl_15,viewFactory_PaginationDirective4);
    this._NgIf_15_6 = new import11.NgIf(this._appEl_15.vcRef,this._TemplateRef_15_5);
    this._text_16 = this.renderer.createText(this._el_13,' ',(null as any));
    this._text_17 = this.renderer.createText(this._el_2,'\n                  ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_2,'li',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_18,(null as any));
    this._appEl_19 = new import2.AppElement(19,18,this,this._anchor_19);
    this._TemplateRef_19_5 = new import13.TemplateRef_(this._appEl_19,viewFactory_PaginationDirective5);
    this._NgIf_19_6 = new import11.NgIf(this._appEl_19.vcRef,this._TemplateRef_19_5);
    this._text_20 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._text_21 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._text_22
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import11.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import11.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6; }
    if (((token === import13.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import12.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6; }
    if (((token === import13.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import11.NgIf) && (15 === requestNodeIndex))) { return this._NgIf_15_6; }
    if (((token === import13.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import11.NgIf) && (19 === requestNodeIndex))) { return this._NgIf_19_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = (this.context.previousItemValid && this.context.firstText);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_4_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.previousItemValid;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_8_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    changes = (null as any);
    const currVal_2:any = this.context.pageList;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_11_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_11_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_11_6.ngDoCheck(); }
    const currVal_3:any = this.context.nextItemValid;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_15_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = (this.context.nextItemValid && this.context.lastText);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_19_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_PaginationDirective0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PaginationDirective> {
  if ((renderType_PaginationDirective === (null as any))) { (renderType_PaginationDirective = viewUtils.createRenderComponentType('C:/Users/ketha/Documents/projects/web/unitystudygroup/assets/app/shared/pagination.directive.ts class PaginationDirective - inline template',0,import9.ViewEncapsulation.Emulated,styles_PaginationDirective,{})); }
  return new _View_PaginationDirective0(viewUtils,parentInjector,declarationEl);
}
class _View_PaginationDirective1 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective1,renderType_PaginationDirective,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_1,'href','#');
    this._text_2 = this.renderer.createText(this._el_1,'First',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.parent.context.firstText;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_1,'innerHTML',this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.firstPage()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PaginationDirective1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PaginationDirective1(viewUtils,parentInjector,declarationEl);
}
class _View_PaginationDirective2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective2,renderType_PaginationDirective,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_0,'aria-label','Previous');
    this._text_1 = this.renderer.createText(this._el_0,' ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_2,'aria-hidden','true');
    this._text_3 = this.renderer.createText(this._el_2,'«',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,' ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.previousPage(this.parent.context.nextItem)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PaginationDirective2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PaginationDirective2(viewUtils,parentInjector,declarationEl);
}
class _View_PaginationDirective3 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import16.NgClass;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _map_0:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective3,renderType_PaginationDirective,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._NgClass_0_3 = new import16.NgClass(this.parent.parentInjector.get(import14.IterableDiffers),this.parent.parentInjector.get(import17.KeyValueDiffers),new import18.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                      ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                  ',(null as any));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {active: p0};
    });
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._map_0((this.parent.context.seletedPage === this.context.$implicit));
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.ngClass = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_3,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.setCurrentPage(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PaginationDirective3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PaginationDirective3(viewUtils,parentInjector,declarationEl);
}
class _View_PaginationDirective4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective4,renderType_PaginationDirective,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_0,'aria-label','Next');
    this._text_1 = this.renderer.createText(this._el_0,' ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_2,'aria-hidden','true');
    this._text_3 = this.renderer.createText(this._el_2,'»',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,' ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.nextPage(this.parent.context.nextItem)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PaginationDirective4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PaginationDirective4(viewUtils,parentInjector,declarationEl);
}
class _View_PaginationDirective5 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PaginationDirective5,renderType_PaginationDirective,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Last',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.parent.context.lastText;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.lastPage()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PaginationDirective5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PaginationDirective5(viewUtils,parentInjector,declarationEl);
}