YUI.add("queue-base",function(B){function A(D){var C=this instanceof A?this:new A(D);if(C===this){this._init(D);}return C.add.apply(C,B.Array(arguments,1,true));}A.defaults={};A.prototype={_defaults:null,active:false,_init:function(C){this._q=[];this._defaults=B.merge(A.defaults,{context:this},(B.Lang.isObject(C)?C:{}));this.publish("executeCallback",{defaultFn:this._defExecFn,emitFacade:true});this.publish("shiftCallback",{defaultFn:this._defShiftFn,emitFacade:true});},run:function(){this.active=true;var C=this._q.shift();while(C&&this.active){this._defExecFn(C);C=this._q.shift();}if(!this.size()){this.active=false;}return this;},_defExecFn:function(D){if(B.Lang.isFunction(D.fn)){var C="args" in D?B.Array(D.args):[];D.fn.apply(D.context,C);}},add:function(){var F=B.Array(arguments,0,true),D,C,G,E=[];for(D=0,C=F.length;D<C;++D){G=this._prepareCallback(F[D]);if(B.Lang.isObject(G)){this._q.push(G);E.push(G);}}this.fire("addCallback",E);return this;},_prepareCallback:function(C){if(B.Lang.isFunction(C)){C={fn:C};}if(B.Lang.isObject(C)){C=B.merge(this._defaults,C);}return C;},pause:function(){this.active=false;return this;},stop:function(){this.active=false;this._q=[];return this;},size:function(){return this._q.length;},publish:function(){},fire:function(){}};B.Queue=A;},"@VERSION@");