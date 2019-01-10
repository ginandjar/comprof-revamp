import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Intro from '../components/layout/Intro';
import HeroCard from '../components/layout/HeroCard';
import ButtonLink from '../components/links/ButtonLink';
import Fade from 'react-reveal/Fade';
import Footer from '../components/layout/Footer';
interface Props {

}

class ContactUs extends React.Component<Props> {
  public static async getInitialProps(ctx: NextContext) {

  }


  render() {
    const { localeService, posts } = this.props;


    return (
      <div>
        <Head>
          <title>{localeService.dictionary.meta.home.title}</title>
          <meta name="description" content={localeService.dictionary.meta.home.description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={localeService.dictionary.meta.home.title} />
          <meta
            property="og:description"
            content={localeService.dictionary.meta.home.description}
          />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

        </Head>
        <NavigationBar localeService={this.props.localeService} />
        <div className="contact-us">
          <div dangerouslySetInnerHTML={this.renderFormly()}></div>
        </div>

        <Footer localeService={this.props.localeService} />

      </div >

    );
  }

  renderFormly() {
    return { __html: '<iframe id="lf-iframe-embed-code-61070" style="min-width: 100% !important;width: 100px !important;*width: 100% !important; border:none;min-height: 909px;" src="https://s3.amazonaws.com/leadformlyimages/iframe/form/61070.html?ts=1542084198" scrolling="yes" frameborder="0"></iframe> <script type="text/javascript">(function(){var ifr = document.getElementById("lf-iframe-embed-code-61070");if(window.location.href && window.location.href.indexOf("?") > -1) { var get = window.location.href.substr(window.location.href.indexOf("?") + 1); if(ifr && get.length > 0) { var src = ifr.src; src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get; ifr.src = src; } } window.handleIFrameMessage = function(e) { if(e.data.length > 0) { try { var args = JSON.parse(e.data); var iframe = document.getElementById("lf-iframe-embed-code-61070"); if(args.formID == 61070) { switch (args.case) { case "redirectTo": window.open(decodeURI(args.redirectToURL), "_self"); break; case "resizeIframe": iframe.width=args.scrollWidth+"px", iframe.height=args.scrollHeight+"px"; break; case "stepChanged" : var elCoords=getCoords(ifr),isFormOnScreen=isOnScreen(ifr, false); if(!isFormOnScreen) {window.scrollTo(0, elCoords.top); } break; } } if("contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl": encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type": "urls","value":urls}), "*"); } } catch(e){} } }; if (window.addEventListener) {window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) {window.attachEvent("onmessage", handleIFrameMessage); } var getCoords = function(elem) { var box = elem.getBoundingClientRect(); var body = document.body; var docEl = document.documentElement; var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop; var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft; var clientTop = docEl.clientTop || body.clientTop || 0;var clientLeft = docEl.clientLeft || body.clientLeft || 0; var top = box.top + scrollTop - clientTop; var left = box.left + scrollLeft - clientLeft; return {top: Math.round(top), left: Math.round(left) }; }; var isOnScreen = function(_this, partial) { var t = _this; var box = t.getBoundingClientRect(); var win = {h : window.innerHeight, w : window.innerWidth }; var topEdgeInRange = box.top >= 0 && box.top <= win.h; var bottomEdgeInRange = box.bottom >= 0 && box.bottom <= win.h; var leftEdgeInRange = box.left >= 0 && box.left <= win.w; var rightEdgeInRange = box.right >= 0 && box.right <= win.w; var coverScreenHorizontally = (box.left <= 0 ^ box.right >= win.w); var coverScreenVertically = (box.top <= 0 ^ box.bottom >= win.h); var topEdgeInScreen = topEdgeInRange && ( leftEdgeInRange || rightEdgeInRange || coverScreenHorizontally );var bottomEdgeInScreen = bottomEdgeInRange && ( leftEdgeInRange || rightEdgeInRange || coverScreenHorizontally ); var leftEdgeInScreen = leftEdgeInRange && ( topEdgeInRange || bottomEdgeInRange || coverScreenVertically ); var rightEdgeInScreen = rightEdgeInRange && ( topEdgeInRange || bottomEdgeInRange || coverScreenVertically ); var isPartiallyOnScreen = topEdgeInScreen || bottomEdgeInScreen || leftEdgeInScreen || rightEdgeInScreen; var isEntirelyOnScreen = topEdgeInScreen && bottomEdgeInScreen && leftEdgeInScreen && rightEdgeInScreen; return partial ? isPartiallyOnScreen : isEntirelyOnScreen; };})();</script> ' };
  }

}
export default withLocaleService(ContactUs);

