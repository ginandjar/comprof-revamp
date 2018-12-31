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
import Hero from 'components/layout/Hero';
import Footer from '../components/layout/Footer';
import Fade from 'react-reveal/Fade';

interface Props {

}

class Platform extends React.Component<Props> {
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
        <Intro>
          <HeroCard title="The Ultimate Chatbot Platform" caption="" className="platform__intro">
            <h2>
              An integrated platform to create, launch, and manage enterprise-grade chatbot without compromise
            </h2>
            <div className="platform__intro-image">
              <Fade left>
                <div className="platform__intro-image--left">
                  <img src="/static/png/platform/laptopleft.png" />
                </div>
              </Fade>
              <Fade bottom>
                <div className="platform__intro-image--center">
                  <img src="/static/png/platform/laptopmiddle.png" />
                </div>
              </Fade>
              <Fade right>
                <div className="platform__intro-image--right">
                  <img src="/static/png/platform/laptopright.png" />
                </div>
              </Fade>
            </div>
            <ButtonLink modifier="default" href="https://platform.kata.ai">
              Sign Up for Free
            </ButtonLink>
          </HeroCard>
        </Intro>
        <div className="platform">
          <HeroCard title="Kata Platform 3.0">
            <h3>
              Our biggest update yet to the powerful Kata Platform
            </h3>
            <p>
              The new Kata Platform 3.0 is our awesome platform to build great conversation interface. It allows you to quickly and simply build incredible chatbot for any product or service. It comes with great features, has the smartest AI with the best NLP in Bahasa Indonesia & English. So you can make a chatbot that understands users better. You can even deploy it into any chat apps that you want, and get insights about users behavior with our analytics tools.
          </p>
          </HeroCard>
          <HeroCard title="Our Features" className="platform__features">
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group2106.svg" /></div>
              <div className="platform__features__title">NL Studio</div>
              <div className="platform__features__descr"> Create your own Natural Language model or use our pre-trained model to enhance your chatbot.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group2107.svg" /></div>
              <div className="platform__features__title">Bot Studio</div>
              <div className="platform__features__descr">Develop chatbot using visual interface or YAML-based Markup Language. You can also embed javascript code for more powerful scripting capability.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group2109.svg" /></div>
              <div className="platform__features__title">CMS Studio</div>
              <div className="platform__features__descr"> Build custom CMS for your chatbot to allow easier content updates for non developers.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group2114.svg" /></div>
              <div className="platform__features__title">Module</div>
              <div className="platform__features__descr">Integrate our prebuilt module to your existing project for faster & better bot development.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group2778.svg" /></div>
              <div className="platform__features__title">Analytic Dashboard</div>
              <div className="platform__features__descr"> Monitor how your chatbot performs & gather actionable insight for future improvements.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group3359.svg" /></div>
              <div className="platform__features__title">Deployment Manager</div>
              <div className="platform__features__descr">Set up multiple environments for different purpose. Rollback when you need to. Create one, chat anywhere.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group3360.svg" /></div>
              <div className="platform__features__title">CRM Integrations</div>
              <div className="platform__features__descr">Integrate your favorite CRM tools. Now supports Salesforce & Zendesk.</div>
            </div>
            <div className="platform__features__item">
              <div className="platform__features__image"><img src="/static/png/platform/group3361.svg" /></div>
              <div className="platform__features__title">API Integrations</div>
              <div className="platform__features__descr">Flexible third-party API integrations to your chatbot.</div>
            </div>
          </HeroCard>
        </div>
        <div className="platform__buildchatbot">
          <h1>
            Learn How to Build Chatbot with Kata Platform
          </h1>
          <img src="/static/png/platform/buildchatbot.jpg" />
          <ButtonLink modifier="default" href="https://docs.kata.ai">
            See Documentations
          </ButtonLink>
        </div>
        <div className="platform__engineering-blog">
          <h1>Kata Engineering Blog</h1>
          <div className="platform__engineering-blog__blog-content">
            <div className="platform__engineering-blog__list">
              <div className="platform__engineering-blog__item">
                <div className="platform__engineering-blog__image">
                  <img src="/static/png/platform/chatbotlist.jpg" />
                </div>
                <div className="platform__engineering-blog__detail">
                  <div className="platform__engineering-blog__title">
                    Kata Platform 2.5 : Better Platform for Better Chatbots
                  </div>
                  <div className="platform__engineering-blog__descr">
                    After releasing Kata Bot Platform publicly in December 2017, we had agreat time working with the developer community by
                  </div>
                  <div className="platform__engineering-blog__read-more">Read more</div>
                  <div className="platform__engineering-blog__written-by">
                    <img src="" />
                    <p>Aria Nurfikryon August 3, 2018</p>
                  </div>
                </div>
              </div>
              <div className="platform__engineering-blog__item">
                <div className="platform__engineering-blog__image">
                  <img src="/static/png/platform/chatbotlist.jpg" />
                </div>
                <div className="platform__engineering-blog__detail">
                  <div className="platform__engineering-blog__title">
                    Kata Platform 2.5 : Better Platform for Better Chatbots
                  </div>
                  <div className="platform__engineering-blog__descr">
                    After releasing Kata Bot Platform publicly in December 2017, we had agreat time working with the developer community by
                  </div>
                  <div className="platform__engineering-blog__read-more">Read more</div>
                  <div className="platform__engineering-blog__written-by">
                    <img src="" />
                    <p>Aria Nurfikryon August 3, 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroCard title="Help & Advice" className="platform__help">
          <h5>Got question? Feel free to reach our support or join our developer community on Slack to get help from fellow Kata Platform users & partners</h5>
          <ButtonLink modifier="default" href="mailto:support@kata.ai">
            Contact Our Support
          </ButtonLink>
        </HeroCard>
        <HeroCard title="Partner Workshop">
          <div className="platform__partner-workshop">
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3398.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3399.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3400.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3401.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3402.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3403.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3404.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3405.jpg" />
            </div>
            <div className="platform__partner-workshop__item">
              <img src="/static/png/platform/group3406.jpg" />
            </div>
          </div>
        </HeroCard>
        <HeroCard className="platform__try-platform">
          <div className="platform__try-platform__content">
            <h1>Start free  and scale as you grow</h1>
            <ButtonLink modifier="light" href="https://platform.kata.ai/login">
              Try Kata Platform
            </ButtonLink>
          </div>

        </HeroCard>
        <Footer localeService={this.props.localeService} />
      </div>

    );
  }

}
export default withLocaleService(Platform);

