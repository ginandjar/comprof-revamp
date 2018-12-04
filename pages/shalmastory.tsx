import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Intro from '../components/layout/Intro';
import Fade from 'react-reveal/Fade';
import Footer from '../components/layout/Footer';
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
                Shalma
              </h1>
              <h2>
                Interactive assistant for customer loyalty
              </h2>

            </div>

          </div>
          <div className="flex-item__right detailstory__intro__content__right">

            <img src="/static/png/detailstory/shalma/shalma.png" alt="" />

          </div>

        </Intro>
        <div className="detailstory__container">
          <div className="detailstory__thestory">
            <div>
              <h1>The Story</h1>
            </div>
            <div className="detailstory__thestory__text">
              <p>Keeping shoppers digitally engaged and satisfied is more important than ever for retailers to move out of “keep-up” mode, and get ahead of the competition. As a major retail store with over 10.000 locations across the region that serves an average of 2.5 million customers daily, Alfamart has started embracing chatbots to offer rich and personalized experience through conversational platform, thus driving customer engagement and building customer loyalty. Now, customers can get 24/7 support without human intervention.</p>
              <p>By collaborating with Kata.ai, Alfamart built an interactive assistant for their promotion channels and customer loyalty programs. We decided to name the chatbot Shalma ‘Sahabat Alfamart’. Shalma is capable of handling multiple customers and responding to their disparate queries immediately. Delight users with promotional giveaways, loyalty programs, and much more. We released this chatbot in early of 2018.</p>
            </div>
          </div>
          <div className="detailstory__approach">
            <div className="detailstory__approach__content__left">
              <Fade>
                <img src="/static/png/detailstory/shalma/approach.png" alt="" />
              </Fade>
            </div>
            <div className="detailstory__approach__content__right">
              <Fade>
                <h1>Our Approach</h1>
                <ul>
                  <li>We proposed a female chatbot persona that represent Alfamart’s cashier who is friendly and helpful. </li>
                  <li>Shalma is a chatbot developed to help Alfamart customers get the best deals and value from their daily shopping trips. She is available on Alfamart’s LINE account.</li>
                  <li>This interactive assistant will help the customer register and access Ponta -- Alfamart’s membership and loyalty program -- provides information on the latest promos and products. She can also handle customer complaints.</li>
                  <li>These chatbots allows customers to buy shopping voucher by using their Ponta point. </li>
                  <li>Shalma provide a boost to customer experience, but at the same time can play a critical role in helping Alfamart as retail to keep up with changing consumers demand.</li>
                </ul>
              </Fade>
            </div>

          </div>
          <div className="detailstory__result">
            <div className="detailstory__result__image">
              <Fade>
                <img src="/static/png/detailstory/shalma/result.png" alt="" />
              </Fade>
            </div>
            <div className="detailstory__result__text">
              <Fade>
                <h1>The Results</h1>
                <ul>
                  <li>In every month, Alfamart managed to acquire ROI above 200%, from each promo and campaign through Shalma</li>
                  <li>During Alfamart’s promo campaign, Shalma managed to get conversions rate between 21% - 25%.</li>
                  <li>The chatbot puts the customer in control of the interaction. Not only satisfying customers needs, it also cultivates loyalty and drives sales without resorting to traditional tactics.</li>
                  <li>Shalma has become efficient way to win over customers and to streamline the customers/business relationship by changing the face of commerce. </li>
                </ul>
              </Fade>
            </div>
          </div>


        </div>
        <Footer localeService={this.props.localeService} />
      </div >

    );
  }

}
export default withLocaleService(DetailStory);

