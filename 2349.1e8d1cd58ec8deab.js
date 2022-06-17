"use strict";var V=Math.pow;(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(Ee,H,f)=>{f.r(H),f.d(H,{ion_modal:()=>ie});var C=f(5861),c=f(7205),K=f(5729),T=f(6465),F=f(1878),g=f(3756),q=f(1316),N=f(7208),I=f(1464),ae=f(2854),de=f(9753),p=f(9442),J=f(8685),Q=f(3139);f(3509);const X=function(){var e=(0,C.Z)(function*(t,o){"function"!=typeof t.canDismiss||!(yield t.canDismiss())||(o.isRunning()?o.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(o,n){return e.apply(this,arguments)}}(),G=e=>.00255275*V(2.71828,-14.9619*e)-1.00255*V(2.71828,-.0380968*e)+1,ee=(e,t)=>(0,g.l)(400,e/Math.abs(1.1*t),500),Z=(e,t)=>{const o=1/(1-t);return e*o+-t*o},te=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=void 0===o||o<t,s=n?`calc(var(--backdrop-opacity) * ${t})`:"0",i=(0,p.c)("backdropAnimation").fromTo("opacity",0,s);return n&&i.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:i}},oe=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=`calc(var(--backdrop-opacity) * ${Z(t,o)})`,s=[{offset:0,opacity:n},{offset:1,opacity:0}],i=[{offset:0,opacity:n},{offset:o,opacity:0},{offset:1,opacity:0}],r=(0,p.c)("backdropAnimation").keyframes(0!==o?i:s);return{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:r}},ne=(e,t)=>{const{presentingEl:o,currentBreakpoint:n}=t,s=(0,g.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?te(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};r.addElement(s.querySelector("ion-backdrop")),i.addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,p.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(o){const h=window.innerWidth<768,_="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,A=(0,g.g)(o),v=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),k=document.body;if(h){const y=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=`translateY(${_?"-10px":y}) scale(0.93)`;v.afterStyles({transform:l}).beforeAddWrite(()=>k.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:l,borderRadius:"10px 10px 0 0"}]),a.addAnimation(v)}else if(a.addAnimation(r),_){const u=`translateY(-10px) scale(${_?.93:1})`;v.afterStyles({transform:u}).addElement(A.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:u}]);const d=(0,p.c)().afterStyles({transform:u}).addElement(A.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:u}]);a.addAnimation([v,d])}else i.fromTo("opacity","0","1")}else a.addAnimation(r);return a},re=(e,t,o=500)=>{const{presentingEl:n,currentBreakpoint:s}=t,i=(0,g.g)(e),{wrapperAnimation:r,backdropAnimation:a}=void 0!==s?oe(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const h=(0,p.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(n){const _=window.innerWidth<768,A="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,v=(0,g.g)(n),k=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(u=>{1===u&&(n.style.setProperty("overflow",""),Array.from(y.querySelectorAll("ion-modal")).filter(l=>void 0!==l.presentingElement).length<=1&&y.style.setProperty("background-color",""))}),y=document.body;if(_){const u=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m=`translateY(${A?"-10px":u}) scale(0.93)`;k.addElement(n).keyframes([{offset:0,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),h.addAnimation(k)}else if(h.addAnimation(a),A){const d=`translateY(-10px) scale(${A?.93:1})`;k.addElement(v.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:d},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const l=(0,p.c)().addElement(v.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:d},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);h.addAnimation([k,l])}else r.fromTo("opacity","1","0")}else h.addAnimation(a);return h},me=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,g.g)(e),{wrapperAnimation:s,backdropAnimation:i}=void 0!==o?te(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return i.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelector(".modal-wrapper")),(0,p.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,s])},ue=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,g.g)(e),{wrapperAnimation:s,backdropAnimation:i}=void 0!==o?oe(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return i.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelector(".modal-wrapper")),(0,p.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,s])},ie=class{constructor(e){(0,c.r)(this,e),this.didPresent=(0,c.e)(this,"ionModalDidPresent",7),this.willPresent=(0,c.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,c.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,c.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,c.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,c.e)(this,"didPresent",7),this.willPresentShorthand=(0,c.e)(this,"willPresent",7),this.willDismissShorthand=(0,c.e)(this,"willDismiss",7),this.didDismissShorthand=(0,c.e)(this,"didDismiss",7),this.modalIndex=ke++,this.coreDelegate=(0,F.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:o,destroyTriggerInteraction:n}=this;n&&n();const s=void 0!==t?document.getElementById(t):null;s&&(this.destroyTriggerInteraction=((r,a)=>{const h=()=>{a.present()};return r.addEventListener("click",h),()=>{r.removeEventListener("click",h)}})(s,o))},this.onBackdropTap=()=>{this.dismiss(void 0,I.B)},this.onLifecycle=t=>{const o=this.usersElement,n=we[t.type];if(o&&n){const s=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(s)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){var t=this;return(0,C.Z)(function*(){t.gesture?t.gesture.enable(e):e&&(yield t.initSwipeToClose())})()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,o)=>t-o))}connectedCallback(){(0,I.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:o}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,N.p)("Your breakpoints array must include the initialBreakpoint value."),o&&(0,N.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,g.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(){var e=this;return(0,C.Z)(function*(){const{canDismiss:t}=e;return void 0===t||("function"==typeof t?t():t)})()}present(){var e=this;return(0,C.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:o,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,F.a)(n,e.el,e.component,["ion-page"],t,o),yield(0,de.e)(e.usersElement),(0,c.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,I.d)(e,"modalEnter",ne,me,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():(e.swipeToClose||void 0!==e.canDismiss&&void 0!==e.presentingElement)&&(yield e.initSwipeToClose()),"undefined"!=typeof window&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,g.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(q.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;if("ios"!==(0,K.b)(this))return;const{el:t}=this,o=this.leaveAnimation||K.c.get("modalLeave",re),n=this.animation=o(t,{presentingEl:this.presentingElement});(0,T.a)(t)?(this.gesture=((e,t,o)=>{const n=e.offsetHeight;let s=!1,i=!1,r=null,a=null,_=!0;const d=(0,Q.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:l=>{const m=l.event.target;return null===m||!m.closest||(r=(0,T.f)(m),r?(a=(0,T.i)(r)?(0,g.g)(r).querySelector(".inner-scroll"):r,!r.querySelector("ion-refresher")&&0===a.scrollTop):null===m.closest("ion-footer"))},onStart:l=>{const{deltaY:m}=l;_=!r||!(0,T.i)(r)||r.scrollY,i=void 0!==e.canDismiss&&!0!==e.canDismiss,m>0&&r&&(0,T.d)(r),t.progressStart(!0,s?1:0)},onMove:l=>{const{deltaY:m}=l;m>0&&r&&(0,T.d)(r);const E=l.deltaY/n,b=E>=0&&i,w=b?.2:.9999,R=b?G(E/w):E,P=(0,g.l)(1e-4,R,w);t.progressStep(P)},onEnd:l=>{const m=l.velocityY,E=l.deltaY/n,b=E>=0&&i,w=b?.2:.9999,R=b?G(E/w):E,P=(0,g.l)(1e-4,R,w),S=!b&&(l.deltaY+1e3*m)/n>=.5;let W=S?-.001:.001;S?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),W+=(0,J.g)([0,0],[.32,.72],[0,1],[1,1],P)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),W+=(0,J.g)([0,0],[1,0],[.68,.28],[1,1],P)[0]);const z=ee(S?E*n:(1-P)*n,m);s=S,d.enable(!1),r&&(0,T.r)(r,_),t.onFinish(()=>{S||d.enable(!0)}).progressEnd(S?1:0,W,z),b&&P>w/4?X(e,t):S&&o()}});return d})(t,n,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,C.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)):(0,T.p)(t)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:o}=this;if(!e||void 0===t)return;const n=this.enterAnimation||K.c.get("modalEnter",ne),s=this.animation=n(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:o});s.progressStart(!0,1);const{gesture:i,moveSheetToBreakpoint:r}=((e,t,o,n,s,i,r=[],a,h,_)=>{const k={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==s?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-s,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},y=e.querySelector("ion-content"),u=o.clientHeight;let d=n,l=0,m=!1;const b=i.childAnimations.find(x=>"wrapperAnimation"===x.id),w=i.childAnimations.find(x=>"backdropAnimation"===x.id),R=r[r.length-1],P=r[0],$=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},S=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};b&&w&&(b.keyframes([...k.WRAPPER_KEYFRAMES]),w.keyframes([...k.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-d),d>s?$():S()),y&&d!==R&&(y.scrollY=!1);const se=x=>{const{breakpoint:O,canDismiss:B,breakpointOffset:M}=x,Y=B&&0===O,D=Y?d:O,L=0!==D;d=0,b&&w&&(b.keyframes([{offset:0,transform:`translateY(${100*M}%)`},{offset:1,transform:`translateY(${100*(1-D)}%)`}]),w.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${Z(1-M,s)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${Z(D,s)})`}]),i.progressStep(0)),U.enable(!1),i.onFinish(()=>{L&&(b&&w?(0,g.r)(()=>{b.keyframes([...k.WRAPPER_KEYFRAMES]),w.keyframes([...k.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-D),d=D,_(d),y&&d===r[r.length-1]&&(y.scrollY=!0),d>s?$():S(),U.enable(!0)}):U.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),Y?X(e,i):L||h()},U=(0,Q.createGesture)({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:x=>{const O=x.event.target.closest("ion-content");return d=a(),!(1===d&&O)},onStart:()=>{m=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===P,y&&(y.scrollY=!1),(0,g.r)(()=>{e.focus()}),i.progressStart(!0,1-d)},onMove:x=>{const B=r.length>1?1-r[1]:void 0,M=1-d+x.deltaY/u,Y=void 0!==B&&M>=B&&m,D=Y?.95:.9999,L=Y&&void 0!==B?B+G((M-B)/(D-B)):M;l=(0,g.l)(1e-4,L,D),i.progressStep(l)},onEnd:x=>{const M=d-(x.deltaY+100*x.velocityY)/u,Y=r.reduce((D,L)=>Math.abs(L-M)<Math.abs(D-M)?L:D);se({breakpoint:Y,breakpointOffset:l,canDismiss:m})}});return{gesture:U,moveSheetToBreakpoint:se}})(this.el,this.backdropEl,e,t,o,s,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=i,this.moveSheetToBreakpoint=r,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,C.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var o=this;return(0,C.Z)(function*(){if(o.gestureAnimationDismissing&&"gesture"!==t||"handler"!==t&&!(yield o.checkCanDismiss()))return!1;"undefined"!=typeof window&&o.keyboardOpenCallback&&window.removeEventListener(q.KEYBOARD_DID_OPEN,o.keyboardOpenCallback),void 0!==o.currentTransition&&(yield o.currentTransition);const n=I.h.get(o)||[];o.currentTransition=(0,I.f)(o,e,t,"modalLeave",re,ue,{presentingEl:o.presentingElement,currentBreakpoint:o.currentBreakpoint||o.initialBreakpoint,backdropBreakpoint:o.backdropBreakpoint});const s=yield o.currentTransition;if(s){const{delegate:i}=o.getDelegate();yield(0,F.d)(i,o.usersElement),(0,c.c)(()=>o.el.classList.remove("show-modal")),o.animation&&o.animation.destroy(),o.gesture&&o.gesture.destroy(),n.forEach(r=>r.destroy())}return o.currentBreakpoint=void 0,o.currentTransition=void 0,o.animation=void 0,s})()}onDidDismiss(){return(0,I.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,I.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,C.Z)(function*(){if(!t.isSheetModal)return void(0,N.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,N.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:o,moveSheetToBreakpoint:n,canDismiss:s,breakpoints:i}=t;o!==e&&n&&n({breakpoint:e,breakpointOffset:1-o,canDismiss:void 0!==s&&!0!==s&&0===i[0]})})()}getCurrentBreakpoint(){var e=this;return(0,C.Z)(function*(){return e.currentBreakpoint})()}render(){const{handle:e,isSheetModal:t,presentingElement:o,htmlAttributes:n}=this,s=!1!==e&&t,i=(0,K.b)(this),{modalId:r}=this,a=void 0!==o&&"ios"===i;return(0,c.h)(c.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},n,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[i]:!0,"modal-default":!a&&!t,"modal-card":a,"modal-sheet":t,"overlay-hidden":!0},(0,ae.g)(this.cssClass)),id:r,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,c.h)("ion-backdrop",{ref:h=>this.backdropEl=h,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===i&&(0,c.h)("div",{class:"modal-shadow"}),(0,c.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:h=>this.wrapperEl=h},s&&(0,c.h)("div",{class:"modal-handle",part:"handle"}),(0,c.h)("slot",null)))}get el(){return(0,c.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},we={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let ke=0;ie.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);