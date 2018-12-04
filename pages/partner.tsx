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
import Footer from '../components/layout/Footer';

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
        <Footer localeService={this.props.localeService} />
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

