/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './home.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../slack/slack-invite.component';
import * as import11 from '../slack/slack-invite.component.ngfactory';
import * as import12 from '../slack/slack.service';
var renderType_HomeComponent_Host:import0.RenderComponentType = (null as any);
class _View_HomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HomeComponent_0_4:import3.HomeComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomeComponent_Host0,renderType_HomeComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('home',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomeComponent_0_4 = new import3.HomeComponent();
    this._appEl_0.initComponent(this._HomeComponent_0_4,[],compView_0);
    compView_0.create(this._HomeComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_HomeComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HomeComponent_Host === (null as any))) { (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_HomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeComponentNgFactory:import9.ComponentFactory<import3.HomeComponent> = new import9.ComponentFactory<import3.HomeComponent>('home',viewFactory_HomeComponent_Host0,import3.HomeComponent);
const styles_HomeComponent:any[] = [''];
var renderType_HomeComponent:import0.RenderComponentType = (null as any);
class _View_HomeComponent0 extends import1.AppView<import3.HomeComponent> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SlackInviteComponent_0_4:import10.SlackInviteComponent;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomeComponent0,renderType_HomeComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'slack-invite',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import11.viewFactory_SlackInviteComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SlackInviteComponent_0_4 = new import10.SlackInviteComponent(this.parentInjector.get(import12.SlackService));
    this._appEl_0.initComponent(this._SlackInviteComponent_0_4,[],compView_0);
    compView_0.create(this._SlackInviteComponent_0_4,[],(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init([],[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.SlackInviteComponent) && (0 === requestNodeIndex))) { return this._SlackInviteComponent_0_4; }
    return notFoundResult;
  }
}
export function viewFactory_HomeComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HomeComponent> {
  if ((renderType_HomeComponent === (null as any))) { (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Users/ketha/Desktop/projects/web/unitystudygroup/assets/app/home/home.component.html',0,import8.ViewEncapsulation.Emulated,styles_HomeComponent,{})); }
  return new _View_HomeComponent0(viewUtils,parentInjector,declarationEl);
}