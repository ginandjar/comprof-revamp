import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Intro from '../components/layout/Intro';

interface Props {

}

class DetailStory extends React.Component<Props> {
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
        <Intro className="detailstory">

          <div className="flex-item__left detailstory__intro__content ">
            <div className="detailstory__intro__text">
              <h1>
                Jemma
              </h1>
              <h2>
                Virtual friend for personalized consumer engagement
              </h2>
            </div>

          </div>
          <div className="flex-item__right detailstory__intro__content__right">
            <img src="/static/png/detailstory/jemma/jemma.png" alt="" />
          </div>

        </Intro>
        <div className="detailstory__container">
          <div className="detailstory__thestory">
            <div>
              <h1>The Story</h1>
            </div>
            <div className="detailstory__thestory__text">
              <p>Recently more and more enterprises are turning to bots to change the traditional consumer experience into a gratifying, conversational, and personalized interaction. To remain competitive in the ever-evolving market, Unilever as the biggest FMCG brand has a vision to understand Indonesian audience better through digital platform, while at the same time deliver an engaging experience to their target audience on a deeper level.</p>
              <p>By collaborating with Kata.ai, Unilever wants to utilize AI-powered chatbot into their marketing strategies to capturing consumer insights and seeks ways to delve deeper into profile and behavior of their customers. On the other hand, these chatbot can also be used by brands under Unilever to promote their products. Hence, at 2017 we released Jemma as a virtual friend from Unilever for personalized consumer engagement.</p>
            </div>
          </div>
          <div className="detailstory__approach">
            <div className="detailstory__approach__content__left">
              <img src="/static/png/detailstory/jemma/approach.png" alt="" />
            </div>
            <div className="detailstory__approach__content__right">
              <h1>Our Approach</h1>
              <ul>
                <li>We proposed a female chatbot persona that is relatable to the key audience, emulating witty, and trustworthy best friend. It is designed to entertain and build relationship through everyday conversations.</li>
                <li>We decided to name the chatbot ‘Jemma’, a chatbot with a bubbly personality that everybody loves to talk to.</li>
                <li>Jemma is capable of handling various conversations topics, from simple greetings to specific conversation cases such as relationship, food recommendation, and beauty tips.</li>
                <li>Aside from handling everyday conversations, the key features that Jemma offers are weekly zodiac, lifehack, and latest entertainment news.</li>
                <li>Jemma is available on LINE. Those chat apps is the most appropriate channel for this project and it fits really well with Unilever’s customer demographics.</li>
              </ul>
            </div>
          </div>
          <div className="detailstory__result">
            <div className="detailstory__result__image">
              <img src="/static/png/detailstory/jemma/result.png" alt="" />
            </div>
            <div className="detailstory__result__text">
              <h1>The Results</h1>
              <ul>
                <li>Jemma is highly effective as one of Unilever’s alternative digital marketing channels to promote Unilever’s products and events.</li>
                <li>Ramadhan feature on chatbot Jemma has been successfully increasing active users up to 45%, within 30 days.</li>
                <li>In every week, Jemma active users has increased with an average growth : 11%, from each campaign.</li>
                <li>Special campaign Eid Al-Adha has been successfully increasing Jemma active users up to 11%.</li>
                <li>Engagement users has increased up to 30%, because of Chef Pan Pan feature on Jemma.</li>
                <li>Jemma managed to get conversions rates 39% in every month.</li>
                <li>On October 2017, Jemma won “The Most Interactive Brand Chatbot” award by LINE.</li>
                <li>Through Jemma, Unilever can unlock marketable consumer insights and personalized cross-selling opportunities to a massive audience.</li>
              </ul>
            </div>
          </div>


        </div>

      </div >

    );
  }

}
export default withLocaleService(DetailStory);

