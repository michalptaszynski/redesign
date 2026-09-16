(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`13d1bdce06cc0d9d46f5731a1c8bca191e4f29e7`},e.SENTRY_BUILD_INFO={deps:`@astrojs/check.@astrojs/node.@astrojs/react.@emotion/cache.@emotion/react.@emotion/styled.@eslint/compat.@eslint/eslintrc.@eslint/js.@fastify/middie.@fastify/static.@mui/icons-material.@mui/lab.@mui/material.@rudderstack/analytics-js.@sentry/astro.@sentry/node.@sentry/profiling-node.@statsig/react-bindings.@statsig/session-replay.@statsig/web-analytics.@stripe/react-stripe-js.@stripe/stripe-js.@testing-library/dom.@testing-library/react.@types/cors.@types/itemsjs.@types/js-cookie.@types/lodash.@types/node.@types/probe-image-size.@types/react.@types/react-dom.@types/react-helmet.@types/react-slick.@typescript-eslint/eslint-plugin.@typescript-eslint/parser.@unpic/react.@vitejs/plugin-react.@vitest/coverage-v8.algoliasearch.astro.astro-compress.axios.country-flag-icons.date-fns.dd-trace.eslint.eslint-config-prettier.eslint-import-resolver-typescript.eslint-plugin-import.eslint-plugin-jsx-a11y.eslint-plugin-react.eslint-plugin-react-hooks.eventemitter3.fastify.formik.http-proxy-middleware.itemsjs.iti.iti-react.js-cookie.jsdom.libphonenumber-js.linkify-html.linkifyjs.lodash.madge.mobx.mobx-react-lite.path.prettier.probe-image-size.react.react-dom.react-ga4.react-helmet-async.react-horizontal-scrolling-menu.react-instantsearch.react-intl.react-player.react-slick.scroll-into-view-if-needed.slick-carousel.strict-event-emitter-types.typescript.unplugin-fonts.vite.vite-plugin-compression2.vite-plugin-svgr.vitest.yup`.split(`.`),depsVersions:{react:18,vite:8},nodeVersion:24};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`5d9782b2-12e8-4bce-9771-7965a98f86d7`,e._sentryDebugIdIdentifier=`sentry-dbid-5d9782b2-12e8-4bce-9771-7965a98f86d7`)}catch{}})();import{a as e}from"./rolldown-runtime.D1NZKmg0.js";import{t}from"./react.BiYhPkmo.js";import{Mn as n,Xt as r,Yt as i,Zt as a,an as o,en as s,gn as c,hn as l,jn as u,mn as d}from"./dsl.DOElKaUZ.js";import{g as f}from"./session-storage.service.JV6N9_r_.js";function p(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function m(e){return parseFloat(e)}var h=e(t());function g(e){return l(`MuiSkeleton`,e)}d(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var _=f(),v=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:s}=e;return o({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!s&&`heightAuto`]},g,t)},y=n`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,b=n`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,x=typeof y==`string`?null:u`
        animation: ${y} 2s ease-in-out 0.5s infinite;
      `,S=typeof b==`string`?null:u`
        &::after {
          animation: ${b} 2s linear 0.5s infinite;
        }
      `,C=s(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(a(({theme:e})=>{let t=p(e.shape.borderRadius)||`px`,n=m(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:x||{animation:`${y} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:S||{"&::after":{animation:`${b} 2s linear 0.5s infinite`}}}]}})),w=h.forwardRef(function(e,t){let n=r({props:e,name:`MuiSkeleton`}),{animation:i=`pulse`,className:a,component:o=`span`,height:s,style:l,variant:u=`text`,width:d,...f}=n,p={...n,animation:i,component:o,variant:u,hasChildren:!!f.children},m=v(p);return(0,_.jsx)(C,{as:o,ref:t,className:c(m.root,a),ownerState:p,...f,style:{width:d,height:s,...l}})}),T=i((0,_.jsx)(`path`,{d:`m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z`}),`ExpandLess`),E=Object.freeze({MetaProductDetailsDescription:`meta.product-details.description`,ProductDetailsAlternativesTitle:`product-details.alternatives.title`,ProductDetailsCrossSellsTitle:`product-details.cross-sells.title`,ProductDetailsAlternativesShowAll:`product-details.alternatives.show-all`,ProductDetailsBoughtTogetherTitle:`product-details.bought-together.title`,ProductDetailsCrossSellRelatedTitle:`product-details.cross-sell-related.title`,ProductDetailsDeliveryDateFrom:`product-details.delivery-date-from`,ProductDetailsDeliveryPrefix:`product-details.delivery-prefix`,ProductDetailsDeliveryWorkingDays:`product-details.delivery-working-days`,ProductDetailsParcelSizeBadgeInpost:`product-page.badges.parcel-size.inpost`,ProductDetailsFreeBatchLeft:`product-details.free-batch-left`,ProductDetailsInpostFastDeliveryInfoHeader:`product-details.inpost-fast-delivery-info.header`,ProductDetailsInpostFastDeliveryInfoText:`product-details.inpost-fast-delivery-info.text`,ProductDetailsPriceWithVat:`product-details.price-with-vat`,ProductDetailsPriceWithoutVat:`product-details.price-without-vat`,ProductDetailsOmnibusLowestPrice30Days:`product-details.omnibus.lowest-price-30-days`,ProductDetailsOmnibusPromotionWithCode:`product-details.omnibus.promotion-with-code`,ProductDetailsOmnibusPromotionPercentage:`product-details.omnibus.promotion-percentage`,ProductDetailsPromoCodeDescription:`product-details.promo-code.description`,ProductDetailsPromoCodeLabel:`product-details.promo-code.label`,ProductDetailsPromoCodeCopied:`product-details.promo-code.copied`,ProductDetailsPromoCodeNavigation:`product-details.promo-code.navigation`});export{T as n,w as r,E as t};