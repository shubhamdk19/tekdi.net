import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  let freshSalesScript = "function createFcn(nm){(window.freshsales)[nm]=function(){(window.freshsales).push([nm].concat(Array.prototype.slice.call(arguments,0)))}; } (function(url,appToken,formCapture){window.freshsales=window.freshsales||[];if(window.freshsales.length==0){list='init identify trackPageView trackEvent set'.split(' ');for(var i=0;i<list.length;i++){var nm=list[i];createFcn(nm);}var t=document.createElement('script');t.async=1;t.src='https://d952cmcgwqsjf.cloudfront.net/assets/analytics.js';var ft=document.getElementsByTagName('script')[0];ft.parentNode.insertBefore(t,ft);freshsales.init('"+process.env.GATSBY_FRESHSALES_URL+ "','"+ process.env.GATSBY_FRESHSALES_TOKEN +"',true);}})();"
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      <script dangerouslySetInnerHTML= {{ __html: freshSalesScript }} />
        {props.headComponents}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.6/css/swiper.min.css"/>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
