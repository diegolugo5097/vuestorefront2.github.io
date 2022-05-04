import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36853a05 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _744c664d = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _20a95ace = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _e34ab6b8 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _45793700 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _2f0702a7 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _9ea92232 = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _6902ae34 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _77b38466 = () => interopDefault(import('../pages/GetQuote.vue' /* webpackChunkName: "pages/GetQuote" */))
const _505aa96a = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _02c284d8 = () => interopDefault(import('../pages/MyAccount/AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _9e573048 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _4d8f309e = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _ac9b374c = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _45eb22d8 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _e523f76c = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _f610f48a = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _1993fb6f = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _8f08e690 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))
const _77481128 = () => interopDefault(import('../pages/QuickOrder.vue' /* webpackChunkName: "pages/QuickOrder" */))
const _6af0a2da = () => interopDefault(import('../pages/ResetPassword.vue' /* webpackChunkName: "" */))
const _7630c222 = () => interopDefault(import('../pages/TermsAndConditions.vue' /* webpackChunkName: "pages/TermsAndConditions" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
