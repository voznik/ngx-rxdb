!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?r(e):t}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e){var t="function"==typeof Map?new Map:void 0;return(o=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function i(e,t,n){return(i=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(e,t,n){e.exports=n("Hasg")},2:function(e,t){},3:function(e,t){},4:function(e,t){},Hasg:function(e,t,n){"use strict";n.r(t);var r=n("fXoL");process,process,Boolean(process.env.COUCHDB_SYNC_LIVE),Boolean(process.env.COUCHDB_SYNC_HEARTBEAT);var o,i,c=n("jhN1"),a=n("tyNb"),u=n("Kicj"),s=((o=function e(){f(this,e),this.title="demo"}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=r.Ab({type:o,selectors:[["demo-root"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Lb(0,"main"),r.Hb(1,"router-outlet"),r.Kb())},directives:[a.b],styles:["[_nghost-%COMP%]{display:block;font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:300}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),o),l={name:"demo",adapter:"idb",ignoreDuplicate:!0,multiInstance:!0,options:{}},p=[{path:"todos",loadChildren:function(){return n.e(6).then(n.bind(null,"9FVm")).then(function(e){return e.TodosModule})}},{path:"",redirectTo:"todos",pathMatch:"full"}],d=((i=function e(){f(this,e)}).\u0275mod=r.Eb({type:i,bootstrap:[s]}),i.\u0275inj=r.Db({factory:function(e){return new(e||i)},providers:[],imports:[[c.a,a.a.forRoot(p),u.b.forRoot(l)]]}),i);Object(r.R)(),c.b().bootstrapModule(d).catch(function(e){return console.error(e)})},Kicj:function(t,i,s){"use strict";s.d(i,"a",function(){return z}),s.d(i,"b",function(){return J});var p=s("fXoL"),d=s("mrSG"),h=s("S6qK"),v=s("90xe"),b=s("Re7d"),m=s("A8VM"),g=s("g0lL"),y=s("UDat"),x=s("wnDG"),O=s("m1nw"),j=s("Jcva"),w=s("uugc"),k=s("jtHE"),R=s("NXyV"),_=s("Cfvw"),C=s("eIep"),D=s("lJxs"),S=new p.q("NgxRxdbConfig"),P=new p.q("NgxRxdbCollectionConfig"),L={idLength:function(){return this.primary.length}},A={countAllDocuments:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pouch.info();case 2:return e.abrupt("return",e.sent.doc_count);case 3:case"end":return e.stop()}},e,this)}))}},E=function(){function e(t,n){f(this,e),Object.assign(this,Object.assign(Object.assign({},t),{pouchSettings:Object.assign(Object.assign({},n),t.pouchSettings),methods:Object.assign(Object.assign({},L),t.methods),statics:Object.assign(Object.assign({},A),t.statics)}))}return l(e,null,[{key:"fetchSchema",value:function(e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t)}))}}]),e}(),I={name:"ngx",adapter:"idb",multiInstance:!1,ignoreDuplicate:!0,pouchSettings:{skip_setup:!0,ajax:{withCredentials:!1,cache:!1,timeout:1e4,headers:{}}}},M=function(e){return 0===e?2e3:3*e};function B(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return null==e||!e||!Object.keys(e).length||!!t&&Object.values(e).every(function(e){return null===e||!e})}function $(){}function N(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console.log).call.apply(e,[console,"%c[DEBUG:: NgxRxdb::]","background: #8d2089; color: #fff; padding: 2px; font-size: normal;"].concat(n))}var H,T,U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(s,e);var t,o,i=(t=s,o=c(),function(){var e,r=u(t);if(o){var i=u(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return n(this,e)});function s(e,t){var n;return f(this,s),(n=i.call(this,e)).extra=t,n.name=n.constructor.name,Object.setPrototypeOf(r(n),s.prototype),n}return s}(o(Error));Object(h.a)(s("ezGW")),Object(h.a)(s("Wh65")),Object(h.a)(w.a),Object(h.a)(O.a),Object(h.a)(y.a),Object(h.a)(m.a),Object(h.a)(x.a),Object(h.a)(j.a),(null===(T=null===(H=window.process)||void 0===H?void 0:H.env)||void 0===T?void 0:T.TEST)&&N("dev or test mode");var q=function(){var t=function(){function t(){f(this,t),this._imported=window.localStorage._ngx_rxdb_imported}return l(t,[{key:"destroyDb",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.dbInstance.remove();case 3:return e.next=5,this.dbInstance.destroy();case 5:this.dbInstance=null,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,this,[[0,8]])}))}},{key:"initDb",value:function(e){var n;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var o,i,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=t.mergeConfig(e),r.next=4,Object(v.b)(o);case 4:if(i=r.sent,this.dbInstance=i,N("created database"),r.t0=B(e.options)||B(e.options.schemas),r.t0){r.next=11;break}return r.next=11,this.initCollections(e.options.schemas);case 11:if(B(e.options)||!e.options.dumpPath){r.next=21;break}return r.next=14,fetch(e.options.dumpPath);case 14:return r.next=16,r.sent.json();case 16:if(c=r.sent,r.t1=this._imported&&this._imported===c.timestamp.toString(),r.t1){r.next=21;break}return r.next=21,this.importDbDump(c);case 21:r.next=26;break;case 23:throw r.prev=23,r.t2=r.catch(0),new U(null!==(n=r.t2.message)&&void 0!==n?n:r.t2);case 26:case"end":return r.stop()}},r,this,[[0,23]])}))}},{key:"initCollections",value:function(e){var t;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.prepareCollections(e);case 3:return r=n.sent,n.next=6,this.dbInstance.addCollections(r);case 6:o=n.sent,N("created ".concat(Object.keys(o).length," collections bulk, "),Object.keys(o)),n.next=13;break;case 10:throw n.prev=10,n.t0=n.catch(0),new U(null!==(t=n.t0.message)&&void 0!==t?t:n.t0);case 13:case"end":return n.stop()}},n,this,[[0,10]])}))}},{key:"initCollection",value:function(t){var n;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var o,i,c,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=this.db[t.name],!Object(b.c)(o)){r.next=10;break}if(!t.options.recreate){r.next=8;break}return r.next=5,o.remove();case 5:r.t0=r.sent,r.next=9;break;case 8:r.t0=(N("collection",o.name,"exists, skip create"),o);case 9:return r.abrupt("return",r.t0);case 10:return r.next=12,this.prepareCollections((u={},s=t.name,l=t,s in u?Object.defineProperty(u,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[s]=l,u));case 12:return i=r.sent,r.next=15,this.dbInstance.addCollections(i);case 15:return r.t1=t.name,o=r.sent[r.t1],N('created collection "'.concat(o.name,'"')),r.next=20,o.countAllDocuments();case 20:if(c=r.sent,N('collection "'.concat(o.name,'" has "').concat(parseInt(c,0),'" docs')),!(null===(n=t.options)||void 0===n?void 0:n.initialDocs)||c){r.next=26;break}return a={name:name,schemaHash:o.schema.hash,encrypted:!1,docs:e(t.options.initialDocs)},r.next=25,o.importDump(a);case 25:N("imported ".concat(t.options.initialDocs.length,' docs for collection "').concat(name,'"'));case 26:return r.abrupt("return",o);case 27:case"end":return r.stop()}var u,s,l},r,this)}))}},{key:"getCollection",value:function(e){var t=this.db[e];return Object(b.c)(t)?t:(N("returned false for RxDB.isRxCollection(".concat(e,")")),null)}},{key:"syncCollection",value:function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"db",o=arguments.length>2?arguments[2]:void 0;if(null===(n=null===(t=e.options)||void 0===t?void 0:t.syncOptions)||void 0===n?void 0:n.remote){var i=e.options.syncOptions;return i.remote=i.remote.concat("/",r),i.options=Object.assign({back_off_function:M},this.db.pouchSettings.ajax,e.pouchSettings.ajax,i.options),o&&(i.options.headers=Object.assign({},i.options.headers,o)),i.queryObj&&(i.query=e.find(i.queryObj)),e.sync(i)}}},{key:"syncAllCollections",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"db",n=arguments.length>1?arguments[1]:void 0;if(B(this.collections))throw new U("collections must be initialized before importing dump");var r=[];return Object.values(this.collections).filter(function(e){return"remote"in e.options.syncOptions}).forEach(function(o){var i=e.syncCollection(o,t,n);r.push(i)}),N("syncAllCollections = ",r),r}},{key:"importDbDump",value:function(e){var t;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=this.prepareDump(e),n.next=4,this.db.importDump(r);case 4:this._imported=r.timestamp,n.next=12;break;case 7:if(n.prev=7,n.t0=n.catch(0),409===n.t0.status){n.next=11;break}throw new U(null!==(t=n.t0.message)&&void 0!==t?t:n.t0);case 11:this._imported=e.timestamp;case 12:case"end":return n.stop()}},n,this,[[0,7]])}))}},{key:"prepareCollections",value:function(e){var t;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r,o,i,c,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,r={},o=Object.values(e),i=0,c=o;case 3:if(!(i<c.length)){n.next=15;break}if(a=c[i],n.t0=!a.schema&&a.options.schemaUrl,!n.t0){n.next=10;break}return n.next=9,E.fetchSchema(a.options.schemaUrl);case 9:a.schema=n.sent;case 10:Object(g.a)(a.schema),r[a.name]=new E(a);case 12:i++,n.next=3;break;case 15:return n.abrupt("return",r);case 18:throw n.prev=18,n.t1=n.catch(0),new U(null!==(t=n.t1.message)&&void 0!==t?t:n.t1);case 21:case"end":return n.stop()}},n,null,[[0,18]])}))}},{key:"prepareDump",value:function(e){var t=Object.assign({},e);if(B(this.collections))throw new U("collections must be initialized before importing dump");for(var n in this.collections)t.collections.hasOwnProperty(n)&&(t.collections[n].schemaHash=this.collections[n].schema._hash);return t}},{key:"db",get:function(){return this.dbInstance}},{key:"collections",get:function(){return this.db.collections}},{key:"_imported",get:function(){return window.localStorage._ngx_rxdb_imported},set:function(e){window.localStorage._ngx_rxdb_imported=e}}],[{key:"mergeConfig",value:function(e){return Object.assign({},I,e)}},{key:"getCouchAuthProxyHeaders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{"X-Auth-CouchDB-UserName":e,"X-Auth-CouchDB-Roles":t.join(","),"X-Auth-CouchDB-Token":n}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=p.Cb({token:t,factory:t.\u0275fac}),t}(),z=function(){var e=function(){function e(t,n){f(this,e),this.dbService=t,this.config=n}return l(e,[{key:"ngOnDestroy",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=Object(b.c)(this.collection),!e.t0){e.next=4;break}return e.next=4,this.collection.destroy();case 4:case"end":return e.stop()}},e,this)}))}},{key:"collectionLoaded$",value:function(){var e=this;return this.inited$||(this.inited$=new k.a,this.dbService.initCollection(this.config).then(function(t){e._collection=t,e.inited$.next(!0),e.inited$.complete()})),this.inited$.asObservable()}},{key:"sync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"db",t=arguments.length>1?arguments[1]:void 0;return this.dbService.syncCollection(this.collection,e,t)}},{key:"docs",value:function(e){var t=this;return this.collectionLoaded$().pipe(Object(C.a)(function(){return t.collection.find(e).$}))}},{key:"allDocs",value:function(){var e=this;return Object(R.a)(function(){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.collection.pouch.allDocs({include_docs:!0,attachments:!1,endkey:"_design",inclusive_end:!1});case 3:return e.abrupt("return",e.sent.rows.map(function(e){var t=e.doc,n=e.id;return Object.assign(Object.assign({},t),{id:n})}));case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",[]);case 9:case"end":return e.stop()}},e,this,[[0,6]])}))})}},{key:"insertLocal",value:function(e,t){return Object(_.a)(this.collection.upsertLocal(e,t))}},{key:"getLocal",value:function(e){var t=this;return this.collectionLoaded$().pipe(Object(C.a)(function(){return Object(_.a)(t.collection.getLocal(e))}))}},{key:"updateLocal",value:function(e,t,n){var r=this;return Object(R.a)(function(){return Object(d.a)(r,void 0,void 0,regeneratorRuntime.mark(function r(){var o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.collection.getLocal(e);case 2:return(o=r.sent).set(t,n),r.next=6,o.save();case 6:case"end":return r.stop()}},r,this)}))})}},{key:"removeLocal",value:function(e){var t=this;return Object(R.a)(function(){return Object(d.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.collection.getLocal(e);case 2:return t.abrupt("return",t.sent.remove());case 3:case"end":return t.stop()}},t,this)}))})}},{key:"get",value:function(e){var t=this;return this.collectionLoaded$().pipe(Object(C.a)(function(){return Object(_.a)(t.collection.findOne(e).exec())}))}},{key:"getById",value:function(e){var t=this;return this.collectionLoaded$().pipe(Object(C.a)(function(){return t.collection.findByIds$([e]).pipe(Object(D.a)(function(t){return t.size?t.get(e):null}))}))}},{key:"insert",value:function(e){return Object(_.a)(this.collection.insert(e))}},{key:"bulkInsert",value:function(e){return Object(_.a)(this.collection.bulkInsert(e))}},{key:"upsert",value:function(e){return Object(_.a)(this.collection.upsert(e))}},{key:"update",value:function(e,t){var n=this;return Object(R.a)(function(){return Object(d.a)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.collection.findOne(e).exec();case 2:return n.abrupt("return",n.sent.update({$set:Object.assign({},t)}));case 3:case"end":return n.stop()}},n,this)}))})}},{key:"set",value:function(e,t,n){var r=this;return Object(R.a)(function(){return Object(d.a)(r,void 0,void 0,regeneratorRuntime.mark(function r(){var o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.collection.findOne(e).exec();case 2:return o=r.sent,r.abrupt("return",(o.set(t,n),o.save()));case 4:case"end":return r.stop()}},r,this)}))})}},{key:"remove",value:function(e){var t=this;return Object(R.a)(function(){return Object(d.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.collection.findOne(e).exec();case 2:return t.abrupt("return",t.sent.remove());case 3:case"end":return t.stop()}},t,this)}))})}},{key:"removeBulkBy",value:function(e){var t=this;return this.collectionLoaded$().pipe(Object(C.a)(function(){return Object(_.a)(t.collection.find(e).remove())}))}},{key:"_removeBulkBy",value:function(e){var t=this;return Object(R.a)(function(){return Object(d.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.collection.find(e).exec();case 3:if(!(n=t.sent)||!n.length){t.next=7;break}return r=n.map(function(e){return{_id:e.primary,_rev:e._rev,_deleted:!0}}),t.abrupt("return",this.collection.pouch.bulkDocs(r));case 7:t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",null);case 12:case"end":return t.stop()}},t,this,[[0,9]])}))})}},{key:"collection",get:function(){return this._collection}},{key:"db",get:function(){return this.dbService.db}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Pb(q),p.Pb(P))},e.\u0275prov=p.Cb({token:e,factory:e.\u0275fac}),e}();function F(e,t){var n=this;return function(){return Object(d.a)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.initDb(t);case 2:case"end":return n.stop()}},n)}))}}var J=function(){var e=function(){function e(t,n,r,o,i){if(f(this,e),!r&&!n)throw new Error(S.toString()+" is not provided. Make sure you call the 'forRoot' method of the NgxRxdbModule in the AppModule only.");if(r&&n)throw new Error(S.toString()+" is already provided. Make sure you call the 'forRoot' method of the NgxRxdbModule in the AppModule only.");r&&!n&&Object(_.a)(t.donePromise).subscribe(function(){N("appInitStatus.donePromise")})}return l(e,null,[{key:"forFeature",value:function(e){return{ngModule:V,providers:[{provide:P,useValue:e},z]}}},{key:"forRoot",value:function(t){return{ngModule:e,providers:[{provide:S,useValue:t},q,{provide:p.d,useFactory:F,deps:[q,S],multi:!0}]}}}]),e}();return e.\u0275mod=p.Eb({type:e}),e.\u0275inj=p.Db({factory:function(t){return new(t||e)(p.Pb(p.e),p.Pb(S,12),p.Pb(S,10),p.Pb(P,12),p.Pb(q,2))}}),e}(),V=function(){var e=function e(t){f(this,e),this.collectionService=t,this.collectionService.collectionLoaded$().subscribe($)};return e.\u0275mod=p.Eb({type:e}),e.\u0275inj=p.Db({factory:function(t){return new(t||e)(p.Pb(z))}}),e}()},"LvJ/":function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="LvJ/"}},[[1,0,5]]])}();