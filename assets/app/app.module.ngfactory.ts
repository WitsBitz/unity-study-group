/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/http/src/http_module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/platform-browser/src/browser/title';
import * as import21 from '@angular/http/src/backends/browser_xhr';
import * as import22 from '@angular/http/src/base_response_options';
import * as import23 from '@angular/http/src/backends/xhr_backend';
import * as import24 from '@angular/http/src/base_request_options';
import * as import25 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import26 from '@angular/common/src/location/location';
import * as import27 from '@angular/router/src/url_tree';
import * as import28 from '@angular/router/src/router_outlet_map';
import * as import29 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import30 from './slack/slack.service';
import * as import31 from './auth/auth.service';
import * as import32 from '@angular/core/src/di/injector';
import * as import33 from './home/home.component.ngfactory';
import * as import34 from './unitydocs/collision-table.component.ngfactory';
import * as import35 from './forum/forum.component.ngfactory';
import * as import36 from './app.component.ngfactory';
import * as import37 from '@angular/core/src/application_tokens';
import * as import38 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import39 from '@angular/platform-browser/src/dom/events/key_events';
import * as import40 from '@angular/core/src/zone/ng_zone';
import * as import41 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import42 from '@angular/common/src/location/platform_location';
import * as import43 from '@angular/common/src/location/location_strategy';
import * as import44 from './home/home.component';
import * as import45 from './unitydocs/collision-table.component';
import * as import46 from './forum/forum.component';
import * as import47 from '@angular/router/src/router';
import * as import48 from '@angular/core/src/console';
import * as import49 from '@angular/core/src/i18n/tokens';
import * as import50 from '@angular/core/src/error_handler';
import * as import51 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import52 from '@angular/platform-browser/src/dom/animation_driver';
import * as import53 from '@angular/core/src/render/api';
import * as import54 from '@angular/core/src/security';
import * as import55 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import56 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import57 from '@angular/http/src/interfaces';
import * as import58 from '@angular/http/src/http';
import * as import59 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import60 from '@angular/router/src/router_config_loader';
import * as import61 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ROUTER_FORROOT_GUARD_3:any;
  _RouterModule_4:import5.RouterModule;
  _HttpModule_5:import6.HttpModule;
  _InternalFormsSharedModule_6:import7.InternalFormsSharedModule;
  _FormsModule_7:import8.FormsModule;
  _AppModule_8:import1.AppModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import9.NgLocaleLocalization;
  _ErrorHandler_11:any;
  _ApplicationInitStatus_12:import10.ApplicationInitStatus;
  _Testability_13:import11.Testability;
  _ApplicationRef__14:import12.ApplicationRef_;
  __ApplicationRef_15:any;
  __Compiler_16:import13.Compiler;
  __APP_ID_17:any;
  __DOCUMENT_18:any;
  __HAMMER_GESTURE_CONFIG_19:import14.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_20:any[];
  __EventManager_21:import15.EventManager;
  __DomSharedStylesHost_22:import16.DomSharedStylesHost;
  __AnimationDriver_23:any;
  __DomRootRenderer_24:import17.DomRootRenderer_;
  __RootRenderer_25:any;
  __DomSanitizer_26:import18.DomSanitizerImpl;
  __Sanitizer_27:any;
  __ViewUtils_28:import19.ViewUtils;
  __IterableDiffers_29:any;
  __KeyValueDiffers_30:any;
  __SharedStylesHost_31:any;
  __Title_32:import20.Title;
  __BrowserXhr_33:import21.BrowserXhr;
  __ResponseOptions_34:import22.BaseResponseOptions;
  __XSRFStrategy_35:any;
  __XHRBackend_36:import23.XHRBackend;
  __RequestOptions_37:import24.BaseRequestOptions;
  __Http_38:any;
  __RadioControlRegistry_39:import25.RadioControlRegistry;
  __ROUTER_CONFIGURATION_40:any;
  __LocationStrategy_41:any;
  __Location_42:import26.Location;
  __UrlSerializer_43:import27.DefaultUrlSerializer;
  __RouterOutletMap_44:import28.RouterOutletMap;
  __NgModuleFactoryLoader_45:import29.SystemJsNgModuleLoader;
  __ROUTES_46:any[];
  __Router_47:any;
  __ActivatedRoute_48:any;
  __APP_BOOTSTRAP_LISTENER_49:any[];
  __SlackService_50:import30.SlackService;
  __AuthService_51:import31.AuthService;
  constructor(parent:import32.Injector) {
    super(parent,[
      import33.HomeComponentNgFactory,
      import34.CollisionTableComponentNgFactory,
      import35.ForumComponentNgFactory,
      import33.HomeComponentNgFactory,
      import36.AppComponentNgFactory
    ]
    ,[import36.AppComponentNgFactory]);
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == (null as any))) { (this.__LOCALE_ID_9 = 'en-US'); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == (null as any))) { (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _ApplicationRef_15():any {
    if ((this.__ApplicationRef_15 == (null as any))) { (this.__ApplicationRef_15 = this._ApplicationRef__14); }
    return this.__ApplicationRef_15;
  }
  get _Compiler_16():import13.Compiler {
    if ((this.__Compiler_16 == (null as any))) { (this.__Compiler_16 = new import13.Compiler()); }
    return this.__Compiler_16;
  }
  get _APP_ID_17():any {
    if ((this.__APP_ID_17 == (null as any))) { (this.__APP_ID_17 = import37._appIdRandomProviderFactory()); }
    return this.__APP_ID_17;
  }
  get _DOCUMENT_18():any {
    if ((this.__DOCUMENT_18 == (null as any))) { (this.__DOCUMENT_18 = import4._document()); }
    return this.__DOCUMENT_18;
  }
  get _HAMMER_GESTURE_CONFIG_19():import14.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_19 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_19 = new import14.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_19;
  }
  get _EVENT_MANAGER_PLUGINS_20():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_20 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_20 = [
      new import38.DomEventsPlugin(),
      new import39.KeyEventsPlugin(),
      new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_19)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_20;
  }
  get _EventManager_21():import15.EventManager {
    if ((this.__EventManager_21 == (null as any))) { (this.__EventManager_21 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_20,this.parent.get(import40.NgZone))); }
    return this.__EventManager_21;
  }
  get _DomSharedStylesHost_22():import16.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_22 == (null as any))) { (this.__DomSharedStylesHost_22 = new import16.DomSharedStylesHost(this._DOCUMENT_18)); }
    return this.__DomSharedStylesHost_22;
  }
  get _AnimationDriver_23():any {
    if ((this.__AnimationDriver_23 == (null as any))) { (this.__AnimationDriver_23 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_23;
  }
  get _DomRootRenderer_24():import17.DomRootRenderer_ {
    if ((this.__DomRootRenderer_24 == (null as any))) { (this.__DomRootRenderer_24 = new import17.DomRootRenderer_(this._DOCUMENT_18,this._EventManager_21,this._DomSharedStylesHost_22,this._AnimationDriver_23)); }
    return this.__DomRootRenderer_24;
  }
  get _RootRenderer_25():any {
    if ((this.__RootRenderer_25 == (null as any))) { (this.__RootRenderer_25 = import41._createConditionalRootRenderer(this._DomRootRenderer_24,this.parent.get(import41.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_25;
  }
  get _DomSanitizer_26():import18.DomSanitizerImpl {
    if ((this.__DomSanitizer_26 == (null as any))) { (this.__DomSanitizer_26 = new import18.DomSanitizerImpl()); }
    return this.__DomSanitizer_26;
  }
  get _Sanitizer_27():any {
    if ((this.__Sanitizer_27 == (null as any))) { (this.__Sanitizer_27 = this._DomSanitizer_26); }
    return this.__Sanitizer_27;
  }
  get _ViewUtils_28():import19.ViewUtils {
    if ((this.__ViewUtils_28 == (null as any))) { (this.__ViewUtils_28 = new import19.ViewUtils(this._RootRenderer_25,this._APP_ID_17,this._Sanitizer_27)); }
    return this.__ViewUtils_28;
  }
  get _IterableDiffers_29():any {
    if ((this.__IterableDiffers_29 == (null as any))) { (this.__IterableDiffers_29 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_29;
  }
  get _KeyValueDiffers_30():any {
    if ((this.__KeyValueDiffers_30 == (null as any))) { (this.__KeyValueDiffers_30 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_30;
  }
  get _SharedStylesHost_31():any {
    if ((this.__SharedStylesHost_31 == (null as any))) { (this.__SharedStylesHost_31 = this._DomSharedStylesHost_22); }
    return this.__SharedStylesHost_31;
  }
  get _Title_32():import20.Title {
    if ((this.__Title_32 == (null as any))) { (this.__Title_32 = new import20.Title()); }
    return this.__Title_32;
  }
  get _BrowserXhr_33():import21.BrowserXhr {
    if ((this.__BrowserXhr_33 == (null as any))) { (this.__BrowserXhr_33 = new import21.BrowserXhr()); }
    return this.__BrowserXhr_33;
  }
  get _ResponseOptions_34():import22.BaseResponseOptions {
    if ((this.__ResponseOptions_34 == (null as any))) { (this.__ResponseOptions_34 = new import22.BaseResponseOptions()); }
    return this.__ResponseOptions_34;
  }
  get _XSRFStrategy_35():any {
    if ((this.__XSRFStrategy_35 == (null as any))) { (this.__XSRFStrategy_35 = import6._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_35;
  }
  get _XHRBackend_36():import23.XHRBackend {
    if ((this.__XHRBackend_36 == (null as any))) { (this.__XHRBackend_36 = new import23.XHRBackend(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)); }
    return this.__XHRBackend_36;
  }
  get _RequestOptions_37():import24.BaseRequestOptions {
    if ((this.__RequestOptions_37 == (null as any))) { (this.__RequestOptions_37 = new import24.BaseRequestOptions()); }
    return this.__RequestOptions_37;
  }
  get _Http_38():any {
    if ((this.__Http_38 == (null as any))) { (this.__Http_38 = import6.httpFactory(this._XHRBackend_36,this._RequestOptions_37)); }
    return this.__Http_38;
  }
  get _RadioControlRegistry_39():import25.RadioControlRegistry {
    if ((this.__RadioControlRegistry_39 == (null as any))) { (this.__RadioControlRegistry_39 = new import25.RadioControlRegistry()); }
    return this.__RadioControlRegistry_39;
  }
  get _ROUTER_CONFIGURATION_40():any {
    if ((this.__ROUTER_CONFIGURATION_40 == (null as any))) { (this.__ROUTER_CONFIGURATION_40 = {}); }
    return this.__ROUTER_CONFIGURATION_40;
  }
  get _LocationStrategy_41():any {
    if ((this.__LocationStrategy_41 == (null as any))) { (this.__LocationStrategy_41 = import5.provideLocationStrategy(this.parent.get(import42.PlatformLocation),this.parent.get(import43.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_40)); }
    return this.__LocationStrategy_41;
  }
  get _Location_42():import26.Location {
    if ((this.__Location_42 == (null as any))) { (this.__Location_42 = new import26.Location(this._LocationStrategy_41)); }
    return this.__Location_42;
  }
  get _UrlSerializer_43():import27.DefaultUrlSerializer {
    if ((this.__UrlSerializer_43 == (null as any))) { (this.__UrlSerializer_43 = new import27.DefaultUrlSerializer()); }
    return this.__UrlSerializer_43;
  }
  get _RouterOutletMap_44():import28.RouterOutletMap {
    if ((this.__RouterOutletMap_44 == (null as any))) { (this.__RouterOutletMap_44 = new import28.RouterOutletMap()); }
    return this.__RouterOutletMap_44;
  }
  get _NgModuleFactoryLoader_45():import29.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_45 == (null as any))) { (this.__NgModuleFactoryLoader_45 = new import29.SystemJsNgModuleLoader(this._Compiler_16,this.parent.get(import29.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_45;
  }
  get _ROUTES_46():any[] {
      if ((this.__ROUTES_46 == (null as any))) { (this.__ROUTES_46 = [[
        {
          path: '',
          component: import44.HomeComponent
        }
        ,
        {
          path: 'login',
          loadChildren: './auth/login.module#LoginModule'
        }
        ,
        {
          path: 'signup',
          loadChildren: './auth/signup.module#SignupModule'
        }
        ,
        {
          path: 'unetsteam',
          loadChildren: './unitydocs/unitysteam.module#UnitySteamModule'
        }
        ,
        {
          path: 'news',
          loadChildren: './news/news.module#NewsModule'
        }
        ,
        {
          path: 'collisiontable',
          component: import45.CollisionTableComponent
        }
        ,
        {
          path: 'forum',
          component: import46.ForumComponent
        }
        ,
        {
          path: '**',
          component: import44.HomeComponent
        }

      ]
    ]); }
    return this.__ROUTES_46;
  }
  get _Router_47():any {
    if ((this.__Router_47 == (null as any))) { (this.__Router_47 = import5.setupRouter(this._ApplicationRef_15,this._UrlSerializer_43,this._RouterOutletMap_44,this._Location_42,this,this._NgModuleFactoryLoader_45,this._Compiler_16,this._ROUTES_46,this._ROUTER_CONFIGURATION_40)); }
    return this.__Router_47;
  }
  get _ActivatedRoute_48():any {
    if ((this.__ActivatedRoute_48 == (null as any))) { (this.__ActivatedRoute_48 = import5.rootRoute(this._Router_47)); }
    return this.__ActivatedRoute_48;
  }
  get _APP_BOOTSTRAP_LISTENER_49():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_49 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_49 = [import5.initialRouterNavigation(this._Router_47,this._ROUTER_CONFIGURATION_40)]); }
    return this.__APP_BOOTSTRAP_LISTENER_49;
  }
  get _SlackService_50():import30.SlackService {
    if ((this.__SlackService_50 == (null as any))) { (this.__SlackService_50 = new import30.SlackService(this._Http_38)); }
    return this.__SlackService_50;
  }
  get _AuthService_51():import31.AuthService {
    if ((this.__AuthService_51 == (null as any))) { (this.__AuthService_51 = new import31.AuthService(this._Http_38)); }
    return this.__AuthService_51;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import47.Router,(null as any)));
    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
    this._HttpModule_5 = new import6.HttpModule();
    this._InternalFormsSharedModule_6 = new import7.InternalFormsSharedModule();
    this._FormsModule_7 = new import8.FormsModule();
    this._AppModule_8 = new import1.AppModule();
    this._ErrorHandler_11 = import4.errorHandler();
    this._ApplicationInitStatus_12 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER,(null as any)));
    this._Testability_13 = new import11.Testability(this.parent.get(import40.NgZone));
    this._ApplicationRef__14 = new import12.ApplicationRef_(this.parent.get(import40.NgZone),this.parent.get(import48.Console),this,this._ErrorHandler_11,this,this._ApplicationInitStatus_12,this.parent.get(import11.TestabilityRegistry,(null as any)),this._Testability_13);
    return this._AppModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import6.HttpModule)) { return this._HttpModule_5; }
    if ((token === import7.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_6; }
    if ((token === import8.FormsModule)) { return this._FormsModule_7; }
    if ((token === import1.AppModule)) { return this._AppModule_8; }
    if ((token === import49.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import50.ErrorHandler)) { return this._ErrorHandler_11; }
    if ((token === import10.ApplicationInitStatus)) { return this._ApplicationInitStatus_12; }
    if ((token === import11.Testability)) { return this._Testability_13; }
    if ((token === import12.ApplicationRef_)) { return this._ApplicationRef__14; }
    if ((token === import12.ApplicationRef)) { return this._ApplicationRef_15; }
    if ((token === import13.Compiler)) { return this._Compiler_16; }
    if ((token === import37.APP_ID)) { return this._APP_ID_17; }
    if ((token === import51.DOCUMENT)) { return this._DOCUMENT_18; }
    if ((token === import14.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_19; }
    if ((token === import15.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_20; }
    if ((token === import15.EventManager)) { return this._EventManager_21; }
    if ((token === import16.DomSharedStylesHost)) { return this._DomSharedStylesHost_22; }
    if ((token === import52.AnimationDriver)) { return this._AnimationDriver_23; }
    if ((token === import17.DomRootRenderer)) { return this._DomRootRenderer_24; }
    if ((token === import53.RootRenderer)) { return this._RootRenderer_25; }
    if ((token === import18.DomSanitizer)) { return this._DomSanitizer_26; }
    if ((token === import54.Sanitizer)) { return this._Sanitizer_27; }
    if ((token === import19.ViewUtils)) { return this._ViewUtils_28; }
    if ((token === import55.IterableDiffers)) { return this._IterableDiffers_29; }
    if ((token === import56.KeyValueDiffers)) { return this._KeyValueDiffers_30; }
    if ((token === import16.SharedStylesHost)) { return this._SharedStylesHost_31; }
    if ((token === import20.Title)) { return this._Title_32; }
    if ((token === import21.BrowserXhr)) { return this._BrowserXhr_33; }
    if ((token === import22.ResponseOptions)) { return this._ResponseOptions_34; }
    if ((token === import57.XSRFStrategy)) { return this._XSRFStrategy_35; }
    if ((token === import23.XHRBackend)) { return this._XHRBackend_36; }
    if ((token === import24.RequestOptions)) { return this._RequestOptions_37; }
    if ((token === import58.Http)) { return this._Http_38; }
    if ((token === import25.RadioControlRegistry)) { return this._RadioControlRegistry_39; }
    if ((token === import5.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_40; }
    if ((token === import43.LocationStrategy)) { return this._LocationStrategy_41; }
    if ((token === import26.Location)) { return this._Location_42; }
    if ((token === import27.UrlSerializer)) { return this._UrlSerializer_43; }
    if ((token === import28.RouterOutletMap)) { return this._RouterOutletMap_44; }
    if ((token === import59.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_45; }
    if ((token === import60.ROUTES)) { return this._ROUTES_46; }
    if ((token === import47.Router)) { return this._Router_47; }
    if ((token === import61.ActivatedRoute)) { return this._ActivatedRoute_48; }
    if ((token === import37.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_49; }
    if ((token === import30.SlackService)) { return this._SlackService_50; }
    if ((token === import31.AuthService)) { return this._AuthService_51; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__14.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);