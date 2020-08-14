/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojset","ojs/ojeventtarget","ojs/ojdataprovider","ojs/ojkeyset","ojs/ojobservable","ojs/ojmap"],function(t,e,a,r,s,i,n,h){class d{constructor(t,e){this.dataProvider=t,this.options=e,this._DATAPROVIDER="dataprovider",this._EXPANDED="expanded",this._KEY="key",this._PARENTKEY="parentKey",this._INDEXFROMPARENT="indexFromParent",this._TREEDEPTH="treeDepth",this._ISLEAF="isLeaf",this._KEYS="keys",this._OFFSET="offset",this._SIZE="size",this._DONE="done",this._VALUE="value",this._DATA="data",this._REFRESH="refresh",this._MUTATE="mutate",this._SORTCRITERIA="sortCriteria",this._FILTERCRITERION="filterCriterion",this._ATTRIBUTES="attributes",this._METADATA="metadata",this._RESULTS="results",this._FETCHPARAMETERS="fetchParameters",this._CONTAINSPARAMETERS="containsParameters",this._CONTAINSKEYS="containsKeys",this._FETCHBYKEYS="fetchByKeys",this._FETCHBYOFFSET="fetchByOffset",this._AFTERKEYS="afterKeys",this._ADDBEFOREKEYS="addBeforeKeys",this._ADD="add",this._REMOVE="remove",this._UPDATE="update",this._INDEXES="indexes",this._ADDEVENTLISTENER="addEventListener",this.AsyncIterable=class{constructor(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}},this.AsyncIterator=class{constructor(t,e,a){this._parent=t,this._nextFunc=e,this._params=a}next(){let t=this._nextFunc(this._params);return Promise.resolve(t)}},this.AsyncIteratorYieldResult=class{constructor(t,e){this._parent=t,this.value=e,this[t._VALUE]=e,this[t._DONE]=!1}},this.AsyncIteratorReturnResult=class{constructor(t,e){this._parent=t,this.value=e,this[t._VALUE]=e,this[t._DONE]=!0}},this.Item=class{constructor(t,e,a){this._parent=t,this.metadata=e,this.data=a,this[t._METADATA]=e,this[t._DATA]=a}},this.FlattenedTreeItemMetadata=class{constructor(t,e,a,r,s,i){this._parent=t,this.key=e,this.parentKey=a,this.indexFromParent=r,this.treeDepth=s,this.isLeaf=i,this[t._KEY]=e,this[t._PARENTKEY]=a,this[t._INDEXFROMPARENT]=r,this[t._TREEDEPTH]=s,this[t._ISLEAF]=i}},this.FetchListParameters=class{constructor(t,e,a,r){this._parent=t,this.size=e,this.sortCriteria=a,this.filterCriterion=r,this[t._SIZE]=e,this[t._SORTCRITERIA]=a,this[t._FILTERCRITERION]=r}},this.FetchListResult=class{constructor(t,e,a,r){this._parent=t,this.fetchParameters=e,this.data=a,this.metadata=r,this[t._FETCHPARAMETERS]=e,this[t._DATA]=a,this[t._METADATA]=r}},this.FetchByOffsetParameters=class{constructor(t,e,a,r,s,i){this._parent=t,this.offset=e,this.size=a,this.sortCriteria=r,this.filterCriterion=s,this.attributes=i,this[t._OFFSET]=e,this[t._SIZE]=a,this[t._SORTCRITERIA]=r,this[t._FILTERCRITERION]=s,this[t._ATTRIBUTES]=i}},this.FetchByOffsetResults=class{constructor(t,e,a,r){this._parent=t,this.fetchParameters=e,this.results=a,this.done=r,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=a,this[t._DONE]=r}},this.FetchByKeysResults=class{constructor(t,e,a){this._parent=t,this.fetchParameters=e,this.results=a,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=a}},this.ContainsKeysResults=class{constructor(t,e,a){this._parent=t,this.containsParameters=e,this.results=a,this[t._CONTAINSPARAMETERS]=e,this[t._RESULTS]=a}},this.DataProviderMutationEventDetail=class{constructor(t,e,a,r){this._parent=t,this.add=e,this.remove=a,this.update=r,this[t._ADD]=e,this[t._REMOVE]=a,this[t._UPDATE]=r}},this.DataProviderOperationEventDetail=class{constructor(t,e,a,r,s){this._parent=t,this.keys=e,this.metadata=a,this.data=r,this.indexes=s,this[t._KEYS]=e,this[t._METADATA]=a,this[t._DATA]=r,this[t._INDEXES]=s}},this.DataProviderAddOperationEventDetail=class{constructor(t,e,a,r,s,i,n){this._parent=t,this.keys=e,this.afterKeys=a,this.addBeforeKeys=r,this.metadata=s,this.data=i,this.indexes=n,this[t._KEYS]=e,this[t._AFTERKEYS]=a,this[t._ADDBEFOREKEYS]=r,this[t._METADATA]=s,this[t._DATA]=i,this[t._INDEXES]=n}};let a=this;null==a.options&&(a.options={}),a.options.expanded||(a.options.expanded=new i.ExpandedKeySet([])),a._expandedObservable=new n.BehaviorSubject(a._getExpandedObservableValue(a.options.expanded,Promise.resolve())),a.dataProvider.addEventListener("mutate",a._handleUndelryingMutation.bind(a)),a.dataProvider.addEventListener("refresh",a._handleUndelryingRefresh.bind(a)),a._cache=[],a._iterators=new h,a._done=!1}_handleUndelryingMutation(e){let a=this,r=null,s=null,i=null,n=e.detail.add;if(n&&n.data&&n.data.length){let t=[],e=[],s=[],i=[],h=[],d=new Set,l=new Set;n.parentKeys.forEach(function(r,o){if(null===r||a._isExpanded(r)&&a._getItemByKey(r)){let c;if(null!=n.addBeforeKeys){c=a._getItemIndexByKey(n.addBeforeKeys[o])-1}else if(null!=n.indexes){let t=a._getItemIndexByKey(r);c=-1===t?n.indexes[o]:t+n.indexes[o]}else c=a._getItemIndexByKey(a._getLastItemByParentKey(r).metadata.key)+1;let _=a._updateItemMetadata(new a.Item(a,n.metadata[o],n.data[o]),r,n.indexes[o]);a._spliceItemToCache(_,c),e.push(_.data),t.push(_.metadata),s.push(c),i.push(n.addBeforeKeys[o]),h.push(r),d.add(n.addBeforeKeys[o]),l.add(n.metadata[o].key),a._incrementIteratorOffset(c)}}),r=new a.DataProviderAddOperationEventDetail(a,l,d,i,t,e,s)}let h=e.detail.remove;if(h&&h.data&&h.data.length){let t=h.metadata.map(function(t){return t.key}),e=[],r=[],i=[],n=new Set;t.forEach(function(t){let s=a._getLocalDescendentCount(t)+1,h=a._getItemIndexByKey(t);a._cache.splice(h,s).forEach(function(t,s){n.add(t.metadata.key),e.push(t.metadata),r.push(t.data),i.push(h+s),a._decrementIteratorOffset(h)})}),s=new a.DataProviderOperationEventDetail(a,n,e,r,i)}let d=e.detail.update;if(d&&d.data&&d.data.length){let t=[],e=[],r=[],s=new Set;d.metadata.forEach(function(i,n){let h=a._getItemByKey(i.key);if(null!=h){let c=a._getItemIndexByKey(i.key);var l=d.data[n],o=new a.FlattenedTreeItemMetadata(a,h.metadata.key,h.metadata.parentKey,h.metadata.indexFromParent,h.metadata.treeDepth,null===a.getChildDataProvider(h.metadata.key));a._cache.splice(c,1,new a.Item(a,o,l)),s.add(h.metadata.key),t.push(h.metadata),e.push(h.data),r.push(c)}}),i=new a.DataProviderOperationEventDetail(a,s,t,e,r)}let l=new a.DataProviderMutationEventDetail(a,r,s,i);a.dispatchEvent(new t.DataProviderMutationEvent(l))}_handleUndelryingRefresh(){this._clearCache(),this.dispatchEvent(new t.DataProviderRefreshEvent)}_getExpandedObservableValue(t,e){return{value:t,completionPromise:e}}getChildDataProvider(t,e){return this.dataProvider.getChildDataProvider(t,e)}containsKeys(t){return this.dataProvider.containsKeys(t)}fetchByKeys(t){var e=this;return this.dataProvider.fetchByKeys(t).then(function(t){let a=new h;return t.results.forEach(function(t,r){let s=e._getItemByKey(r);s?a.set(r,s):a.set(r,t)}),new e.FetchByKeysResults(e,t.fetchParameters,a)})}fetchByOffset(t){let e=this,a=null!=t?t[this._SIZE]:-1,r=null!=t?t[this._SORTCRITERIA]:null,s=null!=t&&t[this._OFFSET]>0?t[this._OFFSET]:0,i=null!=t?t[this._FILTERCRITERION]:null,n=null!=t?t[this._ATTRIBUTES]:null;if(t=new e.FetchByOffsetParameters(e,s,a,r,i,n),e._isSameCriteria(r,i)){if(e._checkCacheByOffset(t))return new Promise(function(a){a(e._getFetchByOffsetResultsFromCache(t))})}else e._clearCache(),e._currentSortCriteria=r,e._currentFilterCriteria=i;return e._fetchByOffset(t)}fetchFirst(t){let e=this,a=null!=t?t[this._SIZE]:-1,r=null!=t?t[this._SORTCRITERIA]:null,s=null!=t?t[this._FILTERCRITERION]:null,i=null!=t?t[this._ATTRIBUTES]:null;e._isSameCriteria(r,s)||(e._currentSortCriteria=r,e._currentFilterCriteria=s,e._clearCache());let n=new e.AsyncIterable(e,new e.AsyncIterator(e,function(){let t=e._iterators.get(n),h=new e.FetchByOffsetParameters(e,t,a,r,s,i);return e.fetchByOffset(h).then(function(a){let r=a.results,s=r.map(function(t){return t[e._DATA]}),i=r.map(function(t){return t[e._METADATA]}),d=0===s.length||a[e._DONE];return e._iterators.set(n,t+i.length),d?Promise.resolve(new e.AsyncIteratorReturnResult(e,new e.FetchListResult(e,h,s,i))):Promise.resolve(new e.AsyncIteratorYieldResult(e,new e.FetchListResult(e,h,s,i)))})},t));return e._iterators.set(n,0),n}getCapability(t){return this.dataProvider.getCapability(t)}getTotalSize(){return Promise.resolve(-1)}isEmpty(){return this.dataProvider.isEmpty()}_isSameCriteria(t,e){if(t){if(!this._currentSortCriteria||t[0].attribute!=this._currentSortCriteria[0].attribute||t[0].direction!=this._currentSortCriteria[0].direction)return!1}else if(this._currentSortCriteria)return!1;if(e){if(!this._currentFilterCriteria||e[0].op!=this._currentFilterCriteria[0].op||e[0].filter!=this._currentFilterCriteria[0].filter)return!1}else if(this._currentFilterCriteria)return!1;return!0}_checkCacheByOffset(t){return-1===t[this._SIZE]&&!0===this._done||this._cache.length>=t[this._OFFSET]+t[this._SIZE]&&-1!==t[this._SIZE]}_getFetchByOffsetResultsFromCache(t){let e=this._cache.slice(t[this._OFFSET],-1===t[this._SIZE]?void 0:t[this._OFFSET]+t[this._SIZE]),a=!1;return 0==e.length&&(this._lastParams&&this._lastParams==t?a=!0:this._lastParams=t),new this.FetchByOffsetResults(this,t,e,a)}_clearCache(){this._cache=[]}_fetchByOffset(t){let e=this;if(0===e._cache.length){let a=-1===t[e._SIZE]?-1:t[e._OFFSET]+t[e._SIZE],r=new this.FetchByOffsetParameters(e,0,a,t[e._SORTCRITERIA],t[e._FILTERCRITERION],t[e._ATTRIBUTES]);return e._fetchChildrenByOffsetFromDataProvider(r,e.dataProvider,null,t)}let a=e._getLastEntry(),r=a.metadata.key,s=0;!a.metadata.isLeaf&&e._isExpanded(r)||(r=a.metadata.parentKey,s=a.metadata.indexFromParent+1);let i=null===r?e.dataProvider:e.getChildDataProvider(r),n=e._getRemainingSize(t),h=new this.FetchByOffsetParameters(e,s,n,t[e._SORTCRITERIA],t[e._FILTERCRITERION],t[e._ATTRIBUTES]);return e._fetchChildrenByOffsetFromAncestors(h,i,r,t)}_fetchChildrenByOffsetFromAncestors(t,e,a,r){let s=this,i=function(e,a){a.results;if(s._checkCacheByOffset(r)||a[s._DONE]||null===e)return Promise.resolve();let n=s._getItemByKey(e),h=n.metadata.parentKey,d=n.metadata.indexFromParent,l=null===h?s.dataProvider:s.getChildDataProvider(h),o=new s.FetchByOffsetParameters(s,d+1,s._getRemainingSize(r),t[s._SORTCRITERIA],t[s._FILTERCRITERION],t[s._ATTRIBUTES]);return s._fetchChildrenByOffsetFromDataProvider(o,l,h,r).then(i.bind(s,h))};return s._fetchChildrenByOffsetFromDataProvider(t,e,a,r).then(i.bind(s,a)).then(s._getFetchByOffsetResultsFromCache.bind(s,r))}_fetchChildrenByOffsetFromDataProvider(t,e,a,r){let s=this,i=function(e){let n=e.results;if(0===n.length||s._checkCacheByOffset(r))return Promise.resolve();let h=n.shift(),d=s._updateItemMetadata(h,a);if(s._pushItemToCache(d,a),s._isExpanded(d.metadata.key)){let e=s.getChildDataProvider(d.metadata.key);if(null!=e){let a=new s.FetchByOffsetParameters(s,0,s._getRemainingSize(r),t[s._SORTCRITERIA],t[s._FILTERCRITERION],t[s._ATTRIBUTES]);return s._fetchChildrenByOffsetFromDataProvider(a,e,d.metadata.key,r).then(i.bind(s,new s.FetchByOffsetResults(s,t,n,!1)))}}return i(new s.FetchByOffsetResults(s,t,n,!1))};return e.fetchByOffset(t).then(i).then(s._getFetchByOffsetResultsFromCache.bind(s,r))}_sequence(t,e){return t.reduce((t,a)=>t.then(()=>e(a)),Promise.resolve())}_getRemainingSize(t){return-1===t[this._SIZE]?-1:t[this._SIZE]+t[this._OFFSET]-this._cache.length}_getExpandedKeysFromResults(t){let e=this;return t.map(function(t){return t.metadata.key}).filter(function(t){return e._isExpanded(t)})}_isExpanded(t){return this.options[this._EXPANDED].has(t)}setExpanded(e){let a=this,r=a.createOptimizedKeySet(),s=a.createOptimizedKeySet();a._oldExpanded=a.options.expanded,a.options.expanded=e;let i=a._oldExpanded,n=a.options.expanded;if(n.isAddAll()||i.isAddAll()){if(!n.isAddAll()||!i.isAddAll())return a._clearCache(),a.dispatchEvent(new t.DataProviderRefreshEvent),void a.getExpandedObservable().next(a._getExpandedObservableValue(this.options.expanded,Promise.resolve()));var h=n.deletedValues(),d=i.deletedValues();h.forEach(function(t){i.has(t)&&s.add(t)}),d.forEach(function(t){n.has(t)&&r.add(t)})}else{let t=n.values(),e=i.values();t.forEach(function(t){i.has(t)||r.add(t)}),e.forEach(function(t){n.has(t)||s.add(t)})}let l=a._expand(r),o=a._collapse(s),c=new Promise(function(e){l.then(function(r){let s=new a.DataProviderMutationEventDetail(a,r,o,null);a.dispatchEvent(new t.DataProviderMutationEvent(s)),e()})});a.getExpandedObservable().next(a._getExpandedObservableValue(this.options.expanded,c))}getExpandedObservable(){return this._expandedObservable}_isExpandAll(){return this.options[this._EXPANDED].isAddAll()}_pushItemToCache(t,e){let a=this._getLastItemByParentKey(e),r=null==a?this._getItemIndexByKey(e):this._getItemIndexByKey(a.metadata.key)+this._getLocalDescendentCount(a.metadata.key);this._cache.splice(r+1,0,t)}_spliceItemToCache(t,e){this._cache.splice(e+1,0,t)}_updateItemMetadata(t,e,a){let r=0,s=this._getLastItemByParentKey(e),i=null==s?0:s.metadata[this._INDEXFROMPARENT]+1;if(null!=a&&(i=a),null!=e){r=this._getItemByKey(e).metadata.treeDepth+1}return new this.Item(this,new this.FlattenedTreeItemMetadata(this,t.metadata.key,e,i,r,null===this.getChildDataProvider(t.metadata.key)),t.data)}_getItemByKey(t){var e=null;return this._cache.some(function(a){if(a.metadata.key===t)return e=a,!0}),e}_getItemIndexByKey(t){var e=-1;return this._cache.some(function(a,r){if(a.metadata.key===t)return e=r,!0}),e}_getLastEntry(){return this._cache[this._getLastIndex()]}_getEntry(t){return this._cache[t]}_getLastItemByParentKey(t){var e=null;return this._cache.slice().reverse().some(function(a){if(a.metadata.parentKey===t)return e=a,!0}),e}_getLastIndex(){return this._cache.length-1}_getLocalDescendentCount(t){let e=this,a=e._getItemByKey(t),r=0;if(null!=a){let s=e._getItemIndexByKey(t),i=a.metadata.treeDepth,n=e._getLastIndex();for(let t=s+1;t<=n;t++){if(!(e._getEntry(t).metadata.treeDepth>i))return r;r+=1}}return r}_expand(t){let e=[],a=this;return t.forEach(function(t){let r=new a.FetchByOffsetParameters(a,0,-1,a._currentSortCriteria,a._currentFilterCriteria,null),s=a.getChildDataProvider(t);e.push(a._fetchChildrenByOffsetFromDataProvider(r,s,t,r))}),Promise.all(e).then(function(){let e=a.createOptimizedKeySet(),r=a.createOptimizedKeySet(),s=[],i=[],n=[];return t.forEach(function(t){let h=a._getLocalDescendentCount(t);if(h>0){let d=a._getItemIndexByKey(t)+1,l=null;a._cache.slice(d,d+h).forEach(function(t,h){e.add(t.metadata.key),r.add(l),s.push(t.metadata),i.push(t.data),n.push(d+h),l=t.metadata.key,a._incrementIteratorOffset(d)})}}),new a.DataProviderAddOperationEventDetail(a,e,r,[],s,i,n)})}_collapse(t){let e=this,a=[],r=[],s=[],i=e.createOptimizedKeySet();return t.forEach(function(t){let n=e._getLocalDescendentCount(t);if(n>0){let h=e._getItemIndexByKey(t);e._cache.splice(h+1,n).forEach(function(t,n){i.add(t.metadata.key),a.push(t.metadata),r.push(t.data),s.push(h+n+1),e._decrementIteratorOffset(h+1)})}}),new e.DataProviderOperationEventDetail(e,i,a,r,s)}_decrementIteratorOffset(t){var e=this;e._iterators.forEach(function(a,r){t<a&&e._iterators.set(r,a-1)})}_incrementIteratorOffset(t){var e=this;e._iterators.forEach(function(a,r){t<a&&e._iterators.set(r,a+1)})}createOptimizedKeySet(t){return this.dataProvider.createOptimizedKeySet?this.dataProvider.createOptimizedKeySet(t):new a(t)}createOptimizedKeyMap(t){if(this.dataProvider.createOptimizedKeyMap)return this.dataProvider.createOptimizedKeyMap(t);if(t){let e=new h;return t.forEach(function(t,a){e.set(a,t)}),e}return new h}}
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
return t.FlattenedTreeDataProviderView=d,t.FlattenedTreeDataProviderView=d,t.EventTargetMixin.applyMixin(d),d});