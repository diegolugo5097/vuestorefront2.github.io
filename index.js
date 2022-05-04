import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_63ad70e1 from 'nuxt_plugin_plugin_63ad70e1' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_plugin_0b93a556 from 'nuxt_plugin_plugin_0b93a556' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_vuescrollto_5ef723e6 from 'nuxt_plugin_vuescrollto_5ef723e6' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_09c66b2a from 'nuxt_plugin_cookieuniversalnuxt_09c66b2a' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_72089bd8 from 'nuxt_plugin_pluginutils_72089bd8' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_1724b5a8 from 'nuxt_plugin_pluginseo_1724b5a8' // Source: ./nuxt-i18n/plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_6f5cd9ba from 'nuxt_plugin_pluginrouting_6f5cd9ba' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_54d5e32c from 'nuxt_plugin_pluginmain_54d5e32c' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugina9ebe9fc_8bf1d982 from 'nuxt_plugin_nuxtplugina9ebe9fc_8bf1d982' // Source: ./nuxt.plugin.a9ebe9fc.js (mode: 'all')
import nuxt_plugin_pluginsi18ncookies0a71641d_54ff941d from 'nuxt_plugin_pluginsi18ncookies0a71641d_54ff941d' // Source: ./plugins.i18n-cookies.0a71641d.js (mode: 'all')
import nuxt_plugin_pluginse2etestingbb4a4f14_d2b4f45c from 'nuxt_plugin_pluginse2etestingbb4a4f14_d2b4f45c' // Source: ./plugins.e2e-testing.bb4a4f14.js (mode: 'all')
import nuxt_plugin_pluginsloggered1ba226_754ce238 from 'nuxt_plugin_pluginsloggered1ba226_754ce238' // Source: ./plugins.logger.ed1ba226.js (mode: 'all')
import nuxt_plugin_pluginsssr09cc13df_330b44c4 from 'nuxt_plugin_pluginsssr09cc13df_330b44c4' // Source: ./plugins.ssr.09cc13df.js (mode: 'all')
import nuxt_plugin_pluginscontextd4e923bc_db12383c from 'nuxt_plugin_pluginscontextd4e923bc_db12383c' // Source: ./plugins.context.d4e923bc.js (mode: 'all')
import nuxt_plugin_deviceplugin_1187354e from 'nuxt_plugin_deviceplugin_1187354e' // Source: ./device.plugin.js (mode: 'all')
import nuxt_plugin_workbox_49a33dc2 from 'nuxt_plugin_workbox_49a33dc2' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_70e01932 from 'nuxt_plugin_metaplugin_70e01932' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_7587bea6 from 'nuxt_plugin_iconplugin_7587bea6' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_scrollToTopclient_6f28b416 from 'nuxt_plugin_scrollToTopclient_6f28b416' // Source: ../plugins/scrollToTop.client.js (mode: 'client')
import nuxt_plugin_meta_390359a7 from 'nuxt_plugin_meta_390359a7' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Vue Storefront Next","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#5ece7b"},{"hid":"description","name":"description","content":"Vue Storefront 2 template for Shopify."},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
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
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_63ad70e1 === 'function') {
    await nuxt_plugin_plugin_63ad70e1(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_0b93a556 === 'function') {
    await nuxt_plugin_plugin_0b93a556(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_5ef723e6 === 'function') {
    await nuxt_plugin_vuescrollto_5ef723e6(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_09c66b2a === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_09c66b2a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_72089bd8 === 'function') {
    await nuxt_plugin_pluginutils_72089bd8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_1724b5a8 === 'function') {
    await nuxt_plugin_pluginseo_1724b5a8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6f5cd9ba === 'function') {
    await nuxt_plugin_pluginrouting_6f5cd9ba(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_54d5e32c === 'function') {
    await nuxt_plugin_pluginmain_54d5e32c(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugina9ebe9fc_8bf1d982 === 'function') {
    await nuxt_plugin_nuxtplugina9ebe9fc_8bf1d982(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18ncookies0a71641d_54ff941d === 'function') {
    await nuxt_plugin_pluginsi18ncookies0a71641d_54ff941d(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etestingbb4a4f14_d2b4f45c === 'function') {
    await nuxt_plugin_pluginse2etestingbb4a4f14_d2b4f45c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsloggered1ba226_754ce238 === 'function') {
    await nuxt_plugin_pluginsloggered1ba226_754ce238(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssr09cc13df_330b44c4 === 'function') {
    await nuxt_plugin_pluginsssr09cc13df_330b44c4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontextd4e923bc_db12383c === 'function') {
    await nuxt_plugin_pluginscontextd4e923bc_db12383c(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_1187354e === 'function') {
    await nuxt_plugin_deviceplugin_1187354e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_49a33dc2 === 'function') {
    await nuxt_plugin_workbox_49a33dc2(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_70e01932 === 'function') {
    await nuxt_plugin_metaplugin_70e01932(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_7587bea6 === 'function') {
    await nuxt_plugin_iconplugin_7587bea6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_scrollToTopclient_6f28b416 === 'function') {
    await nuxt_plugin_scrollToTopclient_6f28b416(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_390359a7 === 'function') {
    await nuxt_plugin_meta_390359a7(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
