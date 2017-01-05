/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './login-form.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from './auth.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/forms/src/directives/control_value_accessor';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/control_container';
var renderType_LoginFormComponent_Host:import0.RenderComponentType = (null as any);
class _View_LoginFormComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _LoginFormComponent_0_4:import3.LoginFormComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LoginFormComponent_Host0,renderType_LoginFormComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('login-form',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_LoginFormComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._LoginFormComponent_0_4 = new import3.LoginFormComponent(this.parentInjector.get(import8.FormBuilder),this.parentInjector.get(import9.AuthService),this.parentInjector.get(import10.Router));
    this._appEl_0.initComponent(this._LoginFormComponent_0_4,[],compView_0);
    compView_0.create(this._LoginFormComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.LoginFormComponent) && (0 === requestNodeIndex))) { return this._LoginFormComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_LoginFormComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_LoginFormComponent_Host === (null as any))) { (renderType_LoginFormComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_LoginFormComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const LoginFormComponentNgFactory:import12.ComponentFactory<import3.LoginFormComponent> = new import12.ComponentFactory<import3.LoginFormComponent>('login-form',viewFactory_LoginFormComponent_Host0,import3.LoginFormComponent);
const styles_LoginFormComponent:any[] = ['.form-group[_ngcontent-%COMP%]{width: 30%; margin: 25px auto;}\n    .btn[_ngcontent-%COMP%]{margin-top: 20px;}'];
var renderType_LoginFormComponent:import0.RenderComponentType = (null as any);
class _View_LoginFormComponent0 extends import1.AppView<import3.LoginFormComponent> {
  _el_0:any;
  _FormGroupDirective_0_3:import13.FormGroupDirective;
  _ControlContainer_0_4:any;
  _NgControlStatusGroup_0_5:import14.NgControlStatusGroup;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _DefaultValueAccessor_10_3:import15.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_10_4:any[];
  _FormControlName_10_5:import16.FormControlName;
  _NgControl_10_6:any;
  _NgControlStatus_10_7:import14.NgControlStatus;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import17.NgIf;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _DefaultValueAccessor_20_3:import15.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_20_4:any[];
  _FormControlName_20_5:import16.FormControlName;
  _NgControl_20_6:any;
  _NgControlStatus_20_7:import14.NgControlStatus;
  _text_21:any;
  _anchor_22:any;
  /*private*/ _appEl_22:import2.AppElement;
  _TemplateRef_22_5:any;
  _NgIf_22_6:import17.NgIf;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LoginFormComponent0,renderType_LoginFormComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'form',(null as any));
    this._FormGroupDirective_0_3 = new import13.FormGroupDirective((null as any),(null as any));
    this._ControlContainer_0_4 = this._FormGroupDirective_0_3;
    this._NgControlStatusGroup_0_5 = new import14.NgControlStatusGroup(this._ControlContainer_0_4);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','form-group container');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this.renderer.setElementAttribute(this._el_4,'style','text-align: center');
    this._text_5 = this.renderer.createText(this._el_4,'Login',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_2,'label',(null as any));
    this.renderer.setElementAttribute(this._el_7,'for','username');
    this._text_8 = this.renderer.createText(this._el_7,'Username',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_2,'input',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','form-control');
    this.renderer.setElementAttribute(this._el_10,'formControlName','username');
    this.renderer.setElementAttribute(this._el_10,'id','username');
    this.renderer.setElementAttribute(this._el_10,'type','text');
    this._DefaultValueAccessor_10_3 = new import15.DefaultValueAccessor(this.renderer,new import18.ElementRef(this._el_10));
    this._NG_VALUE_ACCESSOR_10_4 = [this._DefaultValueAccessor_10_3];
    this._FormControlName_10_5 = new import16.FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_10_4);
    this._NgControl_10_6 = this._FormControlName_10_5;
    this._NgControlStatus_10_7 = new import14.NgControlStatus(this._NgControl_10_6);
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_12 = new import2.AppElement(12,2,this,this._anchor_12);
    this._TemplateRef_12_5 = new import19.TemplateRef_(this._appEl_12,viewFactory_LoginFormComponent1);
    this._NgIf_12_6 = new import17.NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','form-group container');
    this._text_16 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_15,'label',(null as any));
    this.renderer.setElementAttribute(this._el_17,'for','password');
    this._text_18 = this.renderer.createText(this._el_17,'Password',(null as any));
    this._text_19 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_15,'input',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','form-control');
    this.renderer.setElementAttribute(this._el_20,'formControlName','password');
    this.renderer.setElementAttribute(this._el_20,'id','password');
    this.renderer.setElementAttribute(this._el_20,'type','password');
    this._DefaultValueAccessor_20_3 = new import15.DefaultValueAccessor(this.renderer,new import18.ElementRef(this._el_20));
    this._NG_VALUE_ACCESSOR_20_4 = [this._DefaultValueAccessor_20_3];
    this._FormControlName_20_5 = new import16.FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_20_4);
    this._NgControl_20_6 = this._FormControlName_20_5;
    this._NgControlStatus_20_7 = new import14.NgControlStatus(this._NgControl_20_6);
    this._text_21 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._anchor_22 = this.renderer.createTemplateAnchor(this._el_15,(null as any));
    this._appEl_22 = new import2.AppElement(22,15,this,this._anchor_22);
    this._TemplateRef_22_5 = new import19.TemplateRef_(this._appEl_22,viewFactory_LoginFormComponent4);
    this._NgIf_22_6 = new import17.NgIf(this._appEl_22.vcRef,this._TemplateRef_22_5);
    this._text_23 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_15,'button',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','btn btn-lg btn-primary btn-block');
    this.renderer.setElementAttribute(this._el_24,'type','submit');
    this._text_25 = this.renderer.createText(this._el_24,'Log In',(null as any));
    this._text_26 = this.renderer.createText(this._el_15,'\n    ',(null as any));
    this._text_27 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_28 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'ngSubmit',this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'submit',this.eventHandler(this._handle_submit_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'reset',this.eventHandler(this._handle_reset_0_2.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._FormGroupDirective_0_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_10,'input',this.eventHandler(this._handle_input_10_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_10,'blur',this.eventHandler(this._handle_blur_10_1.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    var disposable_5:Function = this.renderer.listen(this._el_20,'input',this.eventHandler(this._handle_input_20_0.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_20,'blur',this.eventHandler(this._handle_blur_20_1.bind(this)));
    this._expr_22 = import7.UNINITIALIZED;
    this._expr_23 = import7.UNINITIALIZED;
    this._expr_24 = import7.UNINITIALIZED;
    this._expr_25 = import7.UNINITIALIZED;
    this._expr_26 = import7.UNINITIALIZED;
    this._expr_27 = import7.UNINITIALIZED;
    this._expr_28 = import7.UNINITIALIZED;
    this._expr_29 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._anchor_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.DefaultValueAccessor) && (10 === requestNodeIndex))) { return this._DefaultValueAccessor_10_3; }
    if (((token === import20.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_10_4; }
    if (((token === import16.FormControlName) && (10 === requestNodeIndex))) { return this._FormControlName_10_5; }
    if (((token === import21.NgControl) && (10 === requestNodeIndex))) { return this._NgControl_10_6; }
    if (((token === import14.NgControlStatus) && (10 === requestNodeIndex))) { return this._NgControlStatus_10_7; }
    if (((token === import19.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import17.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6; }
    if (((token === import15.DefaultValueAccessor) && (20 === requestNodeIndex))) { return this._DefaultValueAccessor_20_3; }
    if (((token === import20.NG_VALUE_ACCESSOR) && (20 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_20_4; }
    if (((token === import16.FormControlName) && (20 === requestNodeIndex))) { return this._FormControlName_20_5; }
    if (((token === import21.NgControl) && (20 === requestNodeIndex))) { return this._NgControl_20_6; }
    if (((token === import14.NgControlStatus) && (20 === requestNodeIndex))) { return this._NgControlStatus_20_7; }
    if (((token === import19.TemplateRef) && (22 === requestNodeIndex))) { return this._TemplateRef_22_5; }
    if (((token === import17.NgIf) && (22 === requestNodeIndex))) { return this._NgIf_22_6; }
    if (((token === import13.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._FormGroupDirective_0_3; }
    if (((token === import22.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._ControlContainer_0_4; }
    if (((token === import14.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._NgControlStatusGroup_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_3:any = this.context.form;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._FormGroupDirective_0_3.form = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._FormGroupDirective_0_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_12:any = 'username';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._FormControlName_10_5.name = currVal_12;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_12,currVal_12);
      this._expr_12 = currVal_12;
    }
    if ((changes !== (null as any))) { this._FormControlName_10_5.ngOnChanges(changes); }
    const currVal_19:any = (this.context.form.get('username').touched && !this.context.form.get('username').valid);
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this._NgIf_12_6.ngIf = currVal_19;
      this._expr_19 = currVal_19;
    }
    changes = (null as any);
    const currVal_22:any = 'password';
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this._FormControlName_20_5.name = currVal_22;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_22,currVal_22);
      this._expr_22 = currVal_22;
    }
    if ((changes !== (null as any))) { this._FormControlName_20_5.ngOnChanges(changes); }
    const currVal_29:any = (this.context.form.get('password').touched && !this.context.form.get('password').valid);
    if (import4.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this._NgIf_22_6.ngIf = currVal_29;
      this._expr_29 = currVal_29;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatusGroup_0_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_0,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_0_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_0,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_0_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_0,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_0_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_0,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_0_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_0,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_0_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_0,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_13:any = this._NgControlStatus_10_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_10,'ng-untouched',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_10_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_10,'ng-touched',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_10_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_10,'ng-pristine',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_10_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_10,'ng-dirty',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_10_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_10,'ng-valid',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_10_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_10,'ng-invalid',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_23:any = this._NgControlStatus_20_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_20,'ng-untouched',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = this._NgControlStatus_20_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementClass(this._el_20,'ng-touched',currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = this._NgControlStatus_20_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementClass(this._el_20,'ng-pristine',currVal_25);
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = this._NgControlStatus_20_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementClass(this._el_20,'ng-dirty',currVal_26);
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = this._NgControlStatus_20_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementClass(this._el_20,'ng-valid',currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_28:any = this._NgControlStatus_20_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setElementClass(this._el_20,'ng-invalid',currVal_28);
      this._expr_28 = currVal_28;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._FormControlName_10_5.ngOnDestroy();
    this._FormControlName_20_5.ngOnDestroy();
  }
  private _handle_ngSubmit_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.login()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_0_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_0_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_input_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_10_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_10_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_10_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_input_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_20_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_20_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_20_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_LoginFormComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.LoginFormComponent> {
  if ((renderType_LoginFormComponent === (null as any))) { (renderType_LoginFormComponent = viewUtils.createRenderComponentType('C:/Users/ketha/Desktop/projects/web/unitystudygroup/assets/app/auth/login-form.component.html',0,import11.ViewEncapsulation.Emulated,styles_LoginFormComponent,{})); }
  return new _View_LoginFormComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_LoginFormComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import17.NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import17.NgIf;
  _text_5:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LoginFormComponent1,renderType_LoginFormComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import19.TemplateRef_(this._appEl_2,viewFactory_LoginFormComponent2);
    this._NgIf_2_6 = new import17.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import19.TemplateRef_(this._appEl_4,viewFactory_LoginFormComponent3);
    this._NgIf_4_6 = new import17.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import17.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import19.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import17.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.form.get('username').errors.invalidLogin;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.form.get('username').errors.required;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_LoginFormComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_LoginFormComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_LoginFormComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LoginFormComponent2,renderType_LoginFormComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','alert alert-danger');
    this._text_1 = this.renderer.createText(this._el_0,'Username or password is invalid',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_LoginFormComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_LoginFormComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_LoginFormComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LoginFormComponent3,renderType_LoginFormComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','alert alert-danger');
    this._text_1 = this.renderer.createText(this._el_0,'Username is required.',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_LoginFormComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_LoginFormComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_LoginFormComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LoginFormComponent4,renderType_LoginFormComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','alert alert-danger');
    this._text_1 = this.renderer.createText(this._el_0,'Password is required.\n            ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_LoginFormComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_LoginFormComponent4(viewUtils,parentInjector,declarationEl);
}