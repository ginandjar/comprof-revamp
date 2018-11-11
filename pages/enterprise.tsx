import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Business from '../components/layout/Business';
import Platform from '../components/layout/Platform';
import ExplorePlatform from '../components/layout/ExplorePlatform';
import WorkWithUs from '../components/layout/WorkWithUs';
import CaseStudy from '../components/layout/CaseStudy';
import Intro from '../components/layout/Intro';
import Career from '../components/layout/Career';
import BuildChatbot from '../components/layout/BuildChatbot';
import TabbedHero from '../components/layout/TabbedHero';
import TabItem from '../components/layout/TabItem';
import Tab from '../components/layout/Tab';
import Hero from '../components/layout/Hero';
import FlexBox from '../components/layout/FlexBox';
import ButtonLink from '../components/links/ButtonLink';
import HeroCard from '../components/layout/HeroCard';


interface Props {

}

class Enterprise extends React.Component<Props> {
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
            <Tab>
              <TabItem item="Consumer Engagement" modifier="tab-item--selected" />
              <TabItem item="Banking Assistant" />
              <TabItem item="HR Bot" />
              <TabItem item="Costumer Service" />
              <TabItem item="E-Commerce Bot" />
              <TabItem item="Educational" />
            </Tab>
          </div>
          <div>
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

        </TabbedHero>

        <HeroCard title="Success Story">
          <img src="/static/png/enterprise/veronika.png"></img>
          <img src="/static/png/enterprise/jemma.png"></img>
          <img src="/static/png/enterprise/shalma.png"></img>


        </HeroCard>

        <HeroCard className="hero-card--blue enterprise__how-to" title="How to Get Your Chatbot">
          <div>
            <ul>
              <li>
                <img src="/static/png/enterprise/icochat.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icoconn.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icocode.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icohand.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icobrain.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icophone.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icorocket.svg" width="90px" />
              </li>
              <li>
                <img src="/static/png/enterprise/icotools.svg" width="90px" />
              </li>
            </ul>
          </div>
          <div className="enterprise__how-to__content">
            <h6>
              1. get in touch
            </h6>
            <h6>
              Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
            </h6>
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


      </div>

    );
  }

}
export default withLocaleService(Enterprise);

