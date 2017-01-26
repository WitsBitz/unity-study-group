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
import * as import3 from './news.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './news.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './news.component.css.shim';
import * as import12 from '../shared/spinner.component';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '@angular/forms/src/directives/ng_model';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '../shared/pagination.directive';
import * as import17 from '../shared/spinner.component.ngfactory';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '../shared/pagination.directive.ngfactory';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/core/src/security';
var renderType_NewsComponent_Host = null;
var _View_NewsComponent_Host0 = (function (_super) {
    __extends(_View_NewsComponent_Host0, _super);
    function _View_NewsComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NewsComponent_Host0, renderType_NewsComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NewsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('news-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NewsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NewsComponent_0_4 = new import3.NewsComponent(this.parentInjector.get(import8.NewsService));
        this._appEl_0.initComponent(this._NewsComponent_0_4, [], compView_0);
        compView_0.create(this._NewsComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NewsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.NewsComponent) && (0 === requestNodeIndex))) {
            return this._NewsComponent_0_4;
        }
        return notFoundResult;
    };
    _View_NewsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._NewsComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NewsComponent_Host0;
}(import1.AppView));
function viewFactory_NewsComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NewsComponent_Host === null)) {
        (renderType_NewsComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_NewsComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var NewsComponentNgFactory = new import10.ComponentFactory('news-component', viewFactory_NewsComponent_Host0, import3.NewsComponent);
var styles_NewsComponent = [import11.styles];
var renderType_NewsComponent = null;
var _View_NewsComponent0 = (function (_super) {
    __extends(_View_NewsComponent0, _super);
    function _View_NewsComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NewsComponent0, renderType_NewsComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NewsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Top GameDev Posts', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'hr', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_7 = this.renderer.createElement(parentRenderNode, 'spinner', null);
        this._appEl_7 = new import2.AppElement(7, null, this, this._el_7);
        var compView_7 = import17.viewFactory_SpinnerComponent0(this.viewUtils, this.injector(7), this._appEl_7);
        this._SpinnerComponent_7_4 = new import12.SpinnerComponent();
        this._appEl_7.initComponent(this._SpinnerComponent_7_4, [], compView_7);
        compView_7.create(this._SpinnerComponent_7_4, [], null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._anchor_9);
        this._TemplateRef_9_5 = new import18.TemplateRef_(this._appEl_9, viewFactory_NewsComponent1);
        this._NgFor_9_6 = new import13.NgFor(this._appEl_9.vcRef, this._TemplateRef_9_5, this.parentInjector.get(import19.IterableDiffers), this.ref);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_11 = this.renderer.createElement(parentRenderNode, 'ng-pagination', null);
        this.renderer.setElementAttribute(this._el_11, 'first-text', 'First');
        this.renderer.setElementAttribute(this._el_11, 'last-text', 'Last');
        this.renderer.setElementAttribute(this._el_11, 'next-text', '›');
        this.renderer.setElementAttribute(this._el_11, 'previous-text', '‹');
        this._appEl_11 = new import2.AppElement(11, null, this, this._el_11);
        var compView_11 = import20.viewFactory_PaginationDirective0(this.viewUtils, this.injector(11), this._appEl_11);
        this._NgModel_11_4 = new import14.NgModel(null, null, null, null);
        this._NgControl_11_5 = this._NgModel_11_4;
        this._NgControlStatus_11_6 = new import15.NgControlStatus(this._NgControl_11_5);
        this._PaginationDirective_11_7 = new import16.PaginationDirective(this._NgModel_11_4);
        this._appEl_11.initComponent(this._PaginationDirective_11_7, [], compView_11);
        compView_11.create(this._PaginationDirective_11_7, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'totalItemsChange', this.eventHandler(this._handle_totalItemsChange_11_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_11, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_11_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_11, 'pageChanged', this.eventHandler(this._handle_pageChanged_11_2.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_11_4.update.subscribe(this.eventHandler(this._handle_ngModelChange_11_1.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        var subscription_1 = this._PaginationDirective_11_7.pageChanged.subscribe(this.eventHandler(this._handle_pageChanged_11_2.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._el_11
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    };
    _View_NewsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.SpinnerComponent) && (7 === requestNodeIndex))) {
            return this._SpinnerComponent_7_4;
        }
        if (((token === import18.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import13.NgFor) && (9 === requestNodeIndex))) {
            return this._NgFor_9_6;
        }
        if (((token === import14.NgModel) && (11 === requestNodeIndex))) {
            return this._NgModel_11_4;
        }
        if (((token === import21.NgControl) && (11 === requestNodeIndex))) {
            return this._NgControl_11_5;
        }
        if (((token === import15.NgControlStatus) && (11 === requestNodeIndex))) {
            return this._NgControlStatus_11_6;
        }
        if (((token === import16.PaginationDirective) && (11 === requestNodeIndex))) {
            return this._PaginationDirective_11_7;
        }
        return notFoundResult;
    };
    _View_NewsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_0 = this.context.postsLoading;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._SpinnerComponent_7_4.visible = currVal_0;
            this._expr_0 = currVal_0;
        }
        changes = null;
        var currVal_1 = this.context.pagedPosts;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_9_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_9_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_9_6.ngDoCheck();
        }
        changes = null;
        var currVal_5 = this.context.currentPage;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgModel_11_4.model = currVal_5;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_5, currVal_5);
            this._expr_5 = currVal_5;
        }
        if ((changes !== null)) {
            this._NgModel_11_4.ngOnChanges(changes);
        }
        changes = null;
        var currVal_12 = '‹';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._PaginationDirective_11_7.previousText = currVal_12;
            if ((changes === null)) {
                (changes = {});
            }
            changes['previousText'] = new import7.SimpleChange(this._expr_12, currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = '›';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._PaginationDirective_11_7.nextText = currVal_13;
            if ((changes === null)) {
                (changes = {});
            }
            changes['nextText'] = new import7.SimpleChange(this._expr_13, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = 'First';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._PaginationDirective_11_7.firstText = currVal_14;
            if ((changes === null)) {
                (changes = {});
            }
            changes['firstText'] = new import7.SimpleChange(this._expr_14, currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = 'Last';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._PaginationDirective_11_7.lastText = currVal_15;
            if ((changes === null)) {
                (changes = {});
            }
            changes['lastText'] = new import7.SimpleChange(this._expr_15, currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this.context.posts.length;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._PaginationDirective_11_7.totalItems = currVal_16;
            if ((changes === null)) {
                (changes = {});
            }
            changes['totalItems'] = new import7.SimpleChange(this._expr_16, currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this.context.maxSize;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._PaginationDirective_11_7.pageSize = currVal_17;
            if ((changes === null)) {
                (changes = {});
            }
            changes['pageSize'] = new import7.SimpleChange(this._expr_17, currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = true;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._PaginationDirective_11_7.boundaryLinks = currVal_18;
            if ((changes === null)) {
                (changes = {});
            }
            changes['boundaryLinks'] = new import7.SimpleChange(this._expr_18, currVal_18);
            this._expr_18 = currVal_18;
        }
        if ((changes !== null)) {
            this._PaginationDirective_11_7.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_6 = this._NgControlStatus_11_6.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_11, 'ng-untouched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_11_6.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_11, 'ng-touched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_11_6.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_11, 'ng-pristine', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_11_6.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_11, 'ng-dirty', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_11_6.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_11, 'ng-valid', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_11_6.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_11, 'ng-invalid', currVal_11);
            this._expr_11 = currVal_11;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NewsComponent0.prototype.destroyInternal = function () {
        this._NgModel_11_4.ngOnDestroy();
    };
    _View_NewsComponent0.prototype._handle_totalItemsChange_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.posts.length = $event) !== false);
        return (true && pd_0);
    };
    _View_NewsComponent0.prototype._handle_ngModelChange_11_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.currentPage = $event) !== false);
        return (true && pd_0);
    };
    _View_NewsComponent0.prototype._handle_pageChanged_11_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.pageChanged($event) !== false);
        return (true && pd_0);
    };
    return _View_NewsComponent0;
}(import1.AppView));
export function viewFactory_NewsComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NewsComponent === null)) {
        (renderType_NewsComponent = viewUtils.createRenderComponentType('C:/Users/ketha/Desktop/projects/web/unitystudygroup/assets/app/news/news.component.html', 0, import9.ViewEncapsulation.Emulated, styles_NewsComponent, {}));
    }
    return new _View_NewsComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_NewsComponent1 = (function (_super) {
    __extends(_View_NewsComponent1, _super);
    function _View_NewsComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NewsComponent1, renderType_NewsComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NewsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'media');
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'media-left');
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'a', null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'img', null);
        this.renderer.setElementAttribute(this._el_6, 'alt', 'USG');
        this.renderer.setElementAttribute(this._el_6, 'class', 'media-object');
        this._text_7 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_10 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'media-body');
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'h3', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'media-heading');
        this._el_13 = this.renderer.createElement(this._el_12, 'a', null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_10, 'h4', null);
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_10, 'p', null);
        this._el_20 = this.renderer.createElement(this._el_19, 'a', null);
        this._text_21 = this.renderer.createText(this._el_20, 'View Comments', null);
        this._text_22 = this.renderer.createText(this._el_10, '\n  ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23
        ], [], []);
        return null;
    };
    _View_NewsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.url, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_4, 'href', this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.thumbnail, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_6, 'src', this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.url, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_13, 'href', this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_14, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(2, 'r/', this.context.$implicit.subreddit, ' post by ', this.context.$implicit.author, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_17, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, 'http://www.reddit.com', this.context.$implicit.sourceUrl, '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_20, 'href', this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL, currVal_5));
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NewsComponent1;
}(import1.AppView));
function viewFactory_NewsComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_NewsComponent1(viewUtils, parentInjector, declarationEl);
}
