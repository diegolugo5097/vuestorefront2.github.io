module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"lang-de.js","2":"pages/Category","3":"pages/ContactUs","4":"pages/GetQuote","5":"pages/MyAccount","6":"pages/MyAccount/AdressBook","7":"pages/MyAccount/BillingDetails","8":"pages/MyAccount/LoyaltyCard","9":"pages/MyAccount/MyNewsletter","10":"pages/MyAccount/MyProfile","11":"pages/MyAccount/MyReviews","12":"pages/MyAccount/OrderHistory","13":"pages/MyAccount/ShippingDetails","14":"pages/Product","15":"pages/QuickOrder","16":"pages/TermsAndConditions"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ composition_api_["computed"]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ composition_api_["getCurrentInstance"]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ composition_api_["isRef"]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ composition_api_["onBeforeMount"]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ composition_api_["onMounted"]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ composition_api_["onServerPrefetch"]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ composition_api_["reactive"]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ composition_api_["ref"]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ composition_api_["unref"]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ composition_api_["watch"]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ defineComponent; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ globalPlugin; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ setMetaPlugin; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ ssrRef; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ useContext; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ useRoute; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ useRouter; });

// UNUSED EXPORTS: createApp, createRef, customRef, defineAsyncComponent, del, effectScope, getCurrentScope, h, inject, isRaw, isReactive, isReadonly, markRaw, nextTick, onActivated, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onScopeDispose, onUnmounted, onUpdated, provide, proxyRefs, readonly, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, useAttrs, useCSSModule, useCssModule, useSlots, version, warn, watchEffect, watchPostEffect, watchSyncEffect, defineNuxtMiddleware, defineNuxtPlugin, onGlobalSetup, reqRef, reqSsrRef, setSSRContext, shallowSsrRef, ssrPromise, useAsync, useFetch, useMeta, useStatic, useStore, withContext, wrapProperty

// EXTERNAL MODULE: external "core-js/modules/esnext.weak-map.delete-all.js"
var esnext_weak_map_delete_all_js_ = __webpack_require__(131);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(132);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(133);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(134);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(135);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(136);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(137);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(138);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(139);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(140);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(141);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(142);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(143);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(144);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(145);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(146);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(147);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/composition-api/globals.mjs
const isFullStatic = false;
const staticPath = "/home/diego_818/storefront-b2b/.nuxt/static-json";
const publicPath = "/";
const globalContext = "__NUXT__";
const globalNuxt = "$nuxt";
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(115);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs





































function validateKey(key) {
  if (!key) {
    throw new Error("You must provide a key. You can have it generated automatically by adding '@nuxtjs/composition-api/dist/babel-plugin' to your Babel plugins.");
  }
}

function getCurrentInstance() {
  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) return;
  return vm.proxy;
}

function getValue(value) {
  if (value instanceof Function) return value();
  return value;
}

let globalRefs = {};

function setSSRContext(app) {
  globalRefs = Object.assign({}, {});
  app.context.ssrContext.nuxt.globalRefs = globalRefs;
}

const useServerData = () => {
  const vm = getCurrentInstance();
  const type = vm ? 'ssrRefs' : 'globalRefs';
  let ssrRefs;

  if (vm && true) {
    const ssrContext = (vm[globalNuxt] || vm.$options).context.ssrContext;
    ssrRefs = ssrContext.nuxt.ssrRefs = ssrContext.nuxt.ssrRefs || {};
  }

  const setData = (key, val) => {
    const refs = ssrRefs || globalRefs;
    refs[key] = sanitise(val);
  };

  return {
    type,
    setData
  };
};

const isProxyable = val => !!val && typeof val === 'object';

const sanitise = val => val && JSON.parse(JSON.stringify(val)) || val;

const ssrValue = (value, key, type = 'globalRefs') => {
  var _a, _b, _c, _d;

  if (false) {}

  return getValue(value);
};

const ssrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  let val = ssrValue(value, key, type);
  if (false) {}
  if (value instanceof Function) setData(key, val);

  const getProxy = (track, trigger, observable) => new Proxy(observable, {
    get(target, prop) {
      track();
      if (isProxyable(target[prop])) return getProxy(track, trigger, target[prop]);
      const value2 = Reflect.get(target, prop);
      return typeof value2 === 'function' ? value2.bind(target) : value2;
    },

    set(obj, prop, newVal) {
      const result = Reflect.set(obj, prop, newVal);
      setData(key, val);
      trigger();
      return result;
    }

  });

  const proxy = Object(composition_api_["customRef"])((track, trigger) => ({
    get: () => {
      track();
      if (isProxyable(val)) return getProxy(track, trigger, val);
      return val;
    },
    set: v => {
      setData(key, v);
      val = v;
      trigger();
    }
  }));
  return proxy;
};

const shallowSsrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  if (false) {}

  const _val = getValue(value);

  if (value instanceof Function) {
    setData(key, _val);
  }

  return Object(composition_api_["customRef"])((track, trigger) => ({
    get() {
      track();
      return _val;
    },

    set(newValue) {
      setData(key, newValue);
      value = newValue;
      trigger();
    }

  }));
};

const ssrPromise = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  const val = ssrValue(value, key, type);
  if (false) {}
  Object(composition_api_["onServerPrefetch"])(async () => {
    setData(key, await val);
  });
  return val;
};

const useAsync = (cb, key) => {
  var _a;

  validateKey(key);

  const _ref = Object(composition_api_["isRef"])(key) ? key : ssrRef(null, key);

  if (!_ref.value ||  false && (false)) {
    const p = Promise.resolve(cb());

    if (true) {
      Object(composition_api_["onServerPrefetch"])(async () => {
        _ref.value = await p;
      });
    } else {}
  }

  return _ref;
};

function createEmptyMeta() {
  return {
    titleTemplate: null,
    __dangerouslyDisableSanitizers: [],
    __dangerouslyDisableSanitizersByTagID: {},
    title: void 0,
    htmlAttrs: {},
    headAttrs: {},
    bodyAttrs: {},
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    changed: void 0,
    afterNavigation: void 0
  };
}

const getHeadOptions = options => {
  const head = function () {
    const optionHead = options.head instanceof Function ? options.head.call(this) : options.head;
    if (!this._computedHead) return optionHead;

    const computedHead = this._computedHead.map(h => {
      if (Object(composition_api_["isReactive"])(h)) return Object(composition_api_["toRaw"])(h);
      if (Object(composition_api_["isRef"])(h)) return h.value;
      return h;
    });

    return external_defu_default()({}, ...computedHead.reverse(), optionHead);
  };

  return {
    head
  };
};

const useMeta = init => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('useMeta must be called within a component.');
  if (!('head' in vm.$options)) throw new Error('In order to enable `useMeta`, please make sure you include `head: {}` within your component definition, and you are using the `defineComponent` exported from @nuxtjs/composition-api.');

  const refreshMeta = () => vm.$meta().refresh();

  if (!vm._computedHead) {
    const metaRefs = Object(composition_api_["reactive"])(createEmptyMeta());
    vm._computedHead = [metaRefs];
    vm._metaRefs = Object(composition_api_["toRefs"])(metaRefs);

    if (false) {}
  }

  if (init) {
    const initRef = init instanceof Function ? Object(composition_api_["computed"])(init) : Object(composition_api_["ref"])(init);

    vm._computedHead.push(initRef);

    if (false) {}
  }

  return vm._metaRefs;
};

const defineComponent = options => {
  if (!('head' in options)) return options;
  return { ...options,
    ...getHeadOptions(options)
  };
};

const withContext = callback => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  callback((vm[globalNuxt] || vm.$options).context);
};

const useContext = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  return { ...(vm[globalNuxt] || vm.$options).context,
    route: Object(composition_api_["computed"])(() => vm.$route),
    query: Object(composition_api_["computed"])(() => vm.$route.query),
    from: Object(composition_api_["computed"])(() => (vm[globalNuxt] || vm.$options).context.from),
    params: Object(composition_api_["computed"])(() => vm.$route.params)
  };
};

const defineNuxtPlugin = plugin => plugin;

const defineNuxtMiddleware = middleware => middleware;

const nuxtState =  false && false;

function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}

const fetches = new WeakMap();
const fetchPromises = new Map();

const isSsrHydration = vm => {
  var _a, _b, _c;

  return (_c = (_b = (_a = vm.$vnode) == null ? void 0 : _a.elm) == null ? void 0 : _b.dataset) == null ? void 0 : _c.fetchKey;
};

function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}

async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall) return;
  this[globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error = null;
  const startTime = Date.now();

  try {
    await Promise.all(fetchesToCall.map(fetch => {
      if (fetchPromises.has(fetch)) return fetchPromises.get(fetch);
      const promise = Promise.resolve(fetch(this)).finally(() => fetchPromises.delete(fetch));
      fetchPromises.set(fetch, promise);
      return promise;
    }));
  } catch (err) {
    if (false) {}

    error = normalizeError(err);
  }

  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);

  if (delayLeft > 0) {
    await new Promise(resolve => setTimeout(resolve, delayLeft));
  }

  this.$fetchState.error = error;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globalNuxt].nbFetching--);
}

const setFetchState = vm => {
  vm.$fetchState = vm.$fetchState || Object(composition_api_["reactive"])({
    error: null,
    pending: false,
    timestamp: 0
  });
};

const mergeDataOnMount = data => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  Object(composition_api_["onBeforeMount"])(() => {
    for (const key in data) {
      try {
        if (key in vm) {
          const _key = key;
          if (vm[_key] === data[key]) continue;
          if (typeof vm[_key] === 'function') continue;

          if (Object(composition_api_["isReactive"])(vm[_key])) {
            for (const k in vm[_key]) {
              if (!(k in data[key])) {
                delete vm[_key][k];
              }
            }

            Object.assign(vm[_key], data[key]);
            continue;
          }
        }

        Object(composition_api_["set"])(vm, key, data[key]);
      } catch (e) {
        if (false) {}
      }
    }
  });
};

const loadFullStatic = vm => {
  vm._fetchKey = getKey(vm);
  const {
    fetchOnServer
  } = vm.$options;
  const fetchedOnServer = typeof fetchOnServer === 'function' ? fetchOnServer.call(vm) !== false : fetchOnServer !== false;
  const nuxt = vm[globalNuxt];

  if (!fetchedOnServer || (nuxt == null ? void 0 : nuxt.isPreview) || !(nuxt == null ? void 0 : nuxt._pagePayload)) {
    return;
  }

  vm._hydrated = true;
  const data = nuxt._pagePayload.fetch[vm._fetchKey];

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return;
  }

  mergeDataOnMount(data);
};

async function serverPrefetch(vm) {
  if (!vm._fetchOnServer) return;
  setFetchState(vm);

  try {
    await callFetches.call(vm);
  } catch (err) {
    if (false) {}

    vm.$fetchState.error = normalizeError(err);
  }

  vm.$fetchState.pending = false;
  vm._fetchKey = 'push' in vm.$ssrContext.nuxt.fetch ? vm.$ssrContext.nuxt.fetch.length : vm._fetchKey || vm.$ssrContext.fetchCounters['']++;
  if (!vm.$vnode.data) vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = vm._fetchKey;
  const data = { ...vm._data
  };
  Object.entries(vm.__composition_api_state__.rawBindings).forEach(([key, val]) => {
    if (val instanceof Function || val instanceof Promise) return;
    data[key] = Object(composition_api_["isRef"])(val) ? val.value : val;
  });
  const content = vm.$fetchState.error ? {
    _error: vm.$fetchState.error
  } : JSON.parse(JSON.stringify(data));

  if ('push' in vm.$ssrContext.nuxt.fetch) {
    vm.$ssrContext.nuxt.fetch.push(content);
  } else {
    vm.$ssrContext.nuxt.fetch[vm._fetchKey] = content;
  }
}

function getKey(vm) {
  const nuxtState2 = vm[globalNuxt];

  if ( true && 'push' in vm.$ssrContext.nuxt.fetch) {
    return void 0;
  } else if (false) {}

  const defaultKey = vm.$options._scopeId || vm.$options.name || '';
  const getCounter = createGetCounter( true ? vm.$ssrContext.fetchCounters : undefined, defaultKey);
  const options = vm.$options;

  if (typeof options.fetchKey === 'function') {
    return options.fetchKey.call(vm, getCounter);
  } else {
    const key = typeof options.fetchKey === 'string' ? options.fetchKey : defaultKey;
    return key ? key + ':' + getCounter(key) : String(getCounter(key));
  }
}

const useFetch = callback => {
  var _a;

  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  registerCallback(vm, callback);

  if (typeof vm.$options.fetchOnServer === 'function') {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }

  if (true) {
    vm._fetchKey = getKey(vm);
  }

  setFetchState(vm);
  Object(composition_api_["onServerPrefetch"])(() => serverPrefetch(vm));

  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }

  vm._fetchDelay = typeof vm.$options.fetchDelay === 'number' ? vm.$options.fetchDelay : 0;
  vm.$fetch = callFetches.bind(vm);
  Object(composition_api_["onBeforeMount"])(() => !vm._hydrated && callFetches.call(vm));

  if (true) {
    if (false) {}
    return result();
  }

  vm._hydrated = true;
  vm._fetchKey = ((_a = vm.$vnode.elm) == null ? void 0 : _a.dataset.fetchKey) || getKey(vm);
  const data = nuxtState.fetch[vm._fetchKey];

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return result();
  }

  mergeDataOnMount(data);
  return result();
};

const reqRefs = new Set();

const reqRef = initialValue => {
  const _ref = Object(composition_api_["ref"])(initialValue);

  if (true) reqRefs.add(() => _ref.value = initialValue);
  return _ref;
};

const reqSsrRef = (initialValue, key) => {
  const _ref = ssrRef(initialValue, key);

  if (true) reqRefs.add(() => {
    _ref.value = initialValue instanceof Function ? sanitise(initialValue()) : initialValue;
  });
  return _ref;
};

let globalSetup;

const onGlobalSetup = fn => {
  globalSetup.add(fn);
};

const setMetaPlugin = context => {
  const {
    head
  } = context.app;
  Object.assign(context.app, getHeadOptions({
    head
  }));
};

const globalPlugin = context => {
  if (true) {
    reqRefs.forEach(reset => reset());
    setSSRContext(context.app);
  }

  const {
    setup
  } = context.app;
  globalSetup = new Set();

  context.app.setup = function (...args) {
    let result = {};

    if (setup instanceof Function) {
      result = setup(...args) || {};
    }

    for (const fn of globalSetup) {
      result = { ...result,
        ...(fn.call(this, ...args) || {})
      };
    }

    return result;
  };
};

const staticCache = {};

function writeFile(key, value) {
  if (false) {}
  const {
    writeFileSync
  } =  false ? undefined : __webpack_require__(148);
  const {
    join
  } =  false ? undefined : __webpack_require__(149);

  try {
    writeFileSync(join(staticPath, `${key}.json`), value);
  } catch (e) {
    console.log(e);
  }
}

const useStatic = (factory, param = Object(composition_api_["ref"])(''), keyBase) => {
  var _a, _b;

  const key = Object(composition_api_["computed"])(() => `${keyBase}-${param.value}`);
  const result = ssrRef(null, key.value);
  if (result.value) staticCache[key.value] = result.value;

  if (false) {} else {
    if (key.value in staticCache) {
      result.value = staticCache[key.value];
      return result;
    }

    Object(composition_api_["onServerPrefetch"])(async () => {
      const [_key, _param] = [key.value, param.value];
      result.value = await factory(_param, _key);
      staticCache[_key] = result.value;
      writeFile(_key, JSON.stringify(result.value));
    });
  }

  return result;
};

const wrapProperty = (property, makeComputed) => {
  return () => {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('This must be called within a setup function.');
    return makeComputed !== false ? Object(composition_api_["computed"])(() => vm[property]) : vm[property];
  };
};

const useRouter = wrapProperty('$router', false);
const useRoute = wrapProperty('$route');

const useStore = key => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  return vm.$store;
};

if (false) {}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@vue/composition-api");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgnosticOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Logger; });
/* unused harmony export VSF_CHANNEL_COOKIE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VSF_COUNTRY_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VSF_CURRENCY_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VSF_LOCALE_COOKIE; });
/* unused harmony export VSF_STORE_COOKIE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return addBasePath; });
/* unused harmony export apiClientFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return configureContext; });
/* unused harmony export configureFactoryParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return configureSSR; });
/* unused harmony export generateContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return i18nRedirectsUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return integrationPlugin; });
/* unused harmony export mask */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return onSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return registerLogger; });
/* unused harmony export renderContentFactory */
/* unused harmony export sharedRef */
/* unused harmony export track */
/* unused harmony export useBillingFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return useCartFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return useCategoryFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return useContentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return useFacetFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return useForgotPasswordFactory; });
/* unused harmony export useMakeOrderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return useProductFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return useReviewFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return useSearchFactory; });
/* unused harmony export useShippingFactory */
/* unused harmony export useShippingProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useStoreFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return useUserBillingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return useUserFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return useUserOrderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return useUserShippingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return useVSFContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return useWishlistFactory; });
/* unused harmony export vsfRef */
/* unused harmony export wrap */
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var onSSR = _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* onServerPrefetch */ "h"];
var vsfRef = _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "j"];

var configureSSR = function (config) {
  onSSR = config.onSSR || onSSR;
  vsfRef = config.vsfRef || vsfRef;
};

function sharedRef(value, key) {
  var $sharedRefsMap = useVSFContext().$sharedRefsMap;
  var givenKey = key || value;

  if ($sharedRefsMap.has(givenKey)) {
    return $sharedRefsMap.get(givenKey);
  }

  var newRef = vsfRef(key ? value : null, givenKey);
  $sharedRefsMap.set(givenKey, newRef);
  return newRef;
}

function wrap(element) {
  return Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* isRef */ "e"])(element) ? element : Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "j"])(element);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

var LogName;

(function (LogName) {
  LogName["Error"] = "error";
  LogName["Info"] = "info";
  LogName["Debug"] = "debug";
  LogName["None"] = "none";
  LogName["Warn"] = "warn";
})(LogName || (LogName = {}));

var LogLevelStyle = {
  Log: 'background:#5ece7b; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff;',
  Info: 'background:#0468DB; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff;',
  Warn: 'background:#ecc713; padding: 2px; border-radius: 0 2px 2px 0;  color: #000;',
  Error: 'background:#d12727; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff'
};
var detectNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]' || process.env.APPLICATION_ENV === 'production';

var mountLog = function (name, style) {
  if (detectNode) {
    return ["".concat(name, ": ")];
  }

  return ["%c".concat(name, "%c:"), style, 'background: transparent;'];
};

function makeMessageStyle(logEnum) {
  switch (logEnum) {
    case LogName.Error:
      return mountLog('[VSF][error]', LogLevelStyle.Error);

    case LogName.Info:
      return mountLog('[VSF][info]', LogLevelStyle.Info);

    case LogName.Warn:
      return mountLog('[VSF][warn]', LogLevelStyle.Warn);

    case LogName.Debug:
      return mountLog('[VSF][debug]', LogLevelStyle.Log);

    case LogName.None:
    default:
      return mountLog('[VSF]', LogLevelStyle.Log);
  }
} // eslint-disable-next-line @typescript-eslint/ban-types


function makeMethod(logEnum, fn) {
  return function () {
    return Function.prototype.bind.apply(fn, __spreadArray([console], makeMessageStyle(logEnum)));
  };
}
/* istanbul ignore file */


var defaultLogger = {
  debug: makeMethod(LogName.Debug, console.debug)(),
  info: makeMethod(LogName.Info, console.info)(),
  warn: makeMethod(LogName.Warn, console.warn)(),
  error: makeMethod(LogName.Error, console.error)()
};
var defaultModes = {
  // Test
  test: 'none',
  // Development
  dev: 'warn',
  development: 'warn',
  // Production
  prod: 'error',
  production: 'error',
  // Fallback
  default: 'warn'
};
var Logger = defaultLogger;

var registerLogger = function (loggerImplementation, verbosity) {
  if (typeof loggerImplementation === 'function') {
    Logger = loggerImplementation(verbosity);
    return;
  }

  switch (verbosity) {
    case 'info':
      Logger = __assign(__assign(__assign({}, defaultLogger), loggerImplementation), {
        debug: function () {}
      });
      break;

    case 'warn':
      Logger = __assign(__assign(__assign({}, defaultLogger), loggerImplementation), {
        info: function () {},
        debug: function () {}
      });
      break;

    case 'error':
      Logger = __assign(__assign(__assign({}, defaultLogger), loggerImplementation), {
        info: function () {},
        warn: function () {},
        debug: function () {}
      });
      break;

    case 'none':
      Logger = {
        debug: function () {},
        info: function () {},
        warn: function () {},
        error: function () {}
      };
      break;

    default:
      Logger = __assign(__assign({}, defaultLogger), loggerImplementation);
  }
};

registerLogger(defaultLogger, defaultModes["production"] || defaultModes.default);
/**
 * Adds prefix with base path configured in router.base to provided url
 * @param {string} path - url to which base path will be added
 * @returns Relative path prefixed with router.base or not modified absolute path (it needs start from http or https)
 */

function addBasePath(path) {
  var pattern = /^((http|https):\/\/)/;

  if (pattern.test(path)) {
    return path;
  }

  var basePath = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* useRouter */ "p"])().options.base.slice(0, -1);
  return "".concat(basePath).concat(path);
}

var maskString = function (el) {
  return "".concat(el.charAt(0), "***").concat(el.slice(-1));
};

var maskAny = function (el) {
  if (typeof el === 'string') {
    return maskString(el);
  }

  return '***';
};

var mask = function (el) {
  if (typeof el === 'object' && !Array.isArray(el)) {
    return Object.keys(el).reduce(function (prev, key) {
      var _a;

      return __assign(__assign({}, prev), (_a = {}, _a[key] = maskAny(el[key]), _a));
    }, {});
  }

  return maskAny(el);
};

var useVSFContext = function () {
  return {};
};

var configureContext = function (config) {
  useVSFContext = config.useVSFContext || useVSFContext;
};

var generateContext = function (factoryParams) {
  var vsfContext = useVSFContext();

  if (factoryParams.provide) {
    return __assign(__assign({}, vsfContext.$vsf), factoryParams.provide(vsfContext.$vsf));
  }

  return vsfContext.$vsf;
};
/**
 * It extends given integartion, defined by `tag` in the context.
 */


var createExtendIntegrationInCtx = function (_a) {
  var tag = _a.tag,
      nuxtCtx = _a.nuxtCtx,
      inject = _a.inject;
  return function (integrationProperties) {
    var _a;

    var integrationKey = '$' + tag;

    if (!nuxtCtx.$vsf || !nuxtCtx.$vsf[integrationKey]) {
      inject('vsf', (_a = {}, _a[integrationKey] = {}, _a));
    }

    Object.keys(integrationProperties).filter(function (k) {
      return !['api', 'client', 'config'].includes(k);
    }).forEach(function (key) {
      nuxtCtx.$vsf[integrationKey][key] = integrationProperties[key];
    });
  };
};
/**
 * It creates a function that adds an integration to the context under the given name, defined by `tag`.
 */


var createAddIntegrationToCtx = function (_a) {
  var tag = _a.tag,
      nuxtCtx = _a.nuxtCtx,
      inject = _a.inject;
  return function (integrationProperties) {
    var _a;

    var integrationKey = '$' + tag;

    if (nuxtCtx.$vsf && !nuxtCtx.$vsf[integrationKey]) {
      nuxtCtx.$vsf[integrationKey] = integrationProperties;
      return;
    }

    inject('vsf', (_a = {}, _a[integrationKey] = integrationProperties, _a));
  };
};
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/** Detect free variable `global` from Node.js. */


var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Built-in value references. */

var Symbol$1 = root.Symbol;
/** Used for built-in method references. */

var objectProto$a = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$a.toString;
/** Built-in value references. */

var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }

  return result;
}
/** Used for built-in method references. */


var objectProto$9 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto$9.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/** Used for built-in method references. */


var funcProto$2 = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$2 = funcProto$2.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$8 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
/* Built-in method references that are verified to be native. */

var nativeCreate = getNative(Object, 'create');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }

  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}
/** Used for built-in method references. */


var objectProto$6 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$5.call(data, key);
}
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */


function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
/** Detect free variable `exports`. */

var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
/** Built-in value references. */

var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */


function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
  return value === proto;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/** `Object#toString` result references. */


var argsTag$1 = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
/** Used for built-in method references. */


var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}
/** Detect free variable `exports`. */


var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
/** Built-in value references. */

var Buffer = moduleExports$1 ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
/** `Object#toString` result references. */

var objectTag$1 = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$1) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/** Detect free variable `exports`. */


var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}
/** Used for built-in method references. */


var objectProto$2 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$2.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/** Used as references for various `Number` constants. */


var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/** Used for built-in method references. */


var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */


function identity(value) {
  return value;
}
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */


function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */


function constant(value) {
  return function () {
    return value;
  };
}
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

var getBaseUrl = function (req, basePath) {
  if (basePath === void 0) {
    basePath = '/';
  }

  if (!req) return "".concat(basePath, "api/");
  var headers = req.headers;

  var isHttps = __webpack_require__(150)(req);

  var scheme = isHttps ? 'https' : 'http';
  var host = headers['x-forwarded-host'] || headers.host;
  return "".concat(scheme, "://").concat(host).concat(basePath, "api/");
};

var createProxiedApi = function (_a) {
  var givenApi = _a.givenApi,
      client = _a.client,
      tag = _a.tag;
  return new Proxy(givenApi, {
    get: function (target, prop, receiver) {
      var functionName = String(prop);

      if (Reflect.has(target, functionName)) {
        return Reflect.get(target, prop, receiver);
      }

      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [2
            /*return*/
            , client.post("/".concat(tag, "/").concat(functionName), args).then(function (r) {
              return r.data;
            })];
          });
        });
      };
    }
  });
};

var getCookies = function (context) {
  var _a, _b, _c;

  return (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.cookie) !== null && _c !== void 0 ? _c : '';
};

var getIntegrationConfig = function (context, configuration) {
  var cookie = getCookies(context);
  var initialConfig = merge({
    axios: {
      baseURL: getBaseUrl(context === null || context === void 0 ? void 0 : context.req, context === null || context === void 0 ? void 0 : context.base),
      headers: __assign({}, cookie ? {
        cookie: cookie
      } : {})
    }
  }, configuration);
  return initialConfig;
};

var parseCookies = function (cookieString) {
  return cookieString.split(';').filter(String).map(function (item) {
    return item.split('=').map(function (part) {
      return part.trim();
    });
  }).reduce(function (obj, _a) {
    var _b;

    var name = _a[0],
        value = _a[1];
    return __assign(__assign({}, obj), (_b = {}, _b[name] = value, _b));
  }, {});
};

var setCookieValues = function (cookieValues, cookieString) {
  if (cookieString === void 0) {
    cookieString = '';
  }

  var parsed = parseCookies(cookieString);
  Object.entries(cookieValues).forEach(function (_a) {
    var name = _a[0],
        value = _a[1];
    return parsed[name] = value;
  });
  return Object.entries(parsed).map(function (_a) {
    var name = _a[0],
        value = _a[1];
    return "".concat(name, "=").concat(value);
  }).join('; ');
};

var integrationPlugin = function (pluginFn) {
  return function (nuxtCtx, inject) {
    var configure = function (tag, configuration) {
      var injectInContext = createAddIntegrationToCtx({
        tag: tag,
        nuxtCtx: nuxtCtx,
        inject: inject
      });
      var config = getIntegrationConfig(nuxtCtx, configuration);
      var _a = nuxtCtx.$config,
          middlewareUrl = _a.middlewareUrl,
          ssrMiddlewareUrl = _a.ssrMiddlewareUrl;

      if (middlewareUrl) {
        config.axios.baseURL =  true ? ssrMiddlewareUrl || middlewareUrl : undefined;
      }

      var client = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create(config.axios);
      var api = createProxiedApi({
        givenApi: configuration.api || {},
        client: client,
        tag: tag
      });

      if (nuxtCtx.app.i18n.cookieValues) {
        client.defaults.headers.cookie = setCookieValues(nuxtCtx.app.i18n.cookieValues, client.defaults.headers.cookie);
      }

      injectInContext({
        api: api,
        client: client,
        config: config
      });
    };

    var extend = function (tag, integrationProperties) {
      createExtendIntegrationInCtx({
        tag: tag,
        nuxtCtx: nuxtCtx,
        inject: inject
      })(integrationProperties);
    };

    var integration = {
      configure: configure,
      extend: extend
    };
    pluginFn(__assign(__assign({}, nuxtCtx), {
      integration: integration
    }), inject);
  };
};

var createFactoryParamsMethod = function (fn, fnName, context) {
  return function (argObj) {
    if (fnName === 'provide') {
      return fn(context);
    }

    return fn(context, argObj);
  };
};

var createFactoryParamsReducer$1 = function (context) {
  return function (prev, _a) {
    var _b;

    var fnName = _a[0],
        fn = _a[1];
    return __assign(__assign({}, prev), (_b = {}, _b[fnName] = createFactoryParamsMethod(fn, fnName, context), _b));
  };
};

var createCommonMethods = function (factoryParams, context) {
  return Object.entries(factoryParams).reduce(createFactoryParamsReducer$1(context), {});
};

var createPlatformMethod = function (context, refs, functionObject) {
  return function (params) {
    return __awaiter(void 0, void 0, void 0, function () {
      var mainRef, loading, error, alias, _a, err_1;

      var _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            mainRef = refs.mainRef, loading = refs.loading, error = refs.error, alias = refs.alias;
            _c.label = 1;

          case 1:
            _c.trys.push([1, 3, 4, 5]);

            loading.value = true;
            _a = mainRef;
            return [4
            /*yield*/
            , functionObject.fn(context, __assign(__assign({}, params), (_b = {}, _b[alias] = mainRef.value, _b)))];

          case 2:
            _a.value = _c.sent();
            loading.value = false;
            return [3
            /*break*/
            , 5];

          case 3:
            err_1 = _c.sent();
            error.value[functionObject.fnName] = err_1;
            Logger.error("api.".concat(functionObject.fnName), err_1);
            return [3
            /*break*/
            , 5];

          case 4:
            loading.value = false;
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

var createFactoryParamsReducer = function (context, refs) {
  return function (prev, _a) {
    var _b;

    var fnName = _a[0],
        fn = _a[1];
    return __assign(__assign({}, prev), (_b = {}, _b[fnName] = createPlatformMethod(context, refs, {
      fnName: fnName,
      fn: fn
    }), _b));
  };
};

var createPlatformMethods = function (apiSection, context, refs) {
  return Object.entries(apiSection).reduce(createFactoryParamsReducer(context, refs), {});
};

var configureFactoryParams = function (factoryParams, refs) {
  if (refs === void 0) {
    refs = null;
  }

  var context = generateContext(factoryParams);

  var api = factoryParams.api,
      methods = __rest(factoryParams, ["api"]);

  var commonMethods = createCommonMethods(methods, context);
  var platformMethods = refs ? createPlatformMethods(api || {}, context, refs) : {};
  return __assign(__assign({}, commonMethods), {
    api: platformMethods
  });
};

var i18nRedirectsUtil = function (_a) {
  var path = _a.path,
      defaultLocale = _a.defaultLocale,
      availableLocales = _a.availableLocales,
      cookieLocale = _a.cookieLocale,
      acceptedLanguages = _a.acceptedLanguages;
  var arrayFromPath = path.split('/').filter(String);
  var localeCandidate = arrayFromPath[0];

  var isLocaleAvailable = function (locale) {
    return availableLocales.includes(locale);
  };

  var strippedLocaleFromPath = isLocaleAvailable(localeCandidate) ? "/".concat(arrayFromPath.slice(1).join('/')) : path;
  var localeFromPath = isLocaleAvailable(localeCandidate) ? localeCandidate : '';

  var removeTailingSlash = function (path) {
    return path.replace(/\/$/, '');
  };

  var getTargetLocale = function () {
    var languagesOrderedByPriority = __spreadArray(__spreadArray([localeFromPath, cookieLocale], acceptedLanguages, true), [defaultLocale]);

    return languagesOrderedByPriority.find(function (code) {
      return isLocaleAvailable(code);
    });
  };

  var getRedirectPath = function () {
    var targetLocale = getTargetLocale();
    var isTargetDefaultLocale = targetLocale === defaultLocale;
    var isTargetInPath = targetLocale === localeFromPath;

    if (!localeFromPath && !isTargetInPath && !isTargetDefaultLocale) {
      return removeTailingSlash("/".concat(targetLocale).concat(strippedLocaleFromPath));
    }

    return '';
  };

  return {
    getRedirectPath: getRedirectPath,
    getTargetLocale: getTargetLocale
  };
};

var nopBefore = function (_a) {
  var args = _a.args;
  return args;
};

var nopAfter = function (_a) {
  var response = _a.response;
  return response;
};

var createExtendQuery = function (context) {
  return function (customQuery, defaults) {
    var customQueries = context.customQueries || {};
    var queryArgs = customQuery || {};
    var metadata = customQuery && customQuery.metadata || {};
    return Object.entries(defaults).reduce(function (prev, _a) {
      var _b;

      var queryName = _a[0],
          initialArgs = _a[1];

      var queryFn = customQueries[queryArgs[queryName]] || function () {
        return initialArgs;
      };

      return __assign(__assign({}, prev), (_b = {}, _b[queryName] = queryFn(__assign(__assign({}, initialArgs), {
        metadata: metadata
      })), _b));
    }, {});
  };
};

var applyContextToApi = function (api, context,
/**
 * By default we use NOP function for returning the same parameters as they come.
 * It's useful in extensions, when someone don't want to inject into changing arguments or the response,
 * in that case, we use default function, to handle that scenario - NOP
 */
hooks) {
  if (hooks === void 0) {
    hooks = {
      before: nopBefore,
      after: nopAfter
    };
  }

  return Object.entries(api).reduce(function (prev, _a) {
    var _b;

    var callName = _a[0],
        fn = _a[1];
    return __assign(__assign({}, prev), (_b = {}, _b[callName] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return __awaiter(void 0, void 0, void 0, function () {
        var extendQuery, transformedArgs, apiClientContext, response, transformedResponse;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              extendQuery = createExtendQuery(context);
              transformedArgs = hooks.before({
                callName: callName,
                args: args
              });
              apiClientContext = __assign(__assign({}, context), {
                extendQuery: extendQuery
              });
              return [4
              /*yield*/
              , fn.apply(void 0, __spreadArray([apiClientContext], transformedArgs))];

            case 1:
              response = _a.sent();
              transformedResponse = hooks.after({
                callName: callName,
                args: args,
                response: response
              });
              return [2
              /*return*/
              , transformedResponse];
          }
        });
      });
    }, _b));
  }, {});
};

var isFn = function (x) {
  return typeof x === 'function';
};

var apiClientFactory = function (factoryParams) {
  function createApiClient(config, customApi) {
    var _this = this;

    var _a;

    if (customApi === void 0) {
      customApi = {};
    }

    var rawExtensions = ((_a = this === null || this === void 0 ? void 0 : this.middleware) === null || _a === void 0 ? void 0 : _a.extensions) || [];
    var lifecycles = Object.values(rawExtensions).filter(function (ext) {
      return isFn(ext.hooks);
    }).map(function (_a) {
      var _b, _c;

      var hooks = _a.hooks;
      return hooks((_b = _this === null || _this === void 0 ? void 0 : _this.middleware) === null || _b === void 0 ? void 0 : _b.req, (_c = _this === null || _this === void 0 ? void 0 : _this.middleware) === null || _c === void 0 ? void 0 : _c.res);
    });
    var extendedApis = Object.keys(rawExtensions).reduce(function (prev, curr) {
      return __assign(__assign({}, prev), rawExtensions[curr].extendApiMethods);
    }, customApi);

    var _config = lifecycles.filter(function (ext) {
      return isFn(ext.beforeCreate);
    }).reduce(function (prev, curr) {
      return curr.beforeCreate({
        configuration: prev
      });
    }, config);

    var settings = factoryParams.onCreate ? factoryParams.onCreate(_config) : {
      config: config,
      client: config.client
    };
    Logger.debug('apiClientFactory.create', settings);
    settings.config = lifecycles.filter(function (ext) {
      return isFn(ext.afterCreate);
    }).reduce(function (prev, curr) {
      return curr.afterCreate({
        configuration: prev
      });
    }, settings.config);
    var extensionHooks = {
      before: function (params) {
        return lifecycles.filter(function (e) {
          return isFn(e.beforeCall);
        }).reduce(function (args, e) {
          return e.beforeCall(__assign(__assign({}, params), {
            configuration: settings.config,
            args: args
          }));
        }, params.args);
      },
      after: function (params) {
        return lifecycles.filter(function (e) {
          return isFn(e.afterCall);
        }).reduce(function (response, e) {
          return e.afterCall(__assign(__assign({}, params), {
            configuration: settings.config,
            response: response
          }));
        }, params.response);
      }
    };
    var api = applyContextToApi(__assign(__assign({}, factoryParams.api), extendedApis), __assign(__assign({}, settings), (this === null || this === void 0 ? void 0 : this.middleware) || {}), extensionHooks);
    return {
      api: api,
      client: settings.client,
      settings: settings.config
    };
  }

  createApiClient._predefinedExtensions = factoryParams.extensions || [];
  return {
    createApiClient: createApiClient
  };
};

var useBillingFactory = function (factoryParams) {
  return function useBilling() {
    var _this = this;

    var loading = sharedRef(false, 'useBilling-loading');
    var billing = sharedRef(null, 'useBilling-billing');
    var error = sharedRef({
      load: null,
      save: null
    }, 'useBilling-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: billing,
      alias: 'currentBilling',
      loading: loading,
      error: error
    });

    var load = function (_a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.customQuery,
          customQuery = _c === void 0 ? null : _c;

      return __awaiter(_this, void 0, void 0, function () {
        var billingInfo, err_1;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              Logger.debug('useBilling.load');
              _d.label = 1;

            case 1:
              _d.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery
              })];

            case 2:
              billingInfo = _d.sent();
              error.value.load = null;
              billing.value = billingInfo;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _d.sent();
              error.value.load = err_1;
              Logger.error('useBilling/load', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var save = function (saveParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var billingInfo, err_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useBilling.save');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.save(saveParams)];

            case 2:
              billingInfo = _a.sent();
              error.value.save = null;
              billing.value = billingInfo;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _a.sent();
              error.value.save = err_2;
              Logger.error('useBilling/save', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      billing: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return billing.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      }),
      load: load,
      save: save
    };
  };
};

var useCartFactory = function (factoryParams) {
  return function useCart() {
    var _this = this;

    var loading = sharedRef(false, 'useCart-loading');
    var cart = sharedRef(null, 'useCart-cart');
    var error = sharedRef({
      addItem: null,
      removeItem: null,
      updateItemQty: null,
      load: null,
      clear: null,
      applyCoupon: null,
      removeCoupon: null
    }, 'useCart-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: cart,
      alias: 'currentCart',
      loading: loading,
      error: error
    });

    var setCart = function (newCart) {
      cart.value = newCart;
      Logger.debug('useCartFactory.setCart', newCart);
    };

    var addItem = function (_a) {
      var product = _a.product,
          quantity = _a.quantity,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var updatedCart, err_1;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useCart.addItem', {
                product: product,
                quantity: quantity
              });
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.addItem({
                currentCart: cart.value,
                product: product,
                quantity: quantity,
                customQuery: customQuery
              })];

            case 2:
              updatedCart = _b.sent();
              error.value.addItem = null;
              cart.value = updatedCart;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.addItem = err_1;
              Logger.error('useCart/addItem', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var removeItem = function (_a) {
      var product = _a.product,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var updatedCart, err_2;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useCart.removeItem', {
                product: product
              });
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.removeItem({
                currentCart: cart.value,
                product: product,
                customQuery: customQuery
              })];

            case 2:
              updatedCart = _b.sent();
              error.value.removeItem = null;
              cart.value = updatedCart;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              error.value.removeItem = err_2;
              Logger.error('useCart/removeItem', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var updateItemQty = function (_a) {
      var product = _a.product,
          quantity = _a.quantity,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var updatedCart, err_3;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useCart.updateItemQty', {
                product: product,
                quantity: quantity
              });
              if (!(quantity && quantity > 0)) return [3
              /*break*/
              , 5];
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.updateItemQty({
                currentCart: cart.value,
                product: product,
                quantity: quantity,
                customQuery: customQuery
              })];

            case 2:
              updatedCart = _b.sent();
              error.value.updateItemQty = null;
              cart.value = updatedCart;
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _b.sent();
              error.value.updateItemQty = err_3;
              Logger.error('useCart/updateItemQty', err_3);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function (_a) {
      var _b = _a === void 0 ? {
        customQuery: undefined
      } : _a,
          customQuery = _b.customQuery;

      return __awaiter(_this, void 0, void 0, function () {
        var _c, err_4;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              Logger.debug('useCart.load');

              if (cart.value) {
                /**
                 * Triggering change for hydration purpose,
                 * temporary issue related with cpapi plugin
                 */
                loading.value = false;
                error.value.load = null;
                cart.value = __assign({}, cart.value);
                return [2
                /*return*/
                ];
              }

              _d.label = 1;

            case 1:
              _d.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _c = cart;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery
              })];

            case 2:
              _c.value = _d.sent();
              error.value.load = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_4 = _d.sent();
              error.value.load = err_4;
              Logger.error('useCart/load', err_4);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var clear = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var updatedCart, err_5;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useCart.clear');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.clear({
                currentCart: cart.value
              })];

            case 2:
              updatedCart = _a.sent();
              error.value.clear = null;
              cart.value = updatedCart;
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _a.sent();
              error.value.clear = err_5;
              Logger.error('useCart/clear', err_5);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var isInCart = function (_a) {
      var product = _a.product;
      return _factoryParams.isInCart({
        currentCart: cart.value,
        product: product
      });
    };

    var applyCoupon = function (_a) {
      var couponCode = _a.couponCode,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var updatedCart, err_6;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useCart.applyCoupon');
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.applyCoupon({
                currentCart: cart.value,
                couponCode: couponCode,
                customQuery: customQuery
              })];

            case 2:
              updatedCart = _b.sent().updatedCart;
              error.value.applyCoupon = null;
              cart.value = updatedCart;
              return [3
              /*break*/
              , 5];

            case 3:
              err_6 = _b.sent();
              error.value.applyCoupon = err_6;
              Logger.error('useCart/applyCoupon', err_6);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var removeCoupon = function (_a) {
      var couponCode = _a.couponCode,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var updatedCart, err_7;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useCart.removeCoupon');
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.removeCoupon({
                currentCart: cart.value,
                couponCode: couponCode,
                customQuery: customQuery
              })];

            case 2:
              updatedCart = _b.sent().updatedCart;
              error.value.removeCoupon = null;
              cart.value = updatedCart;
              loading.value = false;
              return [3
              /*break*/
              , 5];

            case 3:
              err_7 = _b.sent();
              error.value.removeCoupon = err_7;
              Logger.error('useCart/removeCoupon', err_7);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      setCart: setCart,
      cart: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return cart.value;
      }),
      isInCart: isInCart,
      addItem: addItem,
      load: load,
      removeItem: removeItem,
      clear: clear,
      updateItemQty: updateItemQty,
      applyCoupon: applyCoupon,
      removeCoupon: removeCoupon,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
};

function useCategoryFactory(factoryParams) {
  return function useCategory(id) {
    var _this = this;

    var categories = sharedRef([], "useCategory-categories-".concat(id));
    var loading = sharedRef(false, "useCategory-loading-".concat(id));
    var error = sharedRef({
      search: null
    }, "useCategory-error-".concat(id));

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: categories,
      alias: 'currentCategories',
      loading: loading,
      error: error
    });

    var search = function (searchParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useCategory/".concat(id, "/search"), searchParams);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = categories;
              return [4
              /*yield*/
              , _factoryParams.categorySearch(searchParams)];

            case 2:
              _a.value = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error("useCategory/".concat(id, "/search"), err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      search: search,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      categories: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return categories.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

function useContentFactory(factoryParams) {
  return function useContent(id) {
    var _this = this;

    var content = sharedRef([], "useContent-content-".concat(id));
    var loading = sharedRef(false, "useContent-loading-".concat(id));
    var error = sharedRef({
      search: null
    }, "useContent-error-".concat(id));

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: content,
      alias: 'currentContent',
      loading: loading,
      error: error
    });

    var search = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useContent/".concat(id, "/search"), params);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = content;
              return [4
              /*yield*/
              , _factoryParams.search(params)];

            case 2:
              _a.value = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error("useContent/".concat(id, "/search"), err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      search: search,
      content: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return content.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

function renderContentFactory(factoryParams) {
  return {
    render: function render(createElement) {
      var components = []; // eslint-disable-next-line

      var self = this;
      var content = self.content;
      var resolvedContent = factoryParams.extractContent(content);
      resolvedContent.map(function component(component) {
        var componentName = component.componentName,
            props = component.props;
        components.push(createElement(componentName, {
          attrs: {
            name: componentName
          },
          props: props
        }, self.$slots.default));
      });
      return createElement('div', components);
    },
    props: {
      content: {
        type: [Array, Object]
      }
    }
  };
}

var useFacetFactory = function (factoryParams) {
  var useFacet = function (id) {
    var ssrKey = id || 'useFacet';
    var loading = sharedRef(false, "".concat(ssrKey, "-loading"));
    var result = sharedRef({
      data: null,
      input: null
    }, "".concat(ssrKey, "-facets"));

    var _factoryParams = configureFactoryParams(factoryParams);

    var error = sharedRef({
      search: null
    }, "useFacet-error-".concat(id));

    var search = function (params) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useFacet/".concat(ssrKey, "/search"), params);
              result.value.input = params;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = result.value;
              return [4
              /*yield*/
              , _factoryParams.search(result.value)];

            case 2:
              _a.data = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error("useFacet/".concat(ssrKey, "/search"), err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      result: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return result.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      }),
      search: search
    };
  };

  return useFacet;
};

var useMakeOrderFactory = function (factoryParams) {
  return function useMakeOrder() {
    var _this = this;

    var order = sharedRef(null, 'useMakeOrder-order');
    var loading = sharedRef(false, 'useMakeOrder-loading');
    var error = sharedRef({
      make: null
    }, 'useMakeOrder-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: order,
      alias: 'currentOrder',
      loading: loading,
      error: error
    });

    var make = function (params) {
      if (params === void 0) {
        params = {
          customQuery: null
        };
      }

      return __awaiter(_this, void 0, void 0, function () {
        var createdOrder, err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useMakeOrder.make');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.make(params)];

            case 2:
              createdOrder = _a.sent();
              error.value.make = null;
              order.value = createdOrder;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _a.sent();
              error.value.make = err_1;
              Logger.error('useMakeOrder.make', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      order: order,
      make: make,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
};

function useProductFactory(factoryParams) {
  return function useProduct(id) {
    var _this = this;

    var products = sharedRef([], "useProduct-products-".concat(id));
    var loading = sharedRef(false, "useProduct-loading-".concat(id));
    var error = sharedRef({
      search: null
    }, "useProduct-error-".concat(id));

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: products,
      alias: 'currentProducts',
      loading: loading,
      error: error
    });

    var search = function (searchParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useProduct/".concat(id, "/search"), searchParams);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = products;
              return [4
              /*yield*/
              , _factoryParams.productsSearch(searchParams)];

            case 2:
              _a.value = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error("useProduct/".concat(id, "/search"), err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      search: search,
      products: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return products.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

function useReviewFactory(factoryParams) {
  return function useReview(id) {
    var _this = this;

    var reviews = sharedRef([], "useReviews-reviews-".concat(id));
    var loading = sharedRef(false, "useReviews-loading-".concat(id));
    var error = sharedRef({
      search: null,
      addReview: null
    }, "useReviews-error-".concat(id));

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: reviews,
      alias: 'currentReviews',
      loading: loading,
      error: error
    });

    var search = function (searchParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useReview/".concat(id, "/search"), searchParams);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = reviews;
              return [4
              /*yield*/
              , _factoryParams.searchReviews(searchParams)];

            case 2:
              _a.value = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error("useReview/".concat(id, "/search"), err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var addReview = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_2;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useReview/".concat(id, "/addReview"), params);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = reviews;
              return [4
              /*yield*/
              , _factoryParams.addReview(params)];

            case 2:
              _a.value = _b.sent();
              error.value.addReview = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              error.value.addReview = err_2;
              Logger.error("useReview/".concat(id, "/addReview"), err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      search: search,
      addReview: addReview,
      reviews: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return reviews.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

var useShippingFactory = function (factoryParams) {
  return function useShipping() {
    var _this = this;

    var loading = sharedRef(false, 'useShipping-loading');
    var shipping = sharedRef(null, 'useShipping-shipping');
    var error = sharedRef({
      load: null,
      save: null
    }, 'useShipping-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: shipping,
      alias: 'currentShipping',
      loading: loading,
      error: error
    });

    var load = function (_a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.customQuery,
          customQuery = _c === void 0 ? null : _c;

      return __awaiter(_this, void 0, void 0, function () {
        var shippingInfo, err_1;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              Logger.debug('useShipping.load');
              _d.label = 1;

            case 1:
              _d.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery
              })];

            case 2:
              shippingInfo = _d.sent();
              error.value.load = null;
              shipping.value = shippingInfo;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _d.sent();
              error.value.load = err_1;
              Logger.error('useShipping/load', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var save = function (saveParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var shippingInfo, err_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useShipping.save');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.save(saveParams)];

            case 2:
              shippingInfo = _a.sent();
              error.value.save = null;
              shipping.value = shippingInfo;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _a.sent();
              error.value.save = err_2;
              Logger.error('useShipping/save', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      shipping: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return shipping.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      }),
      load: load,
      save: save
    };
  };
};

var useUserBillingFactory = function (factoryParams) {
  var useUserBilling = function () {
    var loading = sharedRef(false, 'useUserBilling-loading');
    var billing = sharedRef({}, 'useUserBilling-billing');
    var error = sharedRef({
      addAddress: null,
      deleteAddress: null,
      updateAddress: null,
      load: null,
      setDefaultAddress: null
    }, 'useUserBilling-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: billing,
      alias: 'currentBilling',
      loading: loading,
      error: error
    });

    var readonlyBilling = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* unref */ "m"])(billing);

    var addAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserBilling.addAddress', address);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = billing;
              return [4
              /*yield*/
              , _factoryParams.addAddress({
                address: address,
                billing: readonlyBilling,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.addAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _c.sent();
              error.value.addAddress = err_1;
              Logger.error('useUserBilling/addAddress', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var deleteAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_2;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserBilling.deleteAddress', address);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = billing;
              return [4
              /*yield*/
              , _factoryParams.deleteAddress({
                address: address,
                billing: readonlyBilling,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.deleteAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _c.sent();
              error.value.deleteAddress = err_2;
              Logger.error('useUserBilling/deleteAddress', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var updateAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_3;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserBilling.updateAddress', address);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = billing;
              return [4
              /*yield*/
              , _factoryParams.updateAddress({
                address: address,
                billing: readonlyBilling,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.updateAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _c.sent();
              error.value.updateAddress = err_3;
              Logger.error('useUserBilling/updateAddress', err_3);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_4;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserBilling.load');
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = billing;
              return [4
              /*yield*/
              , _factoryParams.load({
                billing: readonlyBilling
              })];

            case 2:
              _a.value = _b.sent();
              error.value.load = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_4 = _b.sent();
              error.value.load = err_4;
              Logger.error('useUserBilling/load', err_4);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var setDefaultAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_5;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserBilling.setDefaultAddress');
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = billing;
              return [4
              /*yield*/
              , _factoryParams.setDefaultAddress({
                address: address,
                billing: readonlyBilling,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.setDefaultAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _c.sent();
              error.value.setDefaultAddress = err_5;
              Logger.error('useUserBilling/setDefaultAddress', err_5);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      billing: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return billing.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      }),
      addAddress: addAddress,
      deleteAddress: deleteAddress,
      updateAddress: updateAddress,
      load: load,
      setDefaultAddress: setDefaultAddress
    };
  };

  return useUserBilling;
};

var useUserFactory = function (factoryParams) {
  return function useUser() {
    var _this = this;

    var errorsFactory = function () {
      return {
        updateUser: null,
        register: null,
        login: null,
        logout: null,
        changePassword: null,
        load: null
      };
    };

    var user = sharedRef(null, 'useUser-user');
    var loading = sharedRef(false, 'useUser-loading');
    var isAuthenticated = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
      return Boolean(user.value);
    });
    var error = sharedRef(errorsFactory(), 'useUser-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: user,
      alias: 'currentUser',
      loading: loading,
      error: error
    });

    var setUser = function (newUser) {
      user.value = newUser;
      Logger.debug('useUserFactory.setUser', newUser);
    };

    var resetErrorValue = function () {
      error.value = errorsFactory();
    };

    var updateUser = function (_a) {
      var providedUser = _a.user,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var _b, err_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserFactory.updateUser', providedUser);
              resetErrorValue();
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = user;
              return [4
              /*yield*/
              , _factoryParams.updateUser({
                currentUser: user.value,
                updatedUserData: providedUser,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.updateUser = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _c.sent();
              error.value.updateUser = err_1;
              Logger.error('useUser/updateUser', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var register = function (_a) {
      var providedUser = _a.user,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var _b, err_2;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserFactory.register', providedUser);
              resetErrorValue();
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = user;
              return [4
              /*yield*/
              , _factoryParams.register(__assign(__assign({}, providedUser), {
                customQuery: customQuery
              }))];

            case 2:
              _b.value = _c.sent();
              error.value.register = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _c.sent();
              error.value.register = err_2;
              Logger.error('useUser/register', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var login = function (_a) {
      var providedUser = _a.user,
          customQuery = _a.customQuery;
      return __awaiter(_this, void 0, void 0, function () {
        var _b, err_3;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserFactory.login', providedUser);
              resetErrorValue();
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = user;
              return [4
              /*yield*/
              , _factoryParams.logIn(__assign(__assign({}, providedUser), {
                customQuery: customQuery
              }))];

            case 2:
              _b.value = _c.sent();
              error.value.login = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _c.sent();
              error.value.login = err_3;
              Logger.error('useUser/login', err_3);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var logout = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var err_4;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useUserFactory.logout');
              resetErrorValue();
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , _factoryParams.logOut({
                currentUser: user.value
              })];

            case 2:
              _a.sent();

              error.value.logout = null;
              user.value = null;
              return [3
              /*break*/
              , 4];

            case 3:
              err_4 = _a.sent();
              error.value.logout = err_4;
              Logger.error('useUser/logout', err_4);
              return [3
              /*break*/
              , 4];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var changePassword = function (params) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_5;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserFactory.changePassword', {
                currentPassword: mask(params.current),
                newPassword: mask(params.new)
              });
              resetErrorValue();
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = user;
              return [4
              /*yield*/
              , _factoryParams.changePassword({
                currentUser: user.value,
                currentPassword: params.current,
                newPassword: params.new,
                customQuery: params.customQuery
              })];

            case 2:
              _a.value = _b.sent();
              error.value.changePassword = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _b.sent();
              error.value.changePassword = err_5;
              Logger.error('useUser/changePassword', err_5);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function (_a) {
      var _b = _a === void 0 ? {
        customQuery: undefined
      } : _a,
          customQuery = _b.customQuery;

      return __awaiter(_this, void 0, void 0, function () {
        var _c, err_6;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              Logger.debug('useUserFactory.load');
              resetErrorValue();
              _d.label = 1;

            case 1:
              _d.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _c = user;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery
              })];

            case 2:
              _c.value = _d.sent();
              error.value.load = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_6 = _d.sent();
              error.value.load = err_6;
              Logger.error('useUser/load', err_6);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      setUser: setUser,
      user: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return user.value;
      }),
      updateUser: updateUser,
      register: register,
      login: login,
      logout: logout,
      isAuthenticated: isAuthenticated,
      changePassword: changePassword,
      load: load,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
};

function useUserOrderFactory(factoryParams) {
  return function useUserOrder() {
    var _this = this;

    var orders = sharedRef({
      results: [],
      total: 0
    }, 'useUserOrder-orders');
    var loading = sharedRef(false, 'useUserOrder-loading');
    var error = sharedRef({}, 'useUserOrder-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: orders,
      alias: 'currentOrders',
      loading: loading,
      error: error
    });

    var search = function (searchParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserOrder.search', searchParams);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = orders;
              return [4
              /*yield*/
              , _factoryParams.searchOrders(searchParams)];

            case 2:
              _a.value = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error('useUserOrder/search', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      orders: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return orders.value;
      }),
      search: search,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

var useUserShippingFactory = function (factoryParams) {
  var useUserShipping = function () {
    var loading = sharedRef(false, 'useUserShipping-loading');
    var shipping = sharedRef({}, 'useUserShipping-shipping');
    var readonlyShipping = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* unref */ "m"])(shipping);
    var error = sharedRef({
      addAddress: null,
      deleteAddress: null,
      updateAddress: null,
      load: null,
      setDefaultAddress: null
    }, 'useUserShipping-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: shipping,
      alias: 'currentShipping',
      loading: loading,
      error: error
    });

    var addAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserShipping.addAddress', mask(address));
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = shipping;
              return [4
              /*yield*/
              , _factoryParams.addAddress({
                address: address,
                shipping: readonlyShipping,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.addAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _c.sent();
              error.value.addAddress = err_1;
              Logger.error('useUserShipping/addAddress', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var deleteAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_2;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserShipping.deleteAddress', address);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = shipping;
              return [4
              /*yield*/
              , _factoryParams.deleteAddress({
                address: address,
                shipping: readonlyShipping,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.deleteAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _c.sent();
              error.value.deleteAddress = err_2;
              Logger.error('useUserShipping/deleteAddress', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var updateAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_3;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserShipping.updateAddress', address);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = shipping;
              return [4
              /*yield*/
              , _factoryParams.updateAddress({
                address: address,
                shipping: readonlyShipping,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.updateAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _c.sent();
              error.value.updateAddress = err_3;
              Logger.error('useUserShipping/updateAddress', err_3);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, err_4;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useUserShipping.load');
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = shipping;
              return [4
              /*yield*/
              , _factoryParams.load({
                shipping: readonlyShipping
              })];

            case 2:
              _a.value = _b.sent();
              error.value.load = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_4 = _b.sent();
              error.value.load = err_4;
              Logger.error('useUserShipping/load', err_4);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var setDefaultAddress = function (_a) {
      var address = _a.address,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var _b, err_5;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useUserShipping.setDefaultAddress', address);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _b = shipping;
              return [4
              /*yield*/
              , _factoryParams.setDefaultAddress({
                address: address,
                shipping: readonlyShipping,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              error.value.setDefaultAddress = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_5 = _c.sent();
              error.value.setDefaultAddress = err_5;
              Logger.error('useUserShipping/setDefaultAddress', err_5);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      shipping: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return shipping.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      }),
      addAddress: addAddress,
      deleteAddress: deleteAddress,
      updateAddress: updateAddress,
      load: load,
      setDefaultAddress: setDefaultAddress
    };
  };

  return useUserShipping;
};

var useWishlistFactory = function (factoryParams) {
  var useWishlist = function () {
    var loading = sharedRef(false, 'useWishlist-loading');
    var wishlist = sharedRef(null, 'useWishlist-wishlist');
    var error = sharedRef({
      addItem: null,
      removeItem: null,
      load: null,
      clear: null
    }, 'useWishlist-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: wishlist,
      alias: 'currentWishlist',
      loading: loading,
      error: error
    });

    var setWishlist = function (newWishlist) {
      wishlist.value = newWishlist;
      Logger.debug('useWishlistFactory.setWishlist', newWishlist);
    };

    var addItem = function (_a) {
      var product = _a.product,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedWishlist, err_1;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useWishlist.addItem', product);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.addItem({
                currentWishlist: wishlist.value,
                product: product,
                customQuery: customQuery
              })];

            case 2:
              updatedWishlist = _b.sent();
              error.value.addItem = null;
              wishlist.value = updatedWishlist;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.addItem = err_1;
              Logger.error('useWishlist/addItem', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var removeItem = function (_a) {
      var product = _a.product,
          customQuery = _a.customQuery;
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedWishlist, err_2;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useWishlist.removeItem', product);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.removeItem({
                currentWishlist: wishlist.value,
                product: product,
                customQuery: customQuery
              })];

            case 2:
              updatedWishlist = _b.sent();
              error.value.removeItem = null;
              wishlist.value = updatedWishlist;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              error.value.removeItem = err_2;
              Logger.error('useWishlist/removeItem', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function (_a) {
      var _b = _a === void 0 ? {
        customQuery: undefined
      } : _a,
          customQuery = _b.customQuery;

      return __awaiter(void 0, void 0, void 0, function () {
        var _c, err_3;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              Logger.debug('useWishlist.load');
              if (wishlist.value) return [2
              /*return*/
              ];
              _d.label = 1;

            case 1:
              _d.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _c = wishlist;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery
              })];

            case 2:
              _c.value = _d.sent();
              error.value.load = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_3 = _d.sent();
              error.value.load = err_3;
              Logger.error('useWishlist/load', err_3);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var clear = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var updatedWishlist, err_4;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('useWishlist.clear');
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, 4, 5]);

              loading.value = true;
              return [4
              /*yield*/
              , _factoryParams.clear({
                currentWishlist: wishlist.value
              })];

            case 2:
              updatedWishlist = _a.sent();
              error.value.clear = null;
              wishlist.value = updatedWishlist;
              return [3
              /*break*/
              , 5];

            case 3:
              err_4 = _a.sent();
              error.value.clear = err_4;
              Logger.error('useWishlist/clear', err_4);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var isInWishlist = function (_a) {
      var product = _a.product;
      Logger.debug('useWishlist.isInWishlist', product);
      return _factoryParams.isInWishlist({
        currentWishlist: wishlist.value,
        product: product
      });
    };

    return {
      api: _factoryParams.api,
      wishlist: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return wishlist.value;
      }),
      isInWishlist: isInWishlist,
      addItem: addItem,
      load: load,
      removeItem: removeItem,
      clear: clear,
      setWishlist: setWishlist,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };

  return useWishlist;
};

var useShippingProviderFactory = function (factoryParams) {
  return function useShippingProvider() {
    var _this = this;

    var loading = sharedRef(false, 'useShippingProvider-loading');
    var state = sharedRef(null, 'useShippingProvider-response');
    var error = sharedRef({
      load: null,
      save: null
    }, 'useShippingProvider-error');

    var _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: state,
      alias: 'currentState',
      loading: loading,
      error: error
    });

    var setState = function (newState) {
      state.value = newState;
      Logger.debug('useShippingProvider.setState', newState);
    };

    var save = function (_a) {
      var shippingMethod = _a.shippingMethod,
          _b = _a.customQuery,
          customQuery = _b === void 0 ? null : _b;
      return __awaiter(_this, void 0, void 0, function () {
        var _c, err_1;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              Logger.debug('useShippingProvider.save');
              _d.label = 1;

            case 1:
              _d.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _c = state;
              return [4
              /*yield*/
              , _factoryParams.save({
                shippingMethod: shippingMethod,
                customQuery: customQuery,
                state: state
              })];

            case 2:
              _c.value = _d.sent();
              error.value.save = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _d.sent();
              error.value.save = err_1;
              Logger.error('useShippingProvider/save', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var load = function (_a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.customQuery,
          customQuery = _c === void 0 ? null : _c;

      return __awaiter(_this, void 0, void 0, function () {
        var _d, err_2;

        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              Logger.debug('useShippingProvider.load');
              _e.label = 1;

            case 1:
              _e.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _d = state;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery,
                state: state
              })];

            case 2:
              _d.value = _e.sent();
              error.value.load = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _e.sent();
              error.value.load = err_2;
              Logger.error('useShippingProvider/load', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      api: _factoryParams.api,
      state: state,
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      }),
      load: load,
      save: save,
      setState: setState
    };
  };
};

function useForgotPasswordFactory(factoryParams) {
  return function useForgotPassword() {
    var _this = this;

    var result = sharedRef({
      resetPasswordResult: null,
      setNewPasswordResult: null
    }, 'useForgotPassword-result');
    var loading = sharedRef(false, 'useProduct-loading');

    var _factoryParams = configureFactoryParams(factoryParams);

    var error = sharedRef({
      request: null,
      setNew: null
    }, 'useForgotPassword-error');

    var request = function (resetPasswordParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useForgotPassword/request', resetPasswordParams.email);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = result;
              return [4
              /*yield*/
              , _factoryParams.resetPassword(__assign({
                currentResult: result.value
              }, resetPasswordParams))];

            case 2:
              _a.value = _b.sent();
              error.value.request = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.request = err_1;
              Logger.error('useForgotPassword/request', err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var setNew = function (setNewPasswordParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_2;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useForgotPassword/setNew', setNewPasswordParams);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = result;
              return [4
              /*yield*/
              , _factoryParams.setNewPassword(__assign({
                currentResult: result.value
              }, setNewPasswordParams))];

            case 2:
              _a.value = _b.sent();
              error.value.setNew = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _b.sent();
              error.value.setNew = err_2;
              Logger.error('useForgotPassword/setNew', err_2);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      request: request,
      setNew: setNew,
      result: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return result.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

function useStoreFactory(factoryParams) {
  return function useStore() {
    /* @private */
    var _factoryParams = configureFactoryParams(factoryParams);
    /* @readonly */


    var response = sharedRef(null, 'useStore-response');
    var loading = sharedRef(false, 'useStore-loading');
    var error = sharedRef({
      load: null,
      change: null
    }, 'useStore-error');
    /* @public */

    function load(params) {
      return __awaiter(this, void 0, void 0, function () {
        var customQuery, _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug('useStoreFactory.load', params);
              error.value.load = null;
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              customQuery = Object(params).customQuery;
              _a = response;
              return [4
              /*yield*/
              , _factoryParams.load({
                customQuery: customQuery
              })];

            case 2:
              _a.value = _b.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.load = err_1;
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function change(params) {
      return __awaiter(this, void 0, void 0, function () {
        var _a, customQuery, currentStore, store, _b, err_2;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              Logger.debug('useStoreFactory.change', params);
              error.value.change = null;
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = Object(params), customQuery = _a.customQuery, currentStore = _a.currentStore, store = _a.store;
              _b = response;
              return [4
              /*yield*/
              , _factoryParams.change({
                currentStore: currentStore,
                store: store,
                customQuery: customQuery
              })];

            case 2:
              _b.value = _c.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              err_2 = _c.sent();
              error.value.change = err_2;
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /* @interface */


    return {
      load: load,
      change: change,
      response: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return response.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}

function useSearchFactory(factoryParams) {
  return function useSearch(id) {
    var _this = this;

    var result = sharedRef([], "useSearch-products-".concat(id));
    var loading = sharedRef(false, "useSearch-loading-".concat(id));

    var _factoryParams = configureFactoryParams(factoryParams);

    var error = sharedRef({
      search: null
    }, "useSearch-error-".concat(id));

    var search = function (searchParams) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, err_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              Logger.debug("useSearch/".concat(id, "/search"), searchParams);
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, 4, 5]);

              loading.value = true;
              _a = result;
              return [4
              /*yield*/
              , _factoryParams.search(searchParams)];

            case 2:
              _a.value = _b.sent();
              error.value.search = null;
              return [3
              /*break*/
              , 5];

            case 3:
              err_1 = _b.sent();
              error.value.search = err_1;
              Logger.error("useSearch/".concat(id, "/search"), err_1);
              return [3
              /*break*/
              , 5];

            case 4:
              loading.value = false;
              return [7
              /*endfinally*/
              ];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return {
      search: search,
      result: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return result.value;
      }),
      loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return loading.value;
      }),
      error: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(function () {
        return error.value;
      })
    };
  };
}
/* istanbul ignore file */

/**
 * Default name of the cookie storing active localization code
 */


var VSF_LOCALE_COOKIE = 'vsf-locale';
/**
 * Default name of the cookie storing active currency code
 */

var VSF_CURRENCY_COOKIE = 'vsf-currency';
/**
 * Default name of the cookie storing active country code
 */

var VSF_COUNTRY_COOKIE = 'vsf-country';
/**
 * Default name of the cookie storing active store code
 */

var VSF_STORE_COOKIE = 'vsf-store';
/**
 * Default name of the cookie storing active channel code
 */

var VSF_CHANNEL_COOKIE = 'vsf-channel'; // TODO - remove this interface

var AgnosticOrderStatus;

(function (AgnosticOrderStatus) {
  AgnosticOrderStatus["Open"] = "Open";
  AgnosticOrderStatus["Pending"] = "Pending";
  AgnosticOrderStatus["Confirmed"] = "Confirmed";
  AgnosticOrderStatus["Shipped"] = "Shipped";
  AgnosticOrderStatus["Complete"] = "Complete";
  AgnosticOrderStatus["Cancelled"] = "Cancelled";
  AgnosticOrderStatus["Refunded"] = "Refunded";
})(AgnosticOrderStatus || (AgnosticOrderStatus = {}));
/**
 * Core Vue Storefront 2 library.
 *
 * @remarks
 * The `@vue-storefront/core` library is a core of the whole Vue Storefront 2 application.
 * It defines common interfaces for all eCommerce integrations, factories for creating
 * composables, logger, SSR helpers and more.
 *
 * @packageDocumentation
 */


if (typeof window !== 'undefined') {
  window.$vuestorefront = window.$vuestorefront || {
    integrations: []
  };
}

function track(id) {
  if (typeof window !== 'undefined') {
    if (window.$vuestorefront) {
      window.$vuestorefront.integrations.push(id);
    }
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(130)(module)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=508a8002&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.props.link ? _vm.injections.components.SfLink : 'button',_vm._g(_vm._b({tag:"component",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-button',
    {
      'is-disabled--button': _vm.$options.buttonActive(
        _vm.props.link,
        _vm.props.disabled
      ),
      'is-disabled--link': _vm.$options.linkActive(_vm.props.link, _vm.props.disabled),
    } ],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"aria-disabled":_vm.props.disabled,"link":_vm.props.link}},'component',_vm.data.attrs,false),!_vm.props.disabled ? _vm.listeners : {}),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=508a8002&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfButtonvue_type_script_lang_js_ = ({
  name: "SfButton",
  inject: {
    components: {
      default: {
        SfLink: SfLink["a" /* default */]
      }
    }
  },
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    link: {
      type: [String, Object],
      default: null
    }
  },

  linkActive(link, disabled) {
    return link && disabled;
  },

  buttonActive(link, disabled) {
    return !link && disabled;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfButton_SfButtonvue_type_script_lang_js_ = (SfButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfButton_SfButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "7915cb68"
  
)

/* harmony default export */ var SfButton = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=84e1aa6c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g({ref:"icon",class:['sf-icon', _vm.iconColorClass, _vm.iconSizeClass],style:(_vm.iconCustomStyle)},_vm.$listeners),[_vm._t("default",function(){return [_c('svg',{staticClass:"sf-icon-path",attrs:{"viewBox":_vm.iconViewBox,"preserveAspectRatio":"none"}},[_c('defs',{class:{ 'display-none': _vm.coverage > 1 }},[_c('linearGradient',{attrs:{"id":("linearGradient-" + _vm._uid),"x1":"0","y1":"0","x2":"1","y2":"0"}},[_c('stop',{attrs:{"offset":_vm.coverage,"stop-color":"var(--icon-color)"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0","stop-color":"var(--icon-color-negative, var(--c-gray-variant))"}})],1)],1),_vm._v(" "),_vm._l((_vm.iconPaths),function(path,index){return _c('path',{key:index,staticStyle:{"height":"100%"},attrs:{"d":path,"fill":_vm.fillPath}})})],2)]},null,{ viewBox: _vm.viewBox, iconPaths: _vm.iconPaths, icon: _vm.icon })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=84e1aa6c&

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/icons/icons.js
const icons = {
  add_to_cart: {
    viewBox: "0 0 24 24",
    paths: ["M10.281 17.165c-1.177 0-2.147.97-2.147 2.147 0 1.177.97 2.147 2.147 2.147 1.177 0 2.147-.97 2.147-2.146a2.16 2.16 0 00-2.147-2.148zm0 2.994a.838.838 0 01-.847-.847c0-.475.372-.847.847-.847s.847.372.847.847a.865.865 0 01-.847.847zM17.386 17.165c-1.177 0-2.148.97-2.148 2.147 0 1.177.97 2.147 2.148 2.147 1.176 0 2.147-.97 2.147-2.147-.02-1.176-.97-2.147-2.147-2.147zm0 2.994a.838.838 0 01-.847-.847c0-.475.371-.847.847-.847.475 0 .847.372.847.847a.864.864 0 01-.847.847zM14.132 11.834a.66.66 0 01-.206-.033c-.007-.002-.012-.003-.017-.006a.598.598 0 01-.198-.117l-2.14-1.827a.499.499 0 01-.175-.375c0-.142.062-.276.175-.376a.627.627 0 01.42-.156c.158 0 .309.055.42.156l1.126.92V4.21c0-.293.266-.532.595-.532.328 0 .595.238.595.532v5.807l1.126-.92a.628.628 0 01.42-.155c.158 0 .308.055.42.156.112.1.174.234.174.375a.499.499 0 01-.174.376l-2.141 1.827a.62.62 0 01-.195.116l-.02.007a.62.62 0 01-.205.034z", "M19.634 6.035c.599 0 1.177.29 1.55.764.392.475.515 1.095.371 1.674l-1.549 6.36a1.968 1.968 0 01-1.92 1.508h-8.24c-.908 0-1.692-.62-1.92-1.508L5.407 4.797a.682.682 0 00-.66-.516H2.64A.644.644 0 012 3.64C2 3.288 2.29 3 2.64 3h2.107c.909 0 1.693.62 1.92 1.508l.392 1.527h4.524v1.302H7.39l1.796 7.206c.083.31.351.516.66.516h8.24c.31 0 .579-.206.661-.516l1.549-6.36a.65.65 0 00-.123-.578.686.686 0 00-.538-.268H16.68V6.035h2.955z"]
  },
  added_to_cart: {
    viewBox: "0 0 24 24",
    paths: ["M10.547 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056a2.066 2.066 0 002.056-2.055c0-1.128-.93-2.058-2.056-2.058zM17.35 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056 1.127 0 2.056-.929 2.056-2.056-.02-1.126-.93-2.057-2.056-2.057z", "M19.506 5.908c.573 0 1.127.276 1.483.731.376.456.494 1.049.356 1.604l-1.483 6.091a1.885 1.885 0 01-1.84 1.444h-7.89c-.871 0-1.622-.593-1.84-1.444L5.879 4.722a.653.653 0 00-.632-.494H3.229a.616.616 0 01-.613-.614c0-.337.277-.613.613-.613h2.018c.87 0 1.621.593 1.839 1.444l.375 1.463h12.045zm-6.908 8.19a.971.971 0 00.695.293h.018a.951.951 0 00.704-.321l4.352-4.84c.37-.405.342-1.039-.056-1.407a.956.956 0 00-1.38.057l-3.666 4.082-1.76-1.795a.964.964 0 00-1.38 0c-.379.387-.379 1.02 0 1.407l2.473 2.524z"]
  },
  empty_cart: {
    viewBox: "0 0 24 24",
    paths: ["M21.561 6.874a2.026 2.026 0 00-1.579-.779H7.16l-.4-1.558A2.024 2.024 0 004.801 3H2.653A.656.656 0 002 3.653c0 .358.294.653.653.653h2.148c.316 0 .59.21.673.527l2.57 10.234a2.024 2.024 0 001.958 1.537h8.4c.927 0 1.749-.632 1.96-1.537L21.94 8.58a1.931 1.931 0 00-.38-1.707zm-.904 1.41l-1.58 6.487a.695.695 0 01-.673.526h-8.402a.695.695 0 01-.674-.526L7.496 7.422h12.487a.7.7 0 01.548.274.662.662 0 01.126.589zM10.445 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189a2.2 2.2 0 002.19-2.189c0-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863s.863.379.863.863c0 .464-.4.864-.863.864zM17.688 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189 2.19-.99 2.19-2.19c-.021-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863.485 0 .864.379.864.863 0 .464-.4.864-.864.864z"]
  },
  clock: {
    viewBox: "0 0 24 24",
    paths: ["M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.463A8.525 8.525 0 0120.537 12 8.525 8.525 0 0112 20.537 8.525 8.525 0 013.463 12 8.525 8.525 0 0112 3.463zm0 1.22a.732.732 0 00-.732.732V12c0 .27.148.506.366.633l5.282 3.048a.73.73 0 10.732-1.265l-4.916-2.835V5.415A.732.732 0 0012 4.683z"]
  },
  arrow_left: {
    viewBox: "0 0 24 24",
    paths: ["M24 13L2 13L2 11L24 11L24 13Z", "M6.61667 6L8 7.25423L2.76478 12L8 16.7458L6.61667 18L-5.24538e-07 12L6.61667 6Z"]
  },
  arrow_right: {
    viewBox: "0 0 24 24",
    paths: ["M0 11L22 11L22 13L-3.49691e-07 13L0 11Z", "M17.3833 18L16 16.7458L21.2352 12L16 7.25423L17.3833 6L24 12L17.3833 18Z"]
  },
  arrow_top: {
    viewBox: "0 0 24 24",
    paths: ["M11 24L11 2L13 2L13 24L11 24Z", "M18 6.61667L16.7458 8L12 2.76478L7.25423 8L6 6.61667L12 -2.62269e-07L18 6.61667Z"]
  },
  arrow_down: {
    viewBox: "0 0 24 24",
    paths: ["M13 0L13 22L11 22L11 -8.74228e-08L13 0Z", "M6 17.3833L7.25423 16L12 21.2352L16.7458 16L18 17.3833L12 24L6 17.3833Z"]
  },
  check: {
    viewBox: "0 0 24 24",
    paths: ["M10.7136 17C10.3594 17 10.0181 16.8476 9.76516 16.5711L6.38899 12.8793C5.87034 12.3122 5.87034 11.3859 6.38899 10.8194C6.90765 10.2522 7.75481 10.2522 8.27289 10.8194L10.6755 13.4465L15.6833 7.47328C16.1762 6.87859 17.0239 6.837 17.5672 7.3901C18.111 7.92914 18.1491 8.85607 17.6432 9.45009L11.7 16.5301C11.4599 16.8207 11.1057 17 10.7387 17L10.7136 17Z"]
  },
  chevron_down: {
    viewBox: "0 0 24 24",
    paths: ["M2 8.364L3.6 7l8.4 7.254L20.4 7 22 8.364 12 17z"]
  },
  chevron_up: {
    viewBox: "0 0 24 24",
    paths: ["M22 15.636L20.4 17 12 9.746 3.6 17 2 15.636 12 7z"]
  },
  chevron_left: {
    viewBox: "0 0 24 24",
    paths: ["M15.636 2L17 3.6 9.746 12 17 20.4 15.636 22 7 12z"]
  },
  chevron_right: {
    viewBox: "0 0 24 24",
    paths: ["M8.364 22L7 20.4l7.254-8.4L7 3.6 8.364 2 17 12z"]
  },
  cross: {
    viewBox: "0 0 24 24",
    paths: ["M21.261 2.22a.748.748 0 00-1.057 0l-8.464 8.463-8.463-8.464a.748.748 0 10-1.058 1.058l8.464 8.463-8.464 8.464a.748.748 0 101.058 1.057l8.463-8.463 8.464 8.463a.748.748 0 101.057-1.057l-8.463-8.464 8.463-8.463a.748.748 0 000-1.058z"]
  },
  heart: {
    viewBox: "0 0 24 24",
    paths: ["M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z"]
  },
  heart_fill: {
    viewBox: "0 0 24 24",
    paths: ["M12 20.429a.878.878 0 01-.52-.168l-.442-.325c-4.064-2.976-6.517-4.773-7.945-7.17-1.369-2.291-1.204-4.1-.827-5.215.46-1.353 1.496-2.443 2.918-3.067A5.85 5.85 0 017.544 4c1.764 0 3.394.711 4.456 1.883C13.06 4.711 14.69 4 16.455 4c.835 0 1.628.162 2.36.483 1.422.624 2.458 1.713 2.918 3.067.379 1.113.542 2.923-.827 5.215-1.429 2.397-3.885 4.196-7.954 7.176l-.432.32a.884.884 0 01-.52.168z"]
  },
  home: {
    viewBox: "0 0 24 24",
    paths: ["M19.354 9.45v11.27c.001-.13-.002.099-.002.043 0 .053.025-.074.002-.026a.172.172 0 00-.015.053c-.008.05.041-.061.008-.024a.208.208 0 00-.026.045c-.02.045.056-.05.015-.02a.197.197 0 00-.037.036c-.02.026.072-.05-.002 0l-.012.007c-.031.016-.031.016 0 .001l.024-.01-.039.013c-.098.024.076.004-.029.006H5.65c-.28 0-.556.002-.835 0h-.045c-.076 0 .02-.004.026.004-.002-.004-.045-.012-.054-.014-.077-.018.027.004.023.01-.001.001-.04-.024-.046-.027-.072-.034.046.056 0-.001a.292.292 0 01-.037-.04c.01-.012.045.076.016.018a.687.687 0 01-.026-.047c.015-.008.025.087.01.023a.93.93 0 01-.015-.053c.012-.002.004.092.004.026V9.43c-.067.119-.135.236-.203.354L5.962 8.68l.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.4-.293.814-.576 1.204-.886a.35.35 0 00.018-.012h-.414l1 .737c.712.523 1.424 1.045 2.135 1.57l1.969 1.45c.256.19.512.378.77.567.61.451 1.221.902 1.835 1.353.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562a604.21 604.21 0 01-1.691-1.247c-.267-.197-.532-.392-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H19.037c.24 0 .47-.002.685-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41-.225.02-.411.19-.411.42z", "M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149zM14.05 13.809V20.34c0 .302-.012.607 0 .909v.014l.41-.41H9.56l.41.41V13.785c0-.066.01.026-.006.026a.727.727 0 01.02-.078c.019-.08-.042.07 0 0a.95.95 0 01.042-.067c.014.01-.062.066-.015.023.004-.004.056-.056.057-.053.01.014-.083.049-.008.01.007-.002.057-.033.057-.032-.016.007-.032.015-.049.02a.336.336 0 01.051-.016l.053-.012c-.064.008-.073.008-.026.007h3.719c.089.001-.012.004-.012-.005a.74.74 0 01.078.021c.074.018-.07-.045 0 0l.067.041c-.004.007-.075-.072-.023-.015a.651.651 0 01.054.058c-.007.004-.056-.089-.017-.02.002.003.041.066.04.069-.018.006-.027-.086-.013-.025l.02.078a.459.459 0 00-.007-.056v.05c.004.215.184.42.41.41.217-.01.417-.18.41-.41a1.04 1.04 0 00-1.024-1.024c-.094-.002-.19 0-.285 0h-3.089c-.1 0-.2-.002-.302 0-.548.01-.98.425-1.023.968-.015.182-.002.369-.002.551v4.746c0 .726-.01 1.452 0 2.175v.033c0 .221.189.41.41.41h4.901c.222 0 .41-.189.41-.41v-6.532c0-.301.009-.605 0-.908v-.015c0-.215-.188-.42-.41-.41a.426.426 0 00-.406.416z"]
  },
  home_fill: {
    viewBox: "0 0 24 24",
    paths: ["M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149z", "M19.355 9.45V20.738a.159.159 0 01-.002.025c0 .053.025-.074.002-.026a.133.133 0 00-.012.035.406.406 0 00-.003.018c-.008.05.04-.061.008-.024a.237.237 0 00-.026.045c-.02.045.056-.05.015-.02a.274.274 0 00-.036.034l-.001.002c-.02.026.07-.049.001-.002l-.003.002a.086.086 0 00-.011.006c-.032.017-.032.017-.001.002l.024-.01-.023.008a.562.562 0 01-.039.011H15.313l-.378-.009V12.49H9.14v8.358l-1.66-.004H5.65c-.28 0-.556.002-.835 0H4.77c-.076 0 .02-.004.026.004l-.01-.004-.037-.009-.007-.001c-.077-.018.027.004.023.01l-.016-.009-.028-.016a.089.089 0 00-.002-.002c-.071-.034.042.053.002.002l-.002-.003a.227.227 0 01-.037-.04c.011.005.018.017.022.026.007.013.009.02-.006-.008a.438.438 0 01-.026-.047c.008.002.013.017.015.029.004.017.003.028-.005-.006a.162.162 0 01-.007-.023l-.001-.004-.007-.026c.002 0 .003.002.004.005a.08.08 0 01.003.02l-.003-.02V9.429c-.067.119-.135.236-.203.354l.203-.15 1.292-.953.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.337-.248.685-.487 1.02-.742a11.164 11.164 0 00.202-.156H11.8l.211.156c.264.193.525.387.79.58l.173.128c.654.48 1.307.961 1.96 1.443l1.97 1.45c.256.19.512.378.77.567l.034.026c.548.404 1.097.81 1.647 1.214l.154.113c.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562-.564-.414-1.128-.83-1.691-1.247a217.81 217.81 0 00-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H9.14V12.49h5.794l-.07 9.172h4.172c.24 0 .47-.002.686-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41", "M19.355 10.256v-.61l-1.647-1.214-.035-.026-.77-.566-1.968-1.45c-.654-.483-1.307-.963-1.961-1.444L12.8 4.82c-.264-.195-.525-.388-.789-.581-.334.255-.682.494-1.02.742l-2.173 1.6c-.621.46-1.245.916-1.866 1.374l-.989.726-1.292.953v11.081l.003.029c.006.006.01.02.013.033a.099.099 0 01.017.026c.008.009.015.015.015.014l.03.02c.01.001.027.005.038.008h.028c.279.002.556 0 .835 0h3.49v-7.06a1 1 0 011-1h3.731a1 1 0 011 1v7.06H19.248a.313.313 0 01.039-.01.086.086 0 01.011-.007.29.29 0 01.03-.03.218.218 0 01.015-.025.133.133 0 01.011-.034v-.036c.002-.33 0-.66 0-.989V10.256z"]
  },
  store: {
    viewBox: "0 0 24 24",
    paths: ["M5.21602 10.7781C5.15525 11.0027 5.16536 11.1843 5.2323 11.3176L5.21602 10.7781ZM5.21602 10.7781C5.27661 10.5541 5.40553 10.2963 5.60276 10.0206M5.21602 10.7781L5.60276 10.0206M5.60276 10.0206L7.05524 7.99014M5.60276 10.0206L7.05524 7.99014M7.05524 7.99014H8.53621L6.42279 11.7745C6.11281 11.7695 5.85211 11.7245 5.65108 11.6474C5.43734 11.5655 5.29917 11.4508 5.2323 11.3176L7.05524 7.99014ZM6.67908 12.5614H17.321V18.6798C17.321 18.7553 17.2612 18.8137 17.1908 18.8137H14.3905V13.758C14.3905 13.5096 14.1925 13.3061 13.9442 13.3061H10.254C10.0057 13.3061 9.80771 13.5096 9.80771 13.758V18.8143L6.80939 18.8137H6.80937C6.73877 18.8137 6.67851 18.7551 6.67851 18.6792L6.67908 12.5614ZM18.7678 11.3176L18.8572 11.3625L18.7678 11.3176C18.7009 11.4508 18.5628 11.5655 18.349 11.6475C18.1358 11.7293 17.8553 11.775 17.5201 11.775H17.4299L15.3157 7.99072H16.9443L18.3973 10.0212L18.3973 10.0212C18.5945 10.2966 18.7235 10.5543 18.7841 10.7781C18.8448 11.0027 18.8347 11.1843 18.7678 11.3176ZM19.0263 9.56002L17.6364 7.61814V5.3203C17.6364 4.81296 17.2322 4.4 16.729 4.4H7.27097C6.76777 4.4 6.36356 4.81296 6.36356 5.3203V7.61754L4.9737 9.56003C4.97369 9.56004 4.97368 9.56005 4.97367 9.56006C4.45214 10.2884 4.28666 10.9765 4.47509 11.5198C4.6581 12.0474 5.16129 12.4013 5.90186 12.5182V18.6797C5.90186 19.187 6.30606 19.6 6.80926 19.6H17.1901C17.6933 19.6 18.0975 19.187 18.0975 18.6797L18.0981 12.5177C18.8387 12.401 19.3419 12.0473 19.5249 11.5197C19.7134 10.9765 19.5479 10.2884 19.0263 9.56005C19.0263 9.56004 19.0263 9.56003 19.0263 9.56002ZM7.14018 5.3203C7.14018 5.24468 7.20019 5.18575 7.27104 5.18575H16.7291C16.7995 5.18575 16.86 5.24485 16.86 5.3203V7.20492H7.14021L7.14018 5.3203ZM10.0243 7.99072L9.01761 11.775H7.31494L9.42916 7.99072H10.0243ZM9.82215 11.775L10.8289 7.99072H11.538V11.775H9.82215ZM12.3145 7.99072H13.0236L14.0303 11.775H12.3145L12.3145 7.99072ZM14.8349 11.775L13.8282 7.99072H14.424L16.5382 11.775H14.8349ZM13.6139 18.8137H10.5843V14.0919H13.6139V18.8137Z"]
  },
  menu: {
    viewBox: "0 0 24 24",
    paths: ["M21.883 17.628l-3.27-3.407a5.694 5.694 0 001.301-3.64C19.914 7.502 17.51 5 14.557 5 11.604 5 9.2 7.504 9.2 10.58c0 3.077 2.404 5.58 5.357 5.58a5.212 5.212 0 003.495-1.355l3.27 3.407c.078.08.18.121.28.121.102 0 .203-.04.28-.121a.423.423 0 00.001-.584zm-7.326-2.293c-2.516 0-4.564-2.133-4.564-4.755 0-2.62 2.047-4.754 4.564-4.754 2.516 0 4.564 2.133 4.564 4.754 0 2.622-2.048 4.755-4.564 4.755zM2.417 5.833h5.566a.417.417 0 110 .834H2.417a.417.417 0 110-.834zM2.417 11.667h4.766a.417.417 0 110 .833H2.417a.417.417 0 110-.833zM2.417 16.667H10.383a.417.417 0 110 .833H2.417a.417.417 0 110-.833z"]
  },
  message: {
    viewBox: "0 0 24 24",
    paths: ["M4.26182 20.3996C4.047 20.4006 3.84561 20.2963 3.72166 20.1216C3.59772 19.9459 3.56571 19.7217 3.63697 19.5191L4.7813 16.2814H4.78233C3.38704 13.9241 3.22798 11.0346 4.35578 8.53875C5.48462 6.04298 7.75777 4.25417 10.4483 3.74569C13.1377 3.23826 15.9067 4.07432 17.867 5.98724C19.8262 7.90015 20.7309 10.6491 20.2899 13.3526C19.8489 16.0562 18.119 18.3751 15.6537 19.5656C13.1874 20.7561 10.2965 20.6683 7.90771 19.331L4.45205 20.3738C4.39008 20.3913 4.32605 20.4006 4.26202 20.3996L4.26182 20.3996ZM7.99214 17.9524C8.11297 17.9535 8.23175 17.9865 8.33503 18.0506C10.3428 19.2732 12.8245 19.423 14.9645 18.4516C17.1045 17.4801 18.6269 15.5136 19.0307 13.1976C19.4345 10.8817 18.6681 8.51516 16.9826 6.87593C15.2981 5.23689 12.9122 4.53726 10.6101 5.00746C8.30701 5.47664 6.38508 7.05472 5.47609 9.22299C4.5662 11.3912 4.78617 13.8684 6.06376 15.8423C6.18873 16.0304 6.20939 16.2691 6.11953 16.4769L5.32635 18.7442L7.80919 17.996V17.995C7.86806 17.9733 7.92899 17.9588 7.99199 17.9526L7.99214 17.9524Z"]
  },
  search: {
    viewBox: "0 0 24 24",
    paths: ["M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z"]
  },
  profile: {
    viewBox: "0 0 24 24",
    paths: ["M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z"]
  },
  profile_fill: {
    viewBox: "0 0 24 24",
    paths: ["M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-9.268c-2.707 0-4.901-2.184-4.901-4.878S9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878z"]
  },
  newsletter: {
    viewBox: "0 0 24 24",
    paths: ["M18.508 7.365v-4a.956.956 0 00-.953-.952H5.492a.956.956 0 00-.953.953v4c-1.904 1.936-2.031 1.968-2 2.127v11.079c0 .318.127.603.317.794.191.19.477.317.794.317h15.683c.317 0 .603-.126.794-.317.19-.19.317-.476.317-.794V9.492c.064-.222.032-.127-1.936-2.127zm1.365 13.175v.032l-5.174-5.143 5.174-5.175V20.54zm-.127-11.047l-1.238 1.206V8.254l1.238 1.239zM5.492 3.048h12.063c.19 0 .317.159.317.318v7.968l-3.84 3.872-2.508 2.476-6.35-6.35V3.366c0-.158.128-.317.318-.317zM3.207 20.603V10.254l5.142 5.175-5.142 5.174zM4.54 8.254v2.445L3.334 9.492 4.54 8.254zm-.858 12.793H3.65l5.175-5.174L11.3 18.35a.307.307 0 00.445 0l2.475-2.476 5.176 5.174H3.682z", "M7.333 6.286h8.381M7.333 8.381h8.381M7.333 10.477h8.381"]
  },
  info: {
    viewBox: "0 0 24 24",
    paths: ["M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z", "M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z"]
  },
  info_circle: {
    viewBox: "0 0 24 24",
    paths: ["M12 2.4A9.588 9.588 0 002.4 12c0 5.311 4.288 9.6 9.6 9.6 5.311 0 9.6-4.289 9.6-9.6 0-5.312-4.289-9.6-9.6-9.6zm1.515 14.933c0 .47-.405.875-.875.875h-1.323a.893.893 0 01-.875-.875v-5.59c0-.49.405-.874.875-.874h1.323c.469 0 .875.405.875.875v5.59zm-1.537-7.915c-.982 0-1.792-.81-1.792-1.813s.811-1.814 1.792-1.814c1.003 0 1.813.811 1.813 1.814 0 1.003-.81 1.813-1.813 1.813z"]
  },
  info_shield: {
    viewBox: "0 0 24 24",
    paths: ["M11.945 2L4 5.46c0 10.662 1.34 12.014 7.945 16.402 6.605-4.388 7.945-5.74 7.945-16.402L11.945 2zm0 4.469c.685 0 1.241.556 1.241 1.241l-.248 4.47a.993.993 0 11-1.986 0l-.249-4.47c0-.685.556-1.241 1.242-1.241zm0 7.448a1.49 1.49 0 110 2.98 1.49 1.49 0 010-2.98z"]
  },
  error: {
    viewBox: "0 0 24 24",
    paths: ["M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z", "M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z"]
  },
  question_mark: {
    viewBox: "0 0 24 24",
    paths: ["M12 19.5C13.9894 19.5 15.8971 18.7098 17.3035 17.3035C18.7098 15.8971 19.5 13.9894 19.5 12C19.5 10.0106 18.7098 8.10287 17.3035 6.69653C15.8971 5.29021 13.9894 4.5 12 4.5C10.0106 4.5 8.10287 5.29022 6.69653 6.69653C5.29021 8.10285 4.5 10.0106 4.5 12C4.50245 13.9881 5.29328 15.8946 6.69967 17.3003C8.10538 18.7067 10.0119 19.4975 12 19.5ZM12 5.96394C13.6 5.96394 15.1352 6.59967 16.2669 7.73139C17.3986 8.86307 18.0343 10.3975 18.0343 11.9983C18.0343 13.5983 17.3992 15.1335 16.2675 16.2652C15.1358 17.3968 13.6014 18.0326 12.0013 18.0332C10.4006 18.0332 8.86607 17.3981 7.7339 16.2664C6.60223 15.1353 5.96582 13.6003 5.96582 12.0002C5.96766 10.4002 6.60339 8.86622 7.735 7.73516C8.86607 6.60348 10.3998 5.9677 12 5.96598V5.96394ZM12.6829 15.6752V15.6758C12.6829 15.9891 12.4935 16.2717 12.2041 16.3919C11.9142 16.512 11.5807 16.4452 11.3594 16.2239C11.1374 16.002 11.0712 15.6685 11.1914 15.3791C11.3109 15.0891 11.5936 14.9003 11.9074 14.9003C12.1134 14.9003 12.3108 14.9819 12.4561 15.1278C12.6014 15.2737 12.6829 15.4711 12.6829 15.6771V15.6752ZM9.4889 9.63366C9.42085 9.44055 9.43311 9.22905 9.522 9.04514C9.73412 8.59946 10.0676 8.22304 10.4839 7.9582C10.9001 7.69398 11.3826 7.55176 11.8761 7.54929H11.892H11.8914C12.5799 7.55175 13.2408 7.82088 13.7355 8.29904C14.2302 8.77784 14.5214 9.42889 14.5471 10.1167C14.5649 10.6813 14.4 11.2361 14.0776 11.6996C13.7551 12.1637 13.2916 12.5107 12.7564 12.6903C12.7564 12.6903 12.6798 12.7173 12.6798 12.7626V13.3781H12.6792C12.6792 13.8042 12.334 14.1494 11.908 14.1494C11.4819 14.1494 11.1368 13.8042 11.1368 13.3781V12.7626C11.1441 12.0638 11.5959 11.447 12.2605 11.2294C12.7184 11.0743 13.0213 10.6378 13.0059 10.1541C12.9747 9.56315 12.4904 9.09723 11.8982 9.08865C11.4776 9.09355 11.0969 9.33693 10.9173 9.71641C10.783 10.0015 10.4894 10.1762 10.1749 10.1578C9.86039 10.14 9.58881 9.9322 9.48888 9.63365L9.4889 9.63366Z"]
  },
  mail: {
    viewBox: "0 0 24 24",
    paths: ["M19.713 19.587H4.126A2.126 2.126 0 012 17.462V6.126C2 4.952 2.952 4 4.126 4h15.587c1.173 0 2.125.952 2.125 2.126v11.336a2.126 2.126 0 01-2.125 2.125zM4.126 5.417a.708.708 0 00-.709.709v11.336a.71.71 0 00.708.708h15.588a.709.709 0 00.708-.708V6.126a.709.709 0 00-.708-.709H4.126z", "M11.919 12.134a2.125 2.125 0 01-1.297-.44L2.751 5.638a.71.71 0 11.864-1.126l7.872 6.057a.71.71 0 00.864 0l7.872-6.057a.71.71 0 11.864 1.126l-7.872 6.058c-.372.285-.828.44-1.296.44z"]
  },
  marker: {
    viewBox: "0 0 24 24",
    paths: ["M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z", "M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z"]
  },
  marker_fill: {
    viewBox: "0 0 24 24",
    paths: ["M12.438 22c2.597-2.948 7.509-8.491 7.509-12.562 0-4.07-3.369-7.438-7.509-7.438C8.368 2 5 5.369 5 9.438c0 4.07 4.912 9.614 7.438 12.562zm0-15.65c1.755 0 3.158 1.404 3.158 3.088a3.144 3.144 0 01-3.158 3.158c-1.684 0-3.087-1.403-3.087-3.158 0-1.684 1.403-3.087 3.087-3.087z"]
  },
  minus: {
    viewBox: "0 0 24 24",
    paths: ["M5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"]
  },
  plus: {
    viewBox: "0 0 24 24",
    paths: ["M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z", "M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z"]
  },
  more: {
    viewBox: "0 0 24 24",
    paths: ["M13.907 11.813c0 1.354-1.1 2.454-2.454 2.454A2.455 2.455 0 019 11.813c0-1.353 1.1-2.453 2.453-2.453 1.354 0 2.454 1.1 2.454 2.453zm-2.454-4.906c1.354 0 2.454-1.1 2.454-2.454C13.907 3.1 12.807 2 11.453 2A2.455 2.455 0 009 4.453c0 1.354 1.1 2.454 2.453 2.454zm0 9.813A2.455 2.455 0 009 19.173c0 1.354 1.1 2.454 2.453 2.454 1.354 0 2.454-1.1 2.454-2.454 0-1.353-1.1-2.453-2.454-2.453z"]
  },
  credits: {
    viewBox: "0 0 24 24",
    paths: ["M8.462 3c-1.722 0-3.282.338-4.45.922C2.845 4.506 2 5.377 2 6.452v10.34c0 1.065.835 1.932 2.006 2.517 1.17.585 2.733.929 4.456.929 1.448 0 2.78-.248 3.863-.674.847.43 1.802.674 2.814.674a6.253 6.253 0 006.246-6.247 6.253 6.253 0 00-6.246-6.246c-.075 0-.15.005-.223.007v-1.3c0-1.075-.838-1.946-2.005-2.53C11.743 3.338 10.183 3 8.46 3zm0 .868c1.61 0 3.064.334 4.078.842 1.015.507 1.528 1.153 1.528 1.743-.2.914-.87 1.418-1.528 1.736-1.014.508-2.469.842-4.078.842-1.61 0-3.065-.334-4.08-.842-.752-.39-1.436-.983-1.527-1.736 0-.59.513-1.236 1.528-1.743 1.014-.508 2.469-.842 4.079-.842zm-5.6 4.335c.318.293.713.555 1.15.774 1.168.584 2.728.922 4.45.922.746 0 1.46-.069 2.126-.188a6.276 6.276 0 00-1.211 1.864c-.298.026-.603.047-.916.047-1.607 0-3.059-.335-4.072-.841-1.013-.507-1.527-1.144-1.527-1.743v-.835zm12.276.404a5.378 5.378 0 015.385 5.384 5.378 5.378 0 01-5.385 5.385 5.378 5.378 0 01-5.384-5.385 5.378 5.378 0 015.384-5.384zm-12.276 2.18c.317.292.708.55 1.144.768 1.17.585 2.732.929 4.456.929.21 0 .414-.01.619-.02a6.27 6.27 0 00-.189 1.527c0 .07.005.14.007.209-.145.006-.29.007-.437.007-1.607 0-3.06-.335-4.072-.842-1.013-.506-1.528-1.143-1.528-1.743v-.834zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.93 4.456.93.176 0 .352-.006.525-.014.102.593.287 1.158.545 1.683a10.81 10.81 0 01-1.07.053c-1.607 0-3.06-.335-4.072-.841-1.013-.506-1.528-1.143-1.528-1.743v-.835zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.929 4.456.929.536 0 1.057-.03 1.554-.094a6.245 6.245 0 001.367 1.413c-.85.25-1.85.404-2.921.404-1.607 0-3.058-.335-4.072-.841-1.014-.507-1.528-1.144-1.528-1.744v-.834z"]
  },
  rewards: {
    viewBox: "0 0 24 24",
    paths: ["M10.663 15.912a.3.3 0 00-.299-.299H3.605a5.602 5.602 0 015.587-5.297c1.078 0 2.125.307 3.027.89a.299.299 0 00.324-.503 6.17 6.17 0 00-3.35-.984A6.2 6.2 0 003 15.911a.3.3 0 00.3.3h7.065a.3.3 0 00.298-.3h0zM9.09 9.163a3.587 3.587 0 003.582-3.583A3.585 3.585 0 009.09 2a3.584 3.584 0 00-3.58 3.58 3.585 3.585 0 003.58 3.583zm0-6.565a2.987 2.987 0 012.984 2.982 2.988 2.988 0 01-2.985 2.986A2.987 2.987 0 016.107 5.58 2.986 2.986 0 019.09 2.598z", "M18.945 19.427l-2.071-3.013c.395-.52.614-1.148.619-1.812a3.05 3.05 0 00-3.023-3.068 3.057 3.057 0 00-3.067 3.025c-.005.681.219 1.31.595 1.82L9.88 19.363a.299.299 0 00.306.465l1.675-.357.294 1.573a.3.3 0 00.556.087l1.712-3.168 1.667 3.192a.299.299 0 00.558-.08l.317-1.567 1.667.381a.299.299 0 00.312-.462h0zm-4.495-7.295h.015a2.45 2.45 0 012.43 2.466 2.425 2.425 0 01-.73 1.724 2.431 2.431 0 01-1.717.704h-.019A2.449 2.449 0 0112 14.562a2.453 2.453 0 012.45-2.43h0zm-1.863 7.97l-.195-1.044a.298.298 0 00-.356-.238l-1.225.262 1.596-2.25c.423.385.954.65 1.543.747l-1.363 2.523zm4.213-1.247a.3.3 0 00-.36.232l-.21 1.041-1.328-2.542a3.016 3.016 0 001.554-.724l1.562 2.27-1.219-.277z"]
  },
  shipping: {
    viewBox: "0 0 24 24",
    paths: ["M21.998 7.324L17.845 2H7.154L3 7.324V22h19l-.002-14.676zm-1.643-.357h-7.31V3.103h4.284l3.026 3.864zM7.668 3.103h4.283v3.864h-7.31l3.027-3.864zM4.062 20.895V8.037h16.873v12.858H4.063zm8.436-10.486l2.802 2.824-.772.78-1.514-1.527v5.78h-1.063v-5.78l-1.513 1.526-.772-.779 2.832-2.824z"]
  },
  return: {
    viewBox: "0 0 24 24",
    paths: ["M21.218 7.18L17.017 2H6.202L2 7.18v14.278h19.22L21.218 7.18zm-1.662-.348h-7.394V3.074h4.333l3.062 3.758zM6.723 3.074h4.333v3.758H3.661l3.061-3.758zm-3.648 17.31V7.873h17.07v12.51H3.073z", "M12.584 14.034l.44-.435h-2.543c-.339 0-.643.034-.882.201-.474.334-.576.87-.441 1.237.102.4.407.835 1.017.87.509.033 1.018.033 1.56.033h1.154c.34 0 .577.268.577.568-.002.3-.272.534-.578.534H10.99c-.305 0-.577 0-.883-.034a2.225 2.225 0 01-2.034-1.705c-.272-.969.102-1.939.95-2.507.508-.334 1.051-.4 1.525-.4h2.544l-.543-.436a.612.612 0 01-.17-.4c0-.134.068-.3.17-.401.103-.1.273-.134.408-.134a.63.63 0 01.406.168l1.459 1.437c.102.1.17.268.135.401 0 .133-.068.3-.17.4l-1.39 1.439a.63.63 0 01-.407.167.564.564 0 01-.407-.167.612.612 0 01-.17-.401.434.434 0 01.171-.435z"]
  },
  safety: {
    viewBox: "0 0 24 24",
    paths: ["M11.667 2a4.62 4.62 0 00-4.598 4.644V9.24h-1.61a.46.46 0 00-.459.46v9.196a.46.46 0 00.253.414l4.828 2.321c1.008.49 2.187.49 3.195 0l4.804-2.321a.46.46 0 00.253-.414V9.7a.46.46 0 00-.46-.46h-1.609V6.644A4.62 4.62 0 0011.666 2zM7.989 6.644a3.679 3.679 0 017.356 0V9.24H7.989V6.644zm9.425 11.954l-4.552 2.207a2.737 2.737 0 01-2.39 0L5.92 18.621v-8.46h11.494v8.437z", "M11.681 17.652a.563.563 0 00.563-.563v-2.252a.563.563 0 10-1.126 0v2.252a.563.563 0 00.563.563z"]
  },
  star: {
    viewBox: "0 0 11 10",
    paths: ["M5.5 0l1.235 3.8h3.996L7.498 6.15l1.235 3.8L5.5 7.6 2.267 9.95l1.235-3.8L.269 3.8h3.996L5.5 0z"]
  },
  show_password: {
    viewBox: "0 0 24 24",
    paths: ["M11.974 17.727c3.815 0 7.425-2.052 9.903-5.63a.41.41 0 000-.466C19.399 8.051 15.789 6 11.974 6 8.16 6 4.55 8.053 2.073 11.631a.409.409 0 000 .466c2.477 3.577 6.086 5.63 9.901 5.63zm0-10.909c3.46 0 6.749 1.836 9.065 5.046-2.316 3.21-5.606 5.045-9.065 5.045-3.46 0-6.749-1.834-9.064-5.045 2.314-3.211 5.604-5.046 9.064-5.046z", "M11.974 16.257a4.399 4.399 0 004.395-4.394 4.399 4.399 0 00-4.395-4.394 4.399 4.399 0 00-4.394 4.395 4.399 4.399 0 004.394 4.393zm0-7.97a3.58 3.58 0 013.576 3.576 3.58 3.58 0 01-3.576 3.576 3.58 3.58 0 01-3.576-3.576 3.58 3.58 0 013.576-3.576z", "M11.974 14.43a2.57 2.57 0 002.568-2.567 2.57 2.57 0 00-3.734-2.285.41.41 0 00-.21.468l.265 1.005-.876-.188a.41.41 0 00-.478.287 2.57 2.57 0 002.465 3.28z"]
  },
  phone: {
    viewBox: "0 0 24 24",
    paths: ["M16.028 20.747a7.54 7.54 0 01-1.845-.232c-4.461-1.124-10.827-7.49-11.95-11.95-.454-1.8-.241-3.611.614-5.236a2.466 2.466 0 011.825-1.301c.78-.116 1.55.134 2.11.694l1.825 1.825c.719.718.926 1.817.518 2.732-.214.482-.488.89-.813 1.214-.222.223-.267.592-.132 1.096.492 1.834 3.143 4.487 4.978 4.979.505.135.874.09 1.097-.133a4.01 4.01 0 011.214-.812c.915-.41 2.014-.201 2.732.517l1.825 1.825c.56.56.813 1.329.694 2.11a2.46 2.46 0 01-1.301 1.824 7.22 7.22 0 01-3.391.848zM5.044 3.25a1.224 1.224 0 00-1.092.662c-.72 1.367-.89 2.83-.508 4.348 1.017 4.04 7.003 10.027 11.043 11.043 1.517.383 2.98.211 4.348-.509.352-.186.588-.515.648-.906a1.2 1.2 0 00-.343-1.038l-1.825-1.825a1.215 1.215 0 00-1.34-.26c-.34.152-.623.338-.84.554-.385.386-1.098.779-2.302.457-2.29-.614-5.249-3.573-5.863-5.863-.323-1.204.07-1.918.456-2.303a2.77 2.77 0 00.554-.838c.2-.447.095-.985-.26-1.34L5.897 3.604a1.202 1.202 0 00-.853-.355z"]
  },
  drag: {
    viewBox: "0 0 24 24",
    paths: ["M13.836 9.603c-.234.17-.4.398-.493.65a1.404 1.404 0 00-2.08.584l-1.76-2.423a1.403 1.403 0 10-2.272 1.65l4.026 5.54-1.295-.576a1.403 1.403 0 00-1.141 2.564l.921.41c1 .449 2.101 1.641 3.104 2.09 1.4.624 3.467 1.286 3.584 1.325a.35.35 0 00.22-.666c-.116-.038-2.364-.782-3.52-1.302-.786-.353-2.012-1.607-3.102-2.087l-.922-.41a.702.702 0 01.571-1.283l2.4 1.069c.25.135.713-.218.466-.558L7.8 9.651a.702.702 0 111.135-.825l3.506 4.826a.351.351 0 10.568-.412l-1.032-1.42a.702.702 0 011.136-.824l1.031 1.42a.352.352 0 00.568-.414l-.619-.852a.701.701 0 111.136-.824l1.03 1.419a.351.351 0 00.569-.412l-.62-.852a.702.702 0 011.136-.825l1.444 1.987c1.35 1.86 1.503 4.456 2.577 5.935a.352.352 0 00.568-.413c-.926-1.275-1.221-4.068-2.577-5.934l-1.444-1.988a1.404 1.404 0 00-2.453.34 1.404 1.404 0 00-1.623.02zM5.085 7.892a.35.35 0 11.496.496L4.178 9.792a.35.35 0 01-.496 0L2.278 8.388a.351.351 0 01.497-.496l.804.805v-6.17a.351.351 0 11.701 0v6.172l.805-.807z"]
  },
  list: {
    viewBox: "0 0 24 24",
    paths: ["M2 3h20v3.636H2zM2 17.545h20v3.636H2zM2 10.273h12.727v3.636H2z"]
  },
  tiles: {
    viewBox: "0 0 24 24",
    paths: ["M2 2h4v4H2zM2 10h4v4H2zM2 18h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4zM10 18h4v4h-4zM18 2h4v4h-4zM18 10h4v4h-4zM18 18h4v4h-4z"]
  },
  filter: {
    viewBox: "0 0 24 24",
    paths: ["M4.44 2H4.24A2.246 2.246 0 002 4.242v.199a2.247 2.247 0 002.241 2.252h.199a2.249 2.249 0 002.253-2.252v-.199A2.249 2.249 0 004.44 2zm1.613 2.44A1.605 1.605 0 014.44 6.054H4.24A1.606 1.606 0 012.64 4.441v-.199c0-.884.718-1.6 1.601-1.602h.199a1.603 1.603 0 011.613 1.602v.199zM11.811 2h-.214a2.246 2.246 0 00-2.235 2.242v.199a2.247 2.247 0 002.235 2.252h.214a2.247 2.247 0 002.236-2.252v-.199A2.246 2.246 0 0011.81 2zm1.603 2.44h-.001a1.604 1.604 0 01-1.602 1.613h-.214a1.604 1.604 0 01-1.601-1.602v-.199a1.604 1.604 0 011.601-1.612h.214c.884.001 1.601.718 1.602 1.602v.199zM19.17 2h-.199a2.249 2.249 0 00-2.253 2.242v.199a2.247 2.247 0 002.253 2.252h.198a2.247 2.247 0 002.242-2.252v-.199A2.246 2.246 0 0019.169 2zm1.601 2.44a1.607 1.607 0 01-1.602 1.613h-.198a1.604 1.604 0 01-1.613-1.612v-.199A1.602 1.602 0 0118.97 2.64h.198c.884.001 1.601.718 1.602 1.602v.199zM4.44 9.657H4.24A2.246 2.246 0 002 11.901v.199a2.246 2.246 0 002.241 2.242h.199a2.247 2.247 0 002.253-2.244V11.9A2.249 2.249 0 004.44 9.658zm1.613 2.44A1.604 1.604 0 014.451 13.7h-.199a1.605 1.605 0 01-1.612-1.601v-.199c0-.884.718-1.6 1.601-1.602h.199a1.602 1.602 0 011.613 1.604v.197zM11.813 9.657h-.215a2.247 2.247 0 00-2.235 2.244v.199a2.246 2.246 0 002.235 2.242h.215a2.247 2.247 0 002.235-2.244V11.9a2.246 2.246 0 00-2.235-2.243zm1.602 2.44c0 .886-.718 1.603-1.602 1.605h-.215a1.605 1.605 0 01-1.601-1.603v-.198c0-.885.717-1.602 1.601-1.604h.215c.883.002 1.6.718 1.601 1.602v.199zM19.17 9.657h-.199a2.247 2.247 0 00-2.253 2.244v.199a2.249 2.249 0 002.253 2.242h.198a2.246 2.246 0 002.242-2.244V11.9a2.246 2.246 0 00-2.242-2.243zm1.601 2.441c0 .884-.718 1.6-1.602 1.602h-.198a1.606 1.606 0 01-1.613-1.602V11.9c.001-.885.718-1.601 1.602-1.603h.198a1.604 1.604 0 011.613 1.604v.197zM11.813 17.318h-.215a2.246 2.246 0 00-2.235 2.241v.199A2.246 2.246 0 0011.598 22h.215a2.247 2.247 0 002.235-2.242v-.199a2.246 2.246 0 00-2.235-2.241zm1.602 2.44c-.002.884-.719 1.6-1.602 1.602h-.215a1.604 1.604 0 01-1.601-1.602v-.199c0-.883.718-1.6 1.601-1.601h.215c.883 0 1.6.718 1.601 1.601v.2z"]
  },
  filter2: {
    viewBox: "0 0 24 24",
    paths: ["M18.3998 11.5631H17.4398C17.2402 10.793 16.5452 10.2555 15.7493 10.2555C14.9534 10.2555 14.2584 10.793 14.0589 11.5631H5.44176C5.19805 11.5631 5 11.7611 5 12.0048C5 12.2486 5.19805 12.4466 5.44176 12.4466H14.0589C14.2584 13.2167 14.9534 13.7542 15.7493 13.7542C16.5452 13.7542 17.2402 13.2167 17.4398 12.4466H18.3998C18.6435 12.4466 18.8416 12.2486 18.8416 12.0048C18.8416 11.7611 18.6435 11.5631 18.3998 11.5631ZM15.7494 12.8707C15.399 12.8707 15.0839 12.6594 14.9499 12.3362C14.8151 12.013 14.8895 11.6404 15.1369 11.3923C15.385 11.1449 15.7575 11.0706 16.0807 11.2053C16.4039 11.3393 16.6152 11.6544 16.6152 12.0048C16.6152 12.4827 16.2272 12.8707 15.7494 12.8707L15.7494 12.8707ZM18.3998 15.8157H13.6113C13.4118 15.0456 12.7168 14.5081 11.9209 14.5081C11.125 14.5081 10.43 15.0456 10.2304 15.8157H5.44191C5.19821 15.8157 5.00015 16.0137 5.00015 16.2574C5.00015 16.5011 5.19821 16.6992 5.44191 16.6992H10.2304C10.43 17.4693 11.125 18.0068 11.9209 18.0068C12.7168 18.0068 13.4118 17.4693 13.6113 16.6992H18.3998C18.6435 16.6992 18.8416 16.5011 18.8416 16.2574C18.8416 16.0137 18.6435 15.8157 18.3998 15.8157ZM11.9208 17.1262C11.5704 17.1262 11.2553 16.9149 11.1213 16.5917C10.9865 16.2685 11.0609 15.8959 11.3083 15.6478C11.5564 15.4004 11.9289 15.3261 12.2521 15.4608C12.5753 15.5948 12.7867 15.9099 12.7867 16.2604C12.7867 16.7382 12.3986 17.1262 11.9208 17.1262L11.9208 17.1262ZM5.44183 8.1911H6.40191C6.60144 8.96121 7.29646 9.49868 8.09235 9.49868C8.88825 9.49868 9.58327 8.96121 9.78279 8.1911H18.3999C18.6436 8.1911 18.8417 7.99305 18.8417 7.74934C18.8417 7.50564 18.6436 7.30758 18.3999 7.30758H9.78279C9.58327 6.53747 8.88825 6 8.09235 6C7.29646 6 6.60144 6.53747 6.40191 7.30758H5.44183C5.19813 7.30758 5.00008 7.50564 5.00008 7.74934C5.00008 7.99305 5.19813 8.1911 5.44183 8.1911ZM8.09224 6.88352C8.4427 6.88352 8.7578 7.09483 8.89181 7.41803C9.02654 7.74124 8.95218 8.11379 8.7048 8.3619C8.45669 8.60928 8.08414 8.68364 7.76093 8.54891C7.43773 8.41491 7.22642 8.0998 7.22642 7.74934C7.22642 7.51962 7.31772 7.29949 7.4797 7.13678C7.64241 6.9748 7.86254 6.8835 8.09226 6.8835L8.09224 6.88352Z"]
  },
  sort: {
    viewBox: "0 0 24 24",
    paths: ["M7.08539 6.39352C6.96919 6.62961 6.96919 6.91304 7.10012 7.14912C7.10012 7.16511 7.11486 7.16511 7.11486 7.18048L10.5973 12.4844V18.4491C10.5973 18.6692 10.7135 18.8586 10.8875 18.9527C10.9601 18.984 11.0326 19 11.1052 19C11.2214 19 11.3376 18.9527 11.4243 18.874L13.2092 17.2527C13.3254 17.1426 13.3979 17.0006 13.3979 16.8279L13.3974 12.4689L16.8798 7.16505C16.8798 7.14907 16.8945 7.14907 16.8945 7.1337C17.0249 6.89761 17.0396 6.61418 16.9093 6.3781C16.7931 6.14201 16.5613 6.00061 16.3141 6.00061L7.67998 6C7.43342 6 7.20102 6.15739 7.08539 6.39348L7.08539 6.39352ZM15.6895 7.10178L12.483 11.9809C12.4252 12.0756 12.3816 12.1856 12.3816 12.2957V16.5612L11.6124 17.2535V12.2957C11.6124 12.1857 11.5835 12.0756 11.511 11.9809L8.31872 7.10184L15.6895 7.10178Z"]
  },
  account: {
    viewBox: "0 0 24 24",
    paths: ["M12.014 2c3.413 0 6.19 2.645 6.19 5.895 0 2.204-1.273 4.132-3.124 5.125 3.76 1.157 6.537 4.297 6.884 8.209.116.991-1.851 1.047-1.909.11-.405-3.912-3.934-6.887-8.041-6.887-4.166 0-7.637 2.975-8.042 6.887-.116.937-2.083.881-1.967-.11.405-3.857 3.182-7.052 6.884-8.21-1.852-.99-3.124-2.92-3.124-5.124C5.765 4.645 8.6 2 12.014 2zm0 1.873c-2.372 0-4.282 1.818-4.282 4.022 0 2.259 1.91 4.078 4.282 4.078 2.314 0 4.222-1.818 4.222-4.078 0-2.204-1.909-4.022-4.223-4.022z"]
  },
  login: {
    viewBox: "0 0 24 24",
    paths: ["M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z", "M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z"]
  },
  logout: {
    viewBox: "0 0 24 24",
    paths: ["M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z", "M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z"]
  },
  gift: {
    viewBox: "0 0 24 24",
    paths: ["M18.6 8.40005H15.8734C16.0794 8.04639 16.1997 7.63715 16.1997 7.19981C16.1997 5.88005 15.1204 4.80005 13.7999 4.80005C13.0841 4.80005 12.4407 5.11926 11.9999 5.6206C11.559 5.11926 10.9157 4.80005 10.1999 4.80005C8.87942 4.80005 7.80012 5.88005 7.80012 7.19981C7.80012 7.63645 7.92036 8.04567 8.12637 8.40005H5.40027C5.03956 8.40005 4.7998 8.63981 4.7998 8.99981V11.4003C4.7998 11.7603 5.03956 12 5.39957 12V18.6003C5.39957 18.9596 5.63933 19.2 5.99933 19.2H17.9996C18.3596 19.2 18.6 18.9596 18.6 18.6003V12C18.9593 12 19.1998 11.7603 19.1998 11.4003V8.99981C19.1998 8.63981 18.9593 8.40005 18.6 8.40005ZM17.9996 10.7998H12.5996V9.60028H17.9996V10.7998ZM13.7999 6.0003C14.4594 6.0003 15.0001 6.5403 15.0001 7.20054C15.0001 7.86008 14.4594 8.40007 13.7999 8.40007H12.5996V7.19984C12.5996 6.5403 13.1403 6.0003 13.7999 6.0003ZM8.99961 7.19983C8.99961 6.53959 9.53961 5.99959 10.1999 5.99959C10.8601 5.99959 11.4001 6.53959 11.4001 7.19983V8.40007H10.1999C9.53961 8.40007 8.99961 7.86007 8.99961 7.19983ZM6.00001 9.60031H11.4V10.7999H6.00001V9.60031ZM6.59981 12.0001H11.4001V17.9998H6.59981V12.0001ZM17.3999 17.9998H12.5996V12.0001H17.3999V17.9998Z"]
  }
};
/* harmony default export */ var icons_icons = (icons);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
var colors = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/variables/sizes.js
// Icon sizes
const sizes = {
  xxs: "xxs",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
  xl3: "xl3",
  xl4: "xl4"
}; // Typography sizes

const typographySizes = {
  "extra-small": "extra-small",
  "small": "small",
  "regular": "regular",
  "big": "big"
};
const sizesValues = Object.values(sizes);
/* harmony default export */ var variables_sizes = (sizes);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const SF_ICONS = Object.keys(icons_icons);
/* harmony default export */ var SfIconvue_type_script_lang_js_ = ({
  name: "SfIcon",
  props: {
    icon: {
      type: [String, Array],
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },
    coverage: {
      type: [String, Number],
      default: 1
    }
  },
  computed: {
    isSFColors() {
      return colors["b" /* iconColorsValues */].includes(this.color.trim());
    },

    isSFSizes() {
      const size = this.size.trim();
      return sizesValues.includes(size);
    },

    iconColorClass() {
      return this.isSFColors ? `color-${this.color.trim()}` : "";
    },

    iconSizeClass() {
      if (this.isSFSizes) {
        switch (this.size.trim()) {
          case "xxs":
            return "size-xxs";

          case "xs":
            return "size-xs";

          case "sm":
            return "size-sm";

          case "md":
            return "size-md";

          case "lg":
            return "size-lg";

          case "xl":
            return "size-xl";

          case "xxl":
            return "size-xxl";

          case "xl3":
            return "size-xl3";

          case "xl4":
            return "size-xl4";

          default:
            return "size-lg";
        }
      } else {
        return "";
      }
    },

    iconCustomStyle() {
      return {
        "--icon-color": !this.isSFColors ? this.color : "",
        "--icon-size": !this.isSFSizes ? this.size : ""
      };
    },

    isSFIcons() {
      if (typeof this.icon === "string") {
        return SF_ICONS.includes(this.icon.trim());
      } else return null;
    },

    iconViewBox() {
      return this.isSFIcons ? icons_icons[this.icon].viewBox || this.viewBox : this.viewBox;
    },

    iconPaths() {
      if (this.isSFIcons) {
        return icons_icons[this.icon].paths;
      } else {
        return Array.isArray(this.icon) ? this.icon : [this.icon];
      }
    },

    fillPath() {
      return this.coverage === 1 ? "var(--icon-color)" : this.fillPathUrl(this._uid);
    }

  },
  methods: {
    fillPathUrl(uid) {
      return `url(#linearGradient-${uid})`;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfIcon_SfIconvue_type_script_lang_js_ = (SfIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfIcon_SfIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "12ce896c"
  
)

/* harmony default export */ var SfIcon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartGetters; });
/* unused harmony export categoryGetters */
/* unused harmony export checkoutGetters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facetGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return orderGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return productGetters; });
/* unused harmony export reviewGetters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return searchGetters; });
/* unused harmony export useAvailableCountries */
/* unused harmony export useAvailableFilters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return index$d; });
/* unused harmony export useCheckout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return index$c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return index$b; });
/* unused harmony export useForgotPassword */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return index$a; });
/* unused harmony export useReview */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return index$8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return index$6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return index$7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return index$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return index$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return index$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return index$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return userGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return userGetters$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return userGetters$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return wishlistGetters; });
/* harmony import */ var _vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const params$a = {
  categorySearch: async (context, params) => {
    const {
      customQuery,
      ...searchParams
    } = params;
    return await context.$shopify.api.getCategory(searchParams, customQuery);
  }
};
var index$d = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useCategoryFactory */ "n"])(params$a);
/* istanbul ignore file */

const PAYMENT_METHODS_MOCK = [{
  label: 'Visa Debit',
  value: 'debit'
}, {
  label: 'MasterCard',
  value: 'mastercard'
}, {
  label: 'Visa Electron',
  value: 'electron'
}, {
  label: 'Cash on delivery',
  value: 'cash'
}, {
  label: 'Check',
  value: 'check'
}];
const paymentMethods = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])(PAYMENT_METHODS_MOCK);
const shippingMethods = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])([]);
const personalDetails = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])({});
const shippingDetails = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])({});
const billingDetails = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])({});
const chosenPaymentMethod = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])('');
const chosenShippingMethod = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])({});

const placeOrder = async () => {}; // @todo CHECKOUT


const useCheckout = () => {
  return {
    paymentMethods,
    shippingMethods,
    personalDetails,
    shippingDetails,
    billingDetails,
    chosenPaymentMethod,
    chosenShippingMethod,
    placeOrder,
    loading: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* computed */ "a"])(() => false)
  };
};

var ContentType;

(function (ContentType) {
  ContentType["UpdatePreference"] = "updatePreferences";
  ContentType["Page"] = "page";
  ContentType["Blog"] = "blog";
  ContentType["Article"] = "article";
})(ContentType || (ContentType = {}));

const params$9 = {
  search: async (context, allParams) => {
    const {
      contentType,
      ...params
    } = allParams;
    const deprecatedApi = context.$shopify.api;

    switch (contentType) {
      case ContentType.UpdatePreference:
        return deprecatedApi.updateNewsLetterPreferences(params);

      case ContentType.Page:
        {
          var _response$data;

          const response = await context.$shopify.api.getPage(params);
          return response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.page;
        }

      case ContentType.Blog:
        {
          var _response$data3;

          if (Object.prototype.hasOwnProperty.call(params, 'id') || Object.prototype.hasOwnProperty.call(params, 'handle')) {
            var _response$data2;

            const response = await context.$shopify.api.getBlog(params).catch(err => ({
              error: err,
              data: null
            }));
            if (response !== null && response !== void 0 && response.error) throw response.error;
            return response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.blog;
          }

          const response = await context.$shopify.api.getBlogs(params).catch(err => ({
            error: err,
            data: null
          }));
          if (response !== null && response !== void 0 && response.error) throw response.error;
          return response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.blogs;
        }

      case ContentType.Article:
        {
          var _response$data5;

          if (Object.prototype.hasOwnProperty.call(params, 'id') || Object.prototype.hasOwnProperty.call(params, 'handle')) {
            var _response$data4;

            const response = await context.$shopify.api.getArticle(params);
            return response === null || response === void 0 ? void 0 : (_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.article;
          }

          const response = await context.$shopify.api.getArticles(params);
          if (response.error) throw response.error;
          return {
            data: response === null || response === void 0 ? void 0 : (_response$data5 = response.data) === null || _response$data5 === void 0 ? void 0 : _response$data5.articles,
            pageInfo: response === null || response === void 0 ? void 0 : response.pageInfo
          };
        }

      default:
        {
          return deprecatedApi.getBlogPosts(params);
        }
    }
  }
};
var index$c = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useContentFactory */ "o"])(params$9);

function convertProductsGqlToLocal(data) {
  return data.edges.map(edge => ({ ...edge.node,
    images: edge.node.images.edges.map(imageEdge => imageEdge.node),
    variants: edge.node.variants.edges.map(variantEdge => variantEdge.node)
  }));
}

const enhanceProduct = productResponse => {
  if (Object.keys(productResponse).length === 0) return [];
  let products = [];

  if (Array.isArray(productResponse)) {
    products = productResponse.filter(item => Object.keys(item).length !== 0);
  }

  const enhancedProductResponse = products.map(product => {
    var _product$variantBySel, _product$variantBySel2, _product$variants, _product$variants$0$c, _product$variantBySel3, _product$variantBySel4, _product$variants2, _product$variants2$0$, _product$variantBySel5, _product$variants3, _product$variants4, _product$images$, _product$images, _product$variants5, _product$variants5$0$;

    return { ...product,
      name: product.title,
      images: product === null || product === void 0 ? void 0 : product.images,
      price: {
        original: product.variantBySelectedOptions && product.variantBySelectedOptions !== null ? (_product$variantBySel = product.variantBySelectedOptions) === null || _product$variantBySel === void 0 ? void 0 : (_product$variantBySel2 = _product$variantBySel.compareAtPriceV2) === null || _product$variantBySel2 === void 0 ? void 0 : _product$variantBySel2.amount : product.variants ? (_product$variants = product.variants) === null || _product$variants === void 0 ? void 0 : (_product$variants$0$c = _product$variants[0].compareAtPriceV2) === null || _product$variants$0$c === void 0 ? void 0 : _product$variants$0$c.amount : 0,
        current: product.variantBySelectedOptions && product.variantBySelectedOptions !== null ? (_product$variantBySel3 = product.variantBySelectedOptions) === null || _product$variantBySel3 === void 0 ? void 0 : (_product$variantBySel4 = _product$variantBySel3.priceV2) === null || _product$variantBySel4 === void 0 ? void 0 : _product$variantBySel4.amount : product.variants ? (_product$variants2 = product.variants) === null || _product$variants2 === void 0 ? void 0 : (_product$variants2$0$ = _product$variants2[0].priceV2) === null || _product$variants2$0$ === void 0 ? void 0 : _product$variants2$0$.amount : 0
      },
      available: product.variantBySelectedOptions && product.variantBySelectedOptions !== null ? (_product$variantBySel5 = product.variantBySelectedOptions) === null || _product$variantBySel5 === void 0 ? void 0 : _product$variantBySel5.quantityAvailable : product.variants ? (_product$variants3 = product.variants) === null || _product$variants3 === void 0 ? void 0 : _product$variants3[0].availableForSale : true,
      productType: product.productType,
      options: product.options,
      _id: product.id,
      variantId: product.variants ? (_product$variants4 = product.variants) === null || _product$variants4 === void 0 ? void 0 : _product$variants4[0].id : '',
      _description: product.description,
      _descriptionHtml: product.descriptionHtml,
      _categoriesRef: [],
      _slug: product.handle,
      _coverImage: (_product$images$ = product === null || product === void 0 ? void 0 : (_product$images = product.images) === null || _product$images === void 0 ? void 0 : _product$images[0]) !== null && _product$images$ !== void 0 ? _product$images$ : '',
      _mainPrice: product.variants ? (_product$variants5 = product.variants) === null || _product$variants5 === void 0 ? void 0 : (_product$variants5$0$ = _product$variants5[0].priceV2) === null || _product$variants5$0$ === void 0 ? void 0 : _product$variants5$0$.amount : 0
    };
  });
  return enhancedProductResponse;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getSortedProducts = (productResponse, sortBy) => {
  let sortKey = '_id';

  if (sortBy === 'title(asc)' || sortBy === 'title(dsc)') {
    sortKey = 'name';
  } else if (sortBy === 'price-up' || sortBy === 'price-down') {
    sortKey = '_mainPrice';
  }

  return productResponse.sort((a, b) => {
    const x = a[sortKey];
    const y = b[sortKey];

    if (sortBy === 'price-down' || sortBy === 'title(dsc)') {
      return (x < y ? -1 : x > y ? 1 : 0) * -1;
    }

    return x < y ? -1 : x > y ? 1 : 0;
  });
}; // TODO: move to the config file


const ITEMS_PER_PAGE = [20, 40, 100];
const factoryParams$1 = {
  search: async (context, params) => {
    var _collection$data;

    // if (Object.keys(params.input.filters).length > 0) {
    const newContext = context;
    const collection = await newContext.$shopify.api.getCollection(params.input);
    const result = collection === null || collection === void 0 ? void 0 : (_collection$data = collection.data) === null || _collection$data === void 0 ? void 0 : _collection$data.collection;
    result.products = convertProductsGqlToLocal(result.products);
    const itemsPerPage = params.input.itemsPerPage;
    return {
      products: enhanceProduct(result.products),
      categories: result,
      total: result.products.length,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage
    };
  }
};
var index$b = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useFacetFactory */ "p"])(factoryParams$1);
const params$8 = {
  productsSearch: async (context, params) => {
    const app = context.$shopify.config.app; // check if cart is already initiated

    const {
      customQuery,
      ...searchParams
    } = params;
    searchParams.localeInfo = {
      cur: app.i18n.locale,
      default: app.i18n.localeProperties.alias
    };
    return await context.$shopify.api.getProduct(searchParams, customQuery);
  }
};
var index$a = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useProductFactory */ "r"])(params$8);
const params$7 = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchReviews: async (context, params) => {
    console.log('Mocked: searchReviews');
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addReview: async (context, params) => {
    console.log('Mocked: addReview');
    return {};
  }
};
var index$9 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useReviewFactory */ "s"])(params$7);
const useSearchFactoryParams = {
  async search(context, params) {
    const response = await context.$shopify.api.searchProduct(params);
    return response;
  }

};
var index$8 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useSearchFactory */ "t"])(useSearchFactoryParams);
/* istanbul ignore file */

const params$6 = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async context => {
    // check for existing token, if yes user is logged in else logged out
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    const result = await context.$shopify.api.fetchCustomer(token);
    let customer = null;

    if (result) {
      customer = result.customer;

      if (customer) {
        customer.token = token;
      }

      return customer;
    }

    return customer;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async context => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    await context.$shopify.api.signOut(token).then(() => {
      app.$cookies.remove(appKey + '_token');
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context, {
    currentUser,
    updatedUserData
  }) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    await context.$shopify.api.editProfile({
      token,
      profile: {
        email: updatedUserData.email ? updatedUserData.email : '',
        firstName: updatedUserData.firstName ? updatedUserData.firstName : '',
        lastName: updatedUserData.lastName ? updatedUserData.lastName : '',
        acceptsMarketing: updatedUserData.acceptsMarketing ? updatedUserData.acceptsMarketing : false,
        phone: updatedUserData.phone ? updatedUserData.phone : null
      }
    });
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context, {
    email,
    password,
    firstName,
    lastName
  }) => {
    var _result$customerUserE;

    const result = await context.$shopify.api.customerCreate({
      email,
      firstName,
      lastName,
      acceptsMarketing: false,
      password
    });
    const response = {
      token: 'SignUpSuccess',
      error: (_result$customerUserE = result.customerUserErrors) !== null && _result$customerUserE !== void 0 && _result$customerUserE.length ? result.customerUserErrors[0].message : ''
    };
    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context, {
    username,
    password
  }) => {
    if (username && !password) {
      var _result$data, _result$data$customer, _result$data$customer2, _result$errors, _result$errors$;

      const result = await context.$shopify.api.forgotPassword({
        username
      });
      const response = {
        token: 'forgotPassword',
        error: (result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : (_result$data$customer = _result$data.customerRecover) === null || _result$data$customer === void 0 ? void 0 : (_result$data$customer2 = _result$data$customer.customerUserErrors[0]) === null || _result$data$customer2 === void 0 ? void 0 : _result$data$customer2.message) || (result === null || result === void 0 ? void 0 : (_result$errors = result.errors) === null || _result$errors === void 0 ? void 0 : (_result$errors$ = _result$errors[0]) === null || _result$errors$ === void 0 ? void 0 : _result$errors$.message) || ''
      };
      return response;
    }

    const result = await context.$shopify.api.signIn({
      username,
      password
    });
    const response = {
      token: result.customerAccessToken ? result.customerAccessToken.accessToken : null,
      error: result.customerUserErrors.length ? result.customerUserErrors[0].message : ''
    }; // store token in cookie

    if (response.token !== null) {
      const app = context.$shopify.config.app;
      const appKey = app.$config.appKey;
      app.$cookies.set(appKey + '_token', response.token);
    }

    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context, {
    currentUser,
    currentPassword,
    newPassword
  }) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    let token = app.$cookies.get(appKey + '_token');
    const result = await context.$shopify.api.changePassword({
      token,
      newPassword
    });
    token = result.customerUpdate.customerAccessToken.accessToken; // store updated user token

    if (token !== null) {
      app.$cookies.set(appKey + '_token', token);
    }

    return {};
  }
};
var index$7 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useUserFactory */ "w"])(params$6);
const params$5 = {
  async change() {},

  async load() {}

};
var index$6 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useStoreFactory */ "u"])(params$5);
const addresses$1 = [{
  id: 1,
  email: 'john@gmail.com',
  firstName: 'John',
  lastName: 'Doe',
  streetName: 'Warsawska',
  apartment: '24/193A',
  city: 'Phoenix',
  state: null,
  zipCode: '26-620',
  country: 'US',
  phoneNumber: '560123456',
  isDefault: true
}, {
  id: 2,
  email: 'havaka@gmail.com',
  firstName: 'Jonatan',
  lastName: 'Doe',
  streetName: 'Starachowicka',
  apartment: '20/193A',
  city: 'Atlanta',
  state: null,
  zipCode: '53-603',
  country: 'US',
  phoneNumber: '560123456',
  isDefault: false
}];
const billing = {
  addresses: addresses$1
}; // const findBiggestId = () => Math.random().toString().substr(2);

const disableOldDefault$1 = () => {
  const oldDefault = addresses$1.find(address => address.isDefault);

  if (oldDefault) {
    oldDefault.isDefault = false;
  }
};

const sortDefaultAtTop$1 = (a, b) => {
  if (a.isDefault) {
    return -1;
  } else if (b.isDefault) {
    return 1;
  }

  return 0;
};

const params$4 = {
  addAddress: async (context, params) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    const formatedAddress = {
      address1: params.address.streetName,
      address2: params.address.apartment,
      city: params.address.city,
      company: params.address.company,
      country: params.address.country,
      firstName: params.address.firstName,
      lastName: params.address.lastName,
      phone: params.address.phone,
      province: params.address.state,
      zip: params.address.postalCode
    };
    const result = await context.$shopify.api.addAddress({
      token,
      address: formatedAddress
    });

    if (result) {
      if (result.customerUserErrors.length === 0) {
        return true;
      }

      return false;
    }
  },
  deleteAddress: async (context, params) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    const result = await context.$shopify.api.deleteAddress({
      token,
      AddressId: params.address.id
    });

    if (result) {
      if (result.customerUserErrors.length === 0) {
        return true;
      }

      return false;
    }
  },
  updateAddress: async (context, params) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    const formatedAddress = {
      address1: params.address.streetName,
      address2: params.address.apartment,
      city: params.address.city,
      company: params.address.company,
      country: params.address.country,
      firstName: params.address.firstName,
      lastName: params.address.lastName,
      phone: params.address.phone,
      province: params.address.state,
      zip: params.address.postalCode
    };
    const result = await context.$shopify.api.updateAddress({
      token,
      AddressId: params.address.id,
      address: formatedAddress
    });

    if (result) {
      if (result.customerUserErrors.length === 0) {
        return true;
      }

      return false;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context, params) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    const result = await context.$shopify.api.fetchAddresses(token);
    let addresses = {};

    if (result) {
      addresses = result;
      return addresses;
    }

    return addresses;
  },
  setDefaultAddress: async (context, params) => {
    console.log('Mocked: setDefault');

    const isDefault = id => addresses$1[0].id === id;

    if (!isDefault(params.address.id)) {
      const indexToUpdate = addresses$1.findIndex(address => address.id === params.address.id);

      if (indexToUpdate < 0) {
        return Promise.reject(Error('This address does not exist'));
      }

      disableOldDefault$1();
      addresses$1[indexToUpdate].isDefault = true;
      addresses$1.sort(sortDefaultAtTop$1);
    }

    return Promise.resolve(billing);
  }
};
var index$5 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useUserBillingFactory */ "v"])(params$4);
/* istanbul ignore file */

const params$3 = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (context, params) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    const token = app.$cookies.get(appKey + '_token');
    const result = await context.$shopify.api.fetchOrders(token);
    const orders = {
      data: [],
      total: 0
    };

    if (result) {
      orders.data = result.customer.orders;
      orders.total = result.customer.orders.length;
      return orders;
    }

    return orders;
  }
};
var index$4 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useUserOrderFactory */ "x"])(params$3);
const addresses = [{
  id: 1,
  email: 'john@gmail.com',
  firstName: 'John',
  lastName: 'Doe',
  streetName: 'Warsawska',
  apartment: '24/193A',
  city: 'Phoenix',
  state: null,
  zipCode: '26-620',
  country: 'US',
  phoneNumber: '560123456',
  isDefault: true
}, {
  id: 2,
  email: 'havaka@gmail.com',
  firstName: 'Jonatan',
  lastName: 'Doe',
  streetName: 'Starachowicka',
  apartment: '20/193A',
  city: 'Atlanta',
  state: null,
  zipCode: '53-603',
  country: 'US',
  phoneNumber: '560123456',
  isDefault: false
}];
const shipping = {
  addresses
};

const findBiggestId = () => addresses.reduce((highest, {
  id
}) => Math.max(highest, id), 0);

const disableOldDefault = () => {
  const oldDefault = addresses.find(address => address.isDefault);

  if (oldDefault) {
    oldDefault.isDefault = false;
  }
};

const sortDefaultAtTop = (a, b) => {
  if (a.isDefault) {
    return -1;
  } else if (b.isDefault) {
    return 1;
  }

  return 0;
};

const params$2 = {
  addAddress: async (context, params) => {
    const newAddress = { ...params.address,
      id: findBiggestId() + 1
    };

    if (params.address.isDefault) {
      disableOldDefault();
      addresses.unshift(newAddress);
    } else {
      addresses.push(newAddress);
    }

    return Promise.resolve(shipping);
  },
  deleteAddress: async (context, params) => {
    const indexToRemove = addresses.findIndex(address => address.id === params.address.id);

    if (indexToRemove < 0) {
      return Promise.reject(Error('This address does not exist'));
    }

    addresses.splice(indexToRemove, 1);
    return Promise.resolve(shipping);
  },
  updateAddress: async (context, params) => {
    const indexToUpdate = addresses.findIndex(address => address.id === params.address.id);

    if (indexToUpdate < 0) {
      return Promise.reject(Error('This address does not exist'));
    }

    const isNewDefault = params.address.isDefault && addresses[0].id !== params.address.id;

    if (isNewDefault) {
      disableOldDefault();
    }

    addresses[indexToUpdate] = params.address;

    if (isNewDefault) {
      addresses.sort(sortDefaultAtTop);
    }

    return Promise.resolve(shipping);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context, params) => {
    console.log('Mocked: load');
    return Promise.resolve(shipping);
  },
  setDefaultAddress: async (context, params) => {
    console.log('Mocked: setDefault');

    const isDefault = id => addresses[0].id === id;

    if (!isDefault(params.address.id)) {
      const indexToUpdate = addresses.findIndex(address => address.id === params.address.id);

      if (indexToUpdate < 0) {
        return Promise.reject(Error('This address does not exist'));
      }

      disableOldDefault();
      addresses[indexToUpdate].isDefault = true;
      addresses.sort(sortDefaultAtTop);
    }

    return Promise.resolve(shipping);
  }
};
var index$3 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useUserShippingFactory */ "y"])(params$2);
/* istanbul ignore file */

Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])(null);
const params$1 = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async context => {
    console.log('Mocked: loadWishlist');
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context, {
    currentWishlist,
    product
  }) => {
    console.log('Mocked: addToWishlist');
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context, {
    currentWishlist,
    product
  }) => {
    console.log('Mocked: removeFromWishlist');
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context, {
    currentWishlist
  }) => {
    console.log('Mocked: clearWishlist');
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context, {
    currentWishlist
  }) => {
    console.log('Mocked: isInWishlist');
    return false;
  }
};
var index$2 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useWishlistFactory */ "A"])(params$1);
/* istanbul ignore file */

const params = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async context => {
    // check if cart is already initiated
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    let existingLocale = app.$cookies.get('cur-vsf-locale');
    let isLocaleSwitched = false;

    if (existingLocale === undefined || existingLocale === '' || existingLocale !== app.i18n.locale) {
      app.$cookies.set('cur-vsf-locale', app.i18n.locale);
      existingLocale = app.$cookies.get('cur-vsf-locale');
      isLocaleSwitched = true;
    }

    let existngCartId = app.$cookies.get(appKey + '_cart_id');

    if (existngCartId === undefined || existngCartId === '' || isLocaleSwitched) {
      // Initiate new cart
      existngCartId = await context.$shopify.api.createCart().then(checkout => {
        app.$cookies.set(appKey + '_cart_id', checkout.id, {
          maxAge: 60 * 60 * 24 * 365,
          path: '/'
        });
        return checkout.id;
      });
    }

    const checkoutId = existngCartId; // Keep existing cart

    const plainResp = await context.$shopify.api.checkOut(checkoutId).then(checkout => {
      // Do something with the checkout
      return checkout;
    });
    return JSON.parse(JSON.stringify(plainResp));
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context, {
    currentCart,
    product,
    quantity,
    customQuery
  }) => {
    const app = context.$shopify.config.app;
    const appKey = app.$config.appKey;
    return await context.$shopify.api.addToCart({
      currentCart,
      product,
      quantity,
      customQuery
    }).then(checkout => {
      // store cart id
      if (!app.$cookies.get(appKey + '_cart_id', currentCart.id)) {
        app.$cookies.set(appKey + '_cart_id', currentCart.id, {
          maxAge: 60 * 60 * 24 * 365,
          path: '/'
        });
      }

      return JSON.parse(JSON.stringify(checkout));
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context, {
    currentCart,
    product,
    customQuery
  }) => {
    // Remove an item from the checkout
    return await context.$shopify.api.removeFromCart({
      currentCart,
      product
    }).then(checkout => {
      // return updated cart data
      return JSON.parse(JSON.stringify(checkout));
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context, {
    currentCart,
    product,
    quantity,
    customQuery
  }) => {
    // Update an item Quantity
    return await context.$shopify.api.updateCart({
      currentCart,
      product,
      quantity
    }).then(checkout => {
      // return updated cart data
      return JSON.parse(JSON.stringify(checkout));
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context, {
    currentCart
  }) => {
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context, {
    currentCart,
    couponCode,
    customQuery
  }) => {
    return await context.$shopify.api.applyCoupon({
      currentCart,
      couponCode,
      customQuery
    }).then(checkout => {
      // return updated checkout data
      return {
        updatedCart: JSON.parse(JSON.stringify(checkout.checkout))
      };
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context, {
    currentCart,
    couponCode,
    customQuery
  }) => {
    return await context.$shopify.api.removeCoupon({
      currentCart,
      couponCode,
      customQuery
    }).then(checkout => {
      // return updated checkout data
      return {
        updatedCart: JSON.parse(JSON.stringify(checkout.checkout))
      };
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context, {
    currentCart,
    product
  }) => {
    const getBasketItemByProduct = ({
      currentCart,
      product
    }) => {
      if (product) {
        var _currentCart$lineItem, _currentCart$lineItem2;

        let variantId;

        if (product && product.variantBySelectedOptions && product.variantBySelectedOptions !== null) {
          variantId = product.variantBySelectedOptions.id;
        }

        if (product.variants) {
          variantId = product.variants[0].id;
        }

        if (product.barcodes) {
          // handle & convert plain product Id from BCapp to base64
          const variationIDPlain = 'gid://shopify/ProductVariant/' + variantId;
          const buff = Buffer.from(variationIDPlain);
          variantId = buff.toString('base64');
        }

        return currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$lineItem = currentCart.lineItems) === null || _currentCart$lineItem === void 0 ? void 0 : (_currentCart$lineItem2 = _currentCart$lineItem.find) === null || _currentCart$lineItem2 === void 0 ? void 0 : _currentCart$lineItem2.call(_currentCart$lineItem, item => item.variant.id === variantId);
      }

      return false;
    };

    return Boolean(currentCart && getBasketItemByProduct({
      currentCart,
      product
    }));
  }
};
var index$1 = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useCartFactory */ "m"])(params);
const factoryParams = {
  resetPassword: async (context, {
    email
  }) => {
    const response = await context.$shopify.api.customerRecover({
      email
    });
    return response;
  },
  setNewPassword: async (context, {
    tokenValue,
    newPassword,
    customQuery
  }) => {
    console.log('Mocked: setNewPassword');
    return {};
  }
};
var index = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useForgotPasswordFactory */ "q"])(factoryParams);

function useAvailableFilters() {
  Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useVSFContext */ "z"])();
  return {
    async load() {// console.log(await context.$shopify.api.availableFilters({
      //   handle: 'clothes'
      // }))
    }

  };
}

function useAvailableCountries() {
  const context = Object(_vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* useVSFContext */ "z"])();
  const countries = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "j"])([]);
  return {
    async load() {
      const _countries = await context.$shopify.api.availableCountries();

      countries.value = _countries;
    },

    countries
  };
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const formatAttributeList = attributes => attributes.map(attr => {
  return {
    name: attr.name,
    value: attr.values,
    label: attr.name
  };
});

const formatSelectedAttributeList = attributes => attributes.map(attr => {
  return {
    name: attr.name,
    value: attr.value,
    label: attr.name
  };
});

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getCartItems = cart => {
  return cart.lineItems;
};

const getCartItemName = product => (product === null || product === void 0 ? void 0 : product.title) || 'Product\'s name';

const getCartItemId = product => product.id || '0';

const getCartItemSlug = product => {
  return product.slug || '0';
};

const getCartItemImage = product => {
  var _product$variant;

  if (product.variant && (product === null || product === void 0 ? void 0 : (_product$variant = product.variant) === null || _product$variant === void 0 ? void 0 : _product$variant.image) !== null) {
    var _product$variant2, _product$variant2$ima, _product$variant3, _product$variant3$ima;

    const imgPath = product === null || product === void 0 ? void 0 : (_product$variant2 = product.variant) === null || _product$variant2 === void 0 ? void 0 : (_product$variant2$ima = _product$variant2.image) === null || _product$variant2$ima === void 0 ? void 0 : _product$variant2$ima.src.substring(0, product === null || product === void 0 ? void 0 : product.variant.image.src.lastIndexOf('.'));
    const imgext = product === null || product === void 0 ? void 0 : (_product$variant3 = product.variant) === null || _product$variant3 === void 0 ? void 0 : (_product$variant3$ima = _product$variant3.image) === null || _product$variant3$ima === void 0 ? void 0 : _product$variant3$ima.src.split('.').pop();
    const cartImg = imgPath + '_120x120.' + imgext;
    return cartImg;
  }

  return '';
};

const getCartItemPrice = product => {
  var _product$variant4, _product$variant4$com, _product$variant5, _product$variant5$pri;

  return {
    regular: (product === null || product === void 0 ? void 0 : (_product$variant4 = product.variant) === null || _product$variant4 === void 0 ? void 0 : (_product$variant4$com = _product$variant4.compareAtPriceV2) === null || _product$variant4$com === void 0 ? void 0 : _product$variant4$com.amount) || null,
    special: (product === null || product === void 0 ? void 0 : (_product$variant5 = product.variant) === null || _product$variant5 === void 0 ? void 0 : (_product$variant5$pri = _product$variant5.priceV2) === null || _product$variant5$pri === void 0 ? void 0 : _product$variant5$pri.amount) || null
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getCartItemQty = product => product === null || product === void 0 ? void 0 : product.quantity;

const getCartItemAttributes = product => {
  const formatAttedattributeList = formatSelectedAttributeList(product === null || product === void 0 ? void 0 : product.variant.selectedOptions);

  if (formatAttedattributeList.length) {
    const attribArr = [];
    formatAttedattributeList.forEach(attr => {
      attribArr[attr.name] = attr.value;
    });
    return { ...attribArr
    };
  }

  return {};
};

const getCartItemSku = product => (product === null || product === void 0 ? void 0 : product.variant.sku) || '-';

const getCartTotals = cart => {
  if (cart && cart !== null) {
    var _cart$totalPriceV, _cart$subtotalPriceV, _cart$subtotalPriceV2;

    return {
      total: parseFloat((_cart$totalPriceV = cart.totalPriceV2) === null || _cart$totalPriceV === void 0 ? void 0 : _cart$totalPriceV.amount),
      subtotal: parseFloat((_cart$subtotalPriceV = cart.subtotalPriceV2) === null || _cart$subtotalPriceV === void 0 ? void 0 : _cart$subtotalPriceV.amount),
      special: parseFloat((_cart$subtotalPriceV2 = cart.subtotalPriceV2) === null || _cart$subtotalPriceV2 === void 0 ? void 0 : _cart$subtotalPriceV2.amount)
    };
  }
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getCartShippingPrice = cart => 0;

const getCartSubTotal = cart => cart.lineItemsSubtotalPrice || 0;

const getcheckoutURL = cart => cart.webUrl || '';

const getCartTotalItems = cart => {
  var _cart$lineItems;

  return (cart === null || cart === void 0 ? void 0 : (_cart$lineItems = cart.lineItems) === null || _cart$lineItems === void 0 ? void 0 : _cart$lineItems.length) > 0 ? cart.lineItems.reduce((n, {
    quantity
  }) => n + quantity, 0) : 0;
};

const getCartTotalDiscount = cart => (cart === null || cart === void 0 ? void 0 : cart.discountApplications.length) > 0 ? cart.discountApplications[0].value : 0;

const getAppliedCoupon = cart => (cart === null || cart === void 0 ? void 0 : cart.discountApplications.length) > 0 ? cart.discountApplications[0].code : '';

const getFormattedPrice$4 = price => String(price); // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getCoupons = cart => []; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getDiscounts = cart => [];

const cartGetters = {
  getTotals: getCartTotals,
  getShippingPrice: getCartShippingPrice,
  getItems: getCartItems,
  getItemName: getCartItemName,
  getItemImage: getCartItemImage,
  getItemId: getCartItemId,
  getItemSlug: getCartItemSlug,
  getItemPrice: getCartItemPrice,
  getItemQty: getCartItemQty,
  getItemAttributes: getCartItemAttributes,
  getItemSku: getCartItemSku,
  getFormattedPrice: getFormattedPrice$4,
  getTotalItems: getCartTotalItems,
  getTotalDiscount: getCartTotalDiscount,
  getcheckoutURL,
  getSubTotal: getCartSubTotal,
  getCoupon: getAppliedCoupon,
  getCoupons,
  getDiscounts
};

const itemToTree = category => {
  return {
    label: category.title,
    slug: category.handle,
    items: [],
    isCurrent: false
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getCategoryTree$1 = category => {
  if (category) {
    return itemToTree(category);
  }

  return {};
};

const categoryGetters = {
  getTree: getCategoryTree$1
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars

const getShippingMethodId = shippingMethod => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getShippingMethodName = shippingMethod => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getShippingMethodDescription = shippingMethod => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getShippingMethodPrice = shippingMethod => 0; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getFormattedPrice$3 = price => String(price);

const checkoutGetters = {
  getShippingMethodId,
  getShippingMethodName,
  getShippingMethodDescription,
  getFormattedPrice: getFormattedPrice$3,
  getShippingMethodPrice
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const buildBreadcrumbsList = (rootCat, bc) => {
  const newBc = [...bc, {
    text: rootCat.title,
    link: rootCat.handle
  }];
  return rootCat.parent ? buildBreadcrumbsList(rootCat.parent, newBc) : newBc;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const buildBreadcrumbs = rootCat => buildBreadcrumbsList(rootCat, []).reverse().reduce((prev, curr, index) => {
  var _prev;

  return [...prev, { ...curr,
    link: `${((_prev = prev[index - 1]) === null || _prev === void 0 ? void 0 : _prev.link) || ''}/${curr.link}`
  }];
}, []);

const filterFacets = criteria => f => criteria ? criteria.includes(f) : true;

const createFacetsFromOptions = (facets, filters, filterKey) => {
  var _facets$filterKey;

  const options = ((_facets$filterKey = facets[filterKey]) === null || _facets$filterKey === void 0 ? void 0 : _facets$filterKey.options) || [];
  const selectedList = filters && filters[filterKey] ? filters[filterKey] : [];
  return options.map(({
    label,
    value
  }) => ({
    type: 'attribute',
    id: label,
    attrName: filterKey,
    value,
    selected: selectedList.includes(value),
    count: null
  }));
};

const reduceForFacets = (facets, filters) => (prev, curr) => [...prev, ...createFacetsFromOptions(facets, filters, curr)];

const buildFacets = (searchData, reduceFn, criteria) => {
  if (!(searchData !== null && searchData !== void 0 && searchData.data)) {
    return [];
  }

  const {
    data: {
      facets
    },
    input: {
      filters
    }
  } = searchData;
  return Object.keys(facets).filter(filterFacets(criteria)).reduce(reduceFn(facets, filters), []);
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getAll = (searchData, criteria) => buildFacets(searchData, reduceForFacets, criteria); // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getGrouped = (searchData, criteria) => []; // buildFacets(searchData, reduceForGroupedFacets, criteria);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getSortOptions = searchData => {
  var _options$find;

  const options = [{
    type: 'sort',
    id: 'latest',
    value: 'Latest',
    count: null
  }, {
    type: 'sort',
    id: 'title(asc)',
    value: 'Title: A to Z',
    count: null
  }, {
    type: 'sort',
    id: 'title(dsc)',
    value: 'Title: Z to A',
    count: null
  }, {
    type: 'sort',
    id: 'price-up',
    value: 'Price: Low to high',
    count: null
  }, {
    type: 'sort',
    id: 'price-down',
    value: 'Price: High to low',
    count: null
  }].map(o => ({ ...o,
    selected: o.id === searchData.input.sort
  }));
  const selected = ((_options$find = options.find(o => o.id === searchData.input.sort)) === null || _options$find === void 0 ? void 0 : _options$find.id) || 'latest';
  return {
    options,
    selected
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getCategoryTree = searchData => {
  if (!searchData.data) {
    return [];
  }

  const allCats = searchData.data.categories;
  const formattedCats = [];

  for (let c = 0; c < allCats.length; c++) {
    formattedCats.push(getCategoryTree$1(searchData.data.categories[c]));
  }

  return formattedCats;
};

const identifyCurrentCat = searchData => {
  if (searchData.input === null) {
    return 0;
  } // fetch curren category slug


  const curCategoryPage = searchData.input.categorySlug;
  const allCategories = searchData.data.categories;
  let curCatIndex = 0; // fetch index from category array to generate link and title

  for (let i = 0; i < allCategories.length; i++) {
    // eslint-disable-next-line dot-notation
    if (allCategories[i]['handle'] === curCategoryPage) {
      curCatIndex = i;
      break;
    }
  }

  return curCatIndex;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getProducts = searchData => {
  if (searchData.input === null || searchData.data === null) {
    return [];
  }

  let catProducts = [];
  const sortBy = searchData.input.sort;

  if (!Array.isArray(searchData.data.categories)) {
    catProducts = getSortedProducts(enhanceProduct(searchData.data.categories.products), sortBy);
  } else {
    const curCatIndex = identifyCurrentCat(searchData);
    catProducts = getSortedProducts(enhanceProduct(searchData.data.categories[curCatIndex].products), sortBy);
  }

  const products = enhanceProduct(catProducts);
  return products;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getPagination = searchData => {
  if (!searchData.data) {
    return {};
  }

  return {
    currentPage: searchData.input.page,
    totalPages: Math.ceil(searchData.data.categories.products.length / searchData.data.itemsPerPage),
    totalItems: searchData.data.categories.products.length,
    itemsPerPage: searchData.input.itemsPerPage,
    pageOptions: searchData.data.perPageOptions
  };
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getCurrentPage = searchData => {
  var _searchData$input;

  return (searchData === null || searchData === void 0 ? void 0 : (_searchData$input = searchData.input) === null || _searchData$input === void 0 ? void 0 : _searchData$input.page) || 1;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getBreadcrumbs$1 = searchData => {
  if (!searchData.data) {
    return [];
  }

  return [{
    text: 'Home',
    link: '/'
  }, ...buildBreadcrumbs(searchData.data.categories).map(b => ({ ...b,
    link: `/c${b.link}`
  }))];
};

const facetGetters = {
  getCurrentPage,
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs: getBreadcrumbs$1,
  getPagination
};

const getProductName = product => (product === null || product === void 0 ? void 0 : product.name) || undefined;

const getFullProductName = product => {
  if (product !== null && product !== void 0 && product.variantBySelectedOptions) {
    return `${product.name} - ${product.variantBySelectedOptions.title}`;
  } else {
    var _product$variants$0$t, _product$variants6, _product$variants6$;

    return `${product.name} - ${(_product$variants$0$t = (_product$variants6 = product.variants) === null || _product$variants6 === void 0 ? void 0 : (_product$variants6$ = _product$variants6[0]) === null || _product$variants6$ === void 0 ? void 0 : _product$variants6$.title) !== null && _product$variants$0$t !== void 0 ? _product$variants$0$t : ''}`;
  }
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getProductSlug = product => {
  if (product) {
    return product._slug;
  }
};

const getProductPrice = product => {
  var _product$price, _product$price2;

  return {
    regular: (product === null || product === void 0 ? void 0 : (_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.original) || 0,
    special: (product === null || product === void 0 ? void 0 : (_product$price2 = product.price) === null || _product$price2 === void 0 ? void 0 : _product$price2.current) || 0
  };
};

const getProductDiscountPercentage = product => {
  var _product$price3, _product$price4;

  const regular = parseFloat(product === null || product === void 0 ? void 0 : (_product$price3 = product.price) === null || _product$price3 === void 0 ? void 0 : _product$price3.original) || 0;
  const special = parseFloat(product === null || product === void 0 ? void 0 : (_product$price4 = product.price) === null || _product$price4 === void 0 ? void 0 : _product$price4.current) || 0;

  if (special < regular) {
    const discount = regular - special;
    const discountPercentage = discount / regular * 100;
    return Math.round(discountPercentage);
  }

  return 0;
};

const getProductGallery = product => (product ? product.images : []).map(image => {
  const imgPath = image.originalSrc.substring(0, image.originalSrc.lastIndexOf('.'));
  const imgext = image.originalSrc.split('.').pop();
  const imgSmall = imgPath + '_160x160.' + imgext;
  const imgBig = imgPath + '_295x295.' + imgext;
  const imgNormal = imgPath + '_600x600.' + imgext;
  return {
    small: imgSmall,
    big: imgBig,
    normal: imgNormal
  };
});

const getActiveVariantImage = product => {
  if (product) {
    let productImg = product._coverImage.originalSrc;
    if (product.variantBySelectedOptions && product.variantBySelectedOptions !== null) productImg = product.variantBySelectedOptions.image.originalSrc;

    for (let i = 1; i < product.images.length; i++) {
      if (product.images[i].originalSrc === productImg) {
        return i;
      }
    }
  }
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getProductFiltered = (products, _filters = {}) => {
  if (!products) {
    return [];
  }

  products = Array.isArray(products) ? products : [products];
  return Object.keys(products).length > 0 ? enhanceProduct(products) : [];
};

const getFilteredSingle = product => {
  if (!product) {
    return [];
  }

  product = Array.isArray(product) ? product : [product];
  return enhanceProduct(product);
};

const getSelectedVariant = attribs => {
  return attribs;
};

const getProductOptions = product => {
  const productOptions = product.options;
  return productOptions;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getProductAttributes = (products, filterByAttributeName) => {
  const isSingleProduct = !Array.isArray(products);
  const productList = isSingleProduct ? [products] : products;

  if (!products || productList.length === 0) {
    return {};
  }

  const formatAttributes = product => {
    return formatAttributeList(product.options).filter(attribute => filterByAttributeName ? filterByAttributeName.includes(attribute.name) : attribute);
  };

  const reduceToUniques = (prev, curr) => {
    const isAttributeExist = prev.some(el => el.name === curr.name && el.value === curr.value);

    if (!isAttributeExist) {
      return [...prev, curr];
    }

    return prev;
  };

  const reduceByAttributeName = (prev, curr) => ({ ...prev,
    [capitalize(curr.name)]: isSingleProduct ? curr.value : [...(prev[curr.name] || []), {
      value: curr.value,
      label: curr.label
    }]
  });

  return productList.map(product => formatAttributes(product)).reduce((prev, curr) => [...prev, ...curr], []).reduce(reduceToUniques, []).reduce(reduceByAttributeName, {});
};

const getProductDescription = (product, isWantHtml) => {
  if (product) {
    if (isWantHtml) {
      return product._descriptionHtml;
    }

    return product._description;
  }
};

const getProductCategoryIds = product => (product === null || product === void 0 ? void 0 : product._categoriesRef) || '';

const getProductVariantId = product => (product === null || product === void 0 ? void 0 : product.variants[0].id) || '';

const getProductId = product => (product === null || product === void 0 ? void 0 : product._id) || '';

const getProductOriginalId = product => {
  if (product && product !== null && product !== void 0 && product._id) {
    const buff = Buffer.from(product === null || product === void 0 ? void 0 : product._id, 'base64');
    const decodedId = buff.toString('ascii');
    const extractedInfo = decodedId.split(/[\s/]+/).pop();
    return extractedInfo;
  }

  return '';
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getFormattedPrice$2 = price => String(price);

const getProductSaleStatus = product => {
  if (product && product.availableForSale) {
    return true;
  }

  return false;
};

const getProductCoverImage = (product, size = 'normal') => {
  let imgResolution = '600x600';

  if (size === 'medium') {
    imgResolution = '295x295';
  } else if (size === 'small') {
    imgResolution = '80x80';
  }

  if (product && product._coverImage && product._coverImage.src) {
    const imgPath = product._coverImage.src.substring(0, product._coverImage.src.lastIndexOf('.'));

    const imgext = product._coverImage.src.split('.').pop();

    const resizedImg = imgPath + '_' + imgResolution + '.' + imgext;
    return resizedImg;
  }

  return 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_' + imgResolution + '.jpg?v=1625742127';
};

const getProductCollections = (product, field = 'all') => {
  if (!product) {
    return;
  }

  if (product.collections && Object.keys(product.collections).length > 0) {
    const collections = [];
    Object.values(product.collections).forEach(collection => {
      if (field === 'all') {
        collections.push({
          id: collection.id,
          title: collection.title,
          slug: collection.handle
        });
      } else {
        collections.push(collection[field]);
      }
    });
    return collections;
  }

  return [];
};

const getPDPProductCoverImage = (product, size = 'normal') => {
  let imgResolution = '600x600';

  if (size === 'medium') {
    imgResolution = '295x295';
  } else if (size === 'small') {
    imgResolution = '80x80';
  }

  if (product && product._coverImage && product._coverImage.originalSrc) {
    const imgPath = product._coverImage.originalSrc.substring(0, product._coverImage.originalSrc.lastIndexOf('.'));

    const imgext = product._coverImage.originalSrc.split('.').pop();

    const resizedImg = imgPath + '_' + imgResolution + '.' + imgext;
    return resizedImg;
  }

  return 'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_' + imgResolution + '.jpg?v=1625742127';
};

const getProductStockStatus = product => {
  if (product && product.variantBySelectedOptions && product.variantBySelectedOptions !== null) {
    if (product.variantBySelectedOptions.quantityAvailable > 0) {
      return true;
    }

    return false;
  } else if (product && product.totalInventory > 0) {
    return true;
  }

  return false;
};

const getProductStock = product => {
  if (product && product.variantBySelectedOptions && product.variantBySelectedOptions !== null) {
    return product.variantBySelectedOptions.quantityAvailable;
  } else if (product && product.totalInventory) {
    return product.totalInventory;
  }

  return 0;
};

const getBreadcrumbs = product => {
  const breadCrumbs = [{
    text: 'Home',
    route: {
      link: '/'
    }
  }];

  if (product && product.productType) {
    breadCrumbs.push({
      text: product.productType,
      route: {
        link: '#'
      }
    });
  }

  if (product && product.name) {
    breadCrumbs.push({
      text: getProductName(product),
      route: {
        link: '#'
      }
    });
  }

  return breadCrumbs;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getProductTotalReviews = product => 0; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getProductAverageRating = product => 0;

const productGetters = {
  getName: getProductName,
  getFullName: getFullProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getCollections: getProductCollections,
  getVariantImage: getActiveVariantImage,
  getFiltered: getProductFiltered,
  getDiscountPercentage: getProductDiscountPercentage,
  getFilteredSingle,
  getProductOriginalId,
  getOptions: getProductOptions,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getId: getProductId,
  getPDPCoverImage: getPDPProductCoverImage,
  getVariantId: getProductVariantId,
  getSaleStatus: getProductSaleStatus,
  getStockStatus: getProductStockStatus,
  getStock: getProductStock,
  getFormattedPrice: getFormattedPrice$2,
  getTotalReviews: getProductTotalReviews,
  getAverageRating: getProductAverageRating,
  getBreadcrumbs,
  getSelectedVariant
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars

const getItems$1 = review => []; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getReviewId = item => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getReviewAuthor = item => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getReviewMessage = item => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getReviewRating = item => 0; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getReviewDate = item => ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getTotalReviews = review => 0; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getAverageRating = review => 0; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getRatesCount = review => []; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getReviewsPage = review => 1;

const reviewGetters = {
  getItems: getItems$1,
  getReviewId,
  getReviewAuthor,
  getReviewMessage,
  getReviewRating,
  getReviewDate,
  getTotalReviews,
  getAverageRating,
  getRatesCount,
  getReviewsPage
};
/* istanbul ignore file */

const getUserFirstName = user => {
  if (user) {
    return (user === null || user === void 0 ? void 0 : user.firstName) || '';
  }

  return '';
};

const getUserLastName = user => {
  if (user) {
    return (user === null || user === void 0 ? void 0 : user.lastName) || '';
  }

  return '';
};

const getUserFullName = user => user ? `${user.firstName} ${user.lastName}` : '';

const getUserEmailAddress = user => (user === null || user === void 0 ? void 0 : user.email) || '';

const getAcceptsMarketingStatus = user => {
  if (user) {
    return (user === null || user === void 0 ? void 0 : user.acceptsMarketing) || false;
  }

  return false;
};

const getUserCleanId = user => {
  if (user && user.id) {
    const buff = Buffer.from(user.id, 'base64');
    const decodedId = buff.toString('ascii');
    const extractedInfo = decodedId.split(/[\s/]+/).pop();
    return extractedInfo;
  }

  return '';
};

const getUserToken = user => (user === null || user === void 0 ? void 0 : user.token) || '';

const getUserTags = user => {
  if (user && user.tags && user.tags.length > 0) {
    const tagsList = (user === null || user === void 0 ? void 0 : user.tags).map(tag => {
      return tag.value;
    });
    return JSON.stringify(tagsList) || '';
  }

  return '';
};

const getUserPhone = user => (user === null || user === void 0 ? void 0 : user.phone) || '';

const getUserdisplayName = user => (user === null || user === void 0 ? void 0 : user.displayName) || ''; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const getUserdefaultAddress = user => {
  return (user === null || user === void 0 ? void 0 : user.defaultAddress) || '';
};

const userGetters$2 = {
  getFirstName: getUserFirstName,
  getLastName: getUserLastName,
  getFullName: getUserFullName,
  getEmailAddress: getUserEmailAddress,
  getdisplayName: getUserdisplayName,
  getPhone: getUserPhone,
  getdefaultAddress: getUserdefaultAddress,
  getTags: getUserTags,
  getToken: getUserToken,
  getCleanID: getUserCleanId,
  AcceptsMarketingStatus: getAcceptsMarketingStatus
};
const searchGetters = {
  getItems(result) {
    if (result.error) {
      throw new Error(result.error.message);
    }

    if (!result.data) {
      return [];
    }

    let items = result.data.products.edges.map(item => {
      const product = { ...item.node,
        images: item.node.images.edges.map(image => image.node),
        variants: item.node.variants.edges.map(variant => variant.node)
      };
      return product;
    });
    items = enhanceProduct(items);
    return items;
  },

  getCategoryTree(_) {
    throw new Error('Function not implemented.');
  },

  getPagination(_) {
    throw new Error('Function not implemented.');
  },

  getItemPrice(_) {
    throw new Error('Function not implemented.');
  },

  getSortOptions(_) {
    throw new Error('Function not implemented.');
  },

  getBreadcrumbs(_) {
    throw new Error('Function not implemented.');
  },

  getItemImages(_) {
    throw new Error('Function not implemented.');
  },

  getFilters(_) {
    throw new Error('Function not implemented.');
  },

  getItemName(_) {
    throw new Error('Function not implemented.');
  },

  getItemId(_) {
    throw new Error('Function not implemented.');
  },

  getItemSlug(_) {
    throw new Error('Function not implemented.');
  }

};
const userGetters$1 = {
  getAddresses: (shipping, criteria) => {
    const {
      addresses
    } = shipping;

    if (!criteria || !Object.keys(criteria).length) {
      return addresses;
    }

    const entries = Object.entries(criteria);
    return shipping.addresses.filter(address => entries.every(([key, value]) => address[key] === value));
  },
  getDefault: shipping => shipping.addresses.find(address => address.isDefault),
  getTotal: shipping => shipping.addresses.length,
  getPostCode: address => address ? address.zipCode : '',
  getStreetName: address => address ? address.streetName : '',
  getStreetNumber: address => address ? address.streetNumber : '',
  getCity: address => address ? address.city : '',
  getFirstName: address => address ? address.firstName : '',
  getLastName: address => address ? address.lastName : '',
  getCountry: address => address ? address.country : '',
  getPhone: address => address ? address.phoneNumber : '',
  getEmail: address => address ? address.email : '',
  getProvince: address => address ? address.state : '',
  getCompanyName: address => address ? address.company : '',
  getTaxNumber: address => address ? address.taxId : '',
  getId: address => address ? address.id : '',
  getApartmentNumber: address => address ? address.apartment : '',
  isDefault: address => address ? address.isDefault : false
};
const userGetters = {
  getAddresses: (billing, criteria) => {
    const {
      addresses
    } = billing;

    if (!criteria || !Object.keys(criteria).length) {
      return addresses;
    }

    const entries = Object.entries(criteria);
    return billing.addresses.filter(address => entries.every(([key, value]) => address[key] === value));
  },
  getDefault: billing => billing.addresses.find(address => address.isDefault),
  getTotal: billing => billing.addresses.length,
  getPostCode: address => address ? address.zipCode : '',
  getStreetName: address => address ? address.streetName : '',
  getStreetNumber: address => address ? address.apartment : '',
  getCity: address => address ? address.city : '',
  getFirstName: address => address ? address.firstName : '',
  getLastName: address => address ? address.lastName : '',
  getCountry: address => address ? address.country : '',
  getPhone: address => address ? address.phoneNumber : '',
  getEmail: address => address ? address.email : '',
  getProvince: address => address ? address.state : '',
  getCompanyName: address => address ? address.company : '',
  getTaxNumber: address => address ? address.taxId : '',
  getId: address => address ? address.id : '',
  getApartmentNumber: address => address ? address.apartment : '',
  isDefault: address => address ? address.isDefault : false
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* istanbul ignore file */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const getDate = order => {
  const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const OrderDate = new Date(order === null || order === void 0 ? void 0 : order.processedAt);
  return monthsArray[OrderDate.getMonth()] + ' ' + OrderDate.getDate() + ', ' + OrderDate.getFullYear() + ' at ' + OrderDate.getHours() + ':' + OrderDate.getMinutes();
};

const getTracking = order => {
  if (order.fulfillmentStatus === 'FULFILLED' && order.successfulFulfillments[0].trackingInfo.length > 0) {
    return order.successfulFulfillments[0].trackingInfo[0].number;
  }

  return ' - ';
};

const getTrackingUrl = order => {
  if (order.fulfillmentStatus === 'FULFILLED' && order.successfulFulfillments[0].trackingInfo.length > 0) {
    return order.successfulFulfillments[0].trackingInfo[0].url;
  }

  return '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getId = order => (order === null || order === void 0 ? void 0 : order.orderNumber) || '123'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getStatus = order => (order === null || order === void 0 ? void 0 : order.fulfillmentStatus) || 'Failed';

const getPaymentStatus = order => (order === null || order === void 0 ? void 0 : order.financialStatus) || 'Pending'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getPrice = order => order.currentTotalPrice.amount || 0;

const getSubtotalPrice = order => order.currentSubtotalPrice.amount || 0;

const getTaxPrice = order => order.currentTotalTax.amount || 0;

const getShippingPrice = order => order.totalShippingPriceV2.amount || 0;

const getShippingAddress = order => {
  if (order.shippingAddress) {
    var _order$shippingAddres;

    return (order === null || order === void 0 ? void 0 : (_order$shippingAddres = order.shippingAddress) === null || _order$shippingAddres === void 0 ? void 0 : _order$shippingAddres.formatted) || 'No shipping address available';
  }

  return 'No shipping address available';
};

const getCustomerName = order => {
  var _order$shippingAddres2;

  return (order === null || order === void 0 ? void 0 : (_order$shippingAddres2 = order.shippingAddress) === null || _order$shippingAddres2 === void 0 ? void 0 : _order$shippingAddres2.name) || ' - ';
};

const getCustomerPhone = order => {
  var _order$shippingAddres3;

  return (order === null || order === void 0 ? void 0 : (_order$shippingAddres3 = order.shippingAddress) === null || _order$shippingAddres3 === void 0 ? void 0 : _order$shippingAddres3.phone) || '';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getItems = order => order.lineItems || []; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getItemSku = item => (item === null || item === void 0 ? void 0 : item.variant.sku) || '-';

const getItemImage = item => {
  if (item && item !== null && item !== void 0 && item.variant.image) {
    const imgPath = item === null || item === void 0 ? void 0 : item.variant.image.originalSrc.substring(0, item === null || item === void 0 ? void 0 : item.variant.image.originalSrc.lastIndexOf('.'));
    const imgext = item === null || item === void 0 ? void 0 : item.variant.image.originalSrc.split('.').pop();
    const resizedImg = imgPath + '_100x100.' + imgext;
    return resizedImg;
  }

  return 'https://cdn.shopify.com/s/files/1/0102/2866/2368/files/placeholder-pdc_100x100.png?v=1621945081';
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getItemName = item => (item === null || item === void 0 ? void 0 : item.title) || 0;

const getItemId = item => (item === null || item === void 0 ? void 0 : item.variant.product.id) || '';

const getItemSlug = item => (item === null || item === void 0 ? void 0 : item.variant.product.handle) || ''; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getItemQty = item => (item === null || item === void 0 ? void 0 : item.quantity) || 0; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getItemPrice = item => {
  var _item$originalTotalPr;

  return (item === null || item === void 0 ? void 0 : (_item$originalTotalPr = item.originalTotalPrice) === null || _item$originalTotalPr === void 0 ? void 0 : _item$originalTotalPr.amount) || 0;
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getFormattedPrice$1 = price => String(price); // eslint-disable-next-line


function getOrdersTotal(orders) {
  return 1;
}

const orderGetters = {
  getDate,
  getTracking,
  getTrackingUrl,
  getCustomerName,
  getCustomerPhone,
  getShippingAddress,
  getId,
  getStatus,
  getPaymentStatus,
  getPrice,
  getShippingPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getItemImage,
  getFormattedPrice: getFormattedPrice$1,
  getSubtotalPrice,
  getTaxPrice,
  getItemId,
  getItemSlug,
  getOrdersTotal
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars

const getWishlistItems = wishlist => [{
  _id: 1,
  _description: 'Some description',
  _categoriesRef: ['1', '2'],
  name: 'Black jacket',
  sku: 'black-jacket',
  images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'],
  price: {
    original: 12.34,
    current: 10.00
  },
  qty: 1
}]; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistItemName = product => (product === null || product === void 0 ? void 0 : product.name) || 'Product\'s name'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistItemImage = product => (product === null || product === void 0 ? void 0 : product.images[0]) || 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistItemPrice = product => {
  var _product$price5, _product$price6;

  return {
    regular: (product === null || product === void 0 ? void 0 : (_product$price5 = product.price) === null || _product$price5 === void 0 ? void 0 : _product$price5.original) || 12,
    special: (product === null || product === void 0 ? void 0 : (_product$price6 = product.price) === null || _product$price6 === void 0 ? void 0 : _product$price6.current) || 10
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistItemQty = product => 1; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistItemAttributes = (product, filterByAttributeName) => ({
  color: 'red'
}); // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistItemSku = product => (product === null || product === void 0 ? void 0 : product.sku) || 'some-sku'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistTotals = wishlist => {
  return {
    total: 10,
    subtotal: 10
  };
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistShippingPrice = wishlist => 0; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getWishlistTotalItems = wishlist => 1; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const getFormattedPrice = price => String(price);

const wishlistGetters = {
  getTotals: getWishlistTotals,
  getShippingPrice: getWishlistShippingPrice,
  getItems: getWishlistItems,
  getItemName: getWishlistItemName,
  getItemImage: getWishlistItemImage,
  getItemPrice: getWishlistItemPrice,
  getItemQty: getWishlistItemQty,
  getItemAttributes: getWishlistItemAttributes,
  getItemSku: getWishlistItemSku,
  getTotalItems: getWishlistTotalItems,
  getFormattedPrice
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSimpleFunctional; });
/* unused harmony export directiveConfig */
/* unused harmony export addOnceEventListener */
/* unused harmony export passiveSupported */
/* unused harmony export addPassiveEventListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getNestedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getObjectValueByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getPropertyFromItem; });
/* unused harmony export createRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getZIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return filterObjectOnKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return convertToUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return kebabCase; });
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return remapInternalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* unused harmony export arrayDiff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return upperFirst; });
/* unused harmony export groupItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return wrapInArray; });
/* unused harmony export sortItems */
/* unused harmony export defaultFilter */
/* unused harmony export searchItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getSlotType; });
/* unused harmony export debounce */
/* unused harmony export throttle */
/* unused harmony export getPrefixedScopedSlots */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chunk; });
/* unused harmony export humanReadableFileSize */
/* unused harmony export camelizeObjectKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mergeDeep; });
/* unused harmony export fillArray */
/* unused harmony export composedPath */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function createSimpleFunctional(c, el = 'div', name) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,
    props: {
      tag: {
        type: String,
        default: el
      }
    },

    render(h, {
      data,
      props,
      children
    }) {
      data.staticClass = `${c} ${data.staticClass || ''}`.trim();
      return h(props.tag, data, children);
    }

  });
}
function directiveConfig(binding, defaults = {}) {
  return { ...defaults,
    ...binding.modifiers,
    value: binding.arg,
    ...(binding.value || {})
  };
}
function addOnceEventListener(el, eventName, cb, options = false) {
  const once = event => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };

  el.addEventListener(eventName, once, options);
}
let passiveSupported = false;

try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}
/* eslint-disable-line no-console */



function addPassiveEventListener(el, event, cb, options) {
  el.addEventListener(event, cb, passiveSupported ? options : false);
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }

    obj = obj[path[i]];
  }

  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }

  const props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  path = path.replace(/^\./, ''); // strip a leading dot

  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
  return Array.from({
    length
  }, (v, k) => k);
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  const index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) return getZIndex(el.parentNode);
  return index;
}
const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
function escapeHTML(str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
}
function filterObjectOnKeys(obj, keys) {
  const filtered = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
function kebabCase(str) {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
} // KeyboardEvent.keyCode aliases

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
/**
 * This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
 * to the current name or component for that icon.
 */

function remapInternalIcon(vm, iconName) {
  // Look for custom component in the configuration
  const component = vm.$vuetify.icons.component; // Look for overrides

  if (iconName.startsWith('$')) {
    // Get the target icon name
    const iconPath = `$vuetify.icons.values.${iconName.split('$').pop().split('.').pop()}`; // Now look up icon indirection name,
    // e.g. '$vuetify.icons.values.cancel'

    const override = getObjectValueByPath(vm, iconPath, iconName);
    if (typeof override === 'string') iconName = override;else return override;
  }

  if (component == null) {
    return iconName;
  }

  return {
    component,
    props: {
      icon: iconName
    }
  };
}
function keys(o) {
  return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */

function arrayDiff(a, b) {
  const diff = [];

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }

  return diff;
}
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function groupItems(items, groupBy, groupDesc) {
  const key = groupBy[0];
  const groups = [];
  let current;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const val = getObjectValueByPath(item, key, null);

    if (current !== val) {
      current = val;
      groups.push({
        name: val != null ? val : '',
        items: []
      });
    }

    groups[groups.length - 1].items.push(item);
  }

  return groups;
}
function wrapInArray(v) {
  return v != null ? Array.isArray(v) ? v : [v] : [];
}
function sortItems(items, sortBy, sortDesc, locale, customSorters) {
  if (sortBy === null || !sortBy.length) return items;
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i];
      let sortA = getObjectValueByPath(a, sortKey);
      let sortB = getObjectValueByPath(b, sortKey);

      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA];
      }

      if (customSorters && customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult) continue;
        return customResult;
      } // Check if both cannot be evaluated


      if (sortA === null && sortB === null) {
        continue;
      } // Dates should be compared numerically


      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase());

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }

    return 0;
  });
}
function defaultFilter(value, search, item) {
  return value != null && search != null && typeof value !== 'boolean' && value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
}
function searchItems(items, search) {
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === '') return items;
  return items.filter(item => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)));
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */

function getSlotType(vm, name, split) {
  if (vm.$slots.hasOwnProperty(name) && vm.$scopedSlots.hasOwnProperty(name) && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }

  if (vm.$slots.hasOwnProperty(name)) return 'normal';
  if (vm.$scopedSlots.hasOwnProperty(name)) return 'scoped';
}
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let throttling = false;
  return (...args) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => throttling = false, limit);
      return fn(...args);
    }
  };
}
function getPrefixedScopedSlots(prefix, scopedSlots) {
  return Object.keys(scopedSlots).filter(k => k.startsWith(prefix)).reduce((obj, k) => {
    obj[k.replace(prefix, '')] = scopedSlots[k];
    return obj;
  }, {});
}
function getSlot(vm, name = 'default', data, optional = false) {
  if (vm.$scopedSlots.hasOwnProperty(name)) {
    return vm.$scopedSlots[name](data instanceof Function ? data() : data);
  } else if (vm.$slots.hasOwnProperty(name) && (!data || optional)) {
    return vm.$slots[name];
  }

  return undefined;
}
function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;

  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }

  return chunked;
}
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;

  if (bytes < base) {
    return `${bytes} B`;
  }

  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;

  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }

  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function camelizeObjectKeys(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((o, key) => {
    o[camelize(key)] = obj[key];
    return o;
  }, {});
}
function mergeDeep(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }

    source[key] = targetProperty;
  }

  return source;
}
function fillArray(length, obj) {
  return Array(length).fill(obj);
}
/**  Polyfill for Event.prototype.composedPath */

function composedPath(e) {
  if (e.composedPath) return e.composedPath();
  const path = [];
  let el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }

  return path;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onMediaMatch */
/* unused harmony export setupListener */
/* unused harmony export tearDownListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapMobileObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unMapMobileObserver; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

let observer;
const isMobileMax = 1023;
const onMediaMatch = e => {
  if (typeof e.matches === null) return;
  observer.isMobile = !!e.matches;
};
const setupListener = () => {
  if (typeof window === "undefined" || typeof document === "undefined" || !window.matchMedia) {
    return;
  }

  observer.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth) <= isMobileMax;
  window.matchMedia(`(max-width: ${isMobileMax}px)`).addListener(onMediaMatch);
  observer.isInitialized = true;
};
const tearDownListener = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined" && window.matchMedia) {
    window.matchMedia(`(max-width: ${isMobileMax}px)`).removeListener(onMediaMatch);
  }
};
const mapMobileObserver = () => {
  if (!observer) {
    observer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.observable({
      isMobile: false,
      clients: 0,
      isInitialized: false
    });
  }

  observer.clients += 1;
  return {
    isMobile: {
      get() {
        if (observer && !observer.isInitialized) {
          setupListener();
        }

        return observer ? observer.isMobile : false;
      }

    },
    mobileObserverClients: {
      get() {
        return observer ? observer.clients : 0;
      }

    },
    mobileObserverIsInitialized: {
      get() {
        return observer ? observer.isInitialized : false;
      }

    }
  };
};
const unMapMobileObserver = () => {
  if (observer) {
    observer.clients -= 1;

    if (observer.clients === 0) {
      observer = null;
      tearDownListener();
    }
  } else {
    tearDownListener();
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
class Service {
  constructor() {
    this.framework = {};
  }

  init(root, ssrContext) {}

}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export consoleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return consoleError; });
/* unused harmony export deprecate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* eslint-disable no-console */


function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].config.silent) return;

  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }

  return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
}

function consoleInfo(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn(`[UPGRADE] '${original}' is deprecated, use '${replacement}' instead.`, vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError(`[BREAKING] '${original}' has been removed, use '${replacement}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn(`[REMOVED] '${original}' has been removed. You can safely omit it.`, vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g;

const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }

  const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;

  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
}

function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;

    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];

        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }

      tree.push(vm);
      vm = vm.$parent;
    }

    return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
  } else {
    return `\n\n(found in ${formatComponentName(vm)})`;
  }
}

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=88a0b322&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkComponentTag,_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],tag:"component",staticClass:"sf-link"},'component',_vm.urlTag,false),_vm.$listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=88a0b322&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfLinkvue_type_script_lang_js_ = ({
  name: "SfLink",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    isExternal() {
      return typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1;
    },

    isNativeLinkTag() {
      return this.isExternal || !this.$router;
    },

    urlTag() {
      return this.isNativeLinkTag ? {
        href: this.link
      } : {
        to: this.link
      };
    },

    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfLink_SfLinkvue_type_script_lang_js_ = (SfLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfLink_SfLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4db55368"
  
)

/* harmony default export */ var SfLink = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=aa8120b4&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[_vm.data.class, _vm.data.staticClass, 'sf-circle-icon'],attrs:{"disabled":_vm.props.disabled}},'component',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c(_vm.injections.components.SfIcon,{tag:"component",staticClass:"sf-circle-icon__icon",attrs:{"aria-hidden":"true","icon":_vm.props.icon,"size":_vm.props.iconSize}})]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=aa8120b4&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCircleIconvue_type_script_lang_js_ = ({
  name: "SfCircleIcon",
  inject: {
    components: {
      default: {
        SfButton: SfButton["a" /* default */],
        SfIcon: SfIcon["a" /* default */]
      }
    }
  },
  props: {
    icon: {
      type: [String, Array],
      default: "home"
    },
    iconSize: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCircleIcon_SfCircleIconvue_type_script_lang_js_ = (SfCircleIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCircleIcon_SfCircleIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "8cbcbca8"
  
)

/* harmony default export */ var SfCircleIcon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _useUiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _useUiHelpers__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _useUiState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _useUiState__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _useUiNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _useUiNotification__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=05a0e329&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('transition',{attrs:{"name":_vm.props.transition}},[(_vm.props.visible)?_c('div',{ref:"overlay",class:[_vm.data.class, _vm.data.staticClass, 'sf-overlay'],on:{"click":function($event){_vm.listeners.click && _vm.listeners.click($event)}}}):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=05a0e329&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfOverlayvue_type_script_lang_js_ = ({
  name: "SfOverlay",
  props: {
    transition: {
      type: String,
      default: "sf-fade"
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfOverlay_SfOverlayvue_type_script_lang_js_ = (SfOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfOverlay_SfOverlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "247d2968"
  
)

/* harmony default export */ var SfOverlay = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCssColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colorToInt; });
/* unused harmony export classToHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorToHex; });
/* unused harmony export HSVAtoRGBA */
/* unused harmony export RGBAtoHSVA */
/* unused harmony export HSVAtoHSLA */
/* unused harmony export HSLAtoHSVA */
/* unused harmony export RGBAtoCSS */
/* unused harmony export RGBtoCSS */
/* unused harmony export RGBAtoHex */
/* unused harmony export HexToRGBA */
/* unused harmony export HexToHSVA */
/* unused harmony export HSVAtoHex */
/* unused harmony export parseHex */
/* unused harmony export parseGradient */
/* unused harmony export RGBtoInt */
/* unused harmony export contrastRatio */
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
// Utilities



function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function colorToInt(color) {
  let rgb;

  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color;

    if (c.length === 3) {
      c = c.split('').map(char => char + char).join('');
    }

    if (c.length !== 6) {
      Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    }

    rgb = parseInt(c, 16);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }

  if (rgb < 0) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`Colors cannot be negative: '${color}'`);
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    rgb = 0xffffff;
  }

  return rgb;
}
function classToHex(color, colors, currentTheme) {
  const [colorName, colorModifier] = color.toString().trim().replace('-', '').split(' ', 2);
  let hexColor = '';

  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier];
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base;
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName];
  }

  return hexColor;
}
function intToHex(color) {
  let hexColor = color.toString(16);
  if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
  return '#' + hexColor;
}
function colorToHex(color) {
  return intToHex(colorToInt(color));
}
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */

function HSVAtoRGBA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;

  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }

  if (h < 0) h = h + 360;
  const s = max === 0 ? 0 : (max - min) / max;
  const hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVAtoHSLA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const l = v - v * s / 2;
  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h,
    s: sprime,
    l,
    a
  };
}
function HSLAtoHSVA(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function RGBAtoCSS(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
function RGBtoCSS(rgba) {
  return RGBAtoCSS({ ...rgba,
    a: 1
  });
}
function RGBAtoHex(rgba) {
  const toHex = v => {
    const h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };

  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`;
}
function HexToRGBA(hex) {
  const rgba = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* chunk */ "b"])(hex.slice(1), 2).map(c => parseInt(c, 16));
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}
function HexToHSVA(hex) {
  const rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}
function HSVAtoHex(hsva) {
  return RGBAtoHex(HSVAtoRGBA(hsva));
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F');

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }

  if (hex.length === 6) {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "s"])(hex, 8, 'F');
  } else {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "s"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "s"])(hex, 6), 8, 'F');
  }

  return `#${hex}`.toUpperCase().substr(0, 9);
}
function parseGradient(gradient, colors, currentTheme) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x;
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',');
  });
}
function RGBtoInt(rgba) {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b;
}
/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */

function contrastRatio(c1, c2) {
  const [, y1] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c1));
  const [, y2] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c2));
  return (Math.max(y1, y2) + 0.05) / (Math.min(y1, y2) + 0.05);
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-scroll-lock");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toXYZ; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
 // For converting XYZ to sRGB

const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ


const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;

function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform = srgbForwardTransform;
  const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "c"])(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  } // Rescale back to [0, 255]


  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
  const xyz = [0, 0, 0];
  const transform = srgbReverseTransform;
  const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

  const r = transform((rgb >> 16 & 0xff) / 255);
  const g = transform((rgb >> 8 & 0xff) / 255);
  const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }

  return xyz;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=6699bb64&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"sf-image--wrapper",style:(_vm.imageStyle),attrs:{"data-testid":"image-wrapper"}},[_vm._ssrNode("<img"+(_vm._ssrAttr("loading",_vm.loading))+(_vm._ssrAttr("src",_vm.src))+(_vm._ssrAttr("srcset",_vm.srcset))+(_vm._ssrAttr("sizes",_vm.sizes))+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrAttr("alt",_vm.alt))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass(null,_vm.classes))+"> <img"+(_vm._ssrAttr("src",_vm.placeholder))+" alt=\"Placeholder\""+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrClass("sf-image--placeholder",{ 'display-none': _vm.loaded || (_vm.loaded && _vm.placeholder) }))+"> "),_vm._ssrNode("<span"+(_vm._ssrClass("sf-image--overlay",{ 'display-none': !_vm.$slots.default }))+">","</span>",[_vm._t("default")],2),_vm._ssrNode(" <noscript><img"+(_vm._ssrAttr("src",_vm.src))+(_vm._ssrAttr("alt",_vm.alt))+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrAttrs(_vm.$attrs))+" class=\"sf-image sf-image-loaded\"></noscript>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=6699bb64&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfImagevue_type_script_lang_js_ = ({
  name: "SfImage",
  props: {
    src: {
      type: String,
      required: true
    },
    srcsets: {
      type: Array,
      default: () => [],
      validator: value => value.length === 0 || value.every(item => item.resolution && item.src) || value.every(item => item.src && item.width)
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: ""
    },
    height: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    loading: {
      type: String,
      default: "lazy",
      validator: value => ["", "lazy", "eager"].includes(value)
    }
  },

  data() {
    return {
      loaded: false
    };
  },

  computed: {
    sortedSrcsets() {
      const arr = [...this.srcsets];
      arr.sort((setA, setB) => setA.width && setB.width ? Number.parseInt(setA.width) - Number.parseInt(setB.width) : Number.parseInt(setA.resolution) - Number.parseInt(setB.resolution));
      return arr;
    },

    srcset() {
      return this.sortedSrcsets.reduce((str, set) => `${this.prefix(str)}${set.src} ${this.srcsetDescriptor(set)}`, "");
    },

    sizes() {
      const hasBreakpoints = this.sortedSrcsets.every(set => set.breakpoint && set.width);
      if (!hasBreakpoints) return null;
      return this.sortedSrcsets.reduce((str, set) => `${this.prefix(str)}${this.formatBreakpoint(set.breakpoint)}${this.formatDimension(set.width)}`, "");
    },

    classes() {
      if (this.loaded) {
        return "sf-image sf-image-loaded";
      } else {
        return "sf-image";
      }
    },

    imageStyle() {
      return {
        "--image-width": typeof this.width === "string" ? this.formatDimension(this.width) : `${this.width}px`,
        "--image-height": typeof this.height === "string" ? this.formatDimension(this.height) : `${this.height}px`
      };
    }

  },
  methods: {
    onLoad() {
      this.loaded = true;
    },

    formatResolution(resolution) {
      return ("" + resolution).endsWith("x") ? resolution : `${resolution}x`;
    },

    formatDimension(size) {
      if (["%"].includes(`${size}`.slice(-1)) || ["rem"].includes(`${size}`.slice(-3)) || ["em", "px", "vw", "vh"].includes(`${size}`.slice(-2)) || !parseInt(size, 10)) {
        return size;
      } else {
        return `${size}px`;
      }
    },

    formatBreakpoint(breakpoint) {
      return breakpoint ? `(max-width: ${breakpoint}px) ` : "";
    },

    prefix(str) {
      return str ? `${str}, ` : "";
    },

    srcsetDescriptor(srcset) {
      return srcset.width ? `${Number.parseInt(srcset.width) || ""}w` : this.formatResolution(srcset.resolution);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfImage_SfImagevue_type_script_lang_js_ = (SfImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(154)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfImage_SfImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "047a1c04"
  
)

/* harmony default export */ var SfImage = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const nonFilters = ['page', 'sort', 'term', 'itemsPerPage'];

const getContext = () => {
  const vm = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ "c"])();
  return vm.root.proxy;
};

const reduceFilters = query => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);
  return { ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]]
  };
};

const getFiltersDataFromUrl = (context, onlyFilters) => {
  const {
    query
  } = context.$router.history.current;
  return Object.keys(query).filter(f => onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)).reduce(reduceFilters(query), {});
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const useUiHelpers = () => {
  const context = getContext();

  const getFacetsFromURL = () => {
    const {
      query,
      params
    } = context.$router.currentRoute;
    const categorySlug = Object.keys(params).reduce((prev, curr) => params[curr] || prev, params.slug_1);
    return {
      rootCatSlug: params.slug_1,
      categorySlug,
      page: parseInt(query.page, 10) || 1,
      sort: query.sort || 'latest',
      filters: getFiltersDataFromUrl(context, true),
      itemsPerPage: parseInt(query.itemsPerPage, 12) || 20,
      term: query.term
    };
  };

  const getCatLink = category => {
    return `/c/${category.slug}`;
  };

  const changeSorting = sort => {
    const {
      query
    } = context.$router.currentRoute;
    context.$router.push({
      query: { ...query,
        sort
      }
    });
  };

  const changeFilters = filters => {
    context.$router.push({
      query: { ...getFiltersDataFromUrl(context, false),
        ...filters
      }
    });
  };

  const changeItemsPerPage = itemsPerPage => {
    context.$router.push({
      query: { ...getFiltersDataFromUrl(context, false),
        itemsPerPage
      }
    });
  };

  const changeSearchTerm = term => {
    context.$router.push({
      query: { ...getFiltersDataFromUrl(context, false),
        term: term || undefined
      }
    });
  };

  const isFacetColor = facet => facet.id === 'color';

  const isFacetCheckbox = () => false;

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    changeSearchTerm,
    isFacetColor,
    isFacetCheckbox
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useUiHelpers);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const state = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* reactive */ "i"])({
  isCartSidebarOpen: false,
  isWishlistSidebarOpen: false,
  isLoginModalOpen: false,
  isCategoryGridView: true,
  isFilterSidebarOpen: false,
  isNavigationSidebarOpen: false
}); // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const useUiState = () => {
  const isCartSidebarOpen = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.isCartSidebarOpen);

  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const isWishlistSidebarOpen = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.isWishlistSidebarOpen);

  const toggleWishlistSidebar = () => {
    state.isWishlistSidebarOpen = !state.isWishlistSidebarOpen;
  };

  const isNavigationSidebarOpen = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.isNavigationSidebarOpen);

  const toggleNavigationSidebar = () => {
    state.isNavigationSidebarOpen = !state.isNavigationSidebarOpen;
  };

  const isLoginModalOpen = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.isLoginModalOpen);

  const toggleLoginModal = () => {
    state.isLoginModalOpen = !state.isLoginModalOpen;
  };

  const isCategoryGridView = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.isCategoryGridView);

  const toggleCategoryGridView = () => {
    state.isCategoryGridView = !state.isCategoryGridView;
  };

  const isFilterSidebarOpen = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.isFilterSidebarOpen);

  const toggleFilterSidebar = () => {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
  };

  return {
    isCartSidebarOpen,
    isWishlistSidebarOpen,
    isLoginModalOpen,
    isCategoryGridView,
    isFilterSidebarOpen,
    isNavigationSidebarOpen,
    toggleCartSidebar,
    toggleWishlistSidebar,
    toggleLoginModal,
    toggleCategoryGridView,
    toggleFilterSidebar,
    toggleNavigationSidebar
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useUiState);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=9977ff80&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentIs,_vm._g(_vm._b({tag:"component",staticClass:"sf-menu-item",attrs:{"data-testid":_vm.label}},'component',_vm.bind,false),_vm.$listeners),[_vm._t("icon"),_vm._v(" "),_vm._t("label",function(){return [_c('span',{staticClass:"sf-menu-item__label"},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label }),_vm._v(" "),_vm._t("count",function(){return [_c('span',{staticClass:"sf-menu-item__count"},[_vm._v(_vm._s(_vm.count))])]},null,{ count: _vm.count }),_vm._v(" "),_vm._t("mobile-nav-icon",function(){return [_c('SfIcon',{staticClass:"sf-menu-item__mobile-nav-icon smartphone-only",class:{ 'display-none': !_vm.icon },attrs:{"icon":_vm.icon,"size":"14px"}})]},null,{ icon: _vm.icon })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=9977ff80&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfMenuItemvue_type_script_lang_js_ = ({
  name: "SfMenuItem",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: [String, Array],
      default: "chevron_right"
    },
    count: {
      type: [String, Number],
      default: ""
    },
    link: {
      type: [String, Object],
      default: null
    }
  },
  computed: {
    bind() {
      const bind = {};

      if (this.link) {
        bind.link = this.link;
      } else {
        bind.class = "sf-button--pure";
      }

      return bind;
    },

    componentIs() {
      return this.link ? "SfLink" : "SfButton";
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfMenuItem_SfMenuItemvue_type_script_lang_js_ = (SfMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(159)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfMenuItem_SfMenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a3050412"
  
)

/* harmony default export */ var SfMenuItem = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=429714e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bar"},[_vm._ssrNode("<div>","</div>",[_vm._t("back",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",class:{ 'display-none': !_vm.back },attrs:{"aria-label":"back","type":"button"},on:{"click":function($event){return _vm.$emit('click:back')}}},[_c('SfIcon',{attrs:{"icon":"chevron_left","size":"0.875rem"}})],1)]})],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("title",function(){return [_c('div',{staticClass:"sf-bar__title"},[_vm._v(_vm._s(_vm.title))])]},null,{ title: _vm.title })],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("close",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",class:{ 'display-none': !_vm.close },attrs:{"aria-label":"close","type":"button"},on:{"click":function($event){return _vm.$emit('click:close')}}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px"}})],1)]})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=429714e8&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfBarvue_type_script_lang_js_ = ({
  name: "SfBar",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBar_SfBarvue_type_script_lang_js_ = (SfBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBar_SfBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f0811ce"
  
)

/* harmony default export */ var SfBar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }
  return input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(203)["URLSearchParams"]))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ framework_Vuetify; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/install.js


function install(Vue, args = {}) {
  if (install.installed) return;
  install.installed = true;

  if (external_vue_default.a !== Vue) {
    Object(console["b" /* consoleError */])(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  }

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];
    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        const component = components[key];

        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }

      return true;
    }

    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;

      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        this.$vuetify = Vue.observable(options.vuetify.framework);
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || this;
      }
    },

    beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },

    mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }

  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/main.sass
var main = __webpack_require__(201);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/locale/en.js
/* harmony default export */ var en = ({
  badge: 'Badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    nextMonthAriaLabel: 'Next month',
    nextYearAriaLabel: 'Next year',
    prevMonthAriaLabel: 'Previous month',
    prevYearAriaLabel: 'Previous year'
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  },
  rating: {
    ariaLabel: {
      icon: 'Rating {0} of {1}'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/presets/default/index.js
// Styles
 // Locale


const default_preset = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: 'mdi',
    values: {}
  },
  lang: {
    current: 'en',
    locales: {
      en: en
    },
    // Default translator exists in lang service
    t: undefined
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/service/index.js
var service = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/presets/index.js
// Preset
 // Utilities




class presets_Presets extends service["a" /* Service */] {
  constructor(parentPreset, parent) {
    super(); // The default preset

    const defaultPreset = Object(helpers["r" /* mergeDeep */])({}, default_preset); // The user provided preset

    const {
      userPreset
    } = parent; // The user provided global preset

    const {
      preset: globalPreset = {},
      ...preset
    } = userPreset;

    if (globalPreset.preset != null) {
      Object(console["c" /* consoleWarn */])('Global presets do not support the **preset** option, it can be safely omitted');
    }

    parent.preset = Object(helpers["r" /* mergeDeep */])(Object(helpers["r" /* mergeDeep */])(defaultPreset, globalPreset), preset);
  }

}
presets_Presets.property = 'presets';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/application/index.js
// Extensions

class application_Application extends service["a" /* Service */] {
  constructor() {
    super(...arguments);
    this.bar = 0;
    this.top = 0;
    this.left = 0;
    this.insetFooter = 0;
    this.right = 0;
    this.bottom = 0;
    this.footer = 0;
    this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }

  register(uid, location, size) {
    this.application[location][uid] = size;
    this.update(location);
  }

  unregister(uid, location) {
    if (this.application[location][uid] == null) return;
    delete this.application[location][uid];
    this.update(location);
  }

  update(location) {
    this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
  }

}
application_Application.property = 'application';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/breakpoint/index.js
// Extensions

class breakpoint_Breakpoint extends service["a" /* Service */] {
  constructor(preset) {
    super(); // Public

    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;
    this.xsOnly = false;
    this.smOnly = false;
    this.smAndDown = false;
    this.smAndUp = false;
    this.mdOnly = false;
    this.mdAndDown = false;
    this.mdAndUp = false;
    this.lgOnly = false;
    this.lgAndDown = false;
    this.lgAndUp = false;
    this.xlOnly = false; // Value is xs to match v2.x functionality

    this.name = 'xs';
    this.height = 0;
    this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    this.mobile = true;
    this.resizeTimeout = 0;
    const {
      mobileBreakpoint,
      scrollBarWidth,
      thresholds
    } = preset[breakpoint_Breakpoint.property];
    this.mobileBreakpoint = mobileBreakpoint;
    this.scrollBarWidth = scrollBarWidth;
    this.thresholds = thresholds;
  }

  init() {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  }
  /* eslint-disable-next-line max-statements */


  update(ssr = false) {
    const height = ssr ? 0 : this.getClientHeight();
    const width = ssr ? 0 : this.getClientWidth();
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    const xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = 'xs';
        break;

      case sm:
        this.name = 'sm';
        break;

      case md:
        this.name = 'md';
        break;

      case lg:
        this.name = 'lg';
        break;

      default:
        this.name = 'xl';
        break;
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }

    const breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    const current = breakpoints[this.name];
    const max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  }

  onResize() {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  } // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081


  getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}
breakpoint_Breakpoint.property = 'breakpoint';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/goto/index.js + 2 modules
var services_goto = __webpack_require__(210);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js
const icons = {
  complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  clear: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  success: 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
  info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  warning: 'M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z',
  error: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
  prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
  checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
  expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
  subgroup: 'M7,10L12,15L17,10H7Z',
  dropdown: 'M7,10L12,15L17,10H7Z',
  radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
  radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
  ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
  first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
  file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z'
};
/* harmony default export */ var mdi_svg = (icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/md.js
const md_icons = {
  complete: 'check',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel',
  clear: 'clear',
  success: 'check_circle',
  info: 'info',
  warning: 'priority_high',
  error: 'warning',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'fiber_manual_record',
  sort: 'arrow_upward',
  expand: 'keyboard_arrow_down',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_border',
  ratingFull: 'star',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove'
};
/* harmony default export */ var md = (md_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi.js
const mdi_icons = {
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-exclamation',
  error: 'mdi-alert',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sort: 'mdi-arrow-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus'
};
/* harmony default export */ var mdi = (mdi_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa.js
const fa_icons = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times-circle',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
};
/* harmony default export */ var fa = (fa_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa4.js
const fa4_icons = {
  complete: 'fa fa-check',
  cancel: 'fa fa-times-circle',
  close: 'fa fa-times',
  delete: 'fa fa-times-circle',
  clear: 'fa fa-times-circle',
  success: 'fa fa-check-circle',
  info: 'fa fa-info-circle',
  warning: 'fa fa-exclamation',
  error: 'fa fa-exclamation-triangle',
  prev: 'fa fa-chevron-left',
  next: 'fa fa-chevron-right',
  checkboxOn: 'fa fa-check-square',
  checkboxOff: 'fa fa-square-o',
  checkboxIndeterminate: 'fa fa-minus-square',
  delimiter: 'fa fa-circle',
  sort: 'fa fa-sort-up',
  expand: 'fa fa-chevron-down',
  menu: 'fa fa-bars',
  subgroup: 'fa fa-caret-down',
  dropdown: 'fa fa-caret-down',
  radioOn: 'fa fa-dot-circle-o',
  radioOff: 'fa fa-circle-o',
  edit: 'fa fa-pencil',
  ratingEmpty: 'fa fa-star-o',
  ratingFull: 'fa fa-star',
  ratingHalf: 'fa fa-star-half-o',
  loading: 'fa fa-refresh',
  first: 'fa fa-step-backward',
  last: 'fa fa-step-forward',
  unfold: 'fa fa-angle-double-down',
  file: 'fa fa-paperclip',
  plus: 'fa fa-plus',
  minus: 'fa fa-minus'
};
/* harmony default export */ var fa4 = (fa4_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa-svg.js

function convertToComponentDeclarations(component, iconSet) {
  const result = {};

  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: iconSet[key].split(' fa-')
      }
    };
  }

  return result;
}
/* harmony default export */ var fa_svg = (convertToComponentDeclarations('font-awesome-icon', fa));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/index.js






/* harmony default export */ var presets = (Object.freeze({
  mdiSvg: mdi_svg,
  md: md,
  mdi: mdi,
  fa: fa,
  fa4: fa4,
  faSvg: fa_svg
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/index.js
// Extensions
 // Utilities

 // Presets


class icons_Icons extends service["a" /* Service */] {
  constructor(preset) {
    super();
    const {
      iconfont,
      values,
      component
    } = preset[icons_Icons.property];
    this.component = component;
    this.iconfont = iconfont;
    this.values = Object(helpers["r" /* mergeDeep */])(presets[iconfont], values);
  }

}
icons_Icons.property = 'icons';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/lang/index.js
// Extensions
 // Utilities



const LANG_PREFIX = '$vuetify.';
const fallback = Symbol('Lang fallback');

function getTranslation(locale, key, usingDefault = false, defaultLocale) {
  const shortKey = key.replace(LANG_PREFIX, '');
  let translation = Object(helpers["j" /* getObjectValueByPath */])(locale, shortKey, fallback);

  if (translation === fallback) {
    if (usingDefault) {
      Object(console["b" /* consoleError */])(`Translation key "${shortKey}" not found in fallback`);
      translation = key;
    } else {
      Object(console["c" /* consoleWarn */])(`Translation key "${shortKey}" not found, falling back to default`);
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }

  return translation;
}

class lang_Lang extends service["a" /* Service */] {
  constructor(preset) {
    super();
    this.defaultLocale = 'en';
    const {
      current,
      locales,
      t
    } = preset[lang_Lang.property];
    this.current = current;
    this.locales = locales;
    this.translator = t || this.defaultTranslator;
  }

  currentLocale(key) {
    const translation = this.locales[this.current];
    const defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  }

  t(key, ...params) {
    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator(key, ...params);
  }

  defaultTranslator(key, ...params) {
    return this.replace(this.currentLocale(key), params);
  }

  replace(str, params) {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  }

}
lang_Lang.property = 'lang';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colorUtils.js
var colorUtils = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/color/transformSRGB.js
var transformSRGB = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/util/color/transformCIELAB.js
const delta = 0.20689655172413793; // 6÷29

const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);

function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/utils.js




function parse(theme, isItem = false, variations = true) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  const parsedTheme = {};

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    if (value == null) continue;

    if (!variations) {
      parsedTheme[name] = {
        base: Object(colorUtils["c" /* intToHex */])(Object(colorUtils["b" /* colorToInt */])(value))
      };
    } else if (isItem) {
      /* istanbul ignore else */
      if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
        parsedTheme[name] = Object(colorUtils["a" /* colorToHex */])(value);
      }
    } else if (typeof value === 'object') {
      parsedTheme[name] = parse(value, true, variations);
    } else {
      parsedTheme[name] = genVariations(name, Object(colorUtils["b" /* colorToInt */])(value));
    }
  }

  if (!isItem) {
    parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
  }

  return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */

const genBaseColor = (name, value) => {
  return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */


const genVariantColor = (name, variant, value) => {
  const [type, n] = variant.split(/(\d)/, 2);
  return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};

const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;

const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;

function genStyles(theme, cssVar = false) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  if (!colors.length) return '';
  let variablesCss = '';
  let css = '';
  const aColor = cssVar ? genColorVariable('anchor') : anchor;
  css += `.v-application a { color: ${aColor}; }`;
  cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
    cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
    const variants = Object(helpers["q" /* keys */])(value);

    for (let i = 0; i < variants.length; ++i) {
      const variant = variants[i];
      const variantValue = value[variant];
      if (variant === 'base') continue;
      css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
      cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
    }
  }

  if (cssVar) {
    variablesCss = `:root {\n${variablesCss}}\n\n`;
  }

  return variablesCss + css;
}
function genVariations(name, value) {
  const values = {
    base: Object(colorUtils["c" /* intToHex */])(value)
  };

  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = Object(colorUtils["c" /* intToHex */])(lighten(value, i));
  }

  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = Object(colorUtils["c" /* intToHex */])(darken(value, i));
  }

  return values;
}
function lighten(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] + amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
function darken(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] - amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/index.js
/* eslint-disable no-multi-spaces */
// Extensions
 // Utilities


 // Types


class theme_Theme extends service["a" /* Service */] {
  constructor(preset) {
    super();
    this.disabled = false;
    this.isDark = null;
    this.unwatch = null;
    this.vueMeta = null;
    const {
      dark,
      disable,
      options,
      themes
    } = preset[theme_Theme.property];
    this.dark = Boolean(dark);
    this.defaults = this.themes = themes;
    this.options = options;

    if (disable) {
      this.disabled = true;
      return;
    }

    this.themes = {
      dark: this.fillVariant(themes.dark, true),
      light: this.fillVariant(themes.light, false)
    };
  } // When setting css, check for element and apply new values

  /* eslint-disable-next-line accessor-pairs */


  set css(val) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23();
      }

      return;
    }

    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
  }

  set dark(val) {
    const oldDark = this.isDark;
    this.isDark = val; // Only apply theme after dark
    // has already been set before

    oldDark != null && this.applyTheme();
  }

  get dark() {
    return Boolean(this.isDark);
  } // Apply current theme default
  // only called on client side


  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }

  clearCss() {
    this.css = '';
  } // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document


  init(root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }

    this.initTheme(root);
  } // Allows for you to set target theme


  setTheme(theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  } // Reset theme defaults


  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  } // Check for existence of style element


  checkOrCreateStyleElement() {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  }

  fillVariant(theme = {}, dark) {
    const defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  } // Generate the style element
  // if applicable


  genStyleElement() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';

    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }

    document.head.appendChild(this.styleEl);
  }

  initVueMeta(root) {
    this.vueMeta = root.$meta();

    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }

    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    const metaInfo = root.$options[metaKeyName] || {};

    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || [];
      const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles;
      }

      return metaInfo;
    };
  }

  applyVueMeta23() {
    const {
      set
    } = this.vueMeta.addApp('vuetify');
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  }

  initSSR(ssrContext) {
    // SSR
    const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
  }

  initTheme(root) {
    // Only watch for reactivity on client side
    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


    root.$once('hook:created', () => {
      const obs = external_vue_default.a.observable({
        themes: this.themes
      });
      this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
        deep: true
      });
    });
    this.applyTheme();
  }

  get currentTheme() {
    const target = this.dark ? 'dark' : 'light';
    return this.themes[target];
  }

  get generatedStyles() {
    const theme = this.parsedTheme;
    /* istanbul ignore next */

    const options = this.options || {};
    let css;

    if (options.themeCache != null) {
      css = options.themeCache.get(theme);
      /* istanbul ignore if */

      if (css != null) return css;
    }

    css = genStyles(theme, options.customProperties);

    if (options.minifyTheme != null) {
      css = options.minifyTheme(css);
    }

    if (options.themeCache != null) {
      options.themeCache.set(theme, css);
    }

    return css;
  }

  get parsedTheme() {
    return parse(this.currentTheme || {}, undefined, Object(helpers["i" /* getNestedValue */])(this.options, ['variations'], true));
  } // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0


  get isVueMeta23() {
    return typeof this.vueMeta.addApp === 'function';
  }

}
theme_Theme.property = 'theme';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/framework.js
 // Services


class framework_Vuetify {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(presets_Presets);
    this.use(application_Application);
    this.use(breakpoint_Breakpoint);
    this.use(services_goto["a" /* Goto */]);
    this.use(icons_Icons);
    this.use(lang_Lang);
    this.use(theme_Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService


  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }

}
framework_Vuetify.install = install;
framework_Vuetify.installed = false;
framework_Vuetify.version = "2.6.4";
framework_Vuetify.config = {
  silent: false
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClickOutside */
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);


function defaultConditional() {
  return true;
}

function checkEvent(e, el, binding) {
  // The include element callbacks below can be expensive
  // so we should avoid calling them when we're not active.
  // Explicitly check for false to allow fallback compatibility
  // with non-toggleable components
  if (!e || checkIsActive(e, binding) === false) return false; // If we're clicking inside the shadowroot, then the app root doesn't get the same
  // level of introspection as to _what_ we're clicking. We want to check to see if
  // our target is the shadowroot parent container, and if it is, ignore.

  const root = Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[/* attachedRoot */ "a"])(el);
  if (typeof ShadowRoot !== 'undefined' && root instanceof ShadowRoot && root.host === e.target) return false; // Check if additional elements were passed to be included in check
  // (click must be outside all included elements, if any)

  const elements = (typeof binding.value === 'object' && binding.value.include || (() => []))(); // Add the root element for the component this directive was defined on


  elements.push(el); // Check if it's a click outside our elements, and then if our callback returns true.
  // Non-toggleable components should take action in their callback and return falsy.
  // Toggleable can return true if it wants to deactivate.
  // Note that, because we're in the capture phase, this callback will occur before
  // the bubbling click event on any outside elements.

  return !elements.some(el => el.contains(e.target));
}

function checkIsActive(e, binding) {
  const isActive = typeof binding.value === 'object' && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}

function directive(e, el, binding, vnode) {
  const handler = typeof binding.value === 'function' ? binding.value : binding.value.handler;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}

function handleShadow(el, callback) {
  const root = Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[/* attachedRoot */ "a"])(el);
  callback(document);

  if (typeof ShadowRoot !== 'undefined' && root instanceof ShadowRoot) {
    callback(root);
  }
}

const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  inserted(el, binding, vnode) {
    const onClick = e => directive(e, el, binding, vnode);

    const onMousedown = e => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };

    handleShadow(el, app => {
      app.addEventListener('click', onClick, true);
      app.addEventListener('mousedown', onMousedown, true);
    });

    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: true
      };
    }

    el._clickOutside[vnode.context._uid] = {
      onClick,
      onMousedown
    };
  },

  unbind(el, binding, vnode) {
    if (!el._clickOutside) return;
    handleShadow(el, app => {
      var _el$_clickOutside;

      if (!app || !((_el$_clickOutside = el._clickOutside) != null && _el$_clickOutside[vnode.context._uid])) return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[vnode.context._uid];
      app.removeEventListener('click', onClick, true);
      app.removeEventListener('mousedown', onMousedown, true);
    });
    delete el._clickOutside[vnode.context._uid];
  }

};
/* harmony default export */ __webpack_exports__["a"] = (ClickOutside);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=2451306e&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-heading'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("title",function(){return [_c(("h" + (_vm.props.level)),{tag:"component",staticClass:"sf-heading__title",class:_vm.props.level > 1 && _vm.$options.headingClass(_vm.props.level)},[_vm._v("\n      "+_vm._s(_vm.props.title)+"\n    ")])]},null,{ props: _vm.props }),_vm._ssrNode(" "),_vm._t("description",function(){return [_c('div',{staticClass:"sf-heading__description",class:{
        'display-none': !_vm.$options.hasDescription(_vm.props.description, _vm.slots),
      }},[_vm._v("\n      "+_vm._s(_vm.props.description)+"\n    ")])]},null,{ props: _vm.props })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=2451306e&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfHeadingvue_type_script_lang_js_ = ({
  name: "SfHeading",
  props: {
    level: {
      type: Number,
      default: 2
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },

  hasDescription(descriptionProp, slots) {
    return !!descriptionProp || slots().description;
  },

  headingClass(headingLevel) {
    return headingLevel <= 6 ? `h${headingLevel}` : `h2`;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeading_SfHeadingvue_type_script_lang_js_ = (SfHeadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfHeading_SfHeadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "5e38d768"
  
)

/* harmony default export */ var SfHeading = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=template&id=a8ec5104&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-price'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("regular",function(){return [_c('span',{staticClass:"sf-price__regular",class:{ 'display-none': !_vm.props.regular || _vm.props.special }},[_vm._v("\n      "+_vm._s(_vm.props.regular)+"\n    ")])]},null,{ props: _vm.props }),_vm._ssrNode(" "),_vm._t("old",function(){return [_c('del',{staticClass:"sf-price__old",class:{ 'display-none': !_vm.props.special }},[_vm._v("\n      "+_vm._s(_vm.props.regular)+"\n    ")])]},null,{ props: _vm.props }),_vm._ssrNode(" "),_vm._t("special",function(){return [_c('ins',{staticClass:"sf-price__special",class:{ 'display-none': !_vm.props.special }},[_vm._v("\n      "+_vm._s(_vm.props.special)+"\n    ")])]},null,{ props: _vm.props })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=template&id=a8ec5104&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfPricevue_type_script_lang_js_ = ({
  name: "SfPrice",
  props: {
    regular: {
      type: [String, Number],
      default: null
    },
    special: {
      type: [String, Number],
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfPrice_SfPricevue_type_script_lang_js_ = (SfPricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfPrice_SfPricevue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "d16e344c"
  
)

/* harmony default export */ var SfPrice = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iconColors */
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorsValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconColorsValues; });
const iconColors = {
  greenPrimary: "green-primary",
  greenSecondary: "green-secondary",
  black: 'black',
  darkSecondary: 'dark-secondary',
  grayPrimary: "gray-primary",
  graySecondary: "gray-secondary",
  lightPrimary: "light-primary",
  white: "white",
  redPrimary: "red-primary",
  redSecondary: "red-secondary",
  yellowPrimary: "yellow-primary",
  yellowSecondary: "yellow-secondary",
  bluePrimary: "blue-primary",
  blueSecondary: "blue-secondary"
};
const colors = {
  primary: "color-primary",
  secondary: "color-secondary",
  light: "color-light",
  dark: "color-dark",
  info: "color-info",
  success: "color-success",
  warning: 'color-warning',
  danger: 'color-danger'
};
const colorsValues = Object.values(colors);
const iconColorsValues = Object.values(iconColors);
/* unused harmony default export */ var _unused_webpack_default_export = (colors);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installDirectives (component, directives) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.directives = component.exports.options.directives
  }

  options.directives = options.directives || {}

  for (var i in directives) {
    options.directives[i] = options.directives[i] || directives[i]
  }
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=d8f0a870&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-badge'],style:([_vm.data.style, _vm.data.staticStyle])},'span',_vm.data.attrs,false),_vm.listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=d8f0a870&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfBadgevue_type_script_lang_js_ = ({
  name: "SfBadge"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBadge_SfBadgevue_type_script_lang_js_ = (SfBadgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBadge_SfBadgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "13c172e4"
  
)

/* harmony default export */ var SfBadge = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachedRoot; });
/**
 * Returns:
 *  - 'null' if the node is not attached to the DOM
 *  - the root node (HTMLDocument | ShadowRoot) otherwise
 */
function attachedRoot(node) {
  /* istanbul ignore next */
  if (typeof node.getRootNode !== 'function') {
    // Shadow DOM not supported (IE11), lets find the root of this node
    while (node.parentNode) node = node.parentNode; // The root parent is the document if the node is attached to the DOM


    if (node !== document) return null;
    return document;
  }

  const root = node.getRootNode(); // The composed root node is the document if the node is attached to the DOM

  if (root !== document && root.getRootNode({
    composed: true
  }) !== document) return null;
  return root;
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=template&id=4287f925&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-chevron'],style:([_vm.data.style, _vm.data.staticStyle])},'span',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c('span',{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),_vm._v(" "),_c('span',{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=template&id=4287f925&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfChevronvue_type_script_lang_js_ = ({
  name: "SfChevron",
  directives: {
    focus: focus_directive["a" /* focus */]
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfChevron_SfChevronvue_type_script_lang_js_ = (SfChevronvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(193)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfChevron_SfChevronvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "2084cf04"
  
)

/* harmony default export */ var SfChevron = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const state = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* reactive */ "i"])({
  notifications: []
});
const maxVisibleNotifications = 1;
const timeToLive = 3000; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const useUiNotification = () => {
  const send = notification => {
    const id = Symbol('notification');

    const dismiss = () => {
      const index = state.notifications.findIndex(notification => notification.id === id);
      if (index !== -1) state.notifications.splice(index, 1);
    };

    const newNotification = { ...notification,
      id,
      dismiss
    };
    state.notifications.push(newNotification);
    if (state.notifications.length > maxVisibleNotifications) state.notifications.shift();

    if (!notification.persist) {
      setTimeout(dismiss, timeToLive);
    }
  };

  return {
    send,
    notifications: Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => state.notifications)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useUiNotification);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("vue-lazy-hydration");

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=0e39dad4&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-rating'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._l((Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max))),function(index){return _vm._t("icon-positive",function(){return [_c(_vm.injections.components.SfIcon,{key:("p" + index),tag:"component",staticClass:"sf-rating__icon",attrs:{"size":"0.875rem","icon":_vm.props.icon,"coverage":index === Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max)) &&
        _vm.$options.finalScore(_vm.props.score, _vm.props.max) % 1 > 0
          ? _vm.$options.finalScore(_vm.props.score, _vm.props.max) % 1
          : 1}})]})}),_vm._ssrNode(" "),_vm._l((parseInt(_vm.$options.finalMax(_vm.props.max), 10) -
    Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max))),function(index){return _vm._t("icon-negative",function(){return [_c(_vm.injections.components.SfIcon,{key:("n" + index),tag:"component",staticClass:"sf-rating__icon sf-rating__icon--negative",attrs:{"icon":_vm.props.icon}})]})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=0e39dad4&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfRatingvue_type_script_lang_js_ = ({
  name: "SfRating",
  inject: {
    components: {
      default: {
        SfIcon: SfIcon["a" /* default */]
      }
    }
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    score: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: "star"
    }
  },

  finalScore(score, max) {
    return !score || score < 0 || score > max && max > 0 || max <= 0 ? 0 : score;
  },

  finalMax(max) {
    return !max || max <= 0 ? 1 : max;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRating_SfRatingvue_type_script_lang_js_ = (SfRatingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfRating_SfRatingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "71c772ac"
  
)

/* harmony default export */ var SfRating = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=template&id=80e3730c&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:[_vm.data.class, _vm.data.staticClass, 'sf-quantity-selector'],style:([_vm.data.style, _vm.data.staticStyle])},[_c(_vm.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{"disabled":_vm.props.disabled || Boolean(_vm.props.min !== null && _vm.props.qty <= _vm.props.min),"data-testid":"decrease"},on:{"click":function($event){_vm.$options.handleInput(
        Number(_vm.props.qty) - 1,
        _vm.listeners,
        _vm.props.min,
        _vm.props.max
      )}}},[_vm._v("\n    −\n  ")]),_vm._ssrNode(" "),_c(_vm.injections.components.SfInput,{tag:"component",staticClass:"sf-quantity-selector__input",attrs:{"type":"number","name":_vm.$options.uniqueKey(),"value":Number(_vm.props.qty),"disabled":_vm.props.disabled,"data-testid":"sf-quantity-selector input"},on:{"input":function($event){return _vm.$options.handleInput($event, _vm.listeners, _vm.props.min, _vm.props.max)},"blur":function($event){return _vm.$options.handleBlur(_vm.listeners)}}}),_vm._ssrNode(" "),_c(_vm.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{"disabled":_vm.props.disabled || Boolean(_vm.props.max !== null && _vm.props.qty >= _vm.props.max),"data-testid":"increase"},on:{"click":function($event){_vm.$options.handleInput(
        Number(_vm.props.qty) + 1,
        _vm.listeners,
        _vm.props.min,
        _vm.props.max
      )}}},[_vm._v("\n    +\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=template&id=80e3730c&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfQuantitySelectorvue_type_script_lang_js_ = ({
  name: "SfQuantitySelector",
  inject: {
    components: {
      default: {
        SfInput: SfInput["a" /* default */],
        SfButton: SfButton["a" /* default */]
      }
    }
  },
  model: {
    prop: "qty"
  },
  props: {
    qty: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },

  handleInput(qty, listeners, min, max) {
    // adjust qty per min/max if needed
    const minimum = min || 1;

    if (qty < minimum || isNaN(qty)) {
      qty = minimum;
    } else if (max !== null && qty > max) {
      qty = max;
    }

    return listeners.input && listeners.input(qty);
  },

  handleBlur(listeners) {
    return listeners.blur && listeners.blur();
  },

  uniqueKey() {
    const key = Math.random().toString(16).slice(2);
    return "quantitySelector" + key;
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfQuantitySelector_SfQuantitySelectorvue_type_script_lang_js_ = (SfQuantitySelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfQuantitySelector_SfQuantitySelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "59fbab68"
  
)

/* harmony default export */ var SfQuantitySelector = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product_placeholder.6d9cbdf.svg";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=01525ac0&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-button--pure sf-color',
    { 'is-active': _vm.props.selected } ],style:(Object.assign({}, _vm.data.style,
    _vm.data.staticStyle,
    {'--color-background': _vm.props.color})),attrs:{"aria-pressed":_vm.props.selected.toString(),"data-testid":_vm.props.color}},'component',_vm.data.attrs,false),_vm.listeners),[_c('transition',{attrs:{"name":"sf-bounce"}},[_vm._t("badge",function(){return [_c(_vm.injections.components.SfBadge,{tag:"component",staticClass:"sf-color__badge smartphone-only",class:{
          'display-none':
            !_vm.props.hasBadge || (!_vm.props.selected && _vm.props.hasBadge),
        }},[_c(_vm.injections.components.SfIcon,{tag:"component",attrs:{"size":"16px","color":"white","icon":"check","aria-hidden":"true"}})],1)]},null,{ props: _vm.props })],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=01525ac0&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfColorvue_type_script_lang_js_ = ({
  name: "SfColor",
  inject: {
    components: {
      default: {
        SfBadge: SfBadge["a" /* default */],
        SfIcon: SfIcon["a" /* default */],
        SfButton: SfButton["a" /* default */]
      }
    }
  },
  props: {
    color: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    hasBadge: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfColor_SfColorvue_type_script_lang_js_ = (SfColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(169)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfColor_SfColorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "e14e23e4"
  
)

/* harmony default export */ var SfColor = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("simplebar-vue");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;

  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;

  if (protoCheck) {
    return true;
  }

  const _encrypted = req.connection ? req.connection.encrypted : void 0;

  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }

  return false;
}

module.exports = isHTTPS;

/***/ }),
/* 121 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"VSF2: Shopify APP\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"VSF2: Shopify APP\"},{\"hid\":\"author\",\"name\":\"author\",\"content\":\"Aureate labs\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"This is the Shopify PWA app for VSF Next - Developed by Aureate labs\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"VSF2: Shopify APP\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"VSF2: Shopify APP\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"This is the Shopify PWA app for VSF Next - Developed by Aureate labs\"},{\"hid\":\"og:url\",\"name\":\"og:url\",\"property\":\"og:url\",\"content\":\"shopify-pwa.aureatelabs.com\"},{\"hid\":\"og:image\",\"name\":\"og:image\",\"property\":\"og:image\",\"content\":\"shopify-pwa.aureatelabs.com/_nuxt/icons/icon_512x512.03acdc.png\"},{\"hid\":\"og:image:width\",\"name\":\"og:image:width\",\"property\":\"og:image:width\",\"content\":512},{\"hid\":\"og:image:height\",\"name\":\"og:image:height\",\"property\":\"og:image:height\",\"content\":512},{\"hid\":\"og:image:type\",\"name\":\"og:image:type\",\"property\":\"og:image:type\",\"content\":\"image/png\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/icons/android-icon-48x48.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.03acdc.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.c7f43b5b.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=0f21833f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-sidebar",class:[_vm.staticClass, _vm.className]},[_c('SfOverlay',{attrs:{"visible":_vm.visibleOverlay}}),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.transitionName}},[(_vm.visible)?_c('aside',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],ref:"asideContent",staticClass:"sf-sidebar__aside"},[_vm._t("bar",function(){return [_c('SfBar',{staticClass:"smartphone-only",attrs:{"title":_vm.title,"back":true},on:{"click:back":_vm.close}})]}),_vm._v(" "),_vm._t("circle-icon",function(){return [_c('SfCircleIcon',{staticClass:"sf-sidebar__circle-icon desktop-only",class:{ 'display-none': !_vm.button },attrs:{"icon-size":"12px","aria-label":"Close sidebar","icon":"cross"},on:{"click":_vm.close}})]},null,{ close: _vm.close, button: _vm.button }),_vm._v(" "),_c('div',{staticClass:"sf-sidebar__top",class:{ 'display-none': !_vm.title || (!_vm.title && !_vm.hasTop) }},[_vm._t("title",function(){return [_c('SfHeading',{staticClass:"\n              sf-heading--left sf-heading--no-underline\n              sf-sidebar__title\n              desktop-only\n            ",class:{ 'display-none': !_vm.title },attrs:{"title":_vm.title,"description":_vm.subtitle,"level":_vm.headingLevel}})]},null,{ title: _vm.title, subtitle: _vm.subtitle, headingLevel: _vm.headingLevel }),_vm._v(" "),_vm._t("content-top")],2),_vm._v(" "),_c('div',{staticClass:"sf-sidebar__content"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"sf-sidebar__bottom",class:{ 'display-none': !_vm.hasBottom }},[_vm._t("content-bottom")],2)],2):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=0f21833f&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js + 1 modules
var focus_trap_directive = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js
var click_outside_directive = __webpack_require__(215);

// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue + 4 modules
var SfBar = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfSidebarvue_type_script_lang_js_ = ({
  name: "SfSidebar",
  directives: {
    focusTrap: focus_trap_directive["a" /* focusTrap */],
    clickOutside: click_outside_directive["a" /* clickOutside */]
  },
  components: {
    SfBar: SfBar["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */],
    SfHeading: SfHeading["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 3
    },
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    persistent: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      position: "left",
      staticClass: null,
      className: null
    };
  },

  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },

    transitionName() {
      return "sf-slide-" + this.position;
    },

    hasTop() {
      return this.$slots.hasOwnProperty("content-top");
    },

    hasBottom() {
      return this.$slots.hasOwnProperty("content-bottom");
    }

  },
  watch: {
    visible: {
      handler(value) {
        if (!check_environment["a" /* isClient */]) return;

        if (value) {
          this.$nextTick(() => {
            const sidebarContent = document.getElementsByClassName("sf-sidebar__content")[0];
            Object(external_body_scroll_lock_["disableBodyScroll"])(sidebarContent);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },

  mounted() {
    this.classHandler();
  },

  updated() {
    this.classHandler();
  },

  beforeDestroy() {
    Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
  },

  methods: {
    close() {
      this.$emit("close");
    },

    checkPersistence() {
      if (!this.persistent) this.close();
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },

    classHandler() {
      let update = false;

      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
        update = true;
      }

      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
        update = true;
      }

      if (update) {
        this.position = [this.staticClass, this.className].toString().search("--right") > -1 ? "right" : "left";
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSidebar_SfSidebarvue_type_script_lang_js_ = (SfSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(36);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfSidebar_SfSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d13941c2"
  
)

/* harmony default export */ var SfSidebar = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installDirectives_default()(component, {ClickOutside: click_outside["a" /* default */]})


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=template&id=3978c43e&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-property'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("name",function(){return [_c('span',{staticClass:"sf-property__name"},[_vm._v("\n      "+_vm._s(_vm.props.name)+"\n    ")])]},null,{ props: _vm.props }),_vm._ssrNode(" "),_vm._t("value",function(){return [_c('span',{staticClass:"sf-property__value"},[_vm._v("\n      "+_vm._s(_vm.props.value)+"\n    ")])]},null,{ props: _vm.props })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=template&id=3978c43e&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfPropertyvue_type_script_lang_js_ = ({
  name: "SfProperty",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProperty_SfPropertyvue_type_script_lang_js_ = (SfPropertyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfProperty_SfPropertyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "7328696c"
  
)

/* harmony default export */ var SfProperty = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=5f83a628&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-input",class:{
    'has-text': !!_vm.value,
    invalid: !_vm.valid,
  },attrs:{"data-testid":_vm.name}},[_vm._ssrNode("<div class=\"sf-input__wrapper\">","</div>",[_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],class:{ 'sf-input--is-password': _vm.isPassword },attrs:{"id":_vm.idWithoutWhitespace,"required":_vm.required,"disabled":_vm.disabled,"name":_vm.name,"type":_vm.inputType},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners),[]),_vm._ssrNode(" <span class=\"sf-input__bar\"></span> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.name))+(_vm._ssrClass("sf-input__label",{ 'display-none': !_vm.label }))+">","</label>",[_vm._t("label",function(){return [_vm._v(_vm._s(_vm.label))]},null,{ label: _vm.label })],2),_vm._ssrNode(" "),_vm._t("show-password",function(){return [_c('SfButton',{staticClass:"sf-input__password-button",class:{ 'display-none': !_vm.isPassword },attrs:{"type":"button","aria-label":"switch-visibility-password","aria-pressed":_vm.isPasswordVisible.toString()},on:{"click":_vm.switchVisibilityPassword}},[_c('SfIcon',{staticClass:"sf-input__password-icon",class:{
            hidden: !_vm.isPasswordVisible,
          },attrs:{"icon":"show_password","size":"1.5rem"}})],1)]},null,{
        isPasswordVisible: _vm.isPasswordVisible,
        switchVisibilityPassword: _vm.switchVisibilityPassword,
      })],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-input__error-message\">","</div>",[_c('transition',{attrs:{"name":"sf-fade"}},[_vm._t("error-message",function(){return [_c('div',{class:{ 'display-none': _vm.valid }},[_vm._v(_vm._s(_vm.errorMessage))])]},null,{ errorMessage: _vm.errorMessage })],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=5f83a628&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfInputvue_type_script_lang_js_ = ({
  name: "SfInput",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    valid: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute"
    },
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    },
    hasShowPassword: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false
    };
  },

  computed: {
    listeners() {
      return { ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },

    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    },

    idWithoutWhitespace() {
      return this.name.replace(/\s/g, "");
    }

  },
  watch: {
    type: {
      immediate: true,
      handler: function (type) {
        let inputType = type; // Safari has bug for number input

        if (typeof window !== "undefined" || typeof document !== "undefined") {
          const ua = navigator.userAgent.toLocaleLowerCase();

          if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1 && type === "number") {
            this.isNumberTypeSafari = true;
            inputType = "text";
          }
        }

        this.inputType = inputType;
      }
    },
    value: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;

        if (isNaN(value)) {
          this.$emit("input");
        }
      }
    }
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfInput_SfInputvue_type_script_lang_js_ = (SfInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfInput_SfInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "111450dc"
  
)

/* harmony default export */ var SfInput = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
module.exports = __webpack_require__(204);


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (() => {});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  app,
  redirect
}) {
  const token = await app.$cookies.get('_token');

  if (!token) {
    redirect('/');
  }
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line func-names
/* harmony default export */ __webpack_exports__["default"] = (context => {
  const appKey = context.$config.appKey;
  const token = context.$cookies.get(appKey + '_token'); // check if user not logged In

  if (!token) {
    context.app.router.push('/');
    context.redirect('/');
  }
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  _vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* Logger */ "b"].error('Please implement vendor-specific checkout.js middleware in the \'middleware\' directory to block access to checkout steps when customer did not yet complete previous steps');
});

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.weak-map.delete-all.js");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;

  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;

  if (protoCheck) {
    return true;
  }

  const _encrypted = req.connection ? req.connection.encrypted : void 0;

  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }

  return false;
}

module.exports = isHTTPS;

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  _vue_storefront_core__WEBPACK_IMPORTED_MODULE_0__[/* Logger */ "b"].error('Please implement vendor-specific is-authenticated.js middleware in the \'middleware\' directory to block guests from accessing user profile routes');
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_6f065d16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_6f065d16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_6f065d16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_6f065d16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_6f065d16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchResults_vue_vue_type_style_index_0_id_c92ba47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchResults_vue_vue_type_style_index_0_id_c92ba47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchResults_vue_vue_type_style_index_0_id_c92ba47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchResults_vue_vue_type_style_index_0_id_c92ba47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchResults_vue_vue_type_style_index_0_id_c92ba47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LocaleSelector_vue_vue_type_style_index_0_id_de1aa30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LocaleSelector_vue_vue_type_style_index_0_id_de1aa30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LocaleSelector_vue_vue_type_style_index_0_id_de1aa30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LocaleSelector_vue_vue_type_style_index_0_id_de1aa30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LocaleSelector_vue_vue_type_style_index_0_id_de1aa30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_03cb6a4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_03cb6a4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_03cb6a4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_03cb6a4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_03cb6a4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_71be37b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_71be37b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_71be37b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_71be37b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_71be37b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_CartSidebar_vue_vue_type_style_index_0_id_033fe5b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_CartSidebar_vue_vue_type_style_index_0_id_033fe5b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_CartSidebar_vue_vue_type_style_index_0_id_033fe5b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_CartSidebar_vue_vue_type_style_index_0_id_033fe5b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_CartSidebar_vue_vue_type_style_index_0_id_033fe5b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LoginModal_vue_vue_type_style_index_0_id_09d64f0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LoginModal_vue_vue_type_style_index_0_id_09d64f0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LoginModal_vue_vue_type_style_index_0_id_09d64f0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LoginModal_vue_vue_type_style_index_0_id_09d64f0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_LoginModal_vue_vue_type_style_index_0_id_09d64f0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_account_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_blank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_blank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_blank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_blank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_blank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_WishlistSidebar_vue_vue_type_style_index_0_id_61600360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_WishlistSidebar_vue_vue_type_style_index_0_id_61600360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_WishlistSidebar_vue_vue_type_style_index_0_id_61600360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_WishlistSidebar_vue_vue_type_style_index_0_id_61600360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_WishlistSidebar_vue_vue_type_style_index_0_id_61600360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Notification_vue_vue_type_style_index_0_id_46e41682_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Notification_vue_vue_type_style_index_0_id_46e41682_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Notification_vue_vue_type_style_index_0_id_46e41682_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Notification_vue_vue_type_style_index_0_id_46e41682_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Notification_vue_vue_type_style_index_0_id_46e41682_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  token: '',
  products: '',
  skus: [],
  price: [],
  alert: false
});
const getters = {
  getToken(state) {
    return state.token;
  },

  getProducts(state) {
    return state.products;
  },

  getSkus(state) {
    return state.skus;
  },

  getPrice(state) {
    return state.price;
  },

  getAlert(state) {
    return state.alert;
  }

};
const actions = {
  setToken({
    commit
  }, newToken) {
    commit('newToken', newToken);
  },

  setProducts({
    commit
  }, products) {
    commit('addProducts', products);
  },

  setSkus({
    commit
  }, newSkus) {
    commit('addSkus', newSkus);
  },

  setPrice({
    commit
  }, newPrice) {
    commit('addPrice', newPrice);
  },

  setAlert({
    commit
  }, newState) {
    commit('addAlertState', newState);
  }

};
const mutations = {
  newToken(state, newToken) {
    state.token = newToken;
  },

  addProducts(state, products) {
    state.products = products;
  },

  addSkus(state, newSkus) {
    state.skus = newSkus;
  },

  addPrice(state, newPrice) {
    state.price = newPrice;
  },

  addAlertState(state, newState) {
    state.alert = newState;
  }

};

/***/ }),
/* 201 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(10);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(114);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['auth'] = __webpack_require__(127);
middleware['auth'] = middleware['auth'].default || middleware['auth'];
middleware['authenticated'] = __webpack_require__(128);
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated'];
middleware['checkout'] = __webpack_require__(129);
middleware['checkout'] = middleware['checkout'].default || middleware['checkout'];
middleware['is-authenticated'] = __webpack_require__(151);
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', utils_flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function utils_flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(28);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(29);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(55);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(38);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(56);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
/* harmony default export */ var router_scrollBehavior = (function (_to, _from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _36853a05 = () => interopDefault(__webpack_require__.e(/* import() | pages/Category */ 2).then(__webpack_require__.bind(null, 391)));

const _744c664d = () => interopDefault(__webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, 393)));

const _20a95ace = () => interopDefault(__webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 381)));

const _e34ab6b8 = () => interopDefault(__webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 382)));

const _45793700 = () => interopDefault(__webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, 383)));

const _2f0702a7 = () => interopDefault(__webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 384)));

const _9ea92232 = () => interopDefault(__webpack_require__.e(/* import() | pages/ContactUs */ 3).then(__webpack_require__.bind(null, 396)));

const _6902ae34 = () => interopDefault(__webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 390)));

const _77b38466 = () => interopDefault(__webpack_require__.e(/* import() | pages/GetQuote */ 4).then(__webpack_require__.bind(null, 385)));

const _505aa96a = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount */ 5).then(__webpack_require__.bind(null, 394)));

const _02c284d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/AdressBook */ 6).then(__webpack_require__.bind(null, 320)));

const _9e573048 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/BillingDetails */ 7).then(__webpack_require__.bind(null, 397)));

const _4d8f309e = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/LoyaltyCard */ 8).then(__webpack_require__.bind(null, 304)));

const _ac9b374c = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/MyNewsletter */ 9).then(__webpack_require__.bind(null, 398)));

const _45eb22d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/MyProfile */ 10).then(__webpack_require__.bind(null, 319)));

const _e523f76c = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/MyReviews */ 11).then(__webpack_require__.bind(null, 386)));

const _f610f48a = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/OrderHistory */ 12).then(__webpack_require__.bind(null, 321)));

const _1993fb6f = () => interopDefault(__webpack_require__.e(/* import() | pages/MyAccount/ShippingDetails */ 13).then(__webpack_require__.bind(null, 395)));

const _8f08e690 = () => interopDefault(__webpack_require__.e(/* import() | pages/Product */ 14).then(__webpack_require__.bind(null, 392)));

const _77481128 = () => interopDefault(__webpack_require__.e(/* import() | pages/QuickOrder */ 15).then(__webpack_require__.bind(null, 389)));

const _6af0a2da = () => interopDefault(__webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 387)));

const _7630c222 = () => interopDefault(__webpack_require__.e(/* import() | pages/TermsAndConditions */ 16).then(__webpack_require__.bind(null, 399)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/Category",
    component: _36853a05,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _744c664d,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _20a95ace,
      name: "billing___en"
    }, {
      path: "payment",
      component: _e34ab6b8,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _45793700,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _2f0702a7,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _744c664d,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _20a95ace,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _e34ab6b8,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _45793700,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _2f0702a7,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _9ea92232,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _6902ae34,
    name: "home___de"
  }, {
    path: "/GetQuote",
    component: _77b38466,
    name: "GetQuote___en"
  }, {
    path: "/Home",
    component: _6902ae34,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _505aa96a,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _02c284d8,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _9e573048,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _4d8f309e,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _ac9b374c,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _45eb22d8,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _e523f76c,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _f610f48a,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _1993fb6f,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _8f08e690,
    name: "Product___en"
  }, {
    path: "/QuickOrder",
    component: _77481128,
    name: "QuickOrder___en"
  }, {
    path: "/reset-password",
    component: _6af0a2da,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _6af0a2da,
    name: "ResetPassword___en"
  }, {
    path: "/TermsAndConditions",
    component: _7630c222,
    name: "TermsAndConditions___en"
  }, {
    path: "/de/Category",
    component: _36853a05,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _744c664d,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _20a95ace,
      name: "billing___de"
    }, {
      path: "payment",
      component: _e34ab6b8,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _45793700,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _2f0702a7,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _744c664d,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _20a95ace,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _e34ab6b8,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _45793700,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _2f0702a7,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _9ea92232,
    name: "ContactUs___de"
  }, {
    path: "/de/GetQuote",
    component: _77b38466,
    name: "GetQuote___de"
  }, {
    path: "/de/Home",
    component: _6902ae34,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _505aa96a,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _02c284d8,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _9e573048,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _4d8f309e,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _ac9b374c,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _45eb22d8,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _e523f76c,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _f610f48a,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _1993fb6f,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _8f08e690,
    name: "Product___de"
  }, {
    path: "/de/QuickOrder",
    component: _77481128,
    name: "QuickOrder___de"
  }, {
    path: "/de/reset-password",
    component: _6af0a2da,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _6af0a2da,
    name: "ResetPassword___de"
  }, {
    path: "/de/TermsAndConditions",
    component: _7630c222,
    name: "TermsAndConditions___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _505aa96a,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _8f08e690,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _36853a05,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _505aa96a,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _8f08e690,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _36853a05,
    name: "category___en"
  }, {
    path: "/",
    component: _6902ae34,
    name: "home___en"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/error.vue?vue&type=template&id=6f065d16&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"error"}},[_c('SfImage',{staticClass:"image",attrs:{"src":"/error/error.svg","alt":"leaves"}}),_vm._ssrNode(" "),_c('SfHeading',{staticClass:"sf-heading--no-underline sf-heading--center page-title",attrs:{"title":_vm.error.statusCode === 404 ? _vm.error.message ? _vm.error.message : 'Item not found' : 'An error occured',"level":1}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"small-container text-center\" data-v-6f065d16>","</div>",[_vm._ssrNode("<p data-v-6f065d16>"+_vm._ssrEscape(_vm._s(_vm.error.statusCode === 404 ? 'We can\'t find the item you are looking for. Please try searching or viewing all of our items.' : 'Please go back or try again'))+"</p> "),_vm._ssrNode("<div class=\"actions\" data-v-6f065d16>","</div>",[_c('SfButton',{staticClass:"sf-button--full-width actions__button",attrs:{"link":"/"}},[_vm._v("\n      Return home\n    ")]),_vm._ssrNode(" "),_c('SfButton',{staticClass:"sf-button--full-width sf-button--text actions__button",on:{"click":function($event){return _vm.$router.go(-1)}}},[_vm._v("\n      Back\n    ")])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=6f065d16&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: 'ErrorLayout',
  components: {
    SfButton: SfButton["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfHeading: SfHeading["a" /* default */]
  },
  props: ['error']
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(156)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f065d16",
  "6bf66708"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "6a7c057f"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/account.vue?vue&type=template&id=4449e293&
var accountvue_type_template_id_4449e293_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('TopBar',{staticClass:"desktop-only"}),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"layout\">","</div>",[_c('AppHeader'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('BottomNavigation'),_vm._ssrNode(" "),_c('CartSidebar'),_vm._ssrNode(" "),_c('LoginModal')],2)],2)}
var accountvue_type_template_id_4449e293_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/account.vue?vue&type=template&id=4449e293&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/AppHeader.vue?vue&type=template&id=03cb6a4e&scoped=true&
var AppHeadervue_type_template_id_03cb6a4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfHeader',{staticClass:"sf-header--has-mobile-search",class:{ 'header-on-top': _vm.isSearchOpen },attrs:{"data-cy":"app-header","search-value":_vm.term,"cart-items-qty":_vm.cartTotalItems,"account-icon":_vm.accountIcon},on:{"click:cart":_vm.toggleCartSidebar,"click:wishlist":_vm.toggleWishlistSidebar,"click:account":_vm.handleAccountClick,"enter:search":_vm.changeSearchTerm,"change:search":function (p) { return (_vm.term = p); }},scopedSlots:_vm._u([{key:"logo",fn:function(){return [_c('nuxt-link',{staticClass:"sf-header__logo",attrs:{"to":_vm.localePath('/')}},[_c('SfImage',{staticClass:"sf-header__logo-image",attrs:{"src":"/icons/logo.svg","alt":"Vue Storefront Next"}})],1)]},proxy:true},(_vm.categories.length > 0)?{key:"navigation",fn:function(){return [_c('div',{staticClass:"navigation-wrapper"},_vm._l((_vm.categories),function(cat){return _c('SfHeaderNavigationItem',{key:cat.id,staticClass:"nav-item",attrs:{"data-cy":'app-header-url_' + cat.handle,"label":cat.title,"link":_vm.localePath('/c/' + cat.handle)}})}),1)]},proxy:true}:null,{key:"aside",fn:function(){return [_c('LocaleSelector',{staticClass:"smartphone-only"})]},proxy:true},{key:"header-icons",fn:function(){return [_c('div',{staticClass:"sf-header__icons"},[_c('SfButton',{directives:[{name:"e2e",rawName:"v-e2e",value:('app-header-account'),expression:"'app-header-account'"}],staticClass:"sf-button--pure sf-header__action",on:{"click":_vm.handleAccountClick}},[_c('SfIcon',{attrs:{"icon":_vm.accountIcon,"size":"1.25rem"}})],1),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-header__action",on:{"click":_vm.toggleWishlistSidebar}},[_c('SfIcon',{staticClass:"sf-header__icon",attrs:{"icon":"heart","size":"1.25rem"}})],1),_vm._v(" "),_c('SfButton',{directives:[{name:"e2e",rawName:"v-e2e",value:('app-header-cart'),expression:"'app-header-cart'"}],staticClass:"sf-button--pure sf-header__action",on:{"click":_vm.toggleCartSidebar}},[_c('SfIcon',{staticClass:"sf-header__icon",attrs:{"icon":"empty_cart","size":"1.25rem"}}),_vm._v(" "),_c('SfBadge',{staticClass:"sf-badge--number cart-badge"},[_vm._v(_vm._s(1))])],1)],1)]},proxy:true},{key:"search",fn:function(){return [_c('SfSearchBar',{attrs:{"placeholder":"Search for items","value":_vm.term,"icon":{ size: '1.25rem', color: '#43464E' },"aria-label":"Search"},on:{"input":_vm.handleSearch,"focus":function($event){_vm.isSearchOpen = true}}})]},proxy:true}],null,true)}),_vm._ssrNode(" "),_c('SearchResults',{attrs:{"visible":_vm.isSearchOpen,"result":_vm.searchResults},on:{"close":_vm.closeSearch}}),_vm._ssrNode(" "),_c('SfOverlay',{attrs:{"visible":_vm.isSearchOpen},on:{"click":function($event){_vm.isSearchOpen = false}}})],2)}
var AppHeadervue_type_template_id_03cb6a4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=template&id=03cb6a4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=b5872f0e&
var SfHeadervue_type_template_id_b5872f0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-header",class:{ 'is-sticky': _vm.sticky, 'is-hidden': _vm.hidden }},[_vm._ssrNode("<div class=\"sf-header__wrapper\">","</div>",[_vm._ssrNode("<header class=\"sf-header__header\">","</header>",[_vm._t("logo",function(){return [_c('SfLink',{attrs:{"link":"/"}},[(_vm.logo)?_c('SfImage',{staticClass:"sf-header__logo",attrs:{"src":_vm.logo,"alt":_vm.title,"width":_vm.logoWidth,"height":_vm.logoHeight}}):_c('h1',{staticClass:"sf-header__title"},[_vm._v(_vm._s(_vm.title))])],1)]},null,{ logo: _vm.logo, title: _vm.title }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header__aside\">","</div>",[_vm._t("aside")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header__actions\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("sf-header__navigation",{ 'is-visible': _vm.isNavVisible }))+">","</nav>",[_vm._t("navigation")],2),_vm._ssrNode(" "),_vm._t("search",function(){return [_c('SfSearchBar',{staticClass:"sf-header__search",attrs:{"value":_vm.searchValue,"placeholder":_vm.searchPlaceholder,"aria-label":"Search"},on:{"input":function($event){return _vm.$emit('change:search', $event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('enter:search', $event)}}})]},null,{ searchValue: _vm.searchValue, searchPlaceholder: _vm.searchPlaceholder }),_vm._ssrNode(" "),_vm._t("header-icons",function(){return [_c('div',{staticClass:"sf-header__icons"},[_c('SfButton',{staticClass:"sf-button--pure sf-header__action",class:{ 'display-none': !_vm.accountIcon },attrs:{"data-testid":"accountIcon","aria-label":"Account"},on:{"click":function($event){return _vm.$emit('click:account')}}},[_c('SfIcon',{class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'account',
                },attrs:{"icon":_vm.accountIcon,"size":"1.25rem"}})],1),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-header__action",class:{ 'display-none': !_vm.wishlistIcon },attrs:{"data-testid":"wishlistIcon","aria-label":"Wishlist"},on:{"click":function($event){return _vm.$emit('click:wishlist')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'wishlist',
                },attrs:{"icon":_vm.wishlistIcon,"has-badge":_vm.wishlistHasProducts,"badge-label":_vm.wishlistItemsQty,"size":"1.25rem"}})],1),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-header__action",class:{ 'display-none': !_vm.cartIcon },attrs:{"data-testid":"cartIcon","aria-label":"Cart"},on:{"click":function($event){return _vm.$emit('click:cart')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'cart',
                },attrs:{"icon":_vm.cartIcon,"has-badge":_vm.cartHasProducts,"badge-label":_vm.cartItemsQty,"size":"1.25rem"}})],1)],1)]},null,{
            activeIcon: _vm.activeIcon,
            cartHasProducts: _vm.cartHasProducts,
            cartItemsQty: _vm.cartItemsQty,
            cartIcon: _vm.cartIcon,
            wishlistIcon: _vm.wishlistIcon,
            accountIcon: _vm.accountIcon,
          })],2)],2)])])}
var SfHeadervue_type_template_id_b5872f0e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=b5872f0e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=63c601f3&
var SfHeaderNavigationItemvue_type_template_id_63c601f3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation-item"},_vm.$listeners),[(!_vm.isVisibleOnMobile)?_vm._ssrNode("<div class=\"\n      sf-header-navigation-item__item sf-header-navigation-item__item--desktop\n    \">","</div>",[_vm._t("desktop-navigation-item",function(){return [_c('SfLink',{staticClass:"sf-header-navigation-item__link",attrs:{"link":_vm.link}},[_vm._v(_vm._s(_vm.label))])]}),_vm._ssrNode(" "),_vm._t("default")],2):_vm._ssrNode("<div class=\"\n      sf-header-navigation-item__item sf-header-navigation-item__item--mobile\n    \">","</div>",[_vm._t("mobile-navigation-item",function(){return [_c('SfMenuItem',{staticClass:"sf-header-navigation-item__menu-item",attrs:{"label":_vm.label}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")])]}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header-navigation-item__content\">","</div>",[_vm._t("default")],2)],2)])}
var SfHeaderNavigationItemvue_type_template_id_63c601f3_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=63c601f3&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue + 4 modules
var SfMenuItem = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/mobile-observer.js
var mobile_observer = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfHeaderNavigationItemvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigationItem",
  components: {
    SfLink: SfLink["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    isVisibleOnMobile() {
      return this.isMobile;
    }

  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationItemvue_type_script_lang_js_ = (SfHeaderNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue





/* normalize component */

var SfHeaderNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeaderNavigationItemvue_type_script_lang_js_,
  SfHeaderNavigationItemvue_type_template_id_63c601f3_render,
  SfHeaderNavigationItemvue_type_template_id_63c601f3_staticRenderFns,
  false,
  null,
  null,
  "49b017c5"
  
)

/* harmony default export */ var SfHeaderNavigationItem = (SfHeaderNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=b9d6565e&
var SfHeaderNavigationvue_type_template_id_b9d6565e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation"},_vm.$listeners),[_vm._ssrNode("<div"+(_vm._ssrClass("sf-header-navigation__menu",{ 'display-none': _vm.isVisibleOnMobile }))+">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_c('SfSidebar',{staticClass:"sf-header-navigation__sidebar",attrs:{"visible":_vm.isVisibleOnMobile,"persistent":true},on:{"close":function($event){return _vm.$emit('close')}}},[_vm._t("default")],2)],2)}
var SfHeaderNavigationvue_type_template_id_b9d6565e_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=b9d6565e&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue + 4 modules
var SfSidebar = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfHeaderNavigationvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigation",
  components: {
    SfSidebar: SfSidebar["a" /* default */]
  },
  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    isVisibleOnMobile() {
      return this.isMobile;
    }

  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  }

});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationvue_type_script_lang_js_ = (SfHeaderNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue





/* normalize component */

var SfHeaderNavigation_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeaderNavigationvue_type_script_lang_js_,
  SfHeaderNavigationvue_type_template_id_b9d6565e_render,
  SfHeaderNavigationvue_type_template_id_b9d6565e_staticRenderFns,
  false,
  null,
  null,
  "0440c712"
  
)

/* harmony default export */ var SfHeaderNavigation = (SfHeaderNavigation_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(214);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=d63c7282&
var SfSearchBarvue_type_template_id_d63c7282_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-search-bar"},[_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-search-bar__input",attrs:{"type":"search","placeholder":_vm.placeholder},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners),[]),_vm._ssrNode(" "),_vm._t("icon",function(){return [_c('SfButton',{staticClass:"sf-search-bar__button sf-button--pure",attrs:{"type":"button","aria-label":"Search"},on:{"click":function($event){return _vm.$emit('click', _vm.value)}}},[(_vm.icon)?_c('span',{staticClass:"sf-search-bar__icon"},[_c('SfIcon',{attrs:{"color":_vm.icon.color,"size":_vm.icon.size,"icon":"search"}})],1):_vm._e()])]})],2)}
var SfSearchBarvue_type_template_id_d63c7282_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=d63c7282&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfSearchBarvue_type_script_lang_js_ = ({
  name: "SfSearchBar",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String],
      default: null
    },
    icon: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    listeners() {
      return { ...this.$listeners,
        input: event => this.$emit("input", event.target.value),
        "keyup.enter": event => this.$emit("input", event.target.value),
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur")
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSearchBar_SfSearchBarvue_type_script_lang_js_ = (SfSearchBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue



function SfSearchBar_injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfSearchBar_component = Object(componentNormalizer["a" /* default */])(
  SfSearchBar_SfSearchBarvue_type_script_lang_js_,
  SfSearchBarvue_type_template_id_d63c7282_render,
  SfSearchBarvue_type_template_id_d63c7282_staticRenderFns,
  false,
  SfSearchBar_injectStyles,
  null,
  "2a618d6e"
  
)

/* harmony default export */ var SfSearchBar = (SfSearchBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.component("SfHeaderNavigation", SfHeaderNavigation);
external_vue_default.a.component("SfHeaderNavigationItem", SfHeaderNavigationItem);







/* harmony default export */ var SfHeadervue_type_script_lang_js_ = ({
  name: "SfHeader",
  components: {
    SfImage: SfImage["a" /* default */],
    SfSearchBar: SfSearchBar,
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */]
  },
  props: {
    logo: {
      type: [String, Object],
      default: ""
    },
    logoHeight: {
      type: Number,
      default: 35
    },
    logoWidth: {
      type: Number,
      default: 34
    },
    title: {
      type: String,
      default: ""
    },
    cartIcon: {
      type: [String, Boolean, Array],
      default: "empty_cart"
    },
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: "heart"
    },
    accountIcon: {
      type: [String, Boolean, Array],
      default: "profile"
    },
    activeIcon: {
      type: String,
      default: "",

      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      }

    },
    searchPlaceholder: {
      type: String,
      default: "Search for items"
    },
    searchValue: {
      type: String,
      default: ""
    },
    wishlistItemsQty: {
      type: [String, Number],
      default: "0"
    },
    cartItemsQty: {
      type: [String, Number],
      default: "0"
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    isNavVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      icons: [],
      hidden: false,
      sticky: false,
      scrollDirection: null,
      lastScrollPosition: 0,
      animationStart: null,
      animationLong: null,
      animationDuration: 300
    };
  },

  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },

    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    }

  },
  watch: {
    scrollDirection: {
      handler() {
        if (!check_environment["a" /* isClient */]) return;
        window.cancelAnimationFrame(this.animationLong);
        this.animationLong = null;
        this.animationStart = null;
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
      }

    },
    isSticky: {
      handler(isSticky) {
        if (!check_environment["a" /* isClient */]) return;
        this.sticky = isSticky;
      },

      immediate: true
    }
  },

  mounted() {
    if (this.isSticky) {
      window.addEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();

    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },

  methods: {
    animationHandler(timestamp) {
      if (!this.animationStart) this.animationStart = timestamp;
      const progress = timestamp - this.animationStart;

      if (progress < this.animationDuration) {
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
        return;
      }

      this.hidden = this.scrollDirection === "down";
    },

    scrollHandler() {
      if (!check_environment["a" /* isClient */]) return;
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (!!this.refs) {
        if (currentScrollPosition >= this.$refs.header.offsetHeight) {
          this.scrollDirection = currentScrollPosition < this.lastScrollPosition ? "up" : "down";
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeader_SfHeadervue_type_script_lang_js_ = (SfHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue



function SfHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfHeader_component = Object(componentNormalizer["a" /* default */])(
  SfHeader_SfHeadervue_type_script_lang_js_,
  SfHeadervue_type_template_id_b5872f0e_render,
  SfHeadervue_type_template_id_b5872f0e_staticRenderFns,
  false,
  SfHeader_injectStyles,
  null,
  "6e8eef0b"
  
)

/* harmony default export */ var SfHeader = (SfHeader_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/SearchResults.vue?vue&type=template&id=c92ba47e&scoped=true&
var SearchResultsvue_type_template_id_c92ba47e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfMegaMenu',{staticClass:"search",attrs:{"visible":_vm.isSearchOpen,"title":_vm.$t('Search results')}},[_c('transition',{attrs:{"name":"sf-fade","mode":"out-in"}},[(_vm.products && _vm.products.length > 0)?_c('div',{key:"results",staticClass:"search__wrapper-results"},[(false)?undefined:_vm._e(),_vm._v(" "),_c('SfMegaMenuColumn',{staticClass:"sf-mega-menu-column--pined-content-on-mobile search__results",attrs:{"title":_vm.$t('Product suggestions')},scopedSlots:_vm._u([{key:"title",fn:function(ref){
var title = ref.title;
return [_c('SfMenuItem',{staticClass:"sf-mega-menu-column__header search__header",attrs:{"label":title},scopedSlots:_vm._u([{key:"mobile-nav-icon",fn:function(){return [_vm._v("\n                ​\n              ")]},proxy:true}],null,true)})]}}],null,false,2293886472)},[_vm._v(" "),_c('SfScrollable',{staticClass:"results--desktop desktop-only",attrs:{"show-text":"","hide-text":""}},[_c('div',{staticClass:"results-listing"},_vm._l((_vm.products),function(product,index){return _c('SfProductCard',{key:index,staticClass:"result-card",attrs:{"regular-price":_vm.$n(_vm.productGetters.getPrice(product).regular, 'currency'),"score-rating":_vm.productGetters.getAverageRating(product),"reviews-count":7,"image":_vm.productGetters.getCoverImage(product),"alt":_vm.productGetters.getName(product),"title":_vm.productGetters.getName(product),"link":_vm.productGetters.getSlug(product)}},[_c('template',{slot:"title"},[_c('SfButton',{staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.localePath(_vm.productGetters.getSlug(product)),"data-testid":"product-link"}},[_c('h3',{staticClass:"sf-product-card__title",domProps:{"innerHTML":_vm._s(_vm.productGetters.getName(product))}})])],1)],2)}),1)]),_vm._v(" "),_c('div',{staticClass:"results--mobile smartphone-only"},_vm._l((_vm.products),function(product,index){return _c('SfProductCard',{key:index,staticClass:"result-card",attrs:{"regular-price":_vm.$n(_vm.productGetters.getPrice(product).regular, 'currency'),"score-rating":_vm.productGetters.getAverageRating(product),"reviews-count":7,"image":_vm.productGetters.getCoverImage(product),"alt":_vm.productGetters.getName(product),"title":_vm.productGetters.getName(product),"link":_vm.productGetters.getSlug(product)}},[_c('template',{slot:"title"},[_c('SfButton',{staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.localePath(_vm.productGetters.getSlug(product)),"data-testid":"product-link"}},[_c('h3',{staticClass:"sf-product-card__title",domProps:{"innerHTML":_vm._s(_vm.productGetters.getName(product))}})])],1)],2)}),1)],1),_vm._v(" "),_c('div',{staticClass:"action-buttons smartphone-only"},[_c('SfButton',{staticClass:"action-buttons__button color-light",on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v(_vm._s(_vm.$t('Cancel')))])],1)],1):_c('div',{key:"no-results",staticClass:"before-results"},[_c('SfImage',{staticClass:"before-results__picture",attrs:{"src":"/error/error.svg","alt":"error","loading":"lazy"}}),_vm._v(" "),_c('p',{staticClass:"before-results__paragraph"},[_vm._v("\n          "+_vm._s(_vm.$t('You haven\'t searched for items yet'))+"\n        ")]),_vm._v(" "),_c('p',{staticClass:"before-results__paragraph"},[_vm._v("\n          "+_vm._s(_vm.$t('Let\'s start now - we\'ll help you'))+"\n        ")]),_vm._v(" "),_c('SfButton',{staticClass:"before-results__button color-secondary smartphone-only",on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v(_vm._s(_vm.$t('Go back')))])],1)])],1)],1)}
var SearchResultsvue_type_template_id_c92ba47e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchResults.vue?vue&type=template&id=c92ba47e&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=template&id=03cf905a&
var SfMegaMenuvue_type_template_id_03cf905a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transitionName}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"sf-mega-menu",class:[{ 'is-active': _vm.active }, { 'is-absolute': _vm.isAbsolute }]},[_c('SfBar',{staticClass:"sf-mega-menu__bar",attrs:{"title":_vm.active || _vm.title,"back":true},on:{"click:back":_vm.back}}),_vm._v(" "),_c('div',{staticClass:"sf-mega-menu__content"},[_c('div',{staticClass:"sf-mega-menu__menu"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"sf-mega-menu__aside",class:{ 'display-none': !_vm.$slots.aside }},[_c('SfMenuItem',{staticClass:"sf-mega-menu__aside-header desktop-only",attrs:{"label":_vm.asideTitle}}),_vm._v(" "),_vm._t("aside")],2)])],1)])}
var SfMegaMenuvue_type_template_id_03cf905a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=template&id=03cf905a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=template&id=0636ddb4&
var SfMegaMenuColumnvue_type_template_id_0636ddb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-mega-menu-column",class:{ 'is-active': _vm.active === _vm.title }},[_vm._t("title",function(){return [_c('SfMenuItem',{staticClass:"sf-mega-menu-column__header",attrs:{"label":_vm.title},on:{"click":function($event){return _vm.megaMenu.changeActive(_vm.title)}}})]},null,{ title: _vm.title, changeActive: _vm.megaMenu.changeActive }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-mega-menu-column__content\">","</div>",[_vm._t("default")],2)],2)}
var SfMegaMenuColumnvue_type_template_id_0636ddb4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=template&id=0636ddb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfMegaMenuColumnvue_type_script_lang_js_ = ({
  name: "SfMegaMenuColumn",
  components: {
    SfMenuItem: SfMenuItem["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  inject: ["megaMenu"],
  computed: {
    active() {
      return this.megaMenu.active;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfMegaMenuColumnvue_type_script_lang_js_ = (SfMegaMenuColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue





/* normalize component */

var SfMegaMenuColumn_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfMegaMenuColumnvue_type_script_lang_js_,
  SfMegaMenuColumnvue_type_template_id_0636ddb4_render,
  SfMegaMenuColumnvue_type_template_id_0636ddb4_staticRenderFns,
  false,
  null,
  null,
  "007c6e54"
  
)

/* harmony default export */ var SfMegaMenuColumn = (SfMegaMenuColumn_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue + 4 modules
var SfBar = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


external_vue_default.a.component("SfMegaMenuColumn", SfMegaMenuColumn);



/* harmony default export */ var SfMegaMenuvue_type_script_lang_js_ = ({
  name: "SfMegaMenu",
  components: {
    SfBar: SfBar["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    isAbsolute: {
      type: Boolean,
      default: false
    },
    transitionName: {
      type: String,
      default: "sf-fade"
    },

    /**
     * @deprecated will be removed in 1.0.0
     */
    asideTitle: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      active: ""
    };
  },

  provide() {
    const megaMenu = {};
    Object.defineProperty(megaMenu, "active", {
      get: () => this.active
    });
    Object.defineProperty(megaMenu, "changeActive", {
      value: this.changeActive
    });
    return {
      megaMenu
    };
  },

  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])()
  },
  watch: {
    isMobile: {
      handler() {
        this.active = "";
      },

      immediate: true
    }
  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  },

  methods: {
    changeActive(payload) {
      this.active = payload;
      this.$emit("change", payload);
    },

    back() {
      if (!this.active) {
        this.$emit("close");
      }

      this.active = "";
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfMegaMenu_SfMegaMenuvue_type_script_lang_js_ = (SfMegaMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfMegaMenu/SfMegaMenu.vue



function SfMegaMenu_injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfMegaMenu_component = Object(componentNormalizer["a" /* default */])(
  SfMegaMenu_SfMegaMenuvue_type_script_lang_js_,
  SfMegaMenuvue_type_template_id_03cf905a_render,
  SfMegaMenuvue_type_template_id_03cf905a_staticRenderFns,
  false,
  SfMegaMenu_injectStyles,
  null,
  "ccfdf26a"
  
)

/* harmony default export */ var SfMegaMenu = (SfMegaMenu_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue + 9 modules
var SfList = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue + 9 modules
var SfProductCard = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue + 4 modules
var SfScrollable = __webpack_require__(205);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/shopify/lib/index.es.js
var index_es = __webpack_require__(7);

// EXTERNAL MODULE: ./composables/useUiHelpers/index.ts
var useUiHelpers = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/SearchResults.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SearchResultsvue_type_script_lang_js_ = ({
  name: 'SearchResults',
  components: {
    SfMegaMenu: SfMegaMenu,
    SfList: SfList["a" /* default */],
    SfProductCard: SfProductCard["a" /* default */],
    SfScrollable: SfScrollable["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfImage: SfImage["a" /* default */]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    result: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, {
    emit
  }) {
    const {
      getCatLink
    } = Object(useUiHelpers["a" /* default */])();
    const isSearchOpen = Object(composition_api_["ref"])(props.visible);
    const products = Object(composition_api_["computed"])(() => {
      var _props$result;

      return (_props$result = props.result) === null || _props$result === void 0 ? void 0 : _props$result.products;
    });
    const categories = Object(composition_api_["computed"])(() => {
      var _props$result2;

      return (_props$result2 = props.result) === null || _props$result2 === void 0 ? void 0 : _props$result2.categories;
    });
    Object(composition_api_["watch"])(() => props.visible, newVal => {
      isSearchOpen.value = newVal;

      if (isSearchOpen.value) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
        emit('removeSearchResults');
      }
    });
    return {
      getCatLink,
      isSearchOpen,
      productGetters: index_es["d" /* productGetters */],
      products,
      categories
    };
  }

});
// CONCATENATED MODULE: ./components/SearchResults.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchResultsvue_type_script_lang_js_ = (SearchResultsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/SearchResults.vue



function SearchResults_injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SearchResults_component = Object(componentNormalizer["a" /* default */])(
  components_SearchResultsvue_type_script_lang_js_,
  SearchResultsvue_type_template_id_c92ba47e_scoped_true_render,
  SearchResultsvue_type_template_id_c92ba47e_scoped_true_staticRenderFns,
  false,
  SearchResults_injectStyles,
  "c92ba47e",
  "24111abf"
  
)

/* harmony default export */ var SearchResults = (SearchResults_component.exports);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(117);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: ./composables/useUiState.ts
var useUiState = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@vue-storefront/core/lib/index.es.js
var lib_index_es = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/LocaleSelector.vue?vue&type=template&id=de1aa30e&scoped=true&
var LocaleSelectorvue_type_template_id_de1aa30e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('SfButton',{staticClass:"container__lang container__lang--selected",attrs:{"data-cy":"locale-select_change-langauge"},on:{"click":function($event){_vm.isLangModalOpen = !_vm.isLangModalOpen}}},[_c('img',{attrs:{"src":("https://cdn.shopify.com/s/files/1/0407/1902/4288/files/" + _vm.locale + "_20x20.jpg"),"width":"20","height":"20"}})]),_vm._ssrNode(" "),_c('SfBottomModal',{attrs:{"is-open":_vm.isLangModalOpen,"title":"Choose language"},on:{"click:close":function($event){_vm.isLangModalOpen = !_vm.isLangModalOpen}}},[_c('SfList',_vm._l((_vm.availableLocales),function(lang){return _c('SfListItem',{key:lang.code},[_c('a',{attrs:{"href":_vm.switchLocalePath(lang.code)}},[_c('SfCharacteristic',{staticClass:"language",scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('span',[_vm._v(_vm._s(lang.label))])]},proxy:true},{key:"icon",fn:function(){return [_c('img',{attrs:{"src":("https://cdn.shopify.com/s/files/1/0407/1902/4288/files/" + (lang.code) + "_20x20.jpg"),"width":"20","height":"20"}})]},proxy:true}],null,true)})],1)])}),1)],1)],2)}
var LocaleSelectorvue_type_template_id_de1aa30e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LocaleSelector.vue?vue&type=template&id=de1aa30e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(218);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=template&id=e52006c6&
var SfBottomModalvue_type_template_id_e52006c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-modal"},[_c('SfOverlay',{staticClass:"sf-bottom-modal__overlay",attrs:{"visible":_vm.isOpen},on:{"click":_vm.close}}),_vm._ssrNode(" "),_c('SfTransition',{attrs:{"transition":_vm.transition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpen),expression:"isOpen"}],staticClass:"sf-bottom-modal__container",attrs:{"role":"dialog","aria-modal":"true"}},[_vm._t("title",function(){return [_c('SfHeading',{staticClass:"sf-bottom-modal__title",class:{ 'display-none': !_vm.title },attrs:{"level":3,"title":_vm.title}})]}),_vm._v(" "),_vm._t("close-desktop",function(){return [_c('SfCircleIcon',{staticClass:"sf-circle-icon--small sf-bottom-modal__close",attrs:{"aria-label":"Close","icon":"cross"},on:{"click":_vm.close}})]}),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm._t("close-mobile",function(){return [_c('SfButton',{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{"click":_vm.close}},[_vm._v("Cancel")])]})],2)])],2)}
var SfBottomModalvue_type_template_id_e52006c6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=template&id=e52006c6&

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/transitions/component/SfTransition.js
/* harmony default export */ var SfTransition = ({
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "fade"
    },
    group: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, {
    data,
    children,
    props
  }) {
    const isOff = props.transition === false;
    const tag = props.group ? "transition-group" : "transition";
    return createElement(tag, { ...data,
      attrs: {
        name: isOff ? "" : props.transition
      }
    }, children);
  }

});
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var SfBottomModalvue_type_script_lang_js_ = ({
  name: "SfBottomModal",
  components: {
    SfOverlay: SfOverlay["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfTransition: SfTransition
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    transition: {
      type: [String, Boolean],
      default: ""
    }
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!check_environment["a" /* isClient */]) return;

        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit("click:close");
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomModal_SfBottomModalvue_type_script_lang_js_ = (SfBottomModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBottomModal/SfBottomModal.vue



function SfBottomModal_injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBottomModal_component = Object(componentNormalizer["a" /* default */])(
  SfBottomModal_SfBottomModalvue_type_script_lang_js_,
  SfBottomModalvue_type_template_id_e52006c6_render,
  SfBottomModalvue_type_template_id_e52006c6_staticRenderFns,
  false,
  SfBottomModal_injectStyles,
  null,
  "57ed2d37"
  
)

/* harmony default export */ var SfBottomModal = (SfBottomModal_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue + 4 modules
var SfCharacteristic = __webpack_require__(219);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/LocaleSelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LocaleSelectorvue_type_script_lang_js_ = ({
  components: {
    SfImage: SfImage["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfList: SfList["a" /* default */],
    SfBottomModal: SfBottomModal,
    SfCharacteristic: SfCharacteristic["a" /* default */]
  },

  setup(props, context) {
    const {
      locales,
      locale
    } = context.root.$i18n;
    const isLangModalOpen = Object(runtime["j" /* ref */])(false);
    const availableLocales = Object(runtime["a" /* computed */])(() => locales.filter(i => i.code !== locale));
    return {
      availableLocales,
      locale,
      isLangModalOpen
    };
  }

});
// CONCATENATED MODULE: ./components/LocaleSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LocaleSelectorvue_type_script_lang_js_ = (LocaleSelectorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LocaleSelector.vue



function LocaleSelector_injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LocaleSelector_component = Object(componentNormalizer["a" /* default */])(
  components_LocaleSelectorvue_type_script_lang_js_,
  LocaleSelectorvue_type_template_id_de1aa30e_scoped_true_render,
  LocaleSelectorvue_type_template_id_de1aa30e_scoped_true_staticRenderFns,
  false,
  LocaleSelector_injectStyles,
  "de1aa30e",
  "fe56c8d0"
  
)

/* harmony default export */ var LocaleSelector = (LocaleSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/AppHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  components: {
    SearchResults: SearchResults,
    SfHeader: SfHeader,
    SfImage: SfImage["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    LocaleSelector: LocaleSelector,
    SfButton: SfButton["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */],
    SfBadge: SfBadge["a" /* default */],
    SfSearchBar: SfSearchBar
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal
    } = Object(useUiState["a" /* default */])();
    const {
      changeSearchTerm,
      getFacetsFromURL
    } = Object(useUiHelpers["a" /* default */])();
    const {
      isAuthenticated,
      load: loadUser
    } = Object(index_es["m" /* useUser */])();
    const {
      cart,
      load: loadCart
    } = Object(index_es["f" /* useCart */])();
    const {
      search: headerSearch,
      result
    } = Object(index_es["k" /* useSearch */])('header-search');
    const {
      search
    } = Object(index_es["g" /* useCategory */])('menuCategories');
    const {
      load: loadWishlist
    } = Object(index_es["q" /* useWishlist */])();
    const router = Object(runtime["p" /* useRouter */])();
    const categories = [{
      id: 'clothes1',
      handle: 'clothes',
      title: 'Clothes'
    }, {
      id: 'accessories1',
      handle: 'accessories',
      title: 'Accessories'
    }, {
      id: 'shoes1',
      handle: 'shoes',
      title: 'Shoes'
    }];
    const curCatSlug = Object(runtime["j" /* ref */])(getFacetsFromURL().categorySlug);
    const cartTotalItems = Object(runtime["a" /* computed */])(() => {
      const count = index_es["a" /* cartGetters */].getTotalItems(cart.value);
      return count ? count === null || count === void 0 ? void 0 : count.toString() : null;
    });
    const accountIcon = Object(runtime["a" /* computed */])(() => isAuthenticated.value ? 'profile_fill' : 'profile'); // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927

    const handleAccountClick = () => {
      if (isAuthenticated.value) {
        return router.push('/my-account');
      }

      toggleLoginModal();
    }; // #region Search Section


    const isSearchOpen = Object(runtime["j" /* ref */])(false);
    const searchResults = Object(runtime["j" /* ref */])(null);
    const term = Object(runtime["j" /* ref */])(getFacetsFromURL().term);
    const handleSearch = debounce_default()(async searchTerm => {
      if (!searchTerm.target) {
        term.value = searchTerm;
      } else {
        term.value = searchTerm.target.value;
      }

      await headerSearch({
        term: term.value
      });
    }, 1000);

    const closeSearch = () => {
      if (!isSearchOpen.value) return;
      term.value = '';
      isSearchOpen.value = false;
    };

    searchResults.value = {
      products: Object(runtime["a" /* computed */])(() => index_es["e" /* searchGetters */].getItems(result.value))
    }; // #endregion Search Section

    Object(lib_index_es["k" /* onSSR */])(async () => {
      await loadUser();
      await loadCart();
      await loadWishlist();
      await search({
        slug: ''
      });
    });
    return {
      accountIcon,
      cartTotalItems,
      closeSearch,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      changeSearchTerm,
      term,
      handleSearch,
      curCatSlug,
      searchResults,
      categories,
      isSearchOpen
    };
  }

});
// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/AppHeader.vue



function AppHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppHeader_component = Object(componentNormalizer["a" /* default */])(
  components_AppHeadervue_type_script_lang_js_,
  AppHeadervue_type_template_id_03cb6a4e_scoped_true_render,
  AppHeadervue_type_template_id_03cb6a4e_scoped_true_staticRenderFns,
  false,
  AppHeader_injectStyles,
  "03cb6a4e",
  "7672ba1f"
  
)

/* harmony default export */ var AppHeader = (AppHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/BottomNavigation.vue?vue&type=template&id=5aa1f600&
var BottomNavigationvue_type_template_id_5aa1f600_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfBottomNavigation',{staticClass:"smartphone-only"},[_c('nuxt-link',{attrs:{"data-cy":"bottom-navigation-url_home","to":"/"}},[_c('SfBottomNavigationItem',{class:_vm.$route.path == '/' ? 'sf-bottom-navigation__item--active' : '',attrs:{"icon":"home","size":"20px","label":"Home"}})],1),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_menu","icon":"menu","size":"20px","label":"Menu"}}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_wishlist","icon":"heart","size":"20px","label":"Wishlist"},on:{"click":_vm.toggleWishlistSidebar}}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_account","icon":"profile","size":"20px","label":"Account"},on:{"click":_vm.handleAccountClick}}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"data-cy":"bottom-navigation-url_add-to-cart","label":"Basket","icon":"add_to_cart"},on:{"click":_vm.toggleCartSidebar},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SfCircleIcon',{attrs:{"aria-label":"Add to cart"}},[_c('SfIcon',{style:({margin: '0 0 0 -2px'}),attrs:{"icon":"add_to_cart","color":"white","size":"25px"}})],1)]},proxy:true}])})],1)}
var BottomNavigationvue_type_template_id_5aa1f600_staticRenderFns = []


// CONCATENATED MODULE: ./components/BottomNavigation.vue?vue&type=template&id=5aa1f600&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=5b744ae0&
var SfBottomNavigationvue_type_template_id_5b744ae0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-navigation"},[_vm._t("default")],2)}
var SfBottomNavigationvue_type_template_id_5b744ae0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=5b744ae0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=13417594&
var SfBottomNavigationItemvue_type_template_id_13417594_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-bottom-navigation-item",class:{
    'is-active': _vm.isActive,
    'is-floating': _vm.isFloating,
    center: !_vm.icon || !_vm.label,
  }},_vm.$listeners),[_vm._t("icon",function(){return [(_vm.isFloating)?_c('SfCircleIcon',{attrs:{"icon":_vm.icon,"icon-color":"white","icon-size":"28px","aria-label":_vm.label}}):(_vm.icon)?_c('SfButton',{staticClass:"sf-button--pure sf-bottom-navigation-item__icon",attrs:{"aria-label":_vm.label}},[_c('SfIcon',{attrs:{"icon":_vm.currentIcon,"size":_vm.iconSize}})],1):_vm._e()]},null,{ icon: _vm.icon, iconActive: _vm.iconActive, iconSize: _vm.iconSize, isFloating: _vm.isFloating }),_vm._ssrNode(" "),_vm._t("label",function(){return [_c('div',{staticClass:"sf-bottom-navigation-item__label",class:{
        'display-none': !_vm.label,
        'has-margin': _vm.icon,
      }},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")])]},null,{ label: _vm.label })],2)}
var SfBottomNavigationItemvue_type_template_id_13417594_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=13417594&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfBottomNavigationItemvue_type_script_lang_js_ = ({
  name: "SfBottomNavigationItem",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    icon: {
      type: [String, Array],
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    },
    iconActive: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "20px"
    },
    isFloating: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive ? this.iconActive : this.icon;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfBottomNavigationItemvue_type_script_lang_js_ = (SfBottomNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue





/* normalize component */

var SfBottomNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfBottomNavigationItemvue_type_script_lang_js_,
  SfBottomNavigationItemvue_type_template_id_13417594_render,
  SfBottomNavigationItemvue_type_template_id_13417594_staticRenderFns,
  false,
  null,
  null,
  "3c05d1d1"
  
)

/* harmony default export */ var SfBottomNavigationItem = (SfBottomNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//


external_vue_default.a.component("SfBottomNavigationItem", SfBottomNavigationItem);
/* harmony default export */ var SfBottomNavigationvue_type_script_lang_js_ = ({
  name: "SfBottomNavigation"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_ = (SfBottomNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue



function SfBottomNavigation_injectStyles (context) {
  
  var style0 = __webpack_require__(181)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBottomNavigation_component = Object(componentNormalizer["a" /* default */])(
  SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_,
  SfBottomNavigationvue_type_template_id_5b744ae0_render,
  SfBottomNavigationvue_type_template_id_5b744ae0_staticRenderFns,
  false,
  SfBottomNavigation_injectStyles,
  null,
  "0c19390b"
  
)

/* harmony default export */ var SfBottomNavigation = (SfBottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/BottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BottomNavigationvue_type_script_lang_js_ = ({
  components: {
    SfBottomNavigation: SfBottomNavigation,
    SfIcon: SfIcon["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */]
  },

  setup(props, {
    root
  }) {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal
    } = Object(useUiState["a" /* default */])();
    const {
      isAuthenticated
    } = Object(index_es["m" /* useUser */])();

    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push('/my-account');
      }

      toggleLoginModal();
    };

    return {
      toggleWishlistSidebar,
      toggleCartSidebar,
      handleAccountClick
    };
  }

});
// CONCATENATED MODULE: ./components/BottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BottomNavigationvue_type_script_lang_js_ = (BottomNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/BottomNavigation.vue





/* normalize component */

var BottomNavigation_component = Object(componentNormalizer["a" /* default */])(
  components_BottomNavigationvue_type_script_lang_js_,
  BottomNavigationvue_type_template_id_5aa1f600_render,
  BottomNavigationvue_type_template_id_5aa1f600_staticRenderFns,
  false,
  null,
  null,
  "12fc15c4"
  
)

/* harmony default export */ var BottomNavigation = (BottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/TopBar.vue?vue&type=template&id=71be37b4&scoped=true&
var TopBarvue_type_template_id_71be37b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfTopBar',{staticClass:"topbar",scopedSlots:_vm._u([{key:"left",fn:function(){return [_c('SfButton',{staticClass:"sf-button--text"},[_vm._v(_vm._s(_vm.$t('Help & FAQs')))])]},proxy:true},{key:"center",fn:function(){return [_c('p',[_vm._v(_vm._s(_vm.$t('Download')))]),_vm._v(" "),_c('SfButton',{staticClass:"topbar__button sf-button--text"},[_vm._v(_vm._s(_vm.$t('Find out more')))])]},proxy:true},{key:"right",fn:function(){return [_c('LocaleSelector')]},proxy:true}])})}
var TopBarvue_type_template_id_71be37b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=template&id=71be37b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=2772494f&
var SfTopBarvue_type_template_id_2772494f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-top-bar"},[_vm._ssrNode("<div class=\"sf-top-bar__container\">","</div>",[_vm._ssrNode("<div class=\"sf-top-bar__left\">","</div>",[_vm._t("left")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-top-bar__center\">","</div>",[_vm._t("center")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-top-bar__right\">","</div>",[_vm._t("right")],2)],2)])}
var SfTopBarvue_type_template_id_2772494f_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=2772494f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfTopBarvue_type_script_lang_js_ = ({
  name: "SFTopBar"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTopBar_SfTopBarvue_type_script_lang_js_ = (SfTopBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue



function SfTopBar_injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTopBar_component = Object(componentNormalizer["a" /* default */])(
  SfTopBar_SfTopBarvue_type_script_lang_js_,
  SfTopBarvue_type_template_id_2772494f_render,
  SfTopBarvue_type_template_id_2772494f_staticRenderFns,
  false,
  SfTopBar_injectStyles,
  null,
  "644d3e2b"
  
)

/* harmony default export */ var SfTopBar = (SfTopBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/TopBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TopBarvue_type_script_lang_js_ = ({
  components: {
    SfTopBar: SfTopBar,
    SfButton: SfButton["a" /* default */],
    LocaleSelector: LocaleSelector
  }
});
// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBarvue_type_script_lang_js_ = (TopBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TopBar.vue



function TopBar_injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopBar_component = Object(componentNormalizer["a" /* default */])(
  components_TopBarvue_type_script_lang_js_,
  TopBarvue_type_template_id_71be37b4_scoped_true_render,
  TopBarvue_type_template_id_71be37b4_scoped_true_staticRenderFns,
  false,
  TopBar_injectStyles,
  "71be37b4",
  "7606f23d"
  
)

/* harmony default export */ var TopBar = (TopBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/CartSidebar.vue?vue&type=template&id=033fe5b0&scoped=true&
var CartSidebarvue_type_template_id_033fe5b0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"cart"}},[_c('SfSidebar',{directives:[{name:"e2e",rawName:"v-e2e",value:('sidebar-cart'),expression:"'sidebar-cart'"}],staticClass:"sf-sidebar--right",attrs:{"visible":_vm.isCartSidebarOpen,"title":"My Cart"},on:{"close":_vm.toggleCartSidebar},scopedSlots:_vm._u([{key:"content-top",fn:function(){return [(_vm.totalItems)?_c('SfProperty',{staticClass:"sf-property--large cart-summary desktop-only",attrs:{"name":"Total items","value":_vm.totalItems}}):_vm._e()]},proxy:true},{key:"content-bottom",fn:function(){return [_c('transition',{attrs:{"name":"sf-fade"}},[(_vm.totalItems)?_c('div',[_c('SfProperty',{staticClass:"sf-property--full-width sf-property--large my-cart__total-price",attrs:{"name":"Estimated Total"},scopedSlots:_vm._u([{key:"value",fn:function(){return [_c('SfPrice',{attrs:{"regular":_vm.$n(_vm.totals.subtotal, 'currency')}})]},proxy:true}],null,false,3353537716)}),_vm._v(" "),_c('SfLink',{attrs:{"link":"javascript:void(0);"},on:{"click":function($event){_vm.handleCheckout(_vm.checkoutURL, parseFloat(_vm.totals.subtotal))}}},[_c('SfButton',{staticClass:"sf-button--full-width color-secondary sf-proceed_to_checkout",on:{"click":_vm.toggleCartSidebar}},[_vm._v("\n              "+_vm._s(_vm.$t('Go to checkout'))+"\n            ")])],1)],1):_c('div',[_c('SfButton',{staticClass:"sf-button--full-width color-primary",on:{"click":_vm.toggleCartSidebar}},[_vm._v(_vm._s(_vm.$t('Go back shopping')))])],1)])]},proxy:true}])},[_vm._v(" "),_c('transition',{attrs:{"name":"sf-fade","mode":"out-in"}},[(_vm.totalItems)?_c('div',{key:"my-cart",staticClass:"my-cart"},[_c('div',{staticClass:"collected-product-list"},[_c('transition-group',{attrs:{"name":"sf-fade","tag":"div"}},_vm._l((_vm.products),function(product){return _c('SfCollectedProduct',{directives:[{name:"e2e",rawName:"v-e2e",value:('collected-product'),expression:"'collected-product'"}],key:product.sku,staticClass:"collected-product",attrs:{"image":product.coverImage,"title":product.name,"regular-price":_vm.$n(product.price, 'currency'),"special-price":_vm.cartGetters.getItemPrice(product).special &&
                _vm.$n(_vm.cartGetters.getItemPrice(product).special, 'currency'),"stock":99999},on:{"click:remove":function($event){return _vm.removeItem({ product: product })}},scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('div',{staticClass:"sf-collected-product__quantity-wrapper"},[_c('SfQuantitySelector',{staticClass:"sf-collected-product__quantity-selector",attrs:{"disabled":_vm.loading,"qty":_vm.cartGetters.getItemQty(product)},on:{"input":function($event){_vm.updateQuantity({ product: product, quantity: Number($event) })}}})],1)]},proxy:true}],null,true)})}),1)],1)]):_c('div',{key:"empty-cart",staticClass:"empty-cart"},[_c('div',{staticClass:"empty-cart__banner"},[_c('SfImage',{staticClass:"empty-cart__image",attrs:{"alt":"Empty bag","src":"/icons/empty-cart.svg"}}),_vm._v(" "),_c('SfHeading',{staticClass:"empty-cart__heading",attrs:{"title":"Your cart is empty","level":2,"description":"Looks like you haven’t added any items to the bag yet. Start\n            shopping to fill it in."}})],1)])])],1)],1)}
var CartSidebarvue_type_template_id_033fe5b0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CartSidebar.vue?vue&type=template&id=033fe5b0&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfProperty/SfProperty.vue + 4 modules
var SfProperty = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=template&id=34d381eb&
var SfCollectedProductvue_type_template_id_34d381eb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-collected-product"},[_vm._ssrNode("<div class=\"sf-collected-product__main\">","</div>",[_vm._ssrNode("<div class=\"sf-collected-product__details\">","</div>",[_vm._t("title",function(){return [_c('div',{staticClass:"sf-collected-product__title-wraper"},[_c(_vm.componentIs,{tag:"component",staticClass:"sf-collected-product__title",attrs:{"link":_vm.link ? _vm.link : ''}},[_vm._v("\n            "+_vm._s(_vm.title)+"\n          ")])],1)]},null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("price",function(){return [_c('SfPrice',{class:{ 'display-none': !_vm.regularPrice },attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}})]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-collected-product__configuration\">","</div>",[_vm._t("configuration",function(){return [_c('SfProperty',{attrs:{"name":"Size","value":"XS"}}),_vm._v(" "),_c('SfProperty',{attrs:{"name":"Color","value":"white"}})]})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-collected-product__actions\">","</div>",[_vm._t("actions",function(){return [_c('SfButton',{staticClass:"sf-button--text desktop-only"},[_vm._v("Save for later")])]})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-collected-product__aside\">","</div>",[_vm._t("image",function(){return [_c('SfImage',{staticClass:"sf-collected-product__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})]},null,{ image: _vm.image, title: _vm.title }),_vm._ssrNode(" "),_vm._t("input",function(){return [_c('div',{staticClass:"sf-collected-product__quantity-wrapper"},[_c('SfQuantitySelector',{staticClass:"sf-collected-product__quantity-selector",attrs:{"qty":_vm.quantity,"min":_vm.minQty,"max":_vm.maxQty},on:{"input":function($event){return _vm.$emit('input', $event)}}})],1)]})],2),_vm._ssrNode(" "),_vm._t("remove",function(){return [[_c('SfCircleIcon',{staticClass:"\n          sf-circle-icon--small\n          sf-collected-product__remove\n          sf-collected-product__remove--circle-icon\n        ",attrs:{"icon":"cross","aria-label":"Remove"},on:{"click":_vm.removeHandler}}),_vm._v(" "),_c('SfButton',{staticClass:"\n          sf-button--text\n          sf-collected-product__remove sf-collected-product__remove--text\n        ",attrs:{"data-testid":"collected-product-desktop-remove"},on:{"click":_vm.removeHandler}},[_vm._v("Remove")])]]},null,{ removeHandler: _vm.removeHandler }),_vm._ssrNode(" "),_vm._t("more-actions",function(){return [[_c('SfButton',{staticClass:"\n          sf-button--pure\n          sf-collected-product__more-actions\n          smartphone-only\n        ",attrs:{"aria-label":"More actions"},on:{"click":_vm.actionsHandler}},[_c('SfIcon',{attrs:{"icon":"more","size":"18px"}})],1)]]},null,{ actionsHandler: _vm.actionsHandler })],2)}
var SfCollectedProductvue_type_template_id_34d381eb_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=template&id=34d381eb&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue + 4 modules
var SfQuantitySelector = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfCollectedProductvue_type_script_lang_js_ = ({
  name: "SfCollectedProduct",
  components: {
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfQuantitySelector: SfQuantitySelector["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfProperty: SfProperty["a" /* default */]
  },
  model: {
    prop: "qty"
  },
  props: {
    image: {
      type: String,
      default: ""
    },
    imageWidth: {
      type: [String, Number],
      default: 140
    },
    imageHeight: {
      type: [String, Number],
      default: 200
    },
    title: {
      type: String,
      default: ""
    },
    regularPrice: {
      type: [Number, String],
      default: null
    },
    specialPrice: {
      type: [Number, String],
      default: null
    },
    qty: {
      type: [Number, String],
      default: 1
    },
    minQty: {
      type: Number,
      default: null
    },
    maxQty: {
      type: Number,
      default: null
    },
    link: {
      type: [String, Object],
      default: null
    },
    hasRemove: {
      type: Boolean,
      default: true
    },
    hasMoreActions: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    componentIs() {
      return this.link ? "SfLink" : "div";
    },

    quantity() {
      return typeof this.qty === "string" ? Number(this.qty) : this.qty;
    }

  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    },

    actionsHandler() {
      this.$emit("click:actions");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCollectedProduct_SfCollectedProductvue_type_script_lang_js_ = (SfCollectedProductvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue



function SfCollectedProduct_injectStyles (context) {
  
  var style0 = __webpack_require__(187)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfCollectedProduct_component = Object(componentNormalizer["a" /* default */])(
  SfCollectedProduct_SfCollectedProductvue_type_script_lang_js_,
  SfCollectedProductvue_type_template_id_34d381eb_render,
  SfCollectedProductvue_type_template_id_34d381eb_staticRenderFns,
  false,
  SfCollectedProduct_injectStyles,
  null,
  "3796cdab"
  
)

/* harmony default export */ var SfCollectedProduct = (SfCollectedProduct_component.exports);
// EXTERNAL MODULE: ./composables/index.ts
var composables = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(118);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/CartSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var CartSidebarvue_type_script_lang_js_ = ({
  name: 'Cart',
  components: {
    SfSidebar: SfSidebar["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfCollectedProduct: SfCollectedProduct,
    SfImage: SfImage["a" /* default */],
    SfQuantitySelector: SfQuantitySelector["a" /* default */]
  },

  setup(_, {
    root
  }) {
    const {
      isCartSidebarOpen,
      toggleCartSidebar
    } = Object(composables["c" /* useUiState */])();
    const {
      cart,
      removeItem,
      updateItemQty,
      load: loadCart,
      loading
    } = Object(index_es["f" /* useCart */])();
    const {
      isAuthenticated
    } = Object(index_es["m" /* useUser */])();
    const {
      send: sendNotification,
      notifications
    } = Object(composables["b" /* useUiNotification */])();
    const products = [{
      sku: 'TEST123',
      id: 'test1',
      name: 'Test',
      coverImage: 'https://cdn.shopify.com/s/files/1/0407/1902/4288/products/ZA030136_011_p_600x600.jpg?v=1593091618',
      price: 300,
      type: 'Blouse',
      rating: 4,
      description: 'This is a test'
    }];
    const totals = {
      subtotal: 269.0
    };
    const totalItems = 1;
    const checkoutURL = 'https://vsf-next-pwa.myshopify.com/40719024288/checkouts/3bb5e8d94d75ead8c44fab6a3ac02a81';

    const handleCheckout = checkoutUrl => {
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 400);
    };

    Object(lib_index_es["k" /* onSSR */])(async () => {
      await loadCart();
    });
    Object(runtime["f" /* onBeforeMount */])(async () => {
      await loadCart().then(() => {
        var _cart$value;

        if (cart && (cart === null || cart === void 0 ? void 0 : (_cart$value = cart.value) === null || _cart$value === void 0 ? void 0 : _cart$value.orderStatusUrl) !== null) {
          root.$cookies.remove(`${root.$config.appKey}_cart_id`);
        }
      });
    });
    const updateQuantity = lodash_debounce_default()(async ({
      product,
      quantity
    }) => {
      await updateItemQty({
        product,
        quantity
      });
    }, 500);
    return {
      updateQuantity,
      loading,
      isAuthenticated,
      products,
      removeItem,
      handleCheckout,
      checkoutURL,
      isCartSidebarOpen,
      toggleCartSidebar,
      totals,
      totalItems,
      cartGetters: index_es["a" /* cartGetters */],
      sendNotification,
      notifications
    };
  }

});
// CONCATENATED MODULE: ./components/CartSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CartSidebarvue_type_script_lang_js_ = (CartSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CartSidebar.vue



function CartSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CartSidebar_component = Object(componentNormalizer["a" /* default */])(
  components_CartSidebarvue_type_script_lang_js_,
  CartSidebarvue_type_template_id_033fe5b0_scoped_true_render,
  CartSidebarvue_type_template_id_033fe5b0_scoped_true_staticRenderFns,
  false,
  CartSidebar_injectStyles,
  "033fe5b0",
  "7e7540ed"
  
)

/* harmony default export */ var CartSidebar = (CartSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/LoginModal.vue?vue&type=template&id=09d64f0e&scoped=true&
var LoginModalvue_type_template_id_09d64f0e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfModal',{staticClass:"modal",attrs:{"visible":_vm.isLoginModalOpen},on:{"close":_vm.closeModal}},[_c('h1',{staticClass:"titleModal"},[_vm._v(_vm._s(!_vm.isLogin ? 'Login' : 'Log out?'))]),_vm._v(" "),(!_vm.isLogin)?_c('div',{staticClass:"form"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],staticClass:"input",attrs:{"name":"username","label":"Your username"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"input",attrs:{"name":"password","label":"Password","type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"login",attrs:{"disabled":_vm.disabledButton},on:{"click":_vm.singIn}},[_vm._v("\n      "+_vm._s(_vm.messageSingIn)+"\n    ")])]):_vm._e(),_vm._v(" "),(_vm.isLogin)?_c('div',[_c('button',{staticClass:"login",attrs:{"disabled":_vm.disabledButton},on:{"click":_vm.singOut}},[_vm._v("\n      "+_vm._s(_vm.messageLogOut)+"\n    ")])]):_vm._e()])}
var LoginModalvue_type_template_id_09d64f0e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginModal.vue?vue&type=template&id=09d64f0e&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=template&id=ea7b3b36&
var SfModalvue_type_template_id_ea7b3b36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-modal",class:[_vm.staticClass, _vm.className]},[(_vm.overlay)?_c('SfOverlay',{staticClass:"sf-modal__overlay",attrs:{"transition":_vm.transitionOverlay,"visible":_vm.visible}}):_vm._e(),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.transitionModal}},[(_vm.visible)?_c('div',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],staticClass:"sf-modal__container"},[_vm._t("modal-bar",function(){return [_c('SfBar',{staticClass:"sf-modal__bar smartphone-only",attrs:{"close":_vm.cross,"title":_vm.title},on:{"click:close":_vm.close}})]}),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-modal__close desktop-only",class:{ 'display-none': !_vm.cross },attrs:{"aria-label":"Close modal","type":"button","data-testid":"close-button"},on:{"click":_vm.close}},[_vm._t("close",function(){return [_c('SfIcon',{attrs:{"icon":"cross","size":"0.875rem","color":"gray-secondary"}})]})],2),_vm._v(" "),_c('div',{ref:"content",staticClass:"sf-modal__content"},[_vm._t("default")],2)],2):_vm._e()])],2)}
var SfModalvue_type_template_id_ea7b3b36_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=template&id=ea7b3b36&

// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js + 1 modules
var focus_trap_directive = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js
var click_outside_directive = __webpack_require__(215);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfModalvue_type_script_lang_js_ = ({
  name: "SfModal",
  directives: {
    focusTrap: focus_trap_directive["a" /* focusTrap */],
    clickOutside: click_outside_directive["a" /* clickOutside */]
  },
  components: {
    SfBar: SfBar["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  model: {
    prop: "visible",
    event: "close"
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    cross: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    persistent: {
      type: Boolean,
      default: false
    },
    transitionOverlay: {
      type: String,
      default: "sf-fade"
    },
    transitionModal: {
      type: String,
      default: "sf-fade"
    }
  },

  data() {
    return {
      staticClass: null,
      className: null
    };
  },

  watch: {
    visible: {
      handler: function (value) {
        if (!check_environment["a" /* isClient */]) return;

        if (value) {
          this.$nextTick(() => {
            Object(external_body_scroll_lock_["disableBodyScroll"])(this.$refs.content);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true
    }
  },

  beforeDestroy() {
    Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
  },

  methods: {
    close() {
      this.$emit("close", false);
    },

    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },

    classHandler() {
      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
      }

      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfModal_SfModalvue_type_script_lang_js_ = (SfModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(36);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue



function SfModal_injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfModal_component = Object(componentNormalizer["a" /* default */])(
  SfModal_SfModalvue_type_script_lang_js_,
  SfModalvue_type_template_id_ea7b3b36_render,
  SfModalvue_type_template_id_ea7b3b36_staticRenderFns,
  false,
  SfModal_injectStyles,
  null,
  "1a51c98d"
  
)

/* harmony default export */ var SfModal = (SfModal_component.exports);

/* vuetify-loader */


installDirectives_default()(SfModal_component, {ClickOutside: click_outside["a" /* default */]})

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(31);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./api/getToken.js


const getToken = (updateToken, username, password) => {
  let result;
  external_axios_default()({
    method: 'GET',
    url: '/getToken.js',
    headers: {
      username,
      password
    }
  }).then(res => {
    console.log(res);
    updateToken(JSON.parse(JSON.stringify(res.data.access_token)));
  }).catch(err => console.log(err));
  return result;
};

/* harmony default export */ var api_getToken = (getToken);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/LoginModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var LoginModalvue_type_script_lang_js_ = ({
  name: 'LoginModal',
  components: {
    SfModal: SfModal
  },

  data() {
    return {
      username: '',
      password: '',
      messageSingIn: 'Sing In',
      messageLogOut: 'Yes, close session',
      disabledButton: false
    };
  },

  setup(_, {
    root
  }) {
    const {
      isLoginModalOpen,
      toggleLoginModal
    } = Object(composables["c" /* useUiState */])();

    const closeModal = () => {
      toggleLoginModal();
    };

    const isLogin = Object(runtime["j" /* ref */])(root.$cookies.get('_token') ? true : false);
    return {
      isLoginModalOpen,
      toggleLoginModal,
      closeModal,
      isLogin
    };
  },

  computed: {
    tokenAuth() {
      return this.$store.getters['getToken'];
    }

  },
  methods: {
    setTokenAuth(newToken) {
      this.$cookies.set('_token', newToken, {
        path: '/',
        maxAge: 31536000
      });
      this.$store.dispatch('setToken', newToken);
    },

    singIn(e) {
      api_getToken(this.setTokenAuth, this.username, this.password);

      if (!this.isLogin) {
        this.$router.go();
      }

      if (e.isTrusted) {
        this.messageSingIn = 'loading...';
        this.disabledButton = true;
      }
    },

    singOut(e) {
      this.$cookies.remove('_token');

      if (this.isLogin) {
        this.$router.push('/');
        this.$router.go();
      }

      if (e.isTrusted) {
        this.messageLogOut = 'loading...';
        this.disabledButton = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/LoginModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginModalvue_type_script_lang_js_ = (LoginModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LoginModal.vue



function LoginModal_injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LoginModal_component = Object(componentNormalizer["a" /* default */])(
  components_LoginModalvue_type_script_lang_js_,
  LoginModalvue_type_template_id_09d64f0e_scoped_true_render,
  LoginModalvue_type_template_id_09d64f0e_scoped_true_staticRenderFns,
  false,
  LoginModal_injectStyles,
  "09d64f0e",
  "336f0203"
  
)

/* harmony default export */ var LoginModal = (LoginModal_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/account.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var accountvue_type_script_lang_js_ = ({
  name: 'AccountLayout',
  components: {
    TopBar: TopBar,
    AppHeader: AppHeader,
    BottomNavigation: BottomNavigation,
    CartSidebar: CartSidebar,
    LoginModal: LoginModal
  }
});
// CONCATENATED MODULE: ./layouts/account.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/account.vue



function account_injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var account_component = Object(componentNormalizer["a" /* default */])(
  layouts_accountvue_type_script_lang_js_,
  accountvue_type_template_id_4449e293_render,
  accountvue_type_template_id_4449e293_staticRenderFns,
  false,
  account_injectStyles,
  null,
  "007aeaa6"
  
)

/* harmony default export */ var account = (account_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/blank.vue?vue&type=template&id=05b301b7&
var blankvue_type_template_id_05b301b7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"layout\">","</div>",[_c('nuxt',{key:_vm.route.fullPath})],1)])}
var blankvue_type_template_id_05b301b7_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/blank.vue?vue&type=template&id=05b301b7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/blank.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var blankvue_type_script_lang_js_ = ({
  name: 'BlankLayout',

  setup() {
    const route = Object(runtime["o" /* useRoute */])();
    return {
      route
    };
  }

});
// CONCATENATED MODULE: ./layouts/blank.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_blankvue_type_script_lang_js_ = (blankvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/blank.vue



function blank_injectStyles (context) {
  
  var style0 = __webpack_require__(192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var blank_component = Object(componentNormalizer["a" /* default */])(
  layouts_blankvue_type_script_lang_js_,
  blankvue_type_template_id_05b301b7_render,
  blankvue_type_template_id_05b301b7_staticRenderFns,
  false,
  blank_injectStyles,
  null,
  "8afebf58"
  
)

/* harmony default export */ var blank = (blank_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/default.vue?vue&type=template&id=c4fe17ce&
var defaultvue_type_template_id_c4fe17ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('TopBar',{staticClass:"desktop-only"})],1),_vm._ssrNode(" "),_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"layout\">","</div>",[_c('nuxt',{key:_vm.route.fullPath}),_vm._ssrNode(" "),_c('BottomNavigation'),_vm._ssrNode(" "),_c('CartSidebar'),_vm._ssrNode(" "),_c('WishlistSidebar'),_vm._ssrNode(" "),_c('LoginModal'),_vm._ssrNode(" "),_c('Notification')],2),_vm._ssrNode(" "),_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('AppFooter')],1)],2)}
var defaultvue_type_template_id_c4fe17ce_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=c4fe17ce&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/AppFooter.vue?vue&type=template&id=a863aee2&
var AppFootervue_type_template_id_a863aee2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfFooter',{staticClass:"footer",attrs:{"column":4,"multiple":""}},[_c('SfFooterColumn',{attrs:{"title":_vm.$t('About us')}},[_c('SfList',_vm._l((_vm.aboutUs),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":_vm.$t('Departments')}},[_c('SfList',_vm._l((_vm.departments),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":_vm.$t('Help')}},[_c('SfList',_vm._l((_vm.help),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":_vm.$t('Payment & Delivery')}},[_c('SfList',_vm._l((_vm.paymentsDelivery),function(item){return _c('SfListItem',{key:item},[_c('SfMenuItem',{attrs:{"label":_vm.$t(item)}})],1)}),1)],1),_vm._v(" "),_c('SfFooterColumn',{attrs:{"title":"Social"}},[_c('div',{staticClass:"footer__socials"},_vm._l((_vm.social),function(item){return _c('SfImage',{key:item,staticClass:"footer__social-image",attrs:{"src":_vm.addBasePath('/icons/'+item+'.svg'),"alt":item,"width":"32","height":"32"}})}),1)])],1)}
var AppFootervue_type_template_id_a863aee2_staticRenderFns = []


// CONCATENATED MODULE: ./components/AppFooter.vue?vue&type=template&id=a863aee2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=template&id=4b6677e4&
var SfFootervue_type_template_id_4b6677e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"sf-footer"},[_vm._ssrNode("<div class=\"sf-footer__container\""+(_vm._ssrStyle(null,{ 'grid-template-columns': ' 1fr'.repeat(_vm.column) }, null))+">","</div>",[_vm._t("default")],2)])}
var SfFootervue_type_template_id_4b6677e4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=template&id=4b6677e4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=template&id=5f108f20&
var SfFooterColumnvue_type_template_id_5f108f20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-footer-column"},[_c('SfButton',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-button--pure sf-footer-column__title",attrs:{"type":"button"},on:{"click":function($event){return _vm.toggle(_vm.title)}}},[_vm._v("\n    "+_vm._s(_vm.title)+"\n    "),_c('span',{staticClass:"sf-footer-column__chevron"},[_c('SfChevron',{class:{ 'sf-chevron--top': _vm.isColumnOpen }})],1)]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"sf-fade"}},[_c('div',{staticClass:"sf-footer-column__content",class:{ 'display-none': !_vm.isColumnOpen }},[_vm._t("default")],2)])],2)}
var SfFooterColumnvue_type_template_id_5f108f20_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=template&id=5f108f20&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfChevron/SfChevron.vue + 4 modules
var SfChevron = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfFooterColumnvue_type_script_lang_js_ = ({
  name: "SfFooterColumn",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfChevron: SfChevron["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  inject: ["items"],

  data() {
    return {
      isColumnOpen: true
    };
  },

  watch: {
    "$parent.isOpen": {
      handler(newVal) {
        this.isColumnOpen = newVal.includes(this.title);
      }

    }
  },

  created() {
    this.items.push(this.title);
  },

  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfFooterColumnvue_type_script_lang_js_ = (SfFooterColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/_internal/SfFooterColumn.vue





/* normalize component */

var SfFooterColumn_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfFooterColumnvue_type_script_lang_js_,
  SfFooterColumnvue_type_template_id_5f108f20_render,
  SfFooterColumnvue_type_template_id_5f108f20_staticRenderFns,
  false,
  null,
  null,
  "98dce8d8"
  
)

/* harmony default export */ var SfFooterColumn = (SfFooterColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.component("SfFooterColumn", SfFooterColumn);
/* harmony default export */ var SfFootervue_type_script_lang_js_ = ({
  name: "SfFooter",
  props: {
    column: {
      type: Number,
      default: 4
    },
    multiple: {
      type: Boolean,
      default: true
    },
    open: {
      type: [String, Array],
      default: () => []
    }
  },

  provide() {
    return {
      items: this.items
    };
  },

  data() {
    return {
      isOpen: [],
      items: []
    };
  },

  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])()
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.isOpen = mobile ? [...this.open] : [...this.items];
        });
      },

      immediate: true
    }
  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  },

  methods: {
    toggle(payload) {
      if (!this.isMobile) return;

      if (!this.multiple) {
        this.isOpen = [payload];
      } else if (this.isOpen.includes(payload)) {
        this.isOpen = this.isOpen.filter(item => item !== payload);
      } else {
        this.isOpen.push(payload);
      }

      this.$emit("change", this.isOpen);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfFooter_SfFootervue_type_script_lang_js_ = (SfFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfFooter/SfFooter.vue



function SfFooter_injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfFooter_component = Object(componentNormalizer["a" /* default */])(
  SfFooter_SfFootervue_type_script_lang_js_,
  SfFootervue_type_template_id_4b6677e4_render,
  SfFootervue_type_template_id_4b6677e4_staticRenderFns,
  false,
  SfFooter_injectStyles,
  null,
  "3bbac26a"
  
)

/* harmony default export */ var SfFooter = (SfFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/AppFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AppFootervue_type_script_lang_js_ = ({
  components: {
    SfFooter: SfFooter,
    SfList: SfList["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */]
  },

  setup() {
    return {
      addBasePath: lib_index_es["f" /* addBasePath */]
    };
  },

  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  }

});
// CONCATENATED MODULE: ./components/AppFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFootervue_type_script_lang_js_ = (AppFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/AppFooter.vue



function AppFooter_injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppFooter_component = Object(componentNormalizer["a" /* default */])(
  components_AppFootervue_type_script_lang_js_,
  AppFootervue_type_template_id_a863aee2_render,
  AppFootervue_type_template_id_a863aee2_staticRenderFns,
  false,
  AppFooter_injectStyles,
  null,
  "5540562d"
  
)

/* harmony default export */ var AppFooter = (AppFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/WishlistSidebar.vue?vue&type=template&id=61600360&scoped=true&
var WishlistSidebarvue_type_template_id_61600360_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wishlist"}},[_c('SfSidebar',{staticClass:"sidebar sf-sidebar--right",attrs:{"visible":_vm.isWishlistSidebarOpen,"button":false,"title":"My Wishlist"},on:{"close":_vm.toggleWishlistSidebar},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{staticClass:"heading__wrapper"},[_c('SfHeading',{staticClass:"sf-heading--left",attrs:{"level":3,"title":"My wishlist"}}),_vm._v(" "),_c('SfButton',{staticClass:"heading__close-button sf-button--pure",attrs:{"aria-label":"Wishlist sidebar close button"},on:{"click":_vm.toggleWishlistSidebar}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px","color":"gray-primary"}})],1)],1)]},proxy:true},{key:"content-bottom",fn:function(){return [_c('SfButton',{staticClass:"sf-button--full-width color-secondary",on:{"click":_vm.toggleWishlistSidebar}},[_vm._v("\n        "+_vm._s(_vm.$t('Start shopping'))+"\n      ")])]},proxy:true}])},[_vm._v(" "),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.totalItems)?_c('div',{key:"my-wishlist",staticClass:"my-wishlist"},[_c('div',{staticClass:"my-wishlist__total-items"},[_vm._v("Total items: "),_c('strong',[_vm._v(_vm._s(_vm.totalItems))])]),_vm._v(" "),_c('div',{staticClass:"collected-product-list"},[_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((_vm.products),function(product){return _c('SfCollectedProduct',{key:_vm.wishlistGetters.getItemSku(product),staticClass:"collected-product",attrs:{"image":_vm.addBasePath(_vm.wishlistGetters.getItemImage(product)),"title":_vm.wishlistGetters.getItemName(product),"regular-price":_vm.$n(_vm.wishlistGetters.getItemPrice(product).regular, 'currency'),"special-price":_vm.wishlistGetters.getItemPrice(product).special && _vm.$n(_vm.wishlistGetters.getItemPrice(product).special, 'currency'),"stock":99999,"image-width":"180","image-height":"200"},on:{"click:remove":function($event){return _vm.removeItem({ product: product })}},scopedSlots:_vm._u([{key:"configuration",fn:function(){return [_c('div',{staticClass:"collected-product__properties"},_vm._l((_vm.wishlistGetters.getItemAttributes(product, ['color', 'size'])),function(attribute,key){return _c('SfProperty',{key:key,attrs:{"name":key,"value":attribute}})}),1)]},proxy:true},{key:"input",fn:function(ref){return [_vm._v(" ")]}}],null,true)})}),1)],1),_vm._v(" "),_c('div',{staticClass:"sidebar-bottom"},[_c('SfProperty',{staticClass:"sf-property--full-width my-wishlist__total-price",scopedSlots:_vm._u([{key:"name",fn:function(){return [_c('span',{staticClass:"my-wishlist__total-price-label"},[_vm._v("Total price:")])]},proxy:true},{key:"value",fn:function(){return [_c('SfPrice',{attrs:{"regular":_vm.$n(_vm.totals.subtotal, 'currency')}})]},proxy:true}],null,false,1511914072)})],1)]):_c('div',{key:"empty-wishlist",staticClass:"empty-wishlist"},[_c('div',{staticClass:"empty-wishlist__banner"},[_c('SfImage',{staticClass:"empty-wishlist__icon",attrs:{"src":_vm.addBasePath('/icons/empty-cart.svg'),"alt":"Empty bag"}}),_vm._v(" "),_c('SfHeading',{staticClass:"empty-wishlist__label",attrs:{"title":"Your bag is empty","description":"Looks like you haven’t added any items to the bag yet. Start\n            shopping to fill it in."}})],1)])])],1)],1)}
var WishlistSidebarvue_type_template_id_61600360_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/WishlistSidebar.vue?vue&type=template&id=61600360&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/WishlistSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var WishlistSidebarvue_type_script_lang_js_ = ({
  name: 'Wishlist',
  components: {
    SfSidebar: SfSidebar["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfProperty: SfProperty["a" /* default */],
    SfPrice: SfPrice["a" /* default */],
    SfCollectedProduct: SfCollectedProduct,
    SfImage: SfImage["a" /* default */]
  },

  setup() {
    const {
      isWishlistSidebarOpen,
      toggleWishlistSidebar
    } = Object(composables["c" /* useUiState */])();
    const {
      wishlist,
      removeItem
    } = Object(index_es["q" /* useWishlist */])();
    const {
      isAuthenticated
    } = Object(index_es["m" /* useUser */])();
    const products = Object(runtime["a" /* computed */])(() => index_es["u" /* wishlistGetters */].getItems(wishlist.value));
    const totals = Object(runtime["a" /* computed */])(() => index_es["u" /* wishlistGetters */].getTotals(wishlist.value));
    const totalItems = Object(runtime["a" /* computed */])(() => index_es["u" /* wishlistGetters */].getTotalItems(wishlist.value));
    return {
      addBasePath: lib_index_es["f" /* addBasePath */],
      isAuthenticated,
      products,
      removeItem,
      isWishlistSidebarOpen,
      toggleWishlistSidebar,
      totals,
      totalItems,
      wishlistGetters: index_es["u" /* wishlistGetters */]
    };
  }

});
// CONCATENATED MODULE: ./components/WishlistSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WishlistSidebarvue_type_script_lang_js_ = (WishlistSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/WishlistSidebar.vue



function WishlistSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WishlistSidebar_component = Object(componentNormalizer["a" /* default */])(
  components_WishlistSidebarvue_type_script_lang_js_,
  WishlistSidebarvue_type_template_id_61600360_scoped_true_render,
  WishlistSidebarvue_type_template_id_61600360_scoped_true_staticRenderFns,
  false,
  WishlistSidebar_injectStyles,
  "61600360",
  "5d62ceb0"
  
)

/* harmony default export */ var WishlistSidebar = (WishlistSidebar_component.exports);
// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(61);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Notification.vue?vue&type=template&id=46e41682&scoped=true&
var Notificationvue_type_template_id_46e41682_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"notifications",attrs:{"tag":"div","name":"slide-fade"}},_vm._l((_vm.notifications),function(notification){return _c('SfNotification',{key:notification.id,attrs:{"message":notification.message,"action":notification.action && notification.action.text,"type":notification.type,"visible":""},on:{"click:close":notification.dismiss,"click:action":function($event){notification.action && notification.action.onClick()}},scopedSlots:_vm._u([(notification.icon)?{key:"icon",fn:function(){return [_c('SfIcon',{attrs:{"icon":notification.icon,"color":"white"}})]},proxy:true}:null],null,true)})}),1)}
var Notificationvue_type_template_id_46e41682_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification.vue?vue&type=template&id=46e41682&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue + 4 modules
var SfNotification = __webpack_require__(220);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Notification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  name: 'Notification',
  components: {
    SfNotification: SfNotification["a" /* default */],
    SfIcon: SfIcon["a" /* default */]
  },

  setup() {
    const {
      notifications
    } = Object(composables["b" /* useUiNotification */])();
    return {
      notifications
    };
  }

});
// CONCATENATED MODULE: ./components/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Notification.vue



function Notification_injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Notification_component = Object(componentNormalizer["a" /* default */])(
  components_Notificationvue_type_script_lang_js_,
  Notificationvue_type_template_id_46e41682_scoped_true_render,
  Notificationvue_type_template_id_46e41682_scoped_true_staticRenderFns,
  false,
  Notification_injectStyles,
  "46e41682",
  "a099862c"
  
)

/* harmony default export */ var Notification = (Notification_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: 'DefaultLayout',
  components: {
    LazyHydrate: external_vue_lazy_hydration_default.a,
    TopBar: TopBar,
    AppHeader: AppHeader,
    BottomNavigation: BottomNavigation,
    AppFooter: AppFooter,
    CartSidebar: CartSidebar,
    WishlistSidebar: WishlistSidebar,
    LoginModal: LoginModal,
    Notification: Notification
  },

  setup(_, {
    root
  }) {
    const route = Object(runtime["o" /* useRoute */])();
    const {
      load: loadStores
    } = Object(index_es["l" /* useStore */])();
    const {
      load: loadUser
    } = Object(index_es["m" /* useUser */])();
    const {
      load: loadCart
    } = Object(index_es["f" /* useCart */])();
    const {
      load: loadWishlist
    } = Object(index_es["q" /* useWishlist */])();
    Object(lib_index_es["k" /* onSSR */])(async () => {
      await Promise.all([loadStores(), loadUser(), loadCart(), loadWishlist()]);
    });
    return {
      route
    };
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_c4fe17ce_render,
  defaultvue_type_template_id_c4fe17ce_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "9bd2a67e"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_account": sanitizeComponent(account),
  "_blank": sanitizeComponent(blank),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(200), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 18 modules
var framework = __webpack_require__(30);

// CONCATENATED MODULE: ./.nuxt/vuetify/options.js
/* harmony default export */ var vuetify_options = ({});
// CONCATENATED MODULE: ./.nuxt/vuetify/plugin.js



external_vue_default.a.use(framework["a" /* default */], {});
/* harmony default export */ var vuetify_plugin = (ctx => {
  const vuetifyOptions = typeof vuetify_options === 'function' ? vuetify_options(ctx) : vuetify_options;
  vuetifyOptions.icons = vuetifyOptions.icons || {};
  vuetifyOptions.icons.iconfont = 'mdi';
  const vuetify = new framework["a" /* default */](vuetifyOptions);
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
});
// CONCATENATED MODULE: ./.nuxt/composition-api/plugin.mjs

/* harmony default export */ var composition_api_plugin = (runtime["d" /* globalPlugin */]);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(53);

// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(119);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var dist = __webpack_require__(120);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./lang/en.js
/* eslint-disable  */
/* harmony default export */ var en = ({
  'Categories': 'Categories',
  'Filters': 'Filters',
  'Sort by': 'Sort by',
  'Products found': 'Products found',
  'About us': 'About us',
  'Who we are': 'Who we are',
  'Quality in the details': 'Quality in the details',
  'Customer Reviews': 'Customer Reviews',
  'Departments': 'Departments',
  'Women fashion': 'Women fashion',
  'Men fashion': 'Men fashion',
  'Kidswear': 'Kidswear',
  'Home': 'Home',
  'Help': 'Help',
  'Customer service': 'Customer service',
  'Size guide': 'Size guide',
  'Contact us': 'Contact us',
  'Payment & Delivery': 'Payment & Delivery',
  'Purchase terms': 'Purchase terms',
  'Guarantee': 'Guarantee',
  'Description': 'Description',
  'Read reviews': 'Read reviews',
  'Additional Information': 'Additional Information',
  'Save for later': 'Save for later',
  'Add to compare': 'Add to compare',
  'Match it with': 'Match it with',
  'Share your look': 'Share your look',
  'Product description': `The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common "problem" areas. Find stunning women's cocktail dresses and party dresses.`,
  'Brand': 'Brand',
  'Instruction1': 'Take care of me',
  'Instruction2': 'Just here for the care instructions?',
  'Instruction3': 'Yeah, we thought so',
  'Items': 'Items',
  'View': 'View',
  'Show on page': 'Show on page',
  'Done': 'Done',
  'Clear all': 'Clear all',
  'Empty': 'Looks like you haven’t added any items to the bag yet. Start shopping to fill it in.',
  'Help & FAQs': 'Help & FAQs',
  'Download': 'Download our application.',
  'Find out more': 'Find out more',
  'Login': 'Login',
  'Forgotten password?': 'Forgotten password?',
  'No account': `Don't have an account yet?`,
  'Register today': 'Register today',
  'Go to checkout': 'Go to checkout',
  'Go back shopping': 'Go back shopping',
  'Personal details': 'Personal details',
  'Edit': 'Edit',
  'Shipping details': 'Shipping details',
  'Billing address': 'Billing address',
  'Same as shipping address': 'Same as shipping address',
  'Payment method': 'Payment method',
  'Apply': 'Apply',
  'Update password': 'Update password',
  'Update personal data': 'Update personal data',
  'Item': 'Item',
  'Go back': 'Go back',
  'Continue to shipping': 'Continue to shipping',
  'I agree to': 'I agree to',
  'Terms and conditions': 'Terms and conditions',
  'Pay for order': 'Pay for order',
  'Log into your account': 'Log into your account',
  'or fill the details below': 'or fill the details below',
  'Enjoy your free account': 'Enjoy these perks with your free account!',
  'Continue to payment': 'Continue to payment',
  'Order No.': 'Order No.',
  'Successful placed order': 'You have successfully placed the order. You can check status of your order by using our delivery status feature. You will receive an order confirmation e-mail with details of your order and a link to track its progress.',
  'Info after order': 'You can log to your account using e-mail and password defined earlier. On your account you can edit your profile data, check history of transactions, edit subscription to newsletter.',
  'Allow order notifications': 'Allow order notifications',
  'Feedback': 'Your feedback is important to us. Let us know what we could improve.',
  'Send my feedback': 'Send my feedback',
  'Go back to shop': 'Go back to shop',
  'Read all reviews': 'Read all reviews',
  'Color': 'Color',
  'Contact details updated': 'Keep your addresses and contact details updated.',
  'Manage billing addresses': 'Manage all the billing addresses you want (work place, home address...) This way you won"t have to enter the billing address manually with each order.',
  'Change': 'Change',
  'Delete': 'Delete',
  'Add new address': 'Add new address',
  'Set up newsletter': 'Set up your newsletter and we will send you information about new products and trends from the sections you selected every week.',
  'Sections that interest you': 'Sections that interest you',
  'Save changes': 'Save changes',
  'Read and understand': 'I have read and understand the',
  'Privacy': 'Privacy',
  'Cookies Policy': 'Cookies Policy',
  'Commercial information': 'and agree to receive personalized commercial information from Brand name by email',
  'Feel free to edit': 'Feel free to edit any of your details below so your account is always up to date',
  'Use your personal data': 'At Brand name, we attach great importance to privacy issues and are committed to protecting the personal data of our users. Learn more about how we care and use your personal data in the',
  'Privacy Policy': 'Privacy Policy',
  'Change password your account': 'If you want to change the password to access your account, enter the following information',
  'Your current email address is': 'Your current email address is',
  'Product': 'Product',
  'Details and status orders': 'Check the details and status of your orders in the online store. You can also cancel your order or request a return.',
  'You currently have no orders': 'You currently have no orders',
  'Start shopping': 'Start shopping',
  'Download': 'Download',
  'Download all': 'Download all',
  'View details': 'View details',
  'Manage shipping addresses': 'Manage all the shipping addresses you want (work place, home address...) This way you won"t have to enter the shipping address manually with each order.',
  'Quantity': 'Quantity',
  'Price': 'Price',
  'Back to homepage': 'Back to homepage',
  'Select shipping method': 'Select shipping method',
  'Review my order': 'Review my order',
  'Select payment method': 'Select payment method',
  'Make an order': 'Make an order',
  'or': 'or',
  'login in to your account': 'login in to your account',
  'Create an account': 'Create an account',
  'Your bag is empty': 'Your bag is empty',
  'Cancel': 'Cancel',
  'See all': 'See all',
  'See all results': 'See all results',
  'We haven’t found any results for given phrase': 'We haven’t found any results for given phrase',
  'You haven’t searched for items yet': 'You haven’t searched for items yet.',
  'Let’s start now – we’ll help you': 'Let’s start now – we’ll help you.',
  'Search results': 'Search results',
  'Product suggestions': 'Product suggestions',
  'Search for items': 'Search for items',
  'Enter promo code': 'Enter promo code',
  'Shipping method': 'Shipping method',
  'Continue to billing': 'Continue to billing',
  'Payment methods': 'Payment methods',
  'Shipping address': 'Shipping address',
  'Subtotal': 'Subtotal',
  'Shipping': 'Shipping',
  'Total price': 'Total price',
  'Payment': 'Payment',
  'Order summary': 'Order summary',
  'Products': 'Products',
  'Total': 'Total',
  'Reset Password': 'Reset Password',
  'Save Password': 'Save Password',
  'Back to home': 'Back to home',
  'Forgot Password': 'If you can’t remember your password, you can reset it.',
  'Thank You Inbox': 'If the message is not arriving in your inbox, try another email address you might’ve used to register.',
  'Sign in': 'Sign in',
  'Register': 'Register',
  'Password Changed': 'Password successfuly changed. You can now go back to homepage and sign in.',
  'Password': 'Password',
  'Repeat Password': 'Repeat Password',
  'Forgot Password Modal Email': 'Email you are using to sign in:',
  forgotPasswordConfirmation: 'Thanks! If there is an account registered with the {0} email, you will find message with a password reset link in your inbox.',
  subscribeToNewsletterModalContent: 'After signing up for the newsletter, you will receive special offers and messages from VSF via email. We will not sell or distribute your email to any third party at any time. Please see our {0}.',
  'Subscribe': 'Subscribe',
  'Subscribe to newsletter': 'Subscribe to newsletter',
  'Email address': 'Email address',
  'I confirm subscription': 'I confirm subscription',
  'You can unsubscribe at any time': 'You can unsubscribe at any time',
  'show more': 'show more',
  'hide': 'hide',
  'Change to grid view': 'Change to grid view',
  'Change to list view': 'Change to list view',
  'Delivery': 'Delivery',
  'Pickup in store': 'Pickup in store',
  'Free': 'Free',
  'Select Channel': 'Select Channel',
  'Remove coupon': 'Remove coupon',
  'This promo code is invalid': 'This promo code is invalid',
  'Search results': 'Search results',
  'You haven\'t searched for items yet': 'You haven\'t searched for items yet',
  'Let\'s start now - we\'ll help you': 'Let\'s start now - we\'ll help you'
});
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js

const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options_options = {
  vueI18n: {
    "fallbackLocale": "en",
    "numberFormats": {
      "en": {
        "currency": {
          "style": "currency",
          "currency": "USD",
          "currencyDisplay": "symbol"
        }
      },
      "de": {
        "currency": {
          "style": "currency",
          "currency": "EUR",
          "currencyDisplay": "symbol"
        }
      }
    }
  },
  vueI18nLoader: false,
  locales: [{
    "code": "en",
    "label": "English",
    "file": "en.js",
    "iso": "en"
  }, {
    "code": "de",
    "label": "German",
    "file": "de.js",
    "iso": "de"
  }],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/diego_818/storefront-b2b/lang",
  rootRedirect: null,
  detectBrowserLanguage: {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "vsf-locale",
    "cookieSecure": false,
    "fallbackLocale": "",
    "onlyOnNoPrefix": false,
    "onlyOnRoot": false,
    "useCookie": true
  },
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {
    "moduleName": "i18n",
    "syncLocale": false,
    "syncMessages": false,
    "syncRouteParams": true
  },
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  currency: "USD",
  country: "US",
  countries: [{
    "name": "US",
    "label": "United States"
  }, {
    "name": "AT",
    "label": "Austria"
  }, {
    "name": "DE",
    "label": "Germany"
  }, {
    "name": "NL",
    "label": "Netherlands"
  }],
  currencies: [{
    "name": "EUR",
    "label": "Euro"
  }, {
    "name": "USD",
    "label": "Dollar"
  }],
  normalizedLocales: [{
    "code": "en",
    "label": "English",
    "file": "en.js",
    "iso": "en"
  }, {
    "code": "de",
    "label": "German",
    "file": "de.js",
    "iso": "de"
  }],
  localeCodes: ["en", "de"]
};
const localeMessages = {
  'en.js': () => Promise.resolve(en),
  'de.js': () => __webpack_require__.e(/* import() | lang-de.js */ 1).then(__webpack_require__.bind(null, 388))
};
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(57);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(202);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */

function formatMessage(text) {
  return `[nuxt-i18n] ${text}`;
}
/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}
/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */

function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // Normalise appLocales input

  /** @type {{ code: string, iso: string }[]} */

  const normalizedAppLocales = [];

  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  } // First pass: match exact locale.


  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());

    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);

    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : undefined;
}
/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */

function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;

  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }

  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);

    if (matchingLocale) {
      return matchingLocale.code;
    }
  }

  return '';
}
/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */

function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`, 'i');
}
/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */

function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return '';
  };

  return getLocaleFromRoute;
}
/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */

function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

function setLocaleCookie(locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  /** @type {import('cookie').CookieSerializeOptions} */

  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}
// EXTERNAL MODULE: ./node_modules/ufo/dist/index.cjs
var ufo_dist = __webpack_require__(27);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js


 // @ts-ignore


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;

  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }

  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = options_options.normalizedLocales.find(l => l.code === locale);

    if (localeObject) {
      const {
        file
      } = localeObject;

      if (file) {
        /*  */

        /** @type {import('vue-i18n').LocaleMessageObject | undefined} */
        let messages;

        if (false) {}

        if (!messages) {
          try {
            // @ts-ignore
            const getter = await localeMessages[file]().then(m => m.default || m);
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(formatMessage(`Failed loading async locale export: ${error.message}`));
          }
        }

        if (messages) {
          i18n.setLocaleMessage(locale, messages);
          i18n.loadedLanguages.push(locale);
        }
        /*  */

      } else {
        console.warn(formatMessage(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */

function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });

    if (domain) {
      return domain;
    }
  }

  return baseUrl;
}
/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */

function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);

  if (lang && lang.domain) {
    if (Object(ufo_dist["hasProtocol"])(lang.domain)) {
      return lang.domain;
    }

    let protocol;

    if (true) {
      protocol = req && dist_default()(req) ? 'https' : 'http';
    } else {}

    return `${protocol}://${lang.domain}`;
  } // eslint-disable-next-line no-console


  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}
/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */

function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};

          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 *
 * @param  {import('vuex').Store<void>} store
 * @param  {string | null} locale The current locale
 * @param  {object | null} messages Current messages
 * @param  {ResolvedOptions['vuex']} vuex
 * @return {Promise<void>}
 */

async function syncVuex(store, locale = null, messages = null, vuex) {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
}
/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */

function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(formatMessage('Route params should be an object'));
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}
/**
 * @param {any} value
 * @return {boolean}
 */

function isObject(value) {
  return value && !Array.isArray(value) && typeof value === 'object';
}
// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(52);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/head-meta.js
















/**
 * @this {import('vue/types/vue').Vue}
 * @return {import('vue-meta').MetaInfo}
 */

function nuxtI18nHead({
  addDirAttribute = true,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }
  /** @type {import('../../types/vue').NuxtI18nMeta} */


  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || options_options.defaultDirection;
  /**
   * Adding Direction Attribute:
   */

  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  /**
   * Adding SEO Meta:
   */


  if (addSeoAttributes && ( // @ts-ignore
  external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && this.$options[Constants.COMPONENT_OPTIONS_KEY] !== false && // @ts-ignore
  !(this.$options[Constants.COMPONENT_OPTIONS_KEY] && this.$options[Constants.COMPONENT_OPTIONS_KEY].seo === false)) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales =
    /** @type {import('../../types').LocaleObject[]} */
    this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }
  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addHreflangLinks(locales, baseUrl, link) {
    if (options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */


    const localeMap = new Map();

    for (const locale of locales) {
      const localeIso = locale.iso;

      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(formatMessage('Locale ISO code is required to generate alternate link'));
        continue;
      }

      const [language, region] = localeIso.split('-');

      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }

      localeMap.set(localeIso, locale);
    }

    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);

      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }

    if (options_options.defaultLocale) {
      const localePath = this.switchLocalePath(options_options.defaultLocale);

      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addCanonicalLinks(baseUrl, link) {
    const currentRoute = this.localeRoute({ ...this.$route,
      name: this.getRouteBaseName()
    });
    const canonicalPath = currentRoute ? currentRoute.path : null;

    if (canonicalPath) {
      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href: toAbsoluteUrl(canonicalPath, baseUrl)
      });
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

    if (!hasCurrentLocaleAndIso) {
      return;
    }

    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });

    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }
  /**
   * @param {string | undefined} str
   * @return {string}
   */


  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }
  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */


  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }

    return baseUrl + urlOrPath;
  }

  return metaObject;
}
/**
 * @deprecated Use `nuxtI18nHead()` instead.
 * @this {import('vue/types/vue').Vue}
 */

function nuxtI18nSeo() {
  return nuxtI18nHead.call(this, {
    addDirAttribute: false,
    addSeoAttributes: true
  });
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.seo.js


/** @type {Vue.PluginObject<void>} */

const plugin_seo_plugin = {
  install(Vue) {
    Vue.mixin({
      head() {
        return nuxtI18nHead.call(this, {
          addDirAttribute: false,
          addSeoAttributes: true
        });
      }

    });
  }

};
external_vue_default.a.use(plugin_seo_plugin);
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore

/** @type {import('@nuxt/types').Middleware} */

const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};

_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js



 // @ts-ignore


/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */

function plugin_routing_localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.fullPath : '';
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */


function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */


function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */


function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  let localizedRoute = Object.assign({}, route);

  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);

    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === options_options.defaultLocale; // if route has a path defined but no name, resolve full route using the path

      const isPrefixed = // don't prefix default locale
      !(isDefaultLocale && [Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options_options.strategy)) && // no prefix for any language
      !(options_options.strategy === Constants.STRATEGIES.NO_PREFIX) && // no prefix for different domains
      !i18n.differentDomains;

      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }

      localizedRoute.path = nuxtOptions.trailingSlash ? Object(ufo_dist["withTrailingSlash"])(localizedRoute.path, true) : Object(ufo_dist["withoutTrailingSlash"])(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  const resolvedRoute = this.router.resolve(localizedRoute);

  if (resolvedRoute.route.name) {
    return resolvedRoute;
  } // If didn't resolve to an existing route then just return resolved route based on original input.


  return this.router.resolve(route);
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */


function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (options_options.vuex && options_options.vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${options_options.vuex.moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);

    if (domain) {
      path = domain + path;
    }
  }

  return path;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */


function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return;
  }

  return route.name.split(options_options.routesNameSeparator)[0];
}
/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */


function getLocaleRouteName(routeName, locale) {
  let name = routeName + (options_options.strategy === Constants.STRATEGIES.NO_PREFIX ? '' : options_options.routesNameSeparator + locale);

  if (locale === options_options.defaultLocale && options_options.strategy === Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
    name += options_options.routesNameSeparator + options_options.defaultLocaleRouteNameSuffix;
  }

  return name;
}
/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */


const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */


const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/** @type {import('vue').PluginObject<void>} */


const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(plugin_routing_localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, plugin_routing_localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);

  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(58);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js





 // @ts-ignore

 // @ts-ignore


external_vue_default.a.use(external_vue_i18n_default.a);
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (options_options.vuex && store) {
    registerStore(store, options_options.vuex, options_options.localeCodes);
  }

  const {
    lazy
  } = options_options;
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);

  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 216, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];

        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {// Ignore - client-side will load the chunk asynchronously.
          }
        }
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    alwaysRedirect,
    fallbackLocale,
    onlyOnNoPrefix,
    onlyOnRoot,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } =
  /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */
  options_options.detectBrowserLanguage;
  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    } // Abort if different domains option enabled


    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (newLocale === oldLocale) {
      return;
    }

    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);

    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }

      newLocale = localeOverride;
    }

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }

    if (options_options.langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;

      if (options_options.lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];

          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }

            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }

          await Promise.all(localesToLoadPromises);
        }

        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(options_options.localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    }

    app.i18n.locale = newLocale;
    /** @type {import('../../types').LocaleObject} */

    const newLocaleProperties = options_options.normalizedLocales.find(l => l.code === newLocale) || {
      code: newLocale
    }; // In case certain locale has more properties than another, reset all the properties.

    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = undefined;
    } // Copy properties of the new locale


    for (const [key, value] of Object.entries(newLocaleProperties)) {
      external_vue_default.a.set(app.i18n.localeProperties, key, klona(value));
    }

    if (options_options.vuex) {
      await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), options_options.vuex);
    } // Must retrieve from context as it might have changed since plugin initialization.


    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getLocaleFromRoute = createLocaleFromRouteGetter(options_options.localeCodes, {
    routesNameSeparator: options_options.routesNameSeparator,
    defaultLocaleRouteNameSuffix: options_options.defaultLocaleRouteNameSuffix
  });
  /**
   * Gets the redirect path for locale.
   *
   * @param {import("vue-router").Route} route
   * @param {string | undefined} locale
   * @return {string} The redirect path for locale.
   */

  const getRedirectPathForLocale = (route, locale) => {
    // Redirects are ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (!locale || app.i18n.differentDomains || options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" or "onlyOnNoPrefix" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== options_options.defaultLocale || options_options.strategy !== Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (!redirectPath || redirectPath === route.fullPath || redirectPath.startsWith('//')) {
      return '';
    }

    return redirectPath;
  };
  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && options_options.rootRedirect) {
      let statusCode = 302;
      let path = options_options.rootRedirect;

      if (typeof options_options.rootRedirect !== 'string') {
        statusCode = options_options.rootRedirect.statusCode;
        path = options_options.rootRedirect.path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    const resolveBaseUrlOptions = {
      differentDomains: options_options.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = options_options.detectBrowserLanguage && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';

    if (options_options.skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }

    return [null, null];
  };

  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }

    await app.i18n.setLocale(app.i18n.__pendingLocale);

    app.i18n.__resolvePendingLocalePromise('');

    app.i18n.__pendingLocale = null;
  };

  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };

  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return matchBrowserLocale(options_options.normalizedLocales, parseAcceptLanguage(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };
  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */


  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      if (onlyOnRoot) {
        if (route.path !== '/') {
          return '';
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route.path.match(getLocalesRegex(options_options.localeCodes))) {
          return '';
        }
      }
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return '';
  };
  /**
   * Extends the newly created vue-i18n instance with nuxt-i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */


  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(options_options.locales);
    i18n.localeCodes = klona(options_options.localeCodes);
    i18n.localeProperties = external_vue_default.a.observable(klona(options_options.normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    }));
    i18n.defaultLocale = options_options.defaultLocale;
    i18n.differentDomains = options_options.differentDomains;
    i18n.beforeLanguageSwitch = options_options.beforeLanguageSwitch;
    i18n.onBeforeLanguageSwitch = options_options.onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = options_options.onLanguageSwitched;

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: options_options.localeCodes
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.getBrowserLocale = () => getBrowserLocale();

    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  }; // Set instance options


  const vueI18nOptions = typeof options_options.vueI18n === 'function' ? await options_options.vueI18n(context) : klona(options_options.vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance; // @ts-ignore

  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: options_options.differentDomains,
    normalizedLocales: options_options.normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;
  external_vue_default.a.prototype.$nuxtI18nHead = nuxtI18nHead;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      for (const locale of app.i18n.locales) {
        if (typeof locale === 'string') {
          continue;
        }

        locale.domain = store.state.localeDomains[locale.code];
      }
    }
  }
  /** @type {string | undefined} */


  let finalLocale = options_options.detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';

  if (!finalLocale) {
    const {
      vuex
    } = options_options;

    if (vuex && vuex.syncLocale && store && store.state[vuex.moduleName].locale !== '') {
      finalLocale = store.state[vuex.moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const domainLocale = getLocaleDomain(options_options.normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }

  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// CONCATENATED MODULE: ./node_modules/@vue-storefront/shopify/nuxt/defaultConfig.js
/* harmony default export */ var defaultConfig = ({
  disableGenerateTokenMiddleware: false,
  cookies: {
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale'
  }
});
// CONCATENATED MODULE: ./node_modules/@vue-storefront/shopify/nuxt/helpers/index.js


const getLocaleSettings = (moduleOptions, app) => {
  let localeSettings = {};

  if (moduleOptions.cookies) {
    localeSettings = {
      locale: app.$cookies.get(moduleOptions.cookies.localeCookieName),
      country: app.$cookies.get(moduleOptions.cookies.currencyCookieName),
      currency: app.$cookies.get(moduleOptions.cookies.countryCookieName)
    };
  }

  return {
    locale: app.i18n.locale || localeSettings.locale || moduleOptions.locale || defaultConfig.locale,
    country: localeSettings.country || moduleOptions.country || defaultConfig.country,
    currency: localeSettings.currency || moduleOptions.currency || defaultConfig.currency
  };
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


const mapConfigToSetupObject = ({
  moduleOptions,
  app,
  additionalProperties = {}
}) => {
  return { ...defaultConfig,
    ...moduleOptions,
    ...additionalProperties,
    ...getLocaleSettings(moduleOptions, app)
  };
};
const SP_TOKEN_COOKIE_NAME = 'vsf-shopify-token';
// CONCATENATED MODULE: ./.nuxt/nuxt.plugin.a9ebe9fc.js


const nuxt_plugin_a9ebe9fc_moduleOptions = JSON.parse('{"i18n":{"useNuxtI18nConfig":true},"locale":"en","currency":"USD","country":"US","acceptLanguage":["en","de"],"countries":[{"name":"US","label":"United States"},{"name":"AT","label":"Austria"},{"name":"DE","label":"Germany"},{"name":"NL","label":"Netherlands"}],"currencies":[{"name":"EUR","label":"Euro"},{"name":"USD","label":"Dollar"}],"locales":[{"name":"en","label":"English"},{"name":"de","label":"German"}]}'); // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars

/* harmony default export */ var nuxt_plugin_a9ebe9fc = (Object(lib_index_es["j" /* integrationPlugin */])(({
  app,
  integration
}) => {
  const onTokenChange = newToken => {
    try {
      const currentToken = app.$cookies.get(SP_TOKEN_COOKIE_NAME);

      if (!currentToken || currentToken.access_token !== newToken.access_token) {
        app.$cookies.set(SP_TOKEN_COOKIE_NAME, newToken);
      }
    } catch (e) {// Cookies on is set after request has sent.
    }
  };

  const onTokenRemove = () => {
    app.$cookies.remove(SP_TOKEN_COOKIE_NAME);
  };

  const onTokenRead = () => {
    return app.$cookies.get(SP_TOKEN_COOKIE_NAME);
  };

  integration.configure('shopify', { ...nuxt_plugin_a9ebe9fc_moduleOptions,
    app,
    additionalProperties: {
      auth: {
        onTokenChange,
        onTokenRead,
        onTokenRemove
      }
    } // other options

  });
}));
// CONCATENATED MODULE: ./.nuxt/plugins.i18n-cookies.0a71641d.js


const i18nCookiesPlugin = ({
  $cookies,
  i18n,
  app,
  redirect
}) => {
  var _app$context$req, _app$context$req$head, _i18nOptions$cookies, _i18nOptions$cookies2, _i18nOptions$cookies3;

  const i18nOptions = {
    "currency": "USD",
    "country": "US",
    "countries": [{
      "name": "US",
      "label": "United States"
    }, {
      "name": "AT",
      "label": "Austria"
    }, {
      "name": "DE",
      "label": "Germany"
    }, {
      "name": "NL",
      "label": "Netherlands"
    }],
    "currencies": [{
      "name": "EUR",
      "label": "Euro"
    }, {
      "name": "USD",
      "label": "Dollar"
    }],
    "locales": [{
      "code": "en",
      "label": "English",
      "file": "en.js",
      "iso": "en"
    }, {
      "code": "de",
      "label": "German",
      "file": "de.js",
      "iso": "de"
    }],
    "defaultLocale": "en",
    "lazy": true,
    "seo": true,
    "langDir": "lang\u002F",
    "vueI18n": {
      "fallbackLocale": "en",
      "numberFormats": {
        "en": {
          "currency": {
            "style": "currency",
            "currency": "USD",
            "currencyDisplay": "symbol"
          }
        },
        "de": {
          "currency": {
            "style": "currency",
            "currency": "EUR",
            "currencyDisplay": "symbol"
          }
        }
      }
    },
    "detectBrowserLanguage": {
      "cookieKey": "vsf-locale"
    }
  };
  const isServer = typeof window === 'undefined';
  const navigator = isServer ? undefined : window.navigator;
  const acceptedLanguage = ((_app$context$req = app.context.req) === null || _app$context$req === void 0 ? void 0 : (_app$context$req$head = _app$context$req.headers) === null || _app$context$req$head === void 0 ? void 0 : _app$context$req$head['accept-language']) || (navigator === null || navigator === void 0 ? void 0 : navigator.languages) || '';
  const isRouteValid = !!app.context.route.name;
  const cookieNames = {
    currency: ((_i18nOptions$cookies = i18nOptions.cookies) === null || _i18nOptions$cookies === void 0 ? void 0 : _i18nOptions$cookies.currencyCookieName) || lib_index_es["d" /* VSF_CURRENCY_COOKIE */],
    country: ((_i18nOptions$cookies2 = i18nOptions.cookies) === null || _i18nOptions$cookies2 === void 0 ? void 0 : _i18nOptions$cookies2.countryCookieName) || lib_index_es["c" /* VSF_COUNTRY_COOKIE */],
    locale: ((_i18nOptions$cookies3 = i18nOptions.cookies) === null || _i18nOptions$cookies3 === void 0 ? void 0 : _i18nOptions$cookies3.localeCookieName) || lib_index_es["e" /* VSF_LOCALE_COOKIE */]
  };
  const cookieLocale = $cookies.get(cookieNames.locale);
  const cookieCurrency = $cookies.get(cookieNames.currency);
  const cookieCountry = $cookies.get(cookieNames.country);
  const autoChangeCookie = {
    locale: true,
    currency: true,
    country: true,
    ...i18nOptions.autoChangeCookie
  };

  const getCurrencyByLocale = locale => {
    var _i18n$numberFormats, _i18n$numberFormats$l, _i18n$numberFormats$l2;

    return ((_i18n$numberFormats = i18n.numberFormats) === null || _i18n$numberFormats === void 0 ? void 0 : (_i18n$numberFormats$l = _i18n$numberFormats[locale]) === null || _i18n$numberFormats$l === void 0 ? void 0 : (_i18n$numberFormats$l2 = _i18n$numberFormats$l.currency) === null || _i18n$numberFormats$l2 === void 0 ? void 0 : _i18n$numberFormats$l2.currency) || i18nOptions.currency || i18nOptions.currencies.length && i18nOptions.currencies[0].name;
  };

  const utils = Object(lib_index_es["i" /* i18nRedirectsUtil */])({
    path: app.context.route.path,
    defaultLocale: i18nOptions.defaultLocale,
    availableLocales: i18nOptions.locales.map(item => item.code),
    acceptedLanguages: isServer ? acceptedLanguage.split(',').map(item => item.split(';')[0]) : acceptedLanguage,
    cookieLocale
  });
  const targetLocale = utils.getTargetLocale();
  const redirectPath = utils.getRedirectPath();

  if (!isRouteValid) {
    app.i18n.setLocale(targetLocale);
  }

  if (isServer) {
    app.i18n.cookieValues = { ...(autoChangeCookie.locale && {
        [cookieNames.locale]: targetLocale
      }),
      ...(autoChangeCookie.currency && {
        [cookieNames.currency]: getCurrencyByLocale(targetLocale)
      })
    };

    if (redirectPath) {
      redirect(redirectPath);
    }

    return;
  }

  const cookieOptions = {
    path: '/',
    sameSite: 'lax',
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) // Year from now

  };
  const settings = {
    locale: targetLocale,
    currency: getCurrencyByLocale(targetLocale),
    country: i18nOptions.country || i18nOptions.countries.length && i18nOptions.countries[0].name
  };
  const missingFields = Object.entries(settings).reduce((carry, [name, value]) => {
    return [...carry, ...(!value ? [name] : [])];
  }, []);

  if (missingFields.length) {
    throw new Error(`Following fields are missing in the i18n configuration: ${missingFields.join(', ')}`);
  }

  if (cookieLocale !== settings.locale && autoChangeCookie.locale || !cookieLocale) {
    $cookies.set(cookieNames.locale, settings.locale, cookieOptions);
  }

  if (cookieCurrency !== settings.currency && autoChangeCookie.currency || !cookieCurrency) {
    $cookies.set(cookieNames.currency, settings.currency, cookieOptions);
  }

  if (cookieCountry !== settings.country && autoChangeCookie.country || !cookieCountry) {
    $cookies.set(cookieNames.country, settings.country, cookieOptions);
  }

  i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
    if (autoChangeCookie.locale) {
      $cookies.set(cookieNames.locale, newLocale, cookieOptions);
    }

    if (autoChangeCookie.currency) {
      $cookies.set(cookieNames.currency, getCurrencyByLocale(newLocale), cookieOptions);
    }

    window.location.href = context.route.fullPath;
  };
};

/* harmony default export */ var plugins_i18n_cookies_0a71641d = (i18nCookiesPlugin);
// CONCATENATED MODULE: ./.nuxt/plugins.e2e-testing.bb4a4f14.js


const e2eTestingPlugin = ctx => {
  external_vue_default.a.directive('e2e', {
    bind: (element, binding) => {
      const enabled = ctx.isDev || ctx.env.NUXT_ENV_E2E === true.toString();
      return enabled && element.setAttribute('data-e2e', binding.value);
    }
  });
};

/* harmony default export */ var plugins_e2e_testing_bb4a4f14 = (e2eTestingPlugin);
// CONCATENATED MODULE: ./.nuxt/plugins.logger.ed1ba226.js


const loggerPlugin = ctx => {
  const {
    verbosity,
    customLogger,
    ...args
  } = {};
  Object(lib_index_es["l" /* registerLogger */])(customLogger || args, verbosity || 'error');
};

/* harmony default export */ var plugins_logger_ed1ba226 = (loggerPlugin);
// CONCATENATED MODULE: ./.nuxt/plugins.ssr.09cc13df.js



const hasRouteChanged = ctx => {
  const {
    from
  } = ctx.proxy.$router.app.context;
  const {
    current
  } = ctx.proxy.$router.history;

  if (!from) {
    return false;
  }

  return from.fullPath !== current.fullPath;
};

const ssrPlugin = () => {
  Object(lib_index_es["h" /* configureSSR */])({
    vsfRef: runtime["l" /* ssrRef */],
    onSSR: fn => {
      Object(runtime["h" /* onServerPrefetch */])(fn);

      if (typeof window !== 'undefined') {
        const vm = Object(runtime["c" /* getCurrentInstance */])();

        if (hasRouteChanged(vm)) {
          fn();
        }
      }
    }
  });
};

/* harmony default export */ var plugins_ssr_09cc13df = (ssrPlugin);
// CONCATENATED MODULE: ./.nuxt/plugins.context.d4e923bc.js
















const contextPlugin = (ctx, inject) => {
  const sharedMap = new Map();

  const useVSFContext = () => {
    const {
      $vsf,
      ...context
    } = Object(runtime["n" /* useContext */])();
    return {
      $vsf,
      ...context,
      ...$vsf
    };
  };

  Object(lib_index_es["g" /* configureContext */])({
    useVSFContext
  });
  inject('sharedRefsMap', sharedMap);
};

/* harmony default export */ var plugins_context_d4e923bc = (contextPlugin);
// CONCATENATED MODULE: ./.nuxt/device.plugin.js
 // eslint-disable-next-line

const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i; // eslint-disable-next-line

const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4));
} // eslint-disable-next-line


const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i; // eslint-disable-next-line

const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i; // eslint-disable-next-line

const REGEX_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;

function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4));
}

function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}

function isAndroid(a) {
  return /android/i.test(a);
}

function isWindows(a) {
  return /Windows/.test(a);
}

function isMacOS(a) {
  return /Mac OS X/.test(a);
} // Following regular expressions are originated from bowser(https://github.com/lancedikson/bowser).
// Copyright 2015, Dustin Diaz (the "Original Author")
// https://github.com/lancedikson/bowser/blob/master/LICENSE


const browsers = [{
  name: 'Samsung',
  test: /SamsungBrowser/i
}, {
  name: 'Edge',
  test: /edg([ea]|ios|)\//i
}, {
  name: 'Firefox',
  test: /firefox|iceweasel|fxios/i
}, {
  name: 'Chrome',
  test: /chrome|crios|crmo/i
}, {
  name: 'Safari',
  test: /safari|applewebkit/i
}];

function getBrowserName(a) {
  for (let b of browsers) {
    if (b.test.test(a)) {
      return b.name;
    }
  }

  return null;
}

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
const REFRESH_ON_RESIZE = false;

function extractDevices(ctx, userAgent = DEFAULT_USER_AGENT) {
  let mobile = null;
  let mobileOrTablet = null;
  let ios = null;
  let android = null;

  if (userAgent === 'Amazon CloudFront') {
    if (ctx.req.headers['cloudfront-is-mobile-viewer'] === 'true') {
      mobile = true;
      mobileOrTablet = true;
    }

    if (ctx.req.headers['cloudfront-is-tablet-viewer'] === 'true') {
      mobile = false;
      mobileOrTablet = true;
    }
  } else if (ctx.req && ctx.req.headers['cf-device-type']) {
    // Cloudflare
    switch (ctx.req.headers['cf-device-type']) {
      case 'mobile':
        mobile = true;
        mobileOrTablet = true;
        break;

      case 'tablet':
        mobile = false;
        mobileOrTablet = true;
        break;

      case 'desktop':
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }

  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === 'Safari';
  const isFirefox = browserName === 'Firefox';
  const isEdge = browserName === 'Edge';
  const isChrome = browserName === 'Chrome';
  const isSamsung = browserName === 'Samsung';
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    mobile,
    mobileOrTablet,
    ios,
    android,
    windows,
    macOS,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}

/* harmony default export */ var device_plugin = (async function (ctx, inject) {
  const makeFlags = () => {
    let userAgent = '';

    if (typeof ctx.req !== 'undefined') {
      userAgent = ctx.req.headers['user-agent'];
    } else if (typeof navigator !== 'undefined') {
      userAgent = navigator.userAgent;
    }

    const {
      mobile,
      mobileOrTablet,
      ios,
      android,
      windows,
      macOS,
      isSafari,
      isFirefox,
      isEdge,
      isChrome,
      isSamsung,
      isCrawler
    } = extractDevices(ctx, userAgent);
    return {
      userAgent,
      isMobile: mobile,
      isMobileOrTablet: mobileOrTablet,
      isTablet: !mobile && mobileOrTablet,
      isDesktop: !mobileOrTablet,
      isIos: ios,
      isAndroid: android,
      isWindows: windows,
      isMacOS: macOS,
      isDesktopOrTablet: !mobile,
      isSafari,
      isFirefox,
      isEdge,
      isChrome,
      isSamsung,
      isCrawler
    };
  };

  const flags = makeFlags(ctx);

  if (REFRESH_ON_RESIZE && typeof window !== 'undefined') {
    inject('device', external_vue_default.a.observable(flags));
    window.addEventListener('resize', () => {
      setTimeout(() => {
        const newFlags = makeFlags(ctx);

        for (let key in newFlags) {
          ctx.$device[key] = newFlags[key];
        }
      }, 50);
    });
  } else {
    inject('device', flags);
  }
});
// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(121);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.03acdc.png",
    "120x120": "/_nuxt/icons/icon_120x120.03acdc.png",
    "144x144": "/_nuxt/icons/icon_144x144.03acdc.png",
    "152x152": "/_nuxt/icons/icon_152x152.03acdc.png",
    "192x192": "/_nuxt/icons/icon_192x192.03acdc.png",
    "384x384": "/_nuxt/icons/icon_384x384.03acdc.png",
    "512x512": "/_nuxt/icons/icon_512x512.03acdc.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.03acdc.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.03acdc.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.03acdc.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.03acdc.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.03acdc.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.03acdc.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.03acdc.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.03acdc.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.03acdc.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.03acdc.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// CONCATENATED MODULE: ./.nuxt/composition-api/meta.mjs

/* harmony default export */ var composition_api_meta = (runtime["k" /* setMetaPlugin */]);
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./vuetify/plugin.js (mode: 'all')

 // Source: ./composition-api/plugin.mjs (mode: 'all')

 // Source: ./vue-scrollto.js (mode: 'client')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.seo.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ./nuxt.plugin.a9ebe9fc.js (mode: 'all')

 // Source: ./plugins.i18n-cookies.0a71641d.js (mode: 'all')

 // Source: ./plugins.e2e-testing.bb4a4f14.js (mode: 'all')

 // Source: ./plugins.logger.ed1ba226.js (mode: 'all')

 // Source: ./plugins.ssr.09cc13df.js (mode: 'all')

 // Source: ./plugins.context.d4e923bc.js (mode: 'all')

 // Source: ./device.plugin.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')

 // Source: ./pwa/icon.plugin.js (mode: 'all')

 // Source: ../plugins/scrollToTop.client.js (mode: 'client')

 // Source: ./composition-api/meta.mjs (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Vue Storefront Next",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "name": "theme-color",
        "content": "#5ece7b"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Vue Storefront 2 template for Shopify."
      }, {
        "name": "generator",
        "content": "Vue Storefront 2"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "preconnect",
        "href": "https:\u002F\u002Ffonts.gstatic.com",
        "crossorigin": "crossorigin"
      }, {
        "rel": "preload",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
        "as": "style"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
        "media": "print",
        "onload": "this.media='all'"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof vuetify_plugin === 'function') {
    await vuetify_plugin(app.context, inject);
  }

  if (typeof composition_api_plugin === 'function') {
    await composition_api_plugin(app.context, inject);
  }

  if (false) {}

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.seo.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.seo.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof nuxt_plugin_a9ebe9fc === 'function') {
    await nuxt_plugin_a9ebe9fc(app.context, inject);
  }

  if (typeof plugins_i18n_cookies_0a71641d === 'function') {
    await plugins_i18n_cookies_0a71641d(app.context, inject);
  }

  if (typeof plugins_e2e_testing_bb4a4f14 === 'function') {
    await plugins_e2e_testing_bb4a4f14(app.context, inject);
  }

  if (typeof plugins_logger_ed1ba226 === 'function') {
    await plugins_logger_ed1ba226(app.context, inject);
  }

  if (typeof plugins_ssr_09cc13df === 'function') {
    await plugins_ssr_09cc13df(app.context, inject);
  }

  if (typeof plugins_context_d4e923bc === 'function') {
    await plugins_context_d4e923bc(app.context, inject);
  }

  if (typeof device_plugin === 'function') {
    await device_plugin(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if (false) {}

  if (typeof composition_api_meta === 'function') {
    await composition_api_meta(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=a7a6f712&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-scrollable",class:{ 'is-open': !_vm.isHidden }},[_c('Simplebar',{ref:"content",staticClass:"sf-scrollable__content",style:(_vm.style)},[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("view-all",function(){return [_c('SfButton',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroll),expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{"click":function($event){_vm.isHidden = !_vm.isHidden}}},[(_vm.isHidden)?_c('span',[_vm._v(_vm._s(_vm.showText))]):_c('span',[_vm._v(_vm._s(_vm.hideText))])])]},null,{ hasScroll: _vm.hasScroll, showText: _vm.showText, hideText: _vm.hideText })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=a7a6f712&

// EXTERNAL MODULE: external "simplebar-vue"
var external_simplebar_vue_ = __webpack_require__(116);
var external_simplebar_vue_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_vue_);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfScrollablevue_type_script_lang_js_ = ({
  name: "SfScrollable",
  components: {
    SfButton: SfButton["a" /* default */],
    Simplebar: external_simplebar_vue_default.a
  },
  props: {
    maxContentHeight: {
      type: String,
      default: ""
    },
    showText: {
      type: String,
      default: "Show"
    },
    hideText: {
      type: String,
      default: "Hide"
    }
  },

  data() {
    return {
      isHidden: true,
      hasScroll: false,
      contentEl: undefined
    };
  },

  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim() ? this.maxContentHeight : undefined
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(".simplebar-content");
      if (typeof MutationObserver === "undefined" || !this.contentEl) return;
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, {
        childList: true
      });
    });
  },

  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfScrollable_SfScrollablevue_type_script_lang_js_ = (SfScrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfScrollable_SfScrollablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "52cc74d2"
  
)

/* harmony default export */ var SfScrollable = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("vee-validate");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.array.last-item.js");

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=template&id=48004de8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"sf-list"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=template&id=48004de8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=template&id=b0da9c0c&
var SfListItemvue_type_template_id_b0da9c0c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"sf-list__item"},[_vm._t("default")],2)}
var SfListItemvue_type_template_id_b0da9c0c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=template&id=b0da9c0c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfListItemvue_type_script_lang_js_ = ({
  name: "SfListItem"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfListItemvue_type_script_lang_js_ = (SfListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/_internal/SfListItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfListItemvue_type_script_lang_js_,
  SfListItemvue_type_template_id_b0da9c0c_render,
  SfListItemvue_type_template_id_b0da9c0c_staticRenderFns,
  false,
  null,
  null,
  "0ee443b1"
  
)

/* harmony default export */ var SfListItem = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=script&lang=js&
//
//
//
//
//


external_vue_default.a.component("SfListItem", SfListItem);
/* harmony default export */ var SfListvue_type_script_lang_js_ = ({
  name: "SfList"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfList_SfListvue_type_script_lang_js_ = (SfListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfList/SfList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfList_component = Object(componentNormalizer["a" /* default */])(
  SfList_SfListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7a84cbab"
  
)

/* harmony default export */ var SfList = __webpack_exports__["a"] = (SfList_component.exports);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ goTo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ goto_Goto; });

// NAMESPACE OBJECT: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
var easing_patterns_namespaceObject = {};
__webpack_require__.r(easing_patterns_namespaceObject);
__webpack_require__.d(easing_patterns_namespaceObject, "linear", function() { return linear; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuad", function() { return easeInQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuad", function() { return easeOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuad", function() { return easeInOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInCubic", function() { return easeInCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutCubic", function() { return easeOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutCubic", function() { return easeInOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuart", function() { return easeInQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuart", function() { return easeOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuart", function() { return easeInOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuint", function() { return easeInQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuint", function() { return easeOutQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuint", function() { return easeInOutQuint; });

// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/service/index.js
var service = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
// linear
const linear = t => t; // accelerating from zero velocity

const easeInQuad = t => t ** 2; // decelerating to zero velocity

const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

const easeInCubic = t => t ** 3; // decelerating to zero velocity

const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

const easeInQuart = t => t ** 4; // decelerating to zero velocity

const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

const easeInQuint = t => t ** 5; // decelerating to zero velocity

const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/util.js
// Return target's cumulative offset from the top
function getOffset(target) {
  if (typeof target === 'number') {
    return target;
  }

  let el = $(target);

  if (!el) {
    throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
  }

  let totalOffset = 0;

  while (el) {
    totalOffset += el.offsetTop;
    el = el.offsetParent;
  }

  return totalOffset;
}
function getContainer(container) {
  const el = $(container);
  if (el) return el;
  throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
}

function type(el) {
  return el == null ? el : el.constructor.name;
}

function $(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else if (el && el._isVue) {
    return el.$el;
  } else if (el instanceof HTMLElement) {
    return el;
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/index.js
// Extensions
 // Utilities



function goTo(_target, _settings = {}) {
  const settings = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    appOffset: true,
    ..._settings
  };
  const container = getContainer(settings.container);
  /* istanbul ignore else */

  if (settings.appOffset && goTo.framework.application) {
    const isDrawer = container.classList.contains('v-navigation-drawer');
    const isClipped = container.classList.contains('v-navigation-drawer--clipped');
    const {
      bar,
      top
    } = goTo.framework.application;
    settings.offset += bar;
    /* istanbul ignore else */

    if (!isDrawer || isClipped) settings.offset += top;
  }

  const startTime = performance.now();
  let targetLocation;

  if (typeof _target === 'number') {
    targetLocation = getOffset(_target) - settings.offset;
  } else {
    targetLocation = getOffset(_target) - getOffset(container) - settings.offset;
  }

  const startLocation = container.scrollTop;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const ease = typeof settings.easing === 'function' ? settings.easing : easing_patterns_namespaceObject[settings.easing];
  /* istanbul ignore else */

  if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

  /* istanbul ignore next */

  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
    container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
    const reachBottom = clientHeight + container.scrollTop >= container.scrollHeight;

    if (progress === 1 || // Need to go lower but reach bottom
    targetLocation > container.scrollTop && reachBottom) {
      return resolve(targetLocation);
    }

    requestAnimationFrame(step);
  }));
}
goTo.framework = {};

goTo.init = () => {};

class goto_Goto extends service["a" /* Service */] {
  constructor() {
    super();
    return goTo;
  }

}
goto_Goto.property = 'goTo';

/***/ }),
/* 211 */,
/* 212 */,
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return focus; });
const focus = {
  bind(el) {
    el._mouseHandler = function () {
      el.style.outline = "none";
    };

    el._keyHandler = function (e) {
      el.style.outline = "";
      if (e.code === "Tab") el.focus();
    };

    window.addEventListener("mousedown", el._mouseHandler);
    el.addEventListener("keyup", el._keyHandler);
  },

  unbind(el) {
    window.removeEventListener("mousedown", el._mouseHandler);
    el.removeEventListener("keyup", el._keyHandler);
  }

};

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isClient; });
const isClient = (() => typeof window !== "undefined" || typeof document !== "undefined")();

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clickOutside; });
const clickOutside = {
  bind(el, binding) {
    binding.name = "click-outside";
    const closeHandler = binding.value;

    el._outsideClickHandler = function (event) {
      if (!el.contains(event.target)) {
        event.stopPropagation();
        closeHandler();
      }
    };

    document.addEventListener("mousedown", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },

  unbind(el) {
    document.removeEventListener("mousedown", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
    el._outsideClickHandler = null;
  }

};

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=049912e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-card",class:{ 'has-colors': _vm.colors.length },attrs:{"data-testid":"product-card"}},[_vm._ssrNode("<div class=\"sf-product-card__image-wrapper\">","</div>",[_vm._t("image",function(){return [_c('SfButton',_vm._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.link,"data-testid":"product-link","aria-label":"Go To Product"}},_vm.$listeners),[(Array.isArray(_vm.image))?_vm._l((_vm.image.slice(0, 2)),function(picture,key){return _c('SfImage',{key:key,staticClass:"sf-product-card__picture",attrs:{"src":picture,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight,"placeholder":_vm.productPlaceholder}})}):_c('SfImage',{staticClass:"sf-product-card__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight,"placeholder":_vm.productPlaceholder}})],2)]},null,{ image: _vm.image, title: _vm.title, link: _vm.link, imageHeight: _vm.imageHeight, imageWidth: _vm.imageWidth }),_vm._ssrNode(" "),_vm._t("colors",function(){return [_c('SfColorPicker',{staticClass:"sf-product-card__colors",class:{ 'display-none': !_vm.colors.length },attrs:{"label":"Choose color","is-open":!_vm.isMobile || _vm.openColorPicker},on:{"click:toggle":_vm.toggleColorPicker}},[_vm._l((_vm.colors),function(color,i){return _c('SfColor',{key:color.value,staticClass:"sf-product-card__color",class:{ 'display-none': i > 3 && _vm.showBadge },attrs:{"color":color.color,"selected":color.selected},on:{"click":function($event){return _vm.handleSelectedColor(i)}}})}),_vm._v(" "),(_vm.showBadge)?_c('SfBadge',{staticClass:"sf-product-card__colors-badge color-secondary"},[_vm._v("\n          "+_vm._s(("+" + (_vm.colors.length - 4)))+"\n        ")]):_vm._e()],2)]},null,{ colors: _vm.colors }),_vm._ssrNode(" "),_vm._t("badge",function(){return [_c('SfBadge',{staticClass:"sf-product-card__badge",class:[_vm.badgeColorClass, { 'display-none': !_vm.badgeLabel }]},[_vm._v(_vm._s(_vm.badgeLabel))])]},null,{ badgeLabel: _vm.badgeLabel, badgeColor: _vm.badgeColor }),_vm._ssrNode(" "),_c('SfButton',{class:[_vm.wishlistIconClasses, { 'display-none': !_vm.wishlistIcon }],attrs:{"aria-label":(_vm.ariaLabel + " " + _vm.title),"data-testid":"product-wishlist-button"},on:{"click":_vm.toggleIsInWishlist}},[_vm._t("wishlist-icon",function(){return [(_vm.currentWishlistIcon !== false)?_c('SfIcon',{attrs:{"icon":_vm.currentWishlistIcon,"size":"22px","data-test":"sf-wishlist-icon"}}):_vm._e()]},null,{ currentWishlistIcon: _vm.currentWishlistIcon })],2),_vm._ssrNode(" "),[_vm._t("add-to-cart",function(){return [_c('SfCircleIcon',{staticClass:"sf-product-card__add-button",attrs:{"aria-label":("Add to Cart " + _vm.title),"has-badge":_vm.showAddedToCartBadge,"disabled":_vm.addToCartDisabled,"data-testid":"product-add-icon"},on:{"click":_vm.onAddToCart}},[_c('span',{staticClass:"sf-product-card__add-button--icons"},[(!_vm.isAddingToCart && !_vm.isAddedToCart)?_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[_vm._t("add-to-cart-icon",function(){return [_c('SfIcon',{key:"add_to_cart",attrs:{"icon":"add_to_cart","size":"20px","color":"white"}})]})],2):_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[_vm._t("adding-to-cart-icon",function(){return [_c('SfIcon',{key:"added_to_cart",attrs:{"icon":"added_to_cart","size":"20px","color":"white"}})]})],2)],1)])]},null,{
          isAddedToCart: _vm.isAddedToCart,
          showAddedToCartBadge: _vm.showAddedToCartBadge,
          isAddingToCart: _vm.isAddingToCart,
          title: _vm.title,
        })]],2),_vm._ssrNode(" "),_vm._t("title",function(){return [_c('SfButton',_vm._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.link,"data-testid":"product-link"}},_vm.$listeners),[_c('span',{staticClass:"sf-product-card__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])])]},null,{ title: _vm.title, link: _vm.link }),_vm._ssrNode(" "),_vm._t("price",function(){return [_c('SfPrice',{staticClass:"sf-product-card__price",class:{ 'display-none': !_vm.regularPrice },attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}})]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._ssrNode(" "),_vm._t("reviews",function(){return [_c('div',{staticClass:"sf-product-card__reviews",class:{ 'display-none': !_vm.scoreRating }},[(typeof _vm.scoreRating === 'number')?_c('SfRating',{staticClass:"sf-product-card__rating",attrs:{"max":_vm.maxRating,"score":_vm.scoreRating}}):_vm._e(),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-product-card__reviews-count",class:{ 'display-none': !_vm.reviewsCount },attrs:{"aria-label":("Read " + _vm.reviewsCount + " reviews about " + _vm.title),"data-testid":"product-review-button"},on:{"click":function($event){return _vm.$emit('click:reviews')}}},[_vm._v("\n        ("+_vm._s(_vm.reviewsCount)+")\n      ")])],1)]},null,{ maxRating: _vm.maxRating, scoreRating: _vm.scoreRating })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=049912e8&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
var colors = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfPrice/SfPrice.vue + 4 modules
var SfPrice = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfRating/SfRating.vue + 4 modules
var SfRating = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=template&id=68379f84&
var SfColorPickervue_type_template_id_68379f84_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-color-picker",class:{ 'sf-color-picker--active': _vm.isOpen }},[_c('transition',{attrs:{"name":"sf-color-picker","mode":"out-in"}},[(!_vm.isOpen)?_c('div',{key:"color-picker-button",staticClass:"sf-color-picker__button smartphone-only"},[_vm._t("open",function(){return [_c('SfButton',{staticClass:"color-secondary sf-color-picker__button-open",on:{"click":_vm.toggle}},[_vm._v("+ Colors")])]},null,{ toggle: _vm.toggle })],2):_c('div',{key:"color-picker-colors",staticClass:"sf-color-picker__colors"},[_c('SfOverlay',{staticClass:"sf-color-picker__colors__overlay smartphone-only",attrs:{"visible":_vm.isOpen}}),_vm._v(" "),_vm._t("label",function(){return [_c('div',{staticClass:"sf-color-picker__label smartphone-only",class:{ 'display-none': !_vm.label }},[_vm._v("\n          "+_vm._s(_vm.label)+"\n        ")])]},null,{ label: _vm.label }),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm._t("close",function(){return [_c('SfButton',{staticClass:"sf-button--text sf-color-picker__close smartphone-only",class:{ 'display-none': !_vm.hasClose },attrs:{"aria-label":"Close button","aria-pressed":!_vm.isOpen},on:{"click":_vm.toggle}},[_c('SfIcon',{attrs:{"icon":"cross"}})],1)]},null,{ hasClose: _vm.hasClose, toggle: _vm.toggle, isOpen: _vm.isOpen })],2)])],1)}
var SfColorPickervue_type_template_id_68379f84_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=template&id=68379f84&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfColorPickervue_type_script_lang_js_ = ({
  name: "SfColorPicker",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */]
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    hasClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$emit("click:toggle");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfColorPicker_SfColorPickervue_type_script_lang_js_ = (SfColorPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfColorPicker/SfColorPicker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfColorPicker_SfColorPickervue_type_script_lang_js_,
  SfColorPickervue_type_template_id_68379f84_render,
  SfColorPickervue_type_template_id_68379f84_staticRenderFns,
  false,
  injectStyles,
  null,
  "2c8245d6"
  
)

/* harmony default export */ var SfColorPicker = (component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfColor/SfColor.vue + 4 modules
var SfColor = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/mobile-observer.js
var mobile_observer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/images/product_placeholder.svg
var product_placeholder = __webpack_require__(82);
var product_placeholder_default = /*#__PURE__*/__webpack_require__.n(product_placeholder);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var SfProductCardvue_type_script_lang_js_ = ({
  name: "SfProductCard",
  components: {
    SfPrice: SfPrice["a" /* default */],
    SfRating: SfRating["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfImage: SfImage["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfBadge: SfBadge["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfColorPicker: SfColorPicker,
    SfColor: SfColor["a" /* default */]
  },
  props: {
    image: {
      type: [Array, Object, String],
      default: ""
    },
    imageWidth: {
      type: [String, Number],
      default: "100%"
    },
    imageHeight: {
      type: [String, Number],
      default: "auto"
    },
    badgeLabel: {
      type: String,
      default: ""
    },
    badgeColor: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    link: {
      type: [String, Object],
      default: null
    },

    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },
    maxRating: {
      type: [Number, String],
      default: 5
    },
    regularPrice: {
      type: [Number, String],
      default: null
    },
    specialPrice: {
      type: [Number, String],
      default: null
    },
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },
    isInWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },
    isInWishlist: {
      type: Boolean,
      default: false
    },
    showAddToCartButton: {
      type: Boolean,
      default: false
    },
    isAddedToCart: {
      type: Boolean,
      deafult: false
    },
    addToCartDisabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isAddingToCart: false,
      openColorPicker: false,
      productPlaceholder: product_placeholder_default.a
    };
  },

  computed: { ...Object(mobile_observer["a" /* mapMobileObserver */])(),

    isSFColors() {
      return colors["a" /* colorsValues */].includes(this.badgeColor.trim());
    },

    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },

    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon;
    },

    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },

    ariaLabel() {
      return this.isInWishlist ? "Remove from wishlist" : "Add to wishlist";
    },

    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isInWishlist ? "on-wishlist" : ""}`;
    },

    showBadge() {
      return this.colors.length > 5;
    }

  },

  beforeDestroy() {
    Object(mobile_observer["b" /* unMapMobileObserver */])();
  },

  methods: {
    toggleIsInWishlist() {
      this.$emit("click:wishlist", !this.isInWishlist);
    },

    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    },

    handleSelectedColor(colorIndex) {
      if (this.colors.length > 0) {
        this.colors.map((color, i) => {
          if (colorIndex === i) {
            this.$emit("click:colors", color);

            if (this.isMobile) {
              this.toggleColorPicker();
            }
          }
        });
      }
    },

    toggleColorPicker() {
      this.openColorPicker = !this.openColorPicker;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductCard_SfProductCardvue_type_script_lang_js_ = (SfProductCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfProductCard/SfProductCard.vue



function SfProductCard_injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfProductCard_component = Object(componentNormalizer["a" /* default */])(
  SfProductCard_SfProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  SfProductCard_injectStyles,
  null,
  "5d554136"
  
)

/* harmony default export */ var SfProductCard = __webpack_exports__["a"] = (SfProductCard_component.exports);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=template&id=3360a7dd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-select",class:{
    'is-selected': _vm.value || _vm.placeholder,
    'is-required': _vm.required,
    'is-disabled': _vm.disabled,
    'is-invalid': !_vm.valid,
  }},[_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.label))+" class=\"sf-select__label\">","</label>",[_vm._t("label",function(){return [_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]},{"label":_vm.label})],2),_vm._ssrNode(" "),_c('select',_vm._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-select__dropdown",attrs:{"id":_vm.label,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"change":_vm.changeHandler}},'select',_vm.$attrs,false),[(_vm.placeholder)?_vm._ssrNode("<option disabled=\"disabled\" value"+(_vm._ssrAttr("label",_vm.placeholder))+(_vm._ssrAttr("selected",!!_vm.placeholder))+" class=\"sf-select__placeholder sf-select__option\">","</option>",[_vm._t("placeholder",null,null,{ placeholder: _vm.placeholder }),_vm._ssrNode(_vm._ssrEscape("\n      "+_vm._s(_vm.placeholder)+"\n    "))],2):_vm._e(),_vm._ssrNode(" "),_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-select__error-message\">","</div>",[_c('transition',{attrs:{"name":"sf-fade"}},[_vm._t("errorMessage",function(){return [_c('span',{class:{ 'display-none': _vm.valid }},[_vm._v("\n          "+_vm._s(_vm.errorMessage)+"\n        ")])]},null,{ errorMessage: _vm.errorMessage })],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=template&id=3360a7dd&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=template&id=541e89fc&
var SfSelectOptionvue_type_template_id_541e89fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('option',{staticClass:"sf-select__option",attrs:{"tabindex":"0"},domProps:{"value":_vm.value}},[_vm._t("default")],2)}
var SfSelectOptionvue_type_template_id_541e89fc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=template&id=541e89fc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfSelectOptionvue_type_script_lang_js_ = ({
  name: "SfSelectOption",
  props: {
    value: {
      type: [String, Number, Object],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfSelectOptionvue_type_script_lang_js_ = (SfSelectOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/_internal/SfSelectOption.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfSelectOptionvue_type_script_lang_js_,
  SfSelectOptionvue_type_template_id_541e89fc_render,
  SfSelectOptionvue_type_template_id_541e89fc_staticRenderFns,
  false,
  null,
  null,
  "0fee7f5f"
  
)

/* harmony default export */ var SfSelectOption = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.component("SfSelectOption", SfSelectOption);
/* harmony default export */ var SfSelectvue_type_script_lang_js_ = ({
  name: "SfSelect",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    valid: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: "This field is not correct."
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeHandler(event) {
      this.$emit("input", event.target.value);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSelect_SfSelectvue_type_script_lang_js_ = (SfSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(173)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfSelect_component = Object(componentNormalizer["a" /* default */])(
  SfSelect_SfSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5d8367b7"
  
)

/* harmony default export */ var SfSelect = __webpack_exports__["a"] = (SfSelect_component.exports);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=template&id=615160f5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-characteristic"},[_vm._t("icon",function(){return [_c('div',{staticClass:"sf-characteristic__icon"},[_c('SfIcon',{attrs:{"aria-hidden":"true","color":_vm.colorIcon,"size":_vm.sizeIcon,"icon":_vm.icon}})],1)]},null,{ colorIcon: _vm.colorIcon, sizeIcon: _vm.sizeIcon, icon: _vm.icon }),_vm._ssrNode(" "),_vm._t("text",function(){return [_c('div',{staticClass:"sf-characteristic__text"},[_vm._t("title",function(){return [_c('div',{staticClass:"sf-characteristic__title"},[_vm._v(_vm._s(_vm.title))])]},null,{ title: _vm.title }),_vm._v(" "),_vm._t("description",function(){return [_c('div',{staticClass:"sf-characteristic__description"},[_vm._v(_vm._s(_vm.description))])]},null,{ description: _vm.description })],2)]},null,{ title: _vm.title, description: _vm.description })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=template&id=615160f5&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfCharacteristicvue_type_script_lang_js_ = ({
  name: "SfCharacteristic",
  components: {
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    colorIcon: {
      type: String,
      default: ""
    },
    sizeIcon: {
      type: String,
      default: ""
    },
    icon: {
      type: [String, Array],
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCharacteristic_SfCharacteristicvue_type_script_lang_js_ = (SfCharacteristicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCharacteristic_SfCharacteristicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "018a2997"
  
)

/* harmony default export */ var SfCharacteristic = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue?vue&type=template&id=ab1ab2ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"sf-fade"}},[_c('div',{staticClass:"sf-notification",class:[{ 'display-none': !_vm.visible }, _vm.colorClass]},[_vm._t("icon",function(){return [_c('SfIcon',{staticClass:"sf-notification__icon",class:{ 'display-none': !_vm.icon },attrs:{"icon":_vm.icon,"size":"lg","color":"white"}})]},null,{ icon: _vm.icon }),_vm._v(" "),_c('div',[_vm._t("title",function(){return [_c('div',{staticClass:"sf-notification__title smartphone-only",class:{ 'display-none': !_vm.title }},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")])]},null,{ title: _vm.title }),_vm._v(" "),_vm._t("message",function(){return [_c('span',{staticClass:"sf-notification__message",class:{ 'display-none': !_vm.message }},[_vm._v(_vm._s(_vm.message))])]},null,{ message: _vm.message }),_vm._v(" "),_vm._t("action",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-notification__action",class:{ 'display-none': !_vm.action },on:{"click":_vm.actionHandler}},[_vm._v("\n          "+_vm._s(_vm.action)+"\n        ")])]},null,{ action: _vm.action, actionHandler: _vm.actionHandler })],2),_vm._v(" "),_vm._t("close",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-notification__close",class:{ 'display-none': _vm.persistent },attrs:{"aria-label":"Close notification"},on:{"click":_vm.closeHandler}},[_c('SfIcon',{attrs:{"icon":"cross","color":"white"}})],1)]},null,{ closeHandler: _vm.closeHandler })],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue?vue&type=template&id=ab1ab2ba&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 6 modules
var SfIcon = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfNotificationvue_type_script_lang_js_ = ({
  name: "SfNotification",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    persistent: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";

        case "danger":
          return "info_shield";

        default:
          return "info_circle";
      }
    },

    colorClass() {
      switch (this.type) {
        case "secondary":
          return "color-secondary";

        case "info":
          return "color-info";

        case "success":
          return "color-success";

        case "warning":
          return "color-warning";

        case "danger":
          return "color-danger";

        default:
          return "color-info";
      }
    }

  },
  methods: {
    actionHandler() {
      this.$emit("click:action");
    },

    closeHandler() {
      this.$emit("click:close");
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfNotification_SfNotificationvue_type_script_lang_js_ = (SfNotificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfNotification/SfNotification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfNotification_SfNotificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b34fbd7"
  
)

/* harmony default export */ var SfNotification = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ focusTrap; });

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap.js
const focusableElements = ["a[href]", "button:not([disabled])", "button:not([hidden])", "[tabindex]:not([disabled])", "input:not([disabled])", "select", "textarea"];

const isHidden = selector => selector.offsetParent === null;

const getFocusableChildren = el => {
  return Array.from(el.querySelectorAll(focusableElements)).filter(selector => !isHidden(selector)) || [];
};
const isFocusable = (e, focusableChildrenElements) => Array.from(focusableChildrenElements).some(el => el === e.target);
const moveFocus = (e, focusableChildrenElements) => {
  if (!focusableChildrenElements.length || e.key !== "Tab") return;

  if (!isFocusable(e, focusableChildrenElements)) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  }

  if (focusableChildrenElements.length === 1) {
    e.preventDefault();
    return;
  }

  const lastElementIndex = focusableChildrenElements.length - 1;
  const isLastElement = e.target === focusableChildrenElements[lastElementIndex];
  const isFirstElement = e.target === focusableChildrenElements[0];
  const isGoingForward = e.shiftKey === false;

  if (isGoingForward && isLastElement) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  } else if (!isGoingForward && isFirstElement) {
    e.preventDefault();
    focusableChildrenElements[lastElementIndex].focus();
  }
};
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js


const focusTrap = {
  bind(el) {
    external_vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });

    el._keyHandler = function (e) {
      if (e.key === "Tab") {
        if (!isFocusable(e, el._focusableChildrenElements)) {
          el._lastFocusedElement = e.target;
        }
      }

      moveFocus(e, el._focusableChildrenElements);
    };

    document.addEventListener("keydown", el._keyHandler);
  },

  componentUpdated(el) {
    external_vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
  },

  unbind(el) {
    if (el._lastFocusedElement) el._lastFocusedElement.focus();
    document.removeEventListener("keydown", el._keyHandler);
  }

};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map