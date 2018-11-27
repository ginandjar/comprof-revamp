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


interface Props {

}

let tabSwiper: any = null;


class Home extends React.Component<Props> {
  public static async getInitialProps(ctx: NextContext) {

  }
  componentDidMount() {
    tabSwiper = new Swiper('#tab-swiper', {
      speed: 400,
      spaceBetween: 100
    });
  }



  render() {
    const { localeService, posts } = this.props;

    var divStyle = {
      width: '1234px;'
    };

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
                AI & Chatbot solution for smarter <span>Customer Support</span>
              </h1>

              <p>
                Create an intelligent assistant to serve your customer better
                </p>
              <ButtonLink modifier="light" href="#">
                Build your chatbot now
                </ButtonLink>
            </div>

          </div>
          <div className="flex-item__right landing__intro__image">
            <img src="/static/png/landing/simpati.png" className="landing__intro__image--simpati" alt="" />
            <img src="/static/png/landing/uni.png" className="landing__intro__image--uni" alt="" />
            <img src="/static/png/landing/alfa.png" className="landing__intro__image--alfa" alt="" />
            <img src="/static/png/landing/bri.png" className="landing__intro__image--bri" alt="" />
            <img src="/static/png/landing/white.png" className="landing__intro__image--white" alt="" />
          </div>
        </Intro>

        <HeroCard title="See what chatbots can do for your business" className="landing__hero">
          <div className="landing__list-image">
            <div className="landing__list-image__item">
              <img src="/static/png/landing/wallet.svg" />

              <h5>
                Cost-efficient customer support
              </h5>
              <p>
                Create a chatbot that can automate your customer support process, reducing the cost of your call-center operation
              </p>


            </div>

            <div className="landing__list-image__item">
              <img src="/static/png/landing/phonechat.svg" />

              <h5>
                Interactive customer experience
              </h5>
              <p>
                The chatbot can also offer an instant and interactive way for customers to interact with your brands. Offering transaction capability or even product recommendation.
              </p>


            </div>

            <div className="landing__list-image__item">
              <img src="/static/png/landing/chart.svg" />

              <h5>
                Integration Flexibility
              </h5>
              <p>
                With better experience for your customer, it’s easier to convert their interest into leads or purchases.
              </p>


            </div>

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
                            <div>
                              <img className="landing__tab__logo" src="/static/png/landing/veronika/logo.png" />
                              <h1>
                                Veronika
                              </h1>
                              <p>
                                Intelligent customer support for Telco
                              </p>

                              <ButtonLink modifier="light" href="/enterprise">
                                Meet Veronika
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/veronika/avatar.png"></img>
                            <img className="landing__tab__image--veronika--phone" src="/static/png/landing/veronika/phone.png"></img>
                            <img className="landing__tab__image--veronika--chat" src="/static/png/landing/veronika/chat.png"></img>
                            <img className="landing__tab__image--veronika--menu" src="/static/png/landing/veronika/menu.png"></img>

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
                            <div>
                              <img className="landing__tab__logo" src="/static/png/landing/sabrina/logo.png" />
                              <h1>
                                Sabrina
                              </h1>
                              <p>
                                Smart assistant for Banking
                              </p>

                              <ButtonLink modifier="light" href="/enterprise">
                                Meet Sabrina
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/sabrina/avatar.png"></img>
                            <img className="landing__tab__image--veronika--phone" src="/static/png/landing/sabrina/phone.png"></img>
                            <img className="landing__tab__image--veronika--chat" src="/static/png/landing/sabrina/chat.png"></img>
                            <img className="landing__tab__image--veronika--menu" src="/static/png/landing/sabrina/menu.png"></img>

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
                            <div>
                              <img className="landing__tab__logo" src="/static/png/landing/jemma/logo.png" />
                              <h1>
                                Jemma
                              </h1>
                              <p>
                                Virtual friend for personalized consumer engagement
                              </p>

                              <ButtonLink modifier="light" href="/enterprise">
                                Meet Jemma
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/jemma/avatar.png"></img>
                            <img className="landing__tab__image--veronika--phone" src="/static/png/landing/jemma/phone.png"></img>
                            <img className="landing__tab__image--veronika--chat" src="/static/png/landing/jemma/chat.png"></img>
                            <img className="landing__tab__image--veronika--menu" src="/static/png/landing/jemma/menu.png"></img>

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
                            <div>
                              <img className="landing__tab__logo" src="/static/png/landing/shalma/logo.png" />
                              <h1>
                                Shalma
                              </h1>
                              <p>
                                Interactive assistant for customer loyalty
                              </p>

                              <ButtonLink modifier="light" href="/enterprise">
                                Meet Shalma
                                </ButtonLink>
                            </div>
                          </div>
                          <div className="flex-item__right landing__tab__image">
                            <img className="landing__tab__image--veronika--avatar" src="/static/png/landing/shalma/avatar.png"></img>
                            <img className="landing__tab__image--veronika--phone" src="/static/png/landing/shalma/phone.png"></img>
                            <img className="landing__tab__image--veronika--chat" src="/static/png/landing/shalma/chat.png"></img>
                            <img className="landing__tab__image--veronika--menu" src="/static/png/landing/shalma/menu.png"></img>

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
            <div className="landing__list-image__item">
              <img src="/static/png/landing/brain.svg" />

              <h5>
                The Best NLP
              </h5>
              <p>
                Create chatbots that has the best understanding for what the users are saying in Bahasa Indonesia and English.
              </p>
            </div>

            <div className="landing__list-image__item">
              <img src="/static/png/landing/laptop.svg" />

              <h5>
                Bot Studio
              </h5>
              <p>
                Visual Conversation Designer Easily design engaging conversation flows for your chatbots.
              </p>
            </div>

            <div className="landing__list-image__item">
              <img src="/static/png/landing/gear.svg" />

              <h5>
                Better conversion rate
              </h5>
              <p>
                Works with any other technology and tools you use to meet your business needs.
              </p>
            </div>

            <div className="landing__list-image__item">
              <img src="/static/png/landing/chat.svg" />

              <h5>
                Omni Channel Management
              </h5>
              <p>
                Easily manage and install your chatbots in any Messaging Channels you choose.
              </p>
            </div>

            <div className="landing__list-image__item">
              <img src="/static/png/landing/lock.svg" />

              <h5>
                On Premise Solution
              </h5>
              <p>
                Need the security of your own IT infrastructure to run your chatbots? Just install it on your own system using our On-Premise solution.
              </p>
            </div>

          </div>

        </HeroCard>


        <HeroCard title="Work with us to build the best chatbots for any industry" className="landing__hero">
          <div className="landing__list-image">
            <div className="landing__list-image__item--list-image-only">
              <img src="/static/png/landing/laptopblue.svg" />
            </div>

            <div className="landing__list-image__item--list-image-only">
              <img src="/static/png/landing/searchkatablue.svg" />
            </div>

            <div className="landing__list-image__item--list-image-only">
              <img src="/static/png/landing/phoneblue.svg" />
            </div>

            <div className="landing__list-image__item--list-image-only">
              <img src="/static/png/landing/comunicationblue.svg" />
            </div>
            <div className="landing__list-image__item__line">
              <img src="/static/png/landing/line.svg" />
            </div>

          </div>

          <div className="landing__hero__button">
            <ButtonLink modifier="default" href="/career">
              &nbsp;&nbsp;&nbsp;Work With Us&nbsp;&nbsp;&nbsp;
            </ButtonLink>
          </div>
        </HeroCard>


        <HeroCard className="hero-card">
          <div className="landing__hero landing__hero--full-width">
            <div className="landing__hero__text">

              <h1>
                Kata Platform
              </h1>
              <h1>The Technology Behind The Chatbots</h1>
              <p>
                An integrated platform to build the best chatbot for any chat / messaging apps (even inside your own apps/website!)
                        </p>

              <ButtonLink modifier="light" href="/enterprise">
                &nbsp;&nbsp;&nbsp;Explore more&nbsp;&nbsp;&nbsp;
              </ButtonLink>

            </div>
            <div className="landing__hero__image">
              <img src="/static/png/landing/laptop.png" />
            </div>
          </div>

        </HeroCard>

        <Career />
        <BuildChatbot />


      </div >
    );
  }

  renderTabMenu() {
    return (
      <Tab>
        <TabItem item="Customer Service" modifier="tab-item--selected" onClick={this.tabSwipeClick(0)} />
        <TabItem item="Banking Assistant" onClick={this.tabSwipeClick(1)} />
        <TabItem item="Costomer Engagement" onClick={this.tabSwipeClick(2)} />
        <TabItem item="Costomer Loyalti" onClick={this.tabSwipeClick(3)} />
      </Tab>
    );
  }


  tabSwipeClick = (e: number) => () => {
    tabSwiper.slideTo(e, 400);
  }


}
export default withLocaleService(Home);

