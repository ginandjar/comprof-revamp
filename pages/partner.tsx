import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Swiper from 'swiper';
import Intro from '../components/layout/Intro';
import HeroCard from '../components/layout/HeroCard';
import TabbedHero from '../components/layout/TabbedHero';
import Hero from '../components/layout/Hero';
import Tab from '../components/layout/Tab';
import FlexBox from '../components/layout/FlexBox';
import ButtonLink from '../components/links/ButtonLink';
import TabItem from '../components/layout/TabItem';

interface Props {

}

let tabSwiper: any = null;


class Partner extends React.Component<Props> {
  public static async getInitialProps(ctx: NextContext) {

  }

  componentDidMount() {
    tabSwiper = new Swiper('#tab-swiper', {
      speed: 400,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
      },
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

        <Intro className="intro partner">
          <div className="partner__intro">
            <div className="partner__intro__text">
              <h1>
                We are making AI technology accessible to everyone
                </h1>
            </div>
            <div className="partner__intro__image">
              <img src="/static/png/partner/intro.png" />

            </div>
          </div>

        </Intro>



        <HeroCard className="hero-card">
          <div className="partner__hero">
            <div className="partner__hero__text__history">

              <h1 className="partner__hero__text__history__title">
                What is Kata Partnership
              </h1>
              <p className="partner__hero__text__history__des __testimonials" >
                Whether you want to build chatbots or offer integrated tech solutions for your client, Kata.ai offers flexible technology or ecosystem partnerships to align with your business model. As Kata.ai partner, you will have access to technical resources, and will benefit from sales lead coming from enterprises that want to develop chatbot with Kata Platform technology.<br /><br />With Kata.ai partnership program your business will get training, materials, and best practices so you can get to know our chatbot development platform. Besides user-friendly interface, strong NLP, a variety of integration channels and language, we have much more integrated solution to offer to your clients.
              </p>
              <img src="/static/png/partner/dot.png" className="partner__hero__text__history__dot" />


            </div>
          </div>

        </HeroCard>

        <HeroCard title="Expand Your Opportunities" className="partner__hero">
          <p className="__testimonials">
            Here are some of the benefits you get when you add our AI/NLP based chatbot solution
          </p>
          <div className="partner__list-image">
            <div className="partner__list-image__item">
              <img src="/static/png/partner/window.svg" />
              <h5>
                Broaden your products & services portfolio
              </h5>

            </div>

            <div className="partner__list-image__item">
              <img src="/static/png/partner/revenue.svg" />
              <h5>
                Generate incremental and recurring revenue
              </h5>
            </div>

            <div className="partner__list-image__item">
              <img src="/static/png/partner/ribbon.svg" />
              <h5>
                Help your clients launch chatbots in any chat apps
              </h5>
            </div>

            <div className="partner__list-image__item">
              <img src="/static/png/partner/tree.svg" />
              <h5>
                Increase revenue & margins
              </h5>
            </div>

            <div className="partner__list-image__item">
              <img src="/static/png/partner/statisfication.svg" />
              <h5>
                Increase satisfaction for your clients
              </h5>
            </div>

          </div>

        </HeroCard>


        <HeroCard title="Our Trusted Partner" className="partner__hero">
          <div className="partner__list-image">
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/medlink.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/nawatech.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/halosis.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/selindo.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/radyyalabs.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/qiscus.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/sprint.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/salt.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/infomedia.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/jatis.png" />
            </div>
            <div className="partner__list-image__item--list-image-only">
              <img src="/static/png/partner/trusted/mitra.png" />
            </div>

          </div>

        </HeroCard>




        <TabbedHero
          className="partner__tabbed"
          title="The Management">

          <div>
            {this.renderTabMenu()}
          </div>
          <div>
            <div className="swiper-container" id="tab-swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="partner__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="partner__tab__image">
                          <img src="/static/png/partner/management/icn.png" />
                        </div>
                        <div className="partner__tab__text">
                          <h6>
                            Irzan Raditya
                          </h6>
                          <p>
                            Born in 1988, he is a young entrepreneur with a deep exposure and passion in the digital and technology sphere. He acquired his Bachelor of Science degree in Computer Science from Hochschule für Technik und Wirtschaft (HTW) Berlin in 2012. Prior to returning to his home country in Indonesia, he worked as Feature Engineer at Zolando (subsdiary of Rocket Internet) and TakeAway.com. After exploring valuable experience in Germany for years, Irzan decided to come home to Indonesia and exercised his passion to build his own business. He founded several startup such as Amplitweet, Cape&Fly, Rumah Diaspora, before finally building YesBoss a partner that offers virtual assistant service, which became Kata.ai now after the partner pivot into B2B business that offers AI technology for corporations.
                          </p>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="partner__tab__image">
                          <img src="/static/png/partner/management/rizki.png" />
                        </div>
                        <div className="partner__tab__text">
                          <h6>
                            Ahmad Rizqi Meydiarso
                          </h6>
                          <p>
                            Rizqi is the CTO and Co-Founder of Kata.ai. In his role, he is the brain and mastermind who leads the development of the partner’s AI platform. His goal is to drive his team in creating a state-of-the-art Natural Language Provessing (NLP) platform. He gained both his M.Sc and B.Sc. in Computer Science in Engineering from Technical University of Hamburg as part of a program sponsored by Airbus, starting his career at the partner where he worked as a System Engineer until 2015 - the moment he decided to join the other co-founders of Kata.ai to start their own partner. His strength is the ability to understand complex problem and decompose it to smaller blocks that can be tackled independently, and his ability to create elegant piece of platform design that is extensible, reusable, and flexible.
                          </p>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="partner__tab__image">
                          <img src="/static/png/partner/management/wahyu.png" />
                        </div>
                        <div className="partner__tab__text">
                          <h6>
                            Wahyu Wrehasnaya
                          </h6>
                          <p>
                            Wahyu Wrehasnaya is the Co-Founder and Chief Financial Officer of Kata.ai, the pioneer of Artificial Intelligence in Indonesia that successfully built one of the first Natural Language Understanding of Bahasa Indonesia. Before pivoting to focus on the development of AI technology for B2B markets, the partner offers a personal virtual assistant service under the name of YesBoss. At YesBoss, Wahyu help the role of Co-Founder and Chief Customer Officer, leading the service & operational team in Indonesia. Prior to that, Wahyu, Co-Founded Rumah Diaspora, an Air bnb like for Indonesian Diaspora overseas and was working at Nasdaq OMX Germany, focusing on corporate service departments. As an entrepreneur at heart, Wahyu believes that FAITH (Fast, Ask Why, Innovation, Though, Humble) are the key values that every entrepreneur should hold on to. Wahyu holds a B.Sc, in Business Economics from the University of Martin Luther.
                          </p>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="partner__tab__image">
                          <img src="/static/png/partner/management/rey.png" />
                        </div>
                        <div className="partner__tab__text">
                          <h6>
                            Reynir Fauzan
                          </h6>
                          <p>
                            Reynir is the CMO and Co-Founder of Kata.ai, the leading B2B Artificial Intelligence solution in Indonesia, previously operated as YesBoss. Other than leading the marketing division, his main responsibility is to drive the growth of Kata’s sales and business development. Before he sells bots for a living, Reynir has worked in banking and financial services industry. He also holds a degree in Marketing from BINUS International University, and a degree in International Trade from Cologne Business School Germany. With his fellow co-founders and amazing team, Reynir is helping business to understand their customer better by humanizing digital interactions.
                          </p>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="partner__tab__image">
                          <img src="/static/png/partner/management/pria.png" />
                        </div>
                        <div className="partner__tab__text">
                          <h6>
                            Pria Purnama
                          </h6>
                          <p>
                            Pria Purnama is the VP of Product & Engineering of Kata.ai. In Kata.ai, he is in charge of managing product and engineering team in delivering all of Kata.ai’s products. Prior to this role, he started out his career by developing websites for Water & Stone, Ogilvy Sydney. He then pivoted to building mobile applications at Ice House and Bridestory, where he discovered that he loves working with engineers and building product. Finally, before becoming a VP at Kata.ai, Pria served as VP of Product and Engineering C88 Financial Technologies (CekAja).
                          </p>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>

        </TabbedHero>
      </div>

    );
  }

  renderTabMenu() {
    return (
      <Tab>
        <TabItem item="CEO" modifier="tab-item--selected" onClick={this.tabSwipeClick(0)} />
        <TabItem item="CTO" onClick={this.tabSwipeClick(1)} />
        <TabItem item="CFO" onClick={this.tabSwipeClick(2)} />
        <TabItem item="CMO" onClick={this.tabSwipeClick(3)} />
        <TabItem item="VP Of Product & Engineering" onClick={this.tabSwipeClick(4)} />
      </Tab>
    );
  }


  tabSwipeClick = (e: number) => () => {
    tabSwiper.slideTo(e, 400);
  }


}
export default withLocaleService(Partner);

