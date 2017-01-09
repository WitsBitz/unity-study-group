/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './login-form.component';
import * as import4 from '@angular/core/src/linker/view_utils';
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
var renderType_LoginFormComponent_Host = null;
var _View_LoginFormComponent_Host0 = (function (_super) {
    __extends(_View_LoginFormComponent_Host0, _super);
    function _View_LoginFormComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginFormComponent_Host0, renderType_LoginFormComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginFormComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('login-form', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LoginFormComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LoginFormComponent_0_4 = new import3.LoginFormComponent(this.parentInjector.get(import8.FormBuilder), this.parentInjector.get(import9.AuthService), this.parentInjector.get(import10.Router));
        this._appEl_0.initComponent(this._LoginFormComponent_0_4, [], compView_0);
        compView_0.create(this._LoginFormComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LoginFormComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LoginFormComponent) && (0 === requestNodeIndex))) {
            return this._LoginFormComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_LoginFormComponent_Host0;
}(import1.AppView));
function viewFactory_LoginFormComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginFormComponent_Host === null)) {
        (renderType_LoginFormComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_LoginFormComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var LoginFormComponentNgFactory = new import12.ComponentFactory('login-form', viewFactory_LoginFormComponent_Host0, import3.LoginFormComponent);
var styles_LoginFormComponent = ['.form-group[_ngcontent-%COMP%]{\n        width: 30%; \n        margin: 20px auto;\n    }\n    .btn[_ngcontent-%COMP%]{\n        margin-top: 20px;\n    }\n    .ng-touched.ng-invalid.form-control[_ngcontent-%COMP%]{\n        border: 1px solid red;\n    }\n    h1[_ngcontent-%COMP%]{\n        margin: 20px;\n    }'];
var renderType_LoginFormComponent = null;
var _View_LoginFormComponent0 = (function (_super) {
    __extends(_View_LoginFormComponent0, _super);
    function _View_LoginFormComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginFormComponent0, renderType_LoginFormComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginFormComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'form', null);
        this._FormGroupDirective_0_3 = new import13.FormGroupDirective(null, null);
        this._ControlContainer_0_4 = this._FormGroupDirective_0_3;
        this._NgControlStatusGroup_0_5 = new import14.NgControlStatusGroup(this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'form-group container');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h1', null);
        this.renderer.setElementAttribute(this._el_4, 'style', 'text-align: center');
        this._text_5 = this.renderer.createText(this._el_4, 'Login', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'input', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_7, 'formControlName', 'username');
        this.renderer.setElementAttribute(this._el_7, 'id', 'username');
        this.renderer.setElementAttribute(this._el_7, 'placeholder', 'Username');
        this.renderer.setElementAttribute(this._el_7, 'type', 'text');
        this._DefaultValueAccessor_7_3 = new import15.DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_7));
        this._NG_VALUE_ACCESSOR_7_4 = [this._DefaultValueAccessor_7_3];
        this._FormControlName_7_5 = new import16.FormControlName(this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_7_4);
        this._NgControl_7_6 = this._FormControlName_7_5;
        this._NgControlStatus_7_7 = new import14.NgControlStatus(this._NgControl_7_6);
        this._text_8 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_9 = new import2.AppElement(9, 2, this, this._anchor_9);
        this._TemplateRef_9_5 = new import19.TemplateRef_(this._appEl_9, viewFactory_LoginFormComponent1);
        this._NgIf_9_6 = new import17.NgIf(this._appEl_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_12 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'form-group container');
        this._text_13 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'input', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_14, 'formControlName', 'password');
        this.renderer.setElementAttribute(this._el_14, 'id', 'password');
        this.renderer.setElementAttribute(this._el_14, 'placeholder', 'Password');
        this.renderer.setElementAttribute(this._el_14, 'type', 'password');
        this._DefaultValueAccessor_14_3 = new import15.DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_14));
        this._NG_VALUE_ACCESSOR_14_4 = [this._DefaultValueAccessor_14_3];
        this._FormControlName_14_5 = new import16.FormControlName(this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_14_4);
        this._NgControl_14_6 = this._FormControlName_14_5;
        this._NgControlStatus_14_7 = new import14.NgControlStatus(this._NgControl_14_6);
        this._text_15 = this.renderer.createText(this._el_12, '\n            ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_16 = new import2.AppElement(16, 12, this, this._anchor_16);
        this._TemplateRef_16_5 = new import19.TemplateRef_(this._appEl_16, viewFactory_LoginFormComponent4);
        this._NgIf_16_6 = new import17.NgIf(this._appEl_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_18 = this.renderer.createElement(this._el_12, 'button', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'btn btn-lg btn-primary btn-block');
        this.renderer.setElementAttribute(this._el_18, 'type', 'submit');
        this._text_19 = this.renderer.createText(this._el_18, 'Log In', null);
        this._text_20 = this.renderer.createText(this._el_12, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'submit', this.eventHandler(this._handle_submit_0_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_0, 'reset', this.eventHandler(this._handle_reset_0_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._FormGroupDirective_0_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_7, 'input', this.eventHandler(this._handle_input_7_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_7, 'blur', this.eventHandler(this._handle_blur_7_1.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_14, 'input', this.eventHandler(this._handle_input_14_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_14, 'blur', this.eventHandler(this._handle_blur_14_1.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ], [subscription_0]);
        return null;
    };
    _View_LoginFormComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.DefaultValueAccessor) && (7 === requestNodeIndex))) {
            return this._DefaultValueAccessor_7_3;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (7 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_7_4;
        }
        if (((token === import16.FormControlName) && (7 === requestNodeIndex))) {
            return this._FormControlName_7_5;
        }
        if (((token === import21.NgControl) && (7 === requestNodeIndex))) {
            return this._NgControl_7_6;
        }
        if (((token === import14.NgControlStatus) && (7 === requestNodeIndex))) {
            return this._NgControlStatus_7_7;
        }
        if (((token === import19.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import17.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6;
        }
        if (((token === import15.DefaultValueAccessor) && (14 === requestNodeIndex))) {
            return this._DefaultValueAccessor_14_3;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (14 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_14_4;
        }
        if (((token === import16.FormControlName) && (14 === requestNodeIndex))) {
            return this._FormControlName_14_5;
        }
        if (((token === import21.NgControl) && (14 === requestNodeIndex))) {
            return this._NgControl_14_6;
        }
        if (((token === import14.NgControlStatus) && (14 === requestNodeIndex))) {
            return this._NgControlStatus_14_7;
        }
        if (((token === import19.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import17.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6;
        }
        if (((token === import13.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._FormGroupDirective_0_3;
        }
        if (((token === import22.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === import14.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._NgControlStatusGroup_0_5;
        }
        return notFoundResult;
    };
    _View_LoginFormComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_3 = this.context.form;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormGroupDirective_0_3.form = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_0_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_12 = 'username';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._FormControlName_7_5.name = currVal_12;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_12, currVal_12);
            this._expr_12 = currVal_12;
        }
        if ((changes !== null)) {
            this._FormControlName_7_5.ngOnChanges(changes);
        }
        var currVal_19 = (this.context.form.get('username').touched && !this.context.form.get('username').valid);
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._NgIf_9_6.ngIf = currVal_19;
            this._expr_19 = currVal_19;
        }
        changes = null;
        var currVal_22 = 'password';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._FormControlName_14_5.name = currVal_22;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_22, currVal_22);
            this._expr_22 = currVal_22;
        }
        if ((changes !== null)) {
            this._FormControlName_14_5.ngOnChanges(changes);
        }
        var currVal_29 = (this.context.form.get('password').touched && !this.context.form.get('password').valid);
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._NgIf_16_6.ngIf = currVal_29;
            this._expr_29 = currVal_29;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this._NgControlStatusGroup_0_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_0, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_0_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_0, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_0_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_0, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_0_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_0, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_0_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_0, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_0_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_0, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_13 = this._NgControlStatus_7_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_7, 'ng-untouched', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_7_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_7, 'ng-touched', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_7_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_7, 'ng-pristine', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_7_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_7, 'ng-dirty', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_7_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_7, 'ng-valid', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_7_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_7, 'ng-invalid', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_23 = this._NgControlStatus_14_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_14, 'ng-untouched', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this._NgControlStatus_14_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_14, 'ng-touched', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_14_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_14, 'ng-pristine', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_14_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_14, 'ng-dirty', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_14_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_14, 'ng-valid', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_14_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_14, 'ng-invalid', currVal_28);
            this._expr_28 = currVal_28;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_LoginFormComponent0.prototype.destroyInternal = function () {
        this._FormControlName_7_5.ngOnDestroy();
        this._FormControlName_14_5.ngOnDestroy();
    };
    _View_LoginFormComponent0.prototype._handle_ngSubmit_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.login() !== false);
        return (true && pd_0);
    };
    _View_LoginFormComponent0.prototype._handle_submit_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_0_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_LoginFormComponent0.prototype._handle_reset_0_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_0_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_LoginFormComponent0.prototype._handle_input_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_7_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_LoginFormComponent0.prototype._handle_blur_7_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_7_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_LoginFormComponent0.prototype._handle_input_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_14_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_LoginFormComponent0.prototype._handle_blur_14_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_14_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_LoginFormComponent0;
}(import1.AppView));
export function viewFactory_LoginFormComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginFormComponent === null)) {
        (renderType_LoginFormComponent = viewUtils.createRenderComponentType('C:/Users/ketha/Desktop/projects/web/unitystudygroup/assets/app/auth/login-form.component.html', 0, import11.ViewEncapsulation.Emulated, styles_LoginFormComponent, {}));
    }
    return new _View_LoginFormComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_LoginFormComponent1 = (function (_super) {
    __extends(_View_LoginFormComponent1, _super);
    function _View_LoginFormComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginFormComponent1, renderType_LoginFormComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginFormComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import19.TemplateRef_(this._appEl_2, viewFactory_LoginFormComponent2);
        this._NgIf_2_6 = new import17.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_4 = new import2.AppElement(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import19.TemplateRef_(this._appEl_4, viewFactory_LoginFormComponent3);
        this._NgIf_4_6 = new import17.NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5
        ], [], []);
        return null;
    };
    _View_LoginFormComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import17.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        if (((token === import19.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import17.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6;
        }
        return notFoundResult;
    };
    _View_LoginFormComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.parent.context.form.get('username').errors.invalidLogin;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_2_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.parent.context.form.get('username').errors.required;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_4_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_LoginFormComponent1;
}(import1.AppView));
function viewFactory_LoginFormComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_LoginFormComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_LoginFormComponent2 = (function (_super) {
    __extends(_View_LoginFormComponent2, _super);
    function _View_LoginFormComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginFormComponent2, renderType_LoginFormComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginFormComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'alert alert-danger');
        this._text_1 = this.renderer.createText(this._el_0, 'Username or password is invalid', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_LoginFormComponent2;
}(import1.AppView));
function viewFactory_LoginFormComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_LoginFormComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_LoginFormComponent3 = (function (_super) {
    __extends(_View_LoginFormComponent3, _super);
    function _View_LoginFormComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginFormComponent3, renderType_LoginFormComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginFormComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'alert alert-danger');
        this._text_1 = this.renderer.createText(this._el_0, 'Username is required.', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_LoginFormComponent3;
}(import1.AppView));
function viewFactory_LoginFormComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_LoginFormComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_LoginFormComponent4 = (function (_super) {
    __extends(_View_LoginFormComponent4, _super);
    function _View_LoginFormComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginFormComponent4, renderType_LoginFormComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginFormComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'alert alert-danger');
        this._text_1 = this.renderer.createText(this._el_0, 'Password is required.\n            ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_LoginFormComponent4;
}(import1.AppView));
function viewFactory_LoginFormComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_LoginFormComponent4(viewUtils, parentInjector, declarationEl);
}