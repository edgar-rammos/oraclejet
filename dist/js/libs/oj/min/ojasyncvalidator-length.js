/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","require","ojs/ojasyncvalidator-adapter"],(function(e,t,i){"use strict";
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
return class extends i{constructor(e){super(e),this.options=e}get hint(){return super._GetHint()}_InitLoadingPromise(){this._loadingPromise||(this._loadingPromise=e.__getRequirePromise("./ojvalidator-length",t))}}}));