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


interface Props {

}

let tabSwiper: any = null;
let chatBotSwiper: any = null;
let storySwiper: any = null;


class Enterprise extends React.Component<Props> {
  public static async getInitialProps(ctx: NextContext) {

  }
  componentDidMount() {
    tabSwiper = new Swiper('#tab-swiper', {
      speed: 400,
      spaceBetween: 100
    });

    chatBotSwiper = new Swiper('#chatbot-swiper', {
      speed: 400,
      spaceBetween: 100,
    });

    storySwiper = new Swiper('#story-swiper', {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
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

        <Intro className="enterprise">
          <div className="flex-item__left">
            <div className="enterprise__intro__text">
              <h1>
                Start engaging and serving your customers automatically
              </h1>
            </div>

          </div>
          <div className="flex-item__right enterprise__intro__image">
            <img src="/static/png/enterprise/coverphone.png" className="enterprise__intro__image--phone" alt="" />
            <img src="/static/png/enterprise/coverchat.png" className="enterprise__intro__image--chat" alt="" />
          </div>
        </Intro>
        <TabbedHero
          className="enterprise"
          title="Our AI & chatbot solution enables you to design an intelligent assistant for your business in an accelerated path to business growth and revenue.">

          <div>
            {this.renderTabMenu()}
          </div>
          <div>
            <div className="swiper-container" id="tab-swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="enterprise__tab">
                    <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__right">
                            <img src="/static/png/enterprise/crphone.png"></img>
                          </div>
                          <div className="flex-item__left">
                            <div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Features you can offer
                          </ButtonLink>
                              </div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Benefits
                          </ButtonLink>
                              </div>
                            </div>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="enterprise__tab">
                    <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__right">
                            <img src="/static/png/enterprise/crphone.png"></img>
                          </div>
                          <div className="flex-item__left">
                            <div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Features you can offer
                          </ButtonLink>
                              </div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Benefits
                          </ButtonLink>
                              </div>
                            </div>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="enterprise__tab">
                    <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__right">
                            <img src="/static/png/enterprise/crphone.png"></img>
                          </div>
                          <div className="flex-item__left">
                            <div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Features you can offer
                          </ButtonLink>
                              </div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Benefits
                          </ButtonLink>
                              </div>
                            </div>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="enterprise__tab">
                    <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__right">
                            <img src="/static/png/enterprise/crphone.png"></img>
                          </div>
                          <div className="flex-item__left">
                            <div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Features you can offer
                          </ButtonLink>
                              </div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Benefits
                          </ButtonLink>
                              </div>
                            </div>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="enterprise__tab">
                    <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__right">
                            <img src="/static/png/enterprise/crphone.png"></img>
                          </div>
                          <div className="flex-item__left">
                            <div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Features you can offer
                          </ButtonLink>
                              </div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Benefits
                          </ButtonLink>
                              </div>
                            </div>
                          </div>
                        </FlexBox>
                      </Hero>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide">
                  <div className="enterprise__tab">
                    <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    <div>
                      <Hero className="hero__center-container">
                        <FlexBox className="flex">
                          <div className="flex-item__right">
                            <img src="/static/png/enterprise/crphone.png"></img>
                          </div>
                          <div className="flex-item__left">
                            <div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Features you can offer
                          </ButtonLink>
                              </div>
                              <div className="enterprise__tab__button-large">
                                <ButtonLink modifier="light" block="true" href="/enterprise">
                                  Benefits
                          </ButtonLink>
                              </div>
                            </div>
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

        <HeroCard title="Success Story">
          <div style={divStyle}>
            <div className="swiper-container" id="story-swiper">

              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <img src="/static/png/enterprise/veronika.png"></img>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <img src="/static/png/enterprise/jemma.png"></img>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <img src="/static/png/enterprise/shalma.png"></img>
                  </div>
                </div>
              </div>

              <div className="swiper-pagination"></div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>

            </div>
          </div>
        </HeroCard>

        <HeroCard className="hero-card--blue enterprise__how-to" title="How to Get Your Chatbot">
          <div>
            {this.renderTabChatBot()}
          </div>
          <div className="enterprise__how-to__content">
            <div className="swiper-container" id="chatbot-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h6>
                    1. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    2. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    3. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    4. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    5. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    6. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    7. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    8. get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="hero-card" title="Technology Behind Our Solutions">
          <div>
            <h6>
              Kata Platform gives enterprises the rich features needed to create high-value chatbots without development complexity
            </h6>
          </div>
          <div>
            <img src="/static/png/enterprise/laptop.png" />
          </div>
          <ButtonLink modifier="default" href="/enterprise">
            See Our Technology
          </ButtonLink>

        </HeroCard>


      </div >
    );
  }

  renderTabMenu() {
    return (
      <Tab>
        <TabItem item="Consumer Engagement" modifier="tab-item--selected" onClick={this.tabSwipeClick(0)} />
        <TabItem item="Banking Assistant" onClick={this.tabSwipeClick(1)} />
        <TabItem item="HR Bot" onClick={this.tabSwipeClick(2)} />
        <TabItem item="Costumer Service" onClick={this.tabSwipeClick(3)} />
        <TabItem item="E-Commerce Bot" onClick={this.tabSwipeClick(4)} />
        <TabItem item="Educational" onClick={this.tabSwipeClick(5)} />
      </Tab>
    );
  }

  renderTabChatBot() {
    return (
      <ul>
        <li onClick={this.botSwipeClick(0)}>
          <img src="/static/png/enterprise/icochat.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(1)}>
          <img src="/static/png/enterprise/icoconn.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(2)}>
          <img src="/static/png/enterprise/icocode.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(3)}>
          <img src="/static/png/enterprise/icohand.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(4)}>
          <img src="/static/png/enterprise/icobrain.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(5)}>
          <img src="/static/png/enterprise/icophone.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(6)}>
          <img src="/static/png/enterprise/icorocket.svg" width="90px" />
        </li>
        <li onClick={this.botSwipeClick(7)}>
          <img src="/static/png/enterprise/icotools.svg" width="90px" />
        </li>
      </ul>
    );
  }

  tabSwipeClick = (e: number) => () => {
    tabSwiper.slideTo(e, 400);
  }

  botSwipeClick = (e: number) => () => {
    chatBotSwiper.slideTo(e, 400);
  };

  storySwiperClick = (e: number) => () => {
    storySwiper.slideTo(e, 400)
  }

}
export default withLocaleService(Enterprise);

