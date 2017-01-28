webpackJsonp([2],{

/***/ 957:
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(1);\r\nvar common_1 = __webpack_require__(122);\r\nvar forms_1 = __webpack_require__(419);\r\nvar login_form_component_1 = __webpack_require__(963);\r\nvar prevent_unsaved_changes_guard_service_1 = __webpack_require__(961);\r\nvar auth_service_1 = __webpack_require__(265);\r\nvar login_routing_1 = __webpack_require__(968);\r\nvar LoginModule = (function () {\r\n    function LoginModule() {\r\n    }\r\n    LoginModule = __decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                common_1.CommonModule,\r\n                forms_1.FormsModule,\r\n                forms_1.ReactiveFormsModule,\r\n                login_routing_1.loginRouting\r\n            ],\r\n            declarations: [\r\n                login_form_component_1.LoginFormComponent\r\n            ],\r\n            providers: [\r\n                auth_service_1.AuthService,\r\n                prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard\r\n            ]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], LoginModule);\r\n    return LoginModule;\r\n}());\r\nexports.LoginModule = LoginModule;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9hdXRoL2xvZ2luLm1vZHVsZS50cz83Mjg3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGNvbW1vbl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tbW9uJyk7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZSgnQGFuZ3VsYXIvZm9ybXMnKTtcclxudmFyIGxvZ2luX2Zvcm1fY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2xvZ2luLWZvcm0uY29tcG9uZW50Jyk7XHJcbnZhciBwcmV2ZW50X3Vuc2F2ZWRfY2hhbmdlc19ndWFyZF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9zaGFyZWQvcHJldmVudC11bnNhdmVkLWNoYW5nZXMtZ3VhcmQuc2VydmljZScpO1xyXG52YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL2F1dGguc2VydmljZScpO1xyXG52YXIgbG9naW5fcm91dGluZ18xID0gcmVxdWlyZSgnLi9sb2dpbi5yb3V0aW5nJyk7XHJcbnZhciBMb2dpbk1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMb2dpbk1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIExvZ2luTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgY29tbW9uXzEuQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIGZvcm1zXzEuUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luX3JvdXRpbmdfMS5sb2dpblJvdXRpbmdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBsb2dpbl9mb3JtX2NvbXBvbmVudF8xLkxvZ2luRm9ybUNvbXBvbmVudFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIGF1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJldmVudF91bnNhdmVkX2NoYW5nZXNfZ3VhcmRfc2VydmljZV8xLlByZXZlbnRVbnNhdmVkQ2hhbmdlc0d1YXJkXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIExvZ2luTW9kdWxlKTtcclxuICAgIHJldHVybiBMb2dpbk1vZHVsZTtcclxufSgpKTtcclxuZXhwb3J0cy5Mb2dpbk1vZHVsZSA9IExvZ2luTW9kdWxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvYXV0aC9sb2dpbi5tb2R1bGUudHNcbi8vIG1vZHVsZSBpZCA9IDk1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 961:
/***/ function(module, exports) {

"use strict";
eval("\"use strict\";\r\nvar PreventUnsavedChangesGuard = (function () {\r\n    function PreventUnsavedChangesGuard() {\r\n    }\r\n    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {\r\n        if (component.form.dirty)\r\n            return confirm('You have unsaved changes. Are you sure you want to navigate away?');\r\n        return true;\r\n    };\r\n    return PreventUnsavedChangesGuard;\r\n}());\r\nexports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zaGFyZWQvcHJldmVudC11bnNhdmVkLWNoYW5nZXMtZ3VhcmQuc2VydmljZS50cz9lZWMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgUHJldmVudFVuc2F2ZWRDaGFuZ2VzR3VhcmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHJldmVudFVuc2F2ZWRDaGFuZ2VzR3VhcmQoKSB7XHJcbiAgICB9XHJcbiAgICBQcmV2ZW50VW5zYXZlZENoYW5nZXNHdWFyZC5wcm90b3R5cGUuY2FuRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoY29tcG9uZW50LmZvcm0uZGlydHkpXHJcbiAgICAgICAgICAgIHJldHVybiBjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQcmV2ZW50VW5zYXZlZENoYW5nZXNHdWFyZDtcclxufSgpKTtcclxuZXhwb3J0cy5QcmV2ZW50VW5zYXZlZENoYW5nZXNHdWFyZCA9IFByZXZlbnRVbnNhdmVkQ2hhbmdlc0d1YXJkO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvc2hhcmVkL3ByZXZlbnQtdW5zYXZlZC1jaGFuZ2VzLWd1YXJkLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDk2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 962:
/***/ function(module, exports) {

"use strict";
eval("\"use strict\";\r\nvar User = (function () {\r\n    function User(username, password, email) {\r\n        this.username = username;\r\n        this.password = password;\r\n        this.email = email;\r\n    }\r\n    return User;\r\n}());\r\nexports.User = User;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9hdXRoL3VzZXIubW9kZWwudHM/YWUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIFVzZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlcih1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsKSB7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVXNlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYXBwL2F1dGgvdXNlci5tb2RlbC50c1xuLy8gbW9kdWxlIGlkID0gOTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 963:
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(1);\r\nvar forms_1 = __webpack_require__(419);\r\nvar router_1 = __webpack_require__(264);\r\nvar auth_service_1 = __webpack_require__(265);\r\nvar user_model_1 = __webpack_require__(962);\r\nvar LoginFormComponent = (function () {\r\n    function LoginFormComponent(fb, authService, router) {\r\n        this.authService = authService;\r\n        this.router = router;\r\n        this.form = fb.group({\r\n            username: ['', forms_1.Validators.required],\r\n            password: ['', forms_1.Validators.required]\r\n        });\r\n    }\r\n    // form = new FormGroup({\r\n    //     username: new FormControl('', Validators.required),\r\n    //     password: new FormControl('', Validators.required)\r\n    // });\r\n    LoginFormComponent.prototype.login = function () {\r\n        var _this = this;\r\n        var user = new user_model_1.User(this.form.value.username, this.form.value.password);\r\n        this.authService.signin(user)\r\n            .subscribe(function (data) {\r\n            localStorage.setItem('token', data.token);\r\n            localStorage.setItem('userId', data.userId);\r\n            _this.router.navigateByUrl('/');\r\n        }, function (error) { return console.error(error); });\r\n        this.form.reset();\r\n    };\r\n    LoginFormComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'login-form',\r\n            template: __webpack_require__(977),\r\n            styles: [\"\\n    .form-group{\\n        width: 30%; \\n        margin: 20px auto;\\n    }\\n    .btn{\\n        margin-top: 20px;\\n    }\\n    .ng-touched.ng-invalid.form-control{\\n        border: 1px solid red;\\n    }\\n    h1{\\n        margin: 20px;\\n    }\\n    \"]\r\n        }), \r\n        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])\r\n    ], LoginFormComponent);\r\n    return LoginFormComponent;\r\n    var _a, _b, _c;\r\n}());\r\nexports.LoginFormComponent = LoginFormComponent;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9hdXRoL2xvZ2luLWZvcm0uY29tcG9uZW50LnRzPzQwNTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2Zvcm1zJyk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2F1dGguc2VydmljZVwiKTtcclxudmFyIHVzZXJfbW9kZWxfMSA9IHJlcXVpcmUoJy4vdXNlci5tb2RlbCcpO1xyXG52YXIgTG9naW5Gb3JtQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvZ2luRm9ybUNvbXBvbmVudChmYiwgYXV0aFNlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBbJycsIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIGZvcm1zXzEuVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgIC8vICAgICB1c2VybmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgIC8vICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgLy8gfSk7XHJcbiAgICBMb2dpbkZvcm1Db21wb25lbnQucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVzZXIgPSBuZXcgdXNlcl9tb2RlbF8xLlVzZXIodGhpcy5mb3JtLnZhbHVlLnVzZXJuYW1lLCB0aGlzLmZvcm0udmFsdWUucGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XHJcbiAgICB9O1xyXG4gICAgTG9naW5Gb3JtQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbG9naW4tZm9ybScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbXCJcXG4gICAgLmZvcm0tZ3JvdXB7XFxuICAgICAgICB3aWR0aDogMzAlOyBcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICB9XFxuICAgIC5idG57XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuICAgIC5uZy10b3VjaGVkLm5nLWludmFsaWQuZm9ybS1jb250cm9se1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICB9XFxuICAgIGgxe1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgIFwiXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFsodHlwZW9mIChfYSA9IHR5cGVvZiBmb3Jtc18xLkZvcm1CdWlsZGVyICE9PSAndW5kZWZpbmVkJyAmJiBmb3Jtc18xLkZvcm1CdWlsZGVyKSA9PT0gJ2Z1bmN0aW9uJyAmJiBfYSkgfHwgT2JqZWN0LCAodHlwZW9mIChfYiA9IHR5cGVvZiBhdXRoX3NlcnZpY2VfMS5BdXRoU2VydmljZSAhPT0gJ3VuZGVmaW5lZCcgJiYgYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UpID09PSAnZnVuY3Rpb24nICYmIF9iKSB8fCBPYmplY3QsICh0eXBlb2YgKF9jID0gdHlwZW9mIHJvdXRlcl8xLlJvdXRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgcm91dGVyXzEuUm91dGVyKSA9PT0gJ2Z1bmN0aW9uJyAmJiBfYykgfHwgT2JqZWN0XSlcclxuICAgIF0sIExvZ2luRm9ybUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTG9naW5Gb3JtQ29tcG9uZW50O1xyXG4gICAgdmFyIF9hLCBfYiwgX2M7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTG9naW5Gb3JtQ29tcG9uZW50ID0gTG9naW5Gb3JtQ29tcG9uZW50O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvYXV0aC9sb2dpbi1mb3JtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gOTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\"use strict\";\r\nvar router_1 = __webpack_require__(264);\r\nvar login_form_component_1 = __webpack_require__(963);\r\nvar prevent_unsaved_changes_guard_service_1 = __webpack_require__(961);\r\nvar LOGIN_ROUTES = [\r\n    { path: '', component: login_form_component_1.LoginFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },\r\n];\r\nexports.loginRouting = router_1.RouterModule.forChild(LOGIN_ROUTES);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9hdXRoL2xvZ2luLnJvdXRpbmcudHM/NGQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBsb2dpbl9mb3JtX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9sb2dpbi1mb3JtLmNvbXBvbmVudCcpO1xyXG52YXIgcHJldmVudF91bnNhdmVkX2NoYW5nZXNfZ3VhcmRfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vc2hhcmVkL3ByZXZlbnQtdW5zYXZlZC1jaGFuZ2VzLWd1YXJkLnNlcnZpY2UnKTtcclxudmFyIExPR0lOX1JPVVRFUyA9IFtcclxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogbG9naW5fZm9ybV9jb21wb25lbnRfMS5Mb2dpbkZvcm1Db21wb25lbnQsIGNhbkRlYWN0aXZhdGU6IFtwcmV2ZW50X3Vuc2F2ZWRfY2hhbmdlc19ndWFyZF9zZXJ2aWNlXzEuUHJldmVudFVuc2F2ZWRDaGFuZ2VzR3VhcmRdIH0sXHJcbl07XHJcbmV4cG9ydHMubG9naW5Sb3V0aW5nID0gcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvckNoaWxkKExPR0lOX1JPVVRFUyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2FwcC9hdXRoL2xvZ2luLnJvdXRpbmcudHNcbi8vIG1vZHVsZSBpZCA9IDk2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 977:
/***/ function(module, exports) {

eval("module.exports = \"<form [formGroup]=\\\"form\\\" (ngSubmit)=\\\"login()\\\">\\r\\n    <div class=\\\"form-group container\\\">\\r\\n        <h1 style=\\\"text-align: center\\\">Login</h1>\\r\\n        <input \\r\\n            formControlName=\\\"username\\\"\\r\\n            id=\\\"username\\\" \\r\\n            type=\\\"text\\\" \\r\\n            class=\\\"form-control\\\"\\r\\n            placeholder=\\\"Username\\\">\\r\\n        <div *ngIf=\\\"form.get('username').touched && !form.get('username').valid\\\">\\r\\n            <div \\r\\n                class=\\\"alert alert-danger\\\" \\r\\n                *ngIf=\\\"form.get('username').errors.invalidLogin\\\">Username or password is invalid</div>\\r\\n            <div \\r\\n                *ngIf=\\\"form.get('username').errors.required\\\"\\r\\n                class=\\\"alert alert-danger\\\">Username is required.</div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"form-group container\\\">\\r\\n        <input \\r\\n            formControlName=\\\"password\\\"\\r\\n            id=\\\"password\\\" \\r\\n            type=\\\"password\\\" \\r\\n            class=\\\"form-control\\\"\\r\\n            placeholder=\\\"Password\\\">\\r\\n            <div \\r\\n            *ngIf=\\\"form.get('password').touched && !form.get('password').valid\\\"\\r\\n            class=\\\"alert alert-danger\\\">Password is required.\\r\\n            </div>\\r\\n        <button class=\\\"btn btn-lg btn-primary btn-block\\\" type=\\\"submit\\\">Log In</button>\\r\\n    </div>\\r\\n</form>\\r\\n\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9hdXRoL2xvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWw/NDljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImxvZ2luKClcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8aDEgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlclxcXCI+TG9naW48L2gxPlxcclxcbiAgICAgICAgPGlucHV0IFxcclxcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cXFwidXNlcm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgaWQ9XFxcInVzZXJuYW1lXFxcIiBcXHJcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmb3JtLmdldCgndXNlcm5hbWUnKS50b3VjaGVkICYmICFmb3JtLmdldCgndXNlcm5hbWUnKS52YWxpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJmb3JtLmdldCgndXNlcm5hbWUnKS5lcnJvcnMuaW52YWxpZExvZ2luXFxcIj5Vc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbnZhbGlkPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBcXHJcXG4gICAgICAgICAgICAgICAgKm5nSWY9XFxcImZvcm0uZ2V0KCd1c2VybmFtZScpLmVycm9ycy5yZXF1aXJlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+VXNlcm5hbWUgaXMgcmVxdWlyZWQuPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBcXHJcXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XFxcInBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgIGlkPVxcXCJwYXNzd29yZFxcXCIgXFxyXFxuICAgICAgICAgICAgdHlwZT1cXFwicGFzc3dvcmRcXFwiIFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IFxcclxcbiAgICAgICAgICAgICpuZ0lmPVxcXCJmb3JtLmdldCgncGFzc3dvcmQnKS50b3VjaGVkICYmICFmb3JtLmdldCgncGFzc3dvcmQnKS52YWxpZFxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5QYXNzd29yZCBpcyByZXF1aXJlZC5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPkxvZyBJbjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYXBwL2F1dGgvbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});