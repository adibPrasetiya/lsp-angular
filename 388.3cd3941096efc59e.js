"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[388],{7388:(ct,y,c)=>{c.r(y),c.d(y,{AuthModule:()=>ot});var b=c(9808),e=c(5e3);let I=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-registrasi"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"registrasi works!"),e.qZA())},styles:[""]}),n})();var l=c(3075),j=c(256),M=c(4996),Z=c(5826),g=c(1314),p=c(7429),k=c(508),B=c(7423),u=c(7579),S=c(5698),w=c(2722),h=c(1777),C=c(925),A=c(3191),U=c(9841),z=c(7272),G=c(8306),Y=c(5684),N=c(8372),O=c(4004),Q=c(8675);const L=new Set;let f,W=(()=>{class n{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):X}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&function H(n){if(!L.has(n))try{f||(f=document.createElement("style"),f.setAttribute("type","text/css"),document.head.appendChild(f)),f.sheet&&(f.sheet.insertRule(`@media ${n} {body{ }}`,0),L.add(n))}catch(s){console.error(s)}}(t),this._matchMedia(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.t4))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function X(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}let T=(()=>{class n{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new u.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return R((0,A.Eq)(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){const a=R((0,A.Eq)(t)).map(r=>this._registerQuery(r).observable);let o=(0,U.a)(a);return o=(0,z.z)(o.pipe((0,S.q)(1)),o.pipe((0,Y.T)(1),(0,N.b)(0))),o.pipe((0,O.U)(r=>{const d={matches:!1,breakpoints:{}};return r.forEach(({matches:m,query:x})=>{d.matches=d.matches||m,d.breakpoints[x]=m}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const i=this._mediaMatcher.matchMedia(t),o={observable:new G.y(r=>{const d=m=>this._zone.run(()=>r.next(m));return i.addListener(d),()=>{i.removeListener(d)}}).pipe((0,Q.O)(i),(0,O.U)(({matches:r})=>({query:t,matches:r})),(0,w.R)(this._destroySubject)),mql:i};return this._queries.set(t,o),o}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(W),e.LFG(e.R0b))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function R(n){return n.map(s=>s.split(",")).reduce((s,t)=>s.concat(t)).map(s=>s.trim())}var P=c(5664);function K(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"button",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().action()}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.data.action)}}function V(n,s){}const F=new e.OlP("MatSnackBarData");class v{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}const $=Math.pow(2,31)-1;class _{constructor(s,t){this._overlayRef=t,this._afterDismissed=new u.x,this._afterOpened=new u.x,this._onAction=new u.x,this._dismissedByAction=!1,this.containerInstance=s,s._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(s){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(s,$))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}let q=(()=>{class n{constructor(t,i){this.snackBarRef=t,this.data=i}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_),e.Y36(F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[[1,"mat-simple-snack-bar-content"],["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"span",0),e._uU(1),e.qZA(),e.YNc(2,K,3,1,"div",1)),2&t&&(e.xp6(1),e.Oqu(i.data.message),e.xp6(1),e.Q6J("ngIf",i.hasAction))},directives:[B.lW,b.O5],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}\n"],encapsulation:2,changeDetection:0}),n})();const tt={snackBarState:(0,h.X$)("state",[(0,h.SB)("void, hidden",(0,h.oB)({transform:"scale(0.8)",opacity:0})),(0,h.SB)("visible",(0,h.oB)({transform:"scale(1)",opacity:1})),(0,h.eR)("* => visible",(0,h.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,h.eR)("* => void, * => hidden",(0,h.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,h.oB)({opacity:0})))])};let et=(()=>{class n extends p.en{constructor(t,i,a,o,r){super(),this._ngZone=t,this._elementRef=i,this._changeDetectorRef=a,this._platform=o,this.snackBarConfig=r,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new u.x,this._onExit=new u.x,this._onEnter=new u.x,this._animationState="void",this.attachDomPortal=d=>(this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachDomPortal(d)),this._live="assertive"!==r.politeness||r.announcementMessage?"off"===r.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}onAnimationEnd(t){const{fromState:i,toState:a}=t;if(("void"===a&&"void"!==i||"hidden"===a)&&this._completeExit(),"visible"===a){const o=this._onEnter;this._ngZone.run(()=>{o.next(),o.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,S.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_applySnackBarClasses(){const t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>t.classList.add(a)):t.classList.add(i)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),i=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),null==a||a.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(C.t4),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["snack-bar-container"]],viewQuery:function(t,i){if(1&t&&e.Gf(p.Pl,7),2&t){let a;e.iGM(a=e.CRH())&&(i._portalOutlet=a.first)}},hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(t,i){1&t&&e.WFA("@state.done",function(o){return i.onAnimationEnd(o)}),2&t&&e.d8E("@state",i._animationState)},features:[e.qOj],decls:3,vars:2,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,V,0,0,"ng-template",1),e.qZA(),e._UZ(2,"div")),2&t&&(e.xp6(2),e.uIk("aria-live",i._live)("role",i._role))},directives:[p.Pl],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],encapsulation:2,data:{animation:[tt.snackBarState]}}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.U8,p.eL,b.ez,B.ot,k.BQ],k.BQ]}),n})();const E=new e.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function nt(){return new v}});let it=(()=>{class n{constructor(t,i,a,o,r,d){this._overlay=t,this._live=i,this._injector=a,this._breakpointObserver=o,this._parentSnackBar=r,this._defaultConfig=d,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i="",a){const o=Object.assign(Object.assign({},this._defaultConfig),a);return o.data={message:t,action:i},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){const o=e.zs3.create({parent:i&&i.viewContainerRef&&i.viewContainerRef.injector||this._injector,providers:[{provide:v,useValue:i}]}),r=new p.C5(this.snackBarContainerComponent,i.viewContainerRef,o),d=t.attach(r);return d.instance.snackBarConfig=i,d.instance}_attach(t,i){const a=Object.assign(Object.assign(Object.assign({},new v),this._defaultConfig),i),o=this._createOverlay(a),r=this._attachSnackBarContainer(o,a),d=new _(r,o);if(t instanceof e.Rgc){const m=new p.UE(t,null,{$implicit:a.data,snackBarRef:d});d.instance=r.attachTemplatePortal(m)}else{const m=this._createInjector(a,d),x=new p.C5(t,void 0,m),rt=r.attachComponentPortal(x);d.instance=rt.instance}return this._breakpointObserver.observe("(max-width: 599.98px) and (orientation: portrait)").pipe((0,w.R)(o.detachments())).subscribe(m=>{o.overlayElement.classList.toggle(this.handsetCssClass,m.matches)}),a.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(d,a),this._openedSnackBarRef=d,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration))}_createOverlay(t){const i=new g.X_;i.direction=t.direction;let a=this._overlay.position().global();const o="rtl"===t.direction,r="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!o||"end"===t.horizontalPosition&&o,d=!r&&"center"!==t.horizontalPosition;return r?a.left("0"):d?a.right("0"):a.centerHorizontally(),"top"===t.verticalPosition?a.top("0"):a.bottom("0"),i.positionStrategy=a,this._overlay.create(i)}_createInjector(t,i){return e.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:_,useValue:i},{provide:F,useValue:t.data}]})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.aV),e.LFG(P.Kd),e.LFG(e.zs3),e.LFG(T),e.LFG(n,12),e.LFG(E))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),at=(()=>{class n extends it{constructor(t,i,a,o,r,d){super(t,i,a,o,r,d),this.simpleSnackBarComponent=q,this.snackBarContainerComponent=et,this.handsetCssClass="mat-snack-bar-handset"}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.aV),e.LFG(P.Kd),e.LFG(e.zs3),e.LFG(T),e.LFG(n,12),e.LFG(E))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:D}),n})();const st=[{path:"registrasi",component:I},{path:"login",component:(()=>{class n{constructor(t,i,a,o,r){this.formBuilder=t,this.authService=i,this.router=a,this.authGuard=o,this.snackBar=r,this.processing=!1,this.dataLogin={},this.createForm()}ngOnInit(){this.authGuard.redirectUrl&&(this.messageClass="alert alert-danger",this.message="You must to be logged in to view that page",this.previousUrl=this.authGuard.redirectUrl,this.authGuard.redirectUrl=void 0)}createForm(){this.form=this.formBuilder.group({username:["",l.kI.required],password:["",l.kI.required]})}disableForm(){this.form.controls.username.disable(),this.form.controls.password.disable()}enableForm(){this.form.controls.username.enable(),this.form.controls.password.enable()}openSnackBar(t){this.snackBar.open(t,"Tutup",{horizontalPosition:"right",verticalPosition:"top"})}onLoginSubmit(){var t,i;this.processing=!0,this.disableForm();const a={username:null===(t=this.form.get(["username"]))||void 0===t?void 0:t.value,password:null===(i=this.form.get(["password"]))||void 0===i?void 0:i.value};this.authService.login(a).subscribe(o=>{this.dataLogin=o,this.dataLogin.success?(this.openSnackBar(this.dataLogin.message),this.authService.storeUserData(this.dataLogin.token,this.dataLogin.user),this.disableForm(),setTimeout(()=>{this.router.navigate(this.previousUrl?[this.previousUrl]:["/admin/dashboard"])},2e3)):(this.openSnackBar(this.dataLogin.message),this.enableForm())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.qu),e.Y36(j.q),e.Y36(M.F0),e.Y36(Z.a),e.Y36(at))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:18,vars:1,consts:[[1,"form-signin","w-100","m-auto"],[3,"formGroup"],["src","assets/img/logo-lsp.png","alt","",1,"center"],[1,"h3","mb-3","fw-normal",2,"text-align","center"],[1,"form-floating"],["type","email","id","floatingInput","placeholder","* Username","formControlName","username",1,"form-control"],["for","floatingInput"],["type","password","id","floatingPassword","placeholder","* Password","formControlName","password",1,"form-control"],["for","floatingPassword"],["type","submit",1,"w-100","btn","btn-lg","btn-primary",3,"click"],[1,"mt-5","mb-3","text-muted",2,"text-align","center"]],template:function(t,i){1&t&&(e.TgZ(0,"body")(1,"main",0)(2,"form",1),e._UZ(3,"img",2),e.TgZ(4,"h1",3),e._uU(5,"Please sign in"),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"input",5),e.TgZ(8,"label",6),e._uU(9,"Username"),e.qZA()(),e.TgZ(10,"div",4),e._UZ(11,"input",7),e.TgZ(12,"label",8),e._uU(13,"Password"),e.qZA()(),e.TgZ(14,"button",9),e.NdJ("click",function(){return i.onLoginSubmit()}),e._uU(15,"Sign in"),e.qZA(),e.TgZ(16,"p",10),e._uU(17,"\xa9 2017\u20132022 | Badan Siber dan Sandi Negara"),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",i.form))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:40px;padding-bottom:40px;background-image:url(hero-bg.e1939682af815e8a.jpg)}.form-signin[_ngcontent-%COMP%]{max-width:330px;padding:15px}.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within{z-index:2}.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}.bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}.b-example-divider[_ngcontent-%COMP%]{height:3rem;background-color:#0000001a;border:solid rgba(0,0,0,.15);border-width:1px 0;box-shadow:inset 0 .5em 1.5em #0000001a,inset 0 .125em .5em #00000026}.b-example-vr[_ngcontent-%COMP%]{flex-shrink:0;width:1.5rem;height:100vh}.bi[_ngcontent-%COMP%]{vertical-align:-.125em;fill:currentColor}.nav-scroller[_ngcontent-%COMP%]{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}.center[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:50%}"]}),n})()}];let ot=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[b.ez,M.Bz.forChild(st),l.UX,D]]}),n})()}}]);