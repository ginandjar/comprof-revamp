import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Swiper from 'swiper';
import Intro from '../components/layout/Intro';
import TabbedHero from '../components/layout/TabbedHero';
import TabItem from '../components/layout/TabItem';
import Tab from '../components/layout/Tab';
import Hero from '../components/layout/Hero';
import FlexBox from '../components/layout/FlexBox';
import ButtonLink from '../components/links/ButtonLink';
import HeroCard from '../components/layout/HeroCard';
import Career from '../components/layout/Career';
import BuildChatbot from '../components/layout/BuildChatbot';
import Fade from 'react-reveal/Fade';
import { Image, Modal, Button } from 'react-bootstrap';
import TextLoop from 'react-text-loop';
import SimpleForm from '../components/layout/Formly';

interface Props {

}

interface States {
  isShow: boolean;
  showModal: boolean;
  currentIndex: number;
}

let tabSwiper: any = null;


class Home extends React.Component<Props, States> {
  public static async getInitialProps(ctx: NextContext) {

  }
  state = {
    isShow: true,
    showModal: false,
    currentIndex: 0
  };

  componentDidMount() {
    tabSwiper = new Swiper('#tab-swiper', {
      speed: 400,
      spaceBetween: 100
    });
    this.setState({
      isShow: true,
      showModal: false,
      currentIndex: 0
    });
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
        <Intro className="intro--blue landing">
          <div className="flex-item__left">
            <div className="landing__intro__text">
              <h1>
                AI & Chatbot solution for smarter&nbsp;
                <TextLoop speed={800}>
                  <span>customer support</span>
                  <span>CRM</span>
                  <span>marketing</span>
                  <span>commerce</span>


                </TextLoop>
              </h1>

              <p>
                Create an intelligent assistant to serve your customer better
                </p>
              <a className="button button__light" onClick={this.handleShow()}>Build Your Chatbot Now</a>
              <Modal className="landing__modal" show={this.state.showModal} onHide={this.handleClose()}>

                <Modal.Body>
                  <div dangerouslySetInnerHTML={this.renderFormly()}></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>

              </Modal>

            </div>

          </div>
          <div className="flex-item__right landing__intro__image">
            <Fade top>
              <img src="/static/png/landing/simpati.png" className="landing__intro__image--simpati" alt="" />
            </Fade>
            <Fade right>
              <img src="/static/png/landing/uni.png" className="landing__intro__image--uni" alt="" />
            </Fade>
            <Fade left>
              <img src="/static/png/landing/alfa.png" className="landing__intro__image--alfa" alt="" />
            </Fade>
            <Fade bottom>
              <img src="/static/png/landing/bri.png" className="landing__intro__image--bri" alt="" />
            </Fade>
            <img src="/static/png/landing/white.png" className="landing__intro__image--white" alt="" />
          </div>
        </Intro>

        <HeroCard title="See what chatbots can do for your business" className="landing__hero">
          <div className="landing__list-image">
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/wallet.svg" />

                <h5>
                  Cost-efficient customer support
              </h5>
                <p>
                  Create a chatbot that can automate your customer support process, reducing the cost of your call-center operation
              </p>


              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/phonechat.svg" />

                <h5>
                  Interactive customer experience
              </h5>
                <p>
                  The chatbot can also offer an instant and interactive way for customers to interact with your brands. Offering transaction capability or even product recommendation.
              </p>


              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/chart.svg" />

                <h5>
                  Integration Flexibility
              </h5>
                <p>
                  With better experience for your customer, it’s easier to convert their interest into leads or purchases.
              </p>


              </div>
            </Fade>

          </div>

        </HeroCard>

        <TabbedHero
          className="landing"
          title="Meet our chatbots">

          <div>
            {this.renderTabMenu()}
          </div>
          <div>
            <div className="swiper-container" id="tab-swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="landing__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__left">
                            <Fade>
                              <div className="landing__tab__chatbot">
                                <img className="landing__tab__logo" src="/static/png/landing/veronika/logo.png" />
                                <h1>
                                  Veronika
                              </h1>
                                <p>
                                  Intelligent customer support for Telco
                              </p>

                                <ButtonLink modifier="light" href="/story/veronika">
                                  Meet Veronika
                                </ButtonLink>
                              </div>
                            </Fade>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <Fade right >
                              <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/veronika/avatar.png"></img>
                            </Fade>
                            <Fade top >
                              <img className="landing__tab__image--veronika--phone" src="/static/png/landing/veronika/phone.png"></img>
                            </Fade>
                            <Fade left >
                              <img className="landing__tab__image--veronika--chat" src="/static/png/landing/veronika/chat.png"></img>
                            </Fade>
                            <Fade bottom >
                              <img className="landing__tab__image--veronika--menu" src="/static/png/landing/veronika/menu.png"></img>
                            </Fade>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="landing__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__left">
                            <div className="landing__tab__chatbot">
                              <img className="landing__tab__logo" src="/static/png/landing/sabrina/logo.png" />
                              <h1>
                                Sabrina
                              </h1>
                              <p>
                                Smart assistant for Banking
                              </p>

                              <ButtonLink modifier="light" href="/story/sabrina">
                                Meet Sabrina
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <Fade right >
                              <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/sabrina/avatar.png"></img>
                            </Fade>
                            <Fade top >
                              <img className="landing__tab__image--veronika--phone" src="/static/png/landing/sabrina/phone.png"></img>
                            </Fade>
                            <Fade left >
                              <img className="landing__tab__image--veronika--chat" src="/static/png/landing/sabrina/chat.png"></img>
                            </Fade>
                            <Fade bottom >
                              <img className="landing__tab__image--veronika--menu" src="/static/png/landing/sabrina/menu.png"></img>
                            </Fade>

                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="landing__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__left">
                            <div className="landing__tab__chatbot">
                              <img className="landing__tab__logo--square" src="/static/png/landing/jemma/logo.png" />
                              <h1>
                                Jemma
                              </h1>
                              <p>
                                Virtual friend for personalized consumer engagement
                              </p>

                              <ButtonLink modifier="light" href="/story/jemma">
                                Meet Jemma
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <Fade right >
                              <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/jemma/avatar.png"></img>
                            </Fade>
                            <Fade top >
                              <img className="landing__tab__image--veronika--phone" src="/static/png/landing/jemma/phone.png"></img>
                            </Fade>
                            <Fade left >
                              <img className="landing__tab__image--veronika--chat" src="/static/png/landing/jemma/chat.png"></img>
                            </Fade>
                            <Fade bottom >
                              <img className="landing__tab__image--veronika--menu" src="/static/png/landing/jemma/menu.png"></img>
                            </Fade>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="landing__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__left">
                            <div className="landing__tab__chatbot">
                              <img className="landing__tab__logo" src="/static/png/landing/shalma/logo.png" />
                              <h1>
                                Shalma
                              </h1>
                              <p>
                                Interactive assistant for customer loyalty
                              </p>

                              <ButtonLink modifier="light" href="/story/shalma">
                                Meet Shalma
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <Fade right >
                              <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/shalma/avatar.png"></img>
                            </Fade>
                            <Fade top >
                              <img className="landing__tab__image--veronika--phone" src="/static/png/landing/shalma/phone.png"></img>
                            </Fade>
                            <Fade left >
                              <img className="landing__tab__image--veronika--chat" src="/static/png/landing/shalma/chat.png"></img>
                            </Fade>
                            <Fade bottom >
                              <img className="landing__tab__image--veronika--menu" src="/static/png/landing/shalma/menu.png"></img>
                            </Fade>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>



              </div>
            </div>

          </div>

        </TabbedHero>

        <HeroCard title="Create the best chatbots with our platform" className="hero-card landing__hero">
          <div className="landing__list-image">
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/brain.svg" />

                <h5>
                  The Best NLP
              </h5>
                <p>
                  Create chatbots that has the best understanding for what the users are saying in Bahasa Indonesia and English.
              </p>
              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/laptop.svg" />

                <h5>
                  Bot Studio
              </h5>
                <p>
                  Visual Conversation Designer Easily design engaging conversation flows for your chatbots.
              </p>
              </div>
            </Fade>
            <Fade>

              <div className="landing__list-image__item">
                <img src="/static/png/landing/gear.svg" />

                <h5>
                  Integration Flexibility
              </h5>
                <p>
                  Works with any other technology and tools you use to meet your business needs.
              </p>
              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/chat.svg" />

                <h5>
                  Omni Channel Management
              </h5>
                <p>
                  Easily manage and install your chatbots in any Messaging Channels you choose.
              </p>
              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item">
                <img src="/static/png/landing/lock.svg" />

                <h5>
                  On Premise Solution
              </h5>
                <p>
                  Need the security of your own IT infrastructure to run your chatbots? Just install it on your own system using our On-Premise solution.
              </p>
              </div>
            </Fade>

          </div>

        </HeroCard>


        {/* <HeroCard title="Work with us to build the best chatbots for any industry" className="landing__hero">

          <div className="landing__list-image">
            <Fade>
              <div className="landing__list-image__item--list-image-only">
                <img src="/static/png/landing/laptopblue.svg" />
                <p>
                  Define your needs
                </p>
              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item--list-image-only">
                <img src="/static/png/landing/searchkatablue.svg" />
                <p>
                  View our solution
                </p>
              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item--list-image-only">
                <img src="/static/png/landing/phoneblue.svg" />
                <p>
                  Drop us a line
                </p>
              </div>
            </Fade>
            <Fade>
              <div className="landing__list-image__item--list-image-only">
                <img src="/static/png/landing/comunicationblue.svg" />
                <p>
                  Schedule demo
                </p>
              </div>
            </Fade>

            <div className="landing__list-image__item__line">
              <img src="/static/png/landing/line.svg" />
            </div>


          </div>

          <div className="landing__hero__button">
            <ButtonLink modifier="default" href="/career">
              Work With Us
            </ButtonLink>
          </div>

        </HeroCard>


        <HeroCard className="hero-card">
          <div className="landing__hero landing__hero--full-width">
            <Fade left>
              <div className="landing__hero__text">

                <h1>
                  Kata Platform
              </h1>
                <h1>The Technology Behind The Chatbots</h1>
                <p>
                  An integrated platform to build the best chatbot for any chat / messaging apps (even inside your own apps/website!)
                        </p>

                <ButtonLink modifier="light" href="/enterprise">
                  Explore More
              </ButtonLink>

              </div>
            </Fade>
            <Fade right>
              <div className="landing__hero__image">
                <img src="/static/png/landing/laptop.png" />
              </div>
            </Fade>
          </div>

        </HeroCard>

        <div className="landing__engineering-blog">
          <h1>Keep up with Kata insights</h1>
          <div className="landing__engineering-blog__blog-content">
            <div className="landing__engineering-blog__blog-image">
              <Image src="/static/png/landing/blog.png" />
            </div>
            <div className="landing__engineering-blog__list">
              <div className="landing__engineering-blog__item">
                <div className="landing__engineering-blog__image">
                  <img src="/static/png/platform/chatbotlist.jpg" />
                </div>
                <div className="landing__engineering-blog__detail">

                  <div className="landing__engineering-blog__title">
                    Kata landing 2.5 : Better landing for Better Chatbots
                  </div>
                  <div className="landing__engineering-blog__descr">
                    After releasing Kata Bot landing publicly in December 2017, we had agreat time working with the developer community by
                  </div>
                  <div className="landing__engineering-blog__read-more">Read more</div>
                  <div className="landing__engineering-blog__written-by">
                    <img src="" />
                    <p>Aria Nurfikryon August 3, 2018</p>
                  </div>
                </div>
              </div>
              <div className="landing__engineering-blog__item">
                <div className="landing__engineering-blog__image">
                  <img src="/static/png/platform/chatbotlist.jpg" />
                </div>
                <div className="landing__engineering-blog__detail">

                  <div className="landing__engineering-blog__title">
                    Kata landing 2.5 : Better landing for Better Chatbots
                  </div>
                  <div className="landing__engineering-blog__descr">
                    After releasing Kata Bot landing publicly in December 2017, we had agreat time working with the developer community by
                  </div>
                  <div className="landing__engineering-blog__read-more">Read more</div>
                  <div className="landing__engineering-blog__written-by">
                    <img src="" />
                    <p>Aria Nurfikryon August 3, 2018</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="landing__engineering-blog__button">
            <ButtonLink modifier="default" block="true" href="#">
              View All
                </ButtonLink>
          </div>
          <div className="landing__engineering-blog__blog-content">
            <div className="landing__engineering-blog__blog-image">
              <Image src="/static/png/landing/medium.png" />
            </div>
            <div className="landing__engineering-blog__list">
              <div className="landing__engineering-blog__item">
                <div className="landing__engineering-blog__image">
                  <img src="/static/png/platform/chatbotlist.jpg" />
                </div>
                <div className="landing__engineering-blog__detail">

                  <div className="landing__engineering-blog__title">
                    Kata landing 2.5 : Better landing for Better Chatbots
                  </div>
                  <div className="landing__engineering-blog__descr">
                    After releasing Kata Bot landing publicly in December 2017, we had agreat time working with the developer community by
                  </div>
                  <div className="landing__engineering-blog__read-more">Read more</div>
                  <div className="landing__engineering-blog__written-by">
                    <img src="" />
                    <p>Aria Nurfikryon August 3, 2018</p>
                  </div>
                </div>
              </div>
              <div className="landing__engineering-blog__item">
                <div className="landing__engineering-blog__image">
                  <img src="/static/png/platform/chatbotlist.jpg" />
                </div>
                <div className="landing__engineering-blog__detail">

                  <div className="landing__engineering-blog__title">
                    Kata landing 2.5 : Better landing for Better Chatbots
                  </div>
                  <div className="landing__engineering-blog__descr">
                    After releasing Kata Bot landing publicly in December 2017, we had agreat time working with the developer community by
                  </div>
                  <div className="landing__engineering-blog__read-more">Read more</div>
                  <div className="landing__engineering-blog__written-by">
                    <img src="" />
                    <p>Aria Nurfikryon August 3, 2018</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="landing__engineering-blog__button">
            <ButtonLink modifier="default" block="true" href="#">
              View All
                </ButtonLink>
          </div>
        </div> */}
        <Fade>
          <Career />
        </Fade>
        <Fade>
          <BuildChatbot />
        </Fade>
      </div >
    );
  }

  renderTabMenu() {
    return (
      <Tab>
        <TabItem key={0} item="Customer Service" modifier={this.state.currentIndex == 0 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(0)} />
        <TabItem key={1} item="Banking Assistant" modifier={this.state.currentIndex == 1 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(1)} />
        <TabItem key={2} item="Customer Engagement" modifier={this.state.currentIndex == 2 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(2)} />
        <TabItem key={3} item="Customer Loyalty" modifier={this.state.currentIndex == 3 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(3)} />
      </Tab>
    );
  }
  renderFormly() {
    return { __html: '<iframe id="lf-iframe-embed-code-61070" style="min-width: 100% !important;width: 100px !important;*width: 100% !important; border:none;min-height: 909px;" src="https://s3.amazonaws.com/leadformlyimages/iframe/form/61070.html?ts=1542084198" scrolling="no" frameborder="0"></iframe> <script type="text/javascript">(function(){var ifr = document.getElementById("lf-iframe-embed-code-61070");if(window.location.href && window.location.href.indexOf("?") > -1) { var get = window.location.href.substr(window.location.href.indexOf("?") + 1); if(ifr && get.length > 0) { var src = ifr.src; src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get; ifr.src = src; } } window.handleIFrameMessage = function(e) { if(e.data.length > 0) { try { var args = JSON.parse(e.data); var iframe = document.getElementById("lf-iframe-embed-code-61070"); if(args.formID == 61070) { switch (args.case) { case "redirectTo": window.open(decodeURI(args.redirectToURL), "_self"); break; case "resizeIframe": iframe.width=args.scrollWidth+"px", iframe.height=args.scrollHeight+"px"; break; case "stepChanged" : var elCoords=getCoords(ifr),isFormOnScreen=isOnScreen(ifr, false); if(!isFormOnScreen) {window.scrollTo(0, elCoords.top); } break; } } if("contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl": encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type": "urls","value":urls}), "*"); } } catch(e){} } }; if (window.addEventListener) {window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) {window.attachEvent("onmessage", handleIFrameMessage); } var getCoords = function(elem) { var box = elem.getBoundingClientRect(); var body = document.body; var docEl = document.documentElement; var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop; var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft; var clientTop = docEl.clientTop || body.clientTop || 0;var clientLeft = docEl.clientLeft || body.clientLeft || 0; var top = box.top + scrollTop - clientTop; var left = box.left + scrollLeft - clientLeft; return {top: Math.round(top), left: Math.round(left) }; }; var isOnScreen = function(_this, partial) { var t = _this; var box = t.getBoundingClientRect(); var win = {h : window.innerHeight, w : window.innerWidth }; var topEdgeInRange = box.top >= 0 && box.top <= win.h; var bottomEdgeInRange = box.bottom >= 0 && box.bottom <= win.h; var leftEdgeInRange = box.left >= 0 && box.left <= win.w; var rightEdgeInRange = box.right >= 0 && box.right <= win.w; var coverScreenHorizontally = (box.left <= 0 ^ box.right >= win.w); var coverScreenVertically = (box.top <= 0 ^ box.bottom >= win.h); var topEdgeInScreen = topEdgeInRange && ( leftEdgeInRange || rightEdgeInRange || coverScreenHorizontally );var bottomEdgeInScreen = bottomEdgeInRange && ( leftEdgeInRange || rightEdgeInRange || coverScreenHorizontally ); var leftEdgeInScreen = leftEdgeInRange && ( topEdgeInRange || bottomEdgeInRange || coverScreenVertically ); var rightEdgeInScreen = rightEdgeInRange && ( topEdgeInRange || bottomEdgeInRange || coverScreenVertically ); var isPartiallyOnScreen = topEdgeInScreen || bottomEdgeInScreen || leftEdgeInScreen || rightEdgeInScreen; var isEntirelyOnScreen = topEdgeInScreen && bottomEdgeInScreen && leftEdgeInScreen && rightEdgeInScreen; return partial ? isPartiallyOnScreen : isEntirelyOnScreen; };})();</script> ' };
  }

  handleClose = () => () => {
    this.setState({ showModal: false });
  }

  handleShow = () => () => {
    this.setState({ showModal: true });
  }


  tabSwipeClick = (e: number) => () => {

    tabSwiper.slideTo(e, 400);

    this.setState({ currentIndex: e });

  }


}
export default withLocaleService(Home);

