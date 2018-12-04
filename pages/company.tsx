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
import { Image } from 'react-bootstrap';
import Footer from '../components/layout/Footer';

interface Props {

}
interface States {

  currentIndex: number;
}

let tabSwiper: any = null;


class Company extends React.Component<Props> {
  public static async getInitialProps(ctx: NextContext) {

  }
  state = {
    currentIndex: 0
  };

  componentDidMount() {
    tabSwiper = new Swiper('#tab-swiper', {
      speed: 400,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    this.setState({
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

        <Intro className="intro company">
          <div className="company__intro">
            <div className="company__intro__text">
              <h1>
                We are making AI technology accessible to everyone
                </h1>
            </div>
            <div className="company__intro__image">
              <img src="/static/png/company/intro.png" />

            </div>
          </div>

        </Intro>

        <HeroCard title="About The Company" className="company__hero">
          <p>
            We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on  understanding human conversation so we can improve the way humans collaborate with technology to be more productive and empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and Retail.
          </p>
          <div className="company__list-image">
            <div className="company__list-image__item">
              <img src="/static/png/company/brain.svg" />
              <p>
                Create a chatbot that can automate your customer support process, reducing the cost of your call-center operation
              </p>


            </div>

            <div className="company__list-image__item">
              <img src="/static/png/company/phone.svg" />
              <p>
                The chatbot can also offer an instant and interactive way for customers to interact with your brands. Offering transaction capability or even product recommendation.
              </p>


            </div>

            <div className="company__list-image__item">
              <img src="/static/png/company/chart.svg" />
              <p>
                With better experience for your customer, it’s easier to convert their interest into leads or purchases.
              </p>


            </div>

          </div>

        </HeroCard>

        <HeroCard className="hero-card">
          <div className="company__hero">
            <div className="company__hero__text__history">

              <h1 className="company__hero__text__history__title">
                The History
              </h1>
              <p className="company__hero__text__history__des " >
                Established in 2015, we started our journey as YesBoss, offering virtual assistant service through SMS and a mobile app. Along the way, we learned that we wanted a business that was more impactful and scaleable. With the man-power heavy B2C service provided by, so in 2016 YesBoss is no longer active and we have to pivot our business into the B2B segment with the launch of Kata.ai <br /><br />Our goal in Kata.ai is to offers natural language dialogue engine that enables brands and enterprises to build their own chatbots to perform conversational activities ranged from product marketing, commerce, to behavioral data gathering via commonly-used social and chatp apps like LINE, Facebook, Twitter, Telegram, Slack, BBM, and WhatsApp. Helping business to understand the behavior of their customers and build better relationship. <br /><br />Our journey hasn’t always been easy, but we embrace it to learn and get better. Our team is aligned and working hard to make great product and solutions.
              </p>
              <img src="/static/png/company/dot.png" className="company__hero__text__history__dot" />
              <img src="/static/png/company/cover.png" className="company__hero__text__history__cover" />

            </div>
          </div>

        </HeroCard>


        <TabbedHero
          className="company__tabbed"
          title="The Management">

          <div>
            {this.renderTabMenu()}
          </div>
          <div>
            <div className="swiper-container" id="tab-swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="company__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="company__tab__image">
                          <img src="/static/png/company/management/icn.png" />
                        </div>
                        <div className="company__tab__text">
                          <h6>
                            Irzan Raditya
                          </h6>
                          <p>
                            Born in 1988, he is a young entrepreneur with a deep exposure and passion in the digital and technology sphere. He acquired his Bachelor of Science degree in Computer Science from Hochschule für Technik und Wirtschaft (HTW) Berlin in 2012. Prior to returning to his home country in Indonesia, he worked as Feature Engineer at Zolando (subsdiary of Rocket Internet) and TakeAway.com. After exploring valuable experience in Germany for years, Irzan decided to come home to Indonesia and exercised his passion to build his own business. He founded several startup such as Amplitweet, Cape&Fly, Rumah Diaspora, before finally building YesBoss a company that offers virtual assistant service, which became Kata.ai now after the company pivot into B2B business that offers AI technology for corporations.
                          </p>
                          <a href=" https://www.linkedin.com/in/irzanraditya/" target="_blank"><Image src="/static/png/company/linkedin.svg" /></a>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="company__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="company__tab__image">
                          <img src="/static/png/company/management/rizki.png" />
                        </div>
                        <div className="company__tab__text">
                          <h6>
                            Ahmad Rizqi Meydiarso
                          </h6>
                          <p>
                            Rizqi is the CTO and Co-Founder of Kata.ai. In his role, he is the brain and mastermind who leads the development of the company’s AI platform. His goal is to drive his team in creating a state-of-the-art Natural Language Provessing (NLP) platform. He gained both his M.Sc and B.Sc. in Computer Science in Engineering from Technical University of Hamburg as part of a program sponsored by Airbus, starting his career at the company where he worked as a System Engineer until 2015 - the moment he decided to join the other co-founders of Kata.ai to start their own company. His strength is the ability to understand complex problem and decompose it to smaller blocks that can be tackled independently, and his ability to create elegant piece of platform design that is extensible, reusable, and flexible.
                          </p>
                          <a href="https://www.linkedin.com/in/rizqme/" target="_blank"><Image src="/static/png/company/linkedin.svg" /></a>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="company__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="company__tab__image">
                          <img src="/static/png/company/management/wahyu.png" />
                        </div>
                        <div className="company__tab__text">
                          <h6>
                            Wahyu Wrehasnaya
                          </h6>
                          <p>
                            Wahyu Wrehasnaya is the Co-Founder and Chief Financial Officer of Kata.ai, the pioneer of Artificial Intelligence in Indonesia that successfully built one of the first Natural Language Understanding of Bahasa Indonesia. Before pivoting to focus on the development of AI technology for B2B markets, the company offers a personal virtual assistant service under the name of YesBoss. At YesBoss, Wahyu help the role of Co-Founder and Chief Customer Officer, leading the service & operational team in Indonesia. Prior to that, Wahyu, Co-Founded Rumah Diaspora, an Air bnb like for Indonesian Diaspora overseas and was working at Nasdaq OMX Germany, focusing on corporate service departments. As an entrepreneur at heart, Wahyu believes that FAITH (Fast, Ask Why, Innovation, Though, Humble) are the key values that every entrepreneur should hold on to. Wahyu holds a B.Sc, in Business Economics from the University of Martin Luther.
                          </p>
                          <a href="https://www.linkedin.com/in/wahyu-wrehasnaya-0a5ba536/" target="_blank"><Image src="/static/png/company/linkedin.svg" /></a>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="company__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="company__tab__image">
                          <img src="/static/png/company/management/rey.png" />
                        </div>
                        <div className="company__tab__text">
                          <h6>
                            Reynir Fauzan
                          </h6>
                          <p>
                            Reynir is the CMO and Co-Founder of Kata.ai, the leading B2B Artificial Intelligence solution in Indonesia, previously operated as YesBoss. Other than leading the marketing division, his main responsibility is to drive the growth of Kata’s sales and business development. Before he sells bots for a living, Reynir has worked in banking and financial services industry. He also holds a degree in Marketing from BINUS International University, and a degree in International Trade from Cologne Business School Germany. With his fellow co-founders and amazing team, Reynir is helping business to understand their customer better by humanizing digital interactions.
                          </p>
                          <a href="https://www.linkedin.com/in/rfauzan/" target="_blank"><Image src="/static/png/company/linkedin.svg" /></a>
                        </div>
                      </Hero>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="company__tab">
                    <div>
                      <Hero className="hero__center-container">
                        <div className="company__tab__image">
                          <img src="/static/png/company/management/pria.png" />
                        </div>
                        <div className="company__tab__text">
                          <h6>
                            Pria Purnama
                          </h6>
                          <p>
                            Pria Purnama is the VP of Product & Engineering of Kata.ai. In Kata.ai, he is in charge of managing product and engineering team in delivering all of Kata.ai’s products. Prior to this role, he started out his career by developing websites for Water & Stone, Ogilvy Sydney. He then pivoted to building mobile applications at Ice House and Bridestory, where he discovered that he loves working with engineers and building product. Finally, before becoming a VP at Kata.ai, Pria served as VP of Product and Engineering C88 Financial Technologies (CekAja).
                          </p>
                          <a href="https://www.linkedin.com/in/priapurnama/" target="_blank"><Image src="/static/png/company/linkedin.svg" /></a>
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
        <Footer localeService={this.props.localeService} />
      </div>

    );
  }

  renderTabMenu() {
    return (
      <Tab>
        <TabItem item="CEO" modifier={this.state.currentIndex == 0 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(0)} />
        <TabItem item="CTO" modifier={this.state.currentIndex == 1 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(1)} />
        <TabItem item="CFO" modifier={this.state.currentIndex == 2 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(2)} />
        <TabItem item="CMO" modifier={this.state.currentIndex == 3 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(3)} />
        <TabItem item="VP Of Product & Engineering" modifier={this.state.currentIndex == 4 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(4)} />
      </Tab>
    );
  }


  tabSwipeClick = (e: number) => () => {
    tabSwiper.slideTo(e, 400);
    this.setState({ currentIndex: e });
  }


}
export default withLocaleService(Company);

