(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+diW":function(t,e,o){"use strict";o.d(e,"a",function(){return g});var n=o("mrSG"),i=o("S6qK"),c=o("90xe"),s=o("Re7d"),r=o("A8VM"),a=o("g0lL"),l=o("UDat"),d=o("wnDG"),u=o("m1nw"),h=o("Jcva"),b=o("uugc"),p=o("Lj5c");const f={name:"ngx",adapter:"idb",multiInstance:!1,ignoreDuplicate:!0,pouchSettings:{skip_setup:!0,ajax:{withCredentials:!1,cache:!1,timeout:1e4,headers:{}}}},m=t=>0===t?2e3:3*t;var v,O,j=o("eBm/"),y=o("fXoL");Object(i.a)(o("ezGW")),Object(i.a)(o("Wh65")),Object(i.a)(b.a),Object(i.a)(u.a),Object(i.a)(l.a),Object(i.a)(r.a),Object(i.a)(d.a),Object(i.a)(h.a),(null===(O=null===(v=window.process)||void 0===v?void 0:v.env)||void 0===O?void 0:O.TEST)&&Object(j.c)("dev or test mode");let g=(()=>{class t{constructor(){this._imported=window.localStorage._ngx_rxdb_imported}static mergeConfig(t){return Object.assign({},f,t)}static getCouchAuthProxyHeaders(t="",e=[],o=""){return{"X-Auth-CouchDB-UserName":t,"X-Auth-CouchDB-Roles":e.join(","),"X-Auth-CouchDB-Token":o}}get db(){return this.dbInstance}get collections(){return this.db.collections}get _imported(){return window.localStorage._ngx_rxdb_imported}set _imported(t){window.localStorage._ngx_rxdb_imported=t}destroyDb(){return Object(n.a)(this,void 0,void 0,function*(){try{yield this.dbInstance.remove(),yield this.dbInstance.destroy(),this.dbInstance=null}catch(t){}})}initDb(e){var o;return Object(n.a)(this,void 0,void 0,function*(){try{const o=t.mergeConfig(e),n=yield Object(c.b)(o);if(this.dbInstance=n,Object(j.c)("created database"),Object(j.b)(e.options)||Object(j.b)(e.options.schemas)||(yield this.initCollections(e.options.schemas)),!Object(j.b)(e.options)&&e.options.dumpPath){const t=yield(yield fetch(e.options.dumpPath)).json();this._imported&&this._imported===t.timestamp.toString()||(yield this.importDbDump(t))}}catch(n){throw new j.a(null!==(o=n.message)&&void 0!==o?o:n)}})}initCollections(t){var e;return Object(n.a)(this,void 0,void 0,function*(){try{const e=yield this.prepareCollections(t),o=yield this.dbInstance.addCollections(e);Object(j.c)(`created ${Object.keys(o).length} collections bulk, `,Object.keys(o))}catch(o){throw new j.a(null!==(e=o.message)&&void 0!==e?e:o)}})}initCollection(t){var e;return Object(n.a)(this,void 0,void 0,function*(){let o=this.db[t.name];if(Object(s.c)(o))return t.options.recreate?yield o.remove():(Object(j.c)("collection",o.name,"exists, skip create"),o);const n=yield this.prepareCollections({[t.name]:t});o=(yield this.dbInstance.addCollections(n))[t.name],Object(j.c)(`created collection "${o.name}"`);const i=yield o.countAllDocuments();if(Object(j.c)(`collection "${o.name}" has "${parseInt(i,0)}" docs`),(null===(e=t.options)||void 0===e?void 0:e.initialDocs)&&!i){const e={name,schemaHash:o.schema.hash,encrypted:!1,docs:[...t.options.initialDocs]};yield o.importDump(e),Object(j.c)(`imported ${t.options.initialDocs.length} docs for collection "${name}"`)}return o})}getCollection(t){const e=this.db[t];return Object(s.c)(e)?e:(Object(j.c)(`returned false for RxDB.isRxCollection(${t})`),null)}syncCollection(t,e="db",o){var n,i;if(null===(i=null===(n=t.options)||void 0===n?void 0:n.syncOptions)||void 0===i?void 0:i.remote){const{syncOptions:n}=t.options;return n.remote=n.remote.concat("/",e),n.options=Object.assign({back_off_function:m},this.db.pouchSettings.ajax,t.pouchSettings.ajax,n.options),o&&(n.options.headers=Object.assign({},n.options.headers,o)),n.queryObj&&(n.query=t.find(n.queryObj)),t.sync(n)}}syncAllCollections(t="db",e){if(Object(j.b)(this.collections))throw new j.a("collections must be initialized before importing dump");const o=[];return Object.values(this.collections).filter(t=>"remote"in t.options.syncOptions).forEach(n=>{const i=this.syncCollection(n,t,e);o.push(i)}),Object(j.c)("syncAllCollections = ",o),o}importDbDump(t){var e;return Object(n.a)(this,void 0,void 0,function*(){try{const e=this.prepareDump(t);yield this.db.importDump(e),this._imported=e.timestamp}catch(o){if(409!==o.status)throw new j.a(null!==(e=o.message)&&void 0!==e?e:o);this._imported=t.timestamp}})}prepareCollections(t){var e;return Object(n.a)(this,void 0,void 0,function*(){try{const e={},o=Object.values(t);for(const t of o)!t.schema&&t.options.schemaUrl&&(t.schema=yield p.a.fetchSchema(t.options.schemaUrl)),Object(a.a)(t.schema),e[t.name]=new p.a(t);return e}catch(o){throw new j.a(null!==(e=o.message)&&void 0!==e?e:o)}})}prepareDump(t){const e=Object.assign({},t);if(Object(j.b)(this.collections))throw new j.a("collections must be initialized before importing dump");for(const o in this.collections)e.collections.hasOwnProperty(o)&&(e.collections[o].schemaHash=this.collections[o].schema._hash);return e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=y.Cb({token:t,factory:t.\u0275fac}),t})()},"0awm":function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return c});var n=o("fXoL");const i=new n.q("NgxRxdbConfig"),c=new n.q("NgxRxdbCollectionConfig")},1:function(t,e,o){t.exports=o("Hasg")},2:function(t,e){},3:function(t,e){},4:function(t,e){},Hasg:function(t,e,o){"use strict";o.r(e);var n=o("fXoL");process,process,Boolean(process.env.COUCHDB_SYNC_LIVE),Boolean(process.env.COUCHDB_SYNC_HEARTBEAT);var i=o("jhN1"),c=o("tyNb"),s=o("ORsI");let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Ab({type:t,selectors:[["demo-root"]],decls:2,vars:0,template:function(t,e){1&t&&(n.Lb(0,"main"),n.Hb(1,"router-outlet"),n.Kb())},directives:[c.b],styles:["[_nghost-%COMP%] {\n        display: block;\n        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        line-height: 1.4em;\n        background: #f5f5f5;\n        color: #4d4d4d;\n        min-width: 230px;\n        max-width: 550px;\n        margin: 0 auto;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 300;\n      }\n\n      .flex[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }"]}),t})();o("eiuk");const a={name:"demo",adapter:"idb",ignoreDuplicate:!0,multiInstance:!0,options:{}},l=[{path:"todos",loadChildren:()=>o.e(6).then(o.bind(null,"9FVm")).then(t=>t.TodosModule)},{path:"",redirectTo:"todos",pathMatch:"full"}];let d=(()=>{class t{}return t.\u0275mod=n.Eb({type:t,bootstrap:[r]}),t.\u0275inj=n.Db({factory:function(e){return new(e||t)},providers:[],imports:[[i.a,c.a.forRoot(l),s.b.forRoot(a)]]}),t})();Object(n.R)(),i.b().bootstrapModule(d).catch(t=>console.error(t))},Lj5c:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("mrSG");const i={idLength:function(){return this.primary.length}},c={countAllDocuments:function(){return Object(n.a)(this,void 0,void 0,function*(){return(yield this.pouch.info()).doc_count})}};class s{constructor(t,e){Object.assign(this,Object.assign(Object.assign({},t),{pouchSettings:Object.assign(Object.assign({},e),t.pouchSettings),methods:Object.assign(Object.assign({},i),t.methods),statics:Object.assign(Object.assign({},c),t.statics)}))}static fetchSchema(t){return Object(n.a)(this,void 0,void 0,function*(){return yield(yield fetch(t)).json()})}}},"LvJ/":function(t,e){function o(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="LvJ/"},ORsI:function(t,e,o){"use strict";o.d(e,"a",function(){return n.a}),o.d(e,"b",function(){return i.a}),o("0awm"),o("+diW");var n=o("pyNe"),i=(o("Lj5c"),o("eiuk"))},"eBm/":function(t,e,o){"use strict";function n(t,e=!1){return null==t||!t||!Object.keys(t).length||!!e&&Object.values(t).every(t=>null===t||!t)}function i(){}function c(...t){console.log.call(console,"%c[DEBUG:: NgxRxdb::]","background: #8d2089; color: #fff; padding: 2px; font-size: normal;",...t)}o.d(e,"b",function(){return n}),o.d(e,"d",function(){return i}),o.d(e,"c",function(){return c}),o.d(e,"a",function(){return s});class s extends Error{constructor(t,e){super(t),this.extra=e,this.name=this.constructor.name,Object.setPrototypeOf(this,s.prototype)}}},eiuk:function(t,e,o){"use strict";o.d(e,"a",function(){return u});var n=o("mrSG"),i=o("fXoL"),c=o("Cfvw"),s=o("pyNe"),r=o("+diW"),a=o("0awm"),l=o("eBm/");function d(t,e){return()=>Object(n.a)(this,void 0,void 0,function*(){yield t.initDb(e)})}let u=(()=>{class t{constructor(t,e,o,n,i){if(!o&&!e)throw new Error(a.a.toString()+" is not provided. Make sure you call the 'forRoot' method of the NgxRxdbModule in the AppModule only.");if(o&&e)throw new Error(a.a.toString()+" is already provided. Make sure you call the 'forRoot' method of the NgxRxdbModule in the AppModule only.");o&&!e&&Object(c.a)(t.donePromise).subscribe(()=>{Object(l.c)("appInitStatus.donePromise")})}static forFeature(t){return{ngModule:h,providers:[{provide:a.b,useValue:t},s.a]}}static forRoot(e){return{ngModule:t,providers:[{provide:a.a,useValue:e},r.a,{provide:i.d,useFactory:d,deps:[r.a,a.a],multi:!0}]}}}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)(i.Pb(i.e),i.Pb(a.a,12),i.Pb(a.a,10),i.Pb(a.b,12),i.Pb(r.a,2))}}),t})(),h=(()=>{class t{constructor(t){this.collectionService=t,this.collectionService.collectionLoaded$().subscribe(l.d)}}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)(i.Pb(s.a))}}),t})()},pyNe:function(t,e,o){"use strict";o.d(e,"a",function(){return b});var n=o("mrSG"),i=o("Re7d"),c=o("jtHE"),s=o("NXyV"),r=o("Cfvw"),a=o("eIep"),l=o("lJxs"),d=o("+diW"),u=o("0awm"),h=o("fXoL");let b=(()=>{class t{constructor(t,e){this.dbService=t,this.config=e}get collection(){return this._collection}get db(){return this.dbService.db}ngOnDestroy(){return Object(n.a)(this,void 0,void 0,function*(){Object(i.c)(this.collection)&&(yield this.collection.destroy())})}collectionLoaded$(){return this.inited$||(this.inited$=new c.a,this.dbService.initCollection(this.config).then(t=>{this._collection=t,this.inited$.next(!0),this.inited$.complete()})),this.inited$.asObservable()}sync(t="db",e){return this.dbService.syncCollection(this.collection,t,e)}docs(t){return this.collectionLoaded$().pipe(Object(a.a)(()=>this.collection.find(t).$))}allDocs(){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){try{return(yield this.collection.pouch.allDocs({include_docs:!0,attachments:!1,endkey:"_design",inclusive_end:!1})).rows.map(({doc:t,id:e})=>Object.assign(Object.assign({},t),{id:e}))}catch(t){return[]}}))}insertLocal(t,e){return Object(r.a)(this.collection.upsertLocal(t,e))}getLocal(t){return this.collectionLoaded$().pipe(Object(a.a)(()=>Object(r.a)(this.collection.getLocal(t))))}updateLocal(t,e,o){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){const n=yield this.collection.getLocal(t);n.set(e,o),yield n.save()}))}removeLocal(t){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){return(yield this.collection.getLocal(t)).remove()}))}get(t){return this.collectionLoaded$().pipe(Object(a.a)(()=>Object(r.a)(this.collection.findOne(t).exec())))}getById(t){return this.collectionLoaded$().pipe(Object(a.a)(()=>this.collection.findByIds$([t]).pipe(Object(l.a)(e=>e.size?e.get(t):null))))}insert(t){return Object(r.a)(this.collection.insert(t))}bulkInsert(t){return Object(r.a)(this.collection.bulkInsert(t))}upsert(t){return Object(r.a)(this.collection.upsert(t))}update(t,e){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){return(yield this.collection.findOne(t).exec()).update({$set:Object.assign({},e)})}))}set(t,e,o){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){const n=yield this.collection.findOne(t).exec();return n.set(e,o),n.save()}))}remove(t){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){return(yield this.collection.findOne(t).exec()).remove()}))}removeBulkBy(t){return this.collectionLoaded$().pipe(Object(a.a)(()=>Object(r.a)(this.collection.find(t).remove())))}_removeBulkBy(t){return Object(s.a)(()=>Object(n.a)(this,void 0,void 0,function*(){try{const e=yield this.collection.find(t).exec();if(e&&e.length){const t=e.map(t=>({_id:t.primary,_rev:t._rev,_deleted:!0}));return this.collection.pouch.bulkDocs(t)}}catch(e){return null}}))}}return t.\u0275fac=function(e){return new(e||t)(h.Pb(d.a),h.Pb(u.b))},t.\u0275prov=h.Cb({token:t,factory:t.\u0275fac}),t})()}},[[1,0,5]]]);