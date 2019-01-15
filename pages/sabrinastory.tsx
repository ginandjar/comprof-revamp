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
          <title>Story Sabrina</title>
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
              <img className="landing__tab__logo" src="/static/png/landing/sabrina/logo.png" />
              <h1>
                Sabrina
              </h1>
              <h2>
                Award Winning Banking Assistant (The Asian Banker)

              </h2>

            </div>

          </div>
          <div className="flex-item__right detailstory__intro__content__right">

            <img src="/static/png/detailstory/sabrina/sabrina.png" alt="" />

          </div>

        </Intro>
        <div className="detailstory__container">
          <div className="detailstory__thestory">
            <div>
              <h1>The Story</h1>
            </div>
            <div className="detailstory__thestory__text">
              <p>Delivering an excellent customer experience is not a simple task. And oftentimes, one-way service channels have a tendency to be frustrating and time consuming. As Indonesia’s  largest bank based on asset, reach, and number of customer, Bank Rakyat Indonesia (BRI) is aware of these issue. Therefore, they are looking for chatbot solutions that will provide opportunities to serve better service as well as being a channel to hear their customers’ voice.</p>
              <p>By collaborating with Kata.ai, we build a smart assistant for BRI named Sabrina. This bot use contextual awareness to respond to customer inquiries quickly and efficiently. It turns banking activities into simple experiences that not only satisfy the customers’ needs, but do so in a way that is engaging and conversational. With this chatbot, customers can do banking activity anytime and anywhere, from messaging platforms as their preferred channels.</p>
            </div>
          </div>
          <div className="detailstory__result">
            <div className="detailstory__result__image">
              <Fade>
                <img src="/static/png/detailstory/sabrina/approach.png" alt="" />
              </Fade>
            </div>
            <div className="detailstory__result__text">
              <Fade>
                <h1>Our Approach</h1>
                <ul>
                  <li>Sabrina has redefine BRI banking experience, from branches to conversational banking, to attract and retain new customers. </li>
                  <li>From January - October 2018, Sabrina’s new active users has increased by 36% per month.</li>
                  <li>Sabrina has simplified banking activity for BRI’s customers, cut-down customer service costs and operational time.</li>
                  <li>On August 2018, Sabrina won “The Best Automated Advisory Initiative, Application or Programme” and “The Best Frictionless Customer Relationship Management” by The Asian Banker. </li>
                </ul>
              </Fade>
            </div>
          </div>
          <div className="detailstory__approach">
            <div className="detailstory__approach__content__left">
              <Fade>
                <img src="/static/png/detailstory/sabrina/result.png" alt="" />
              </Fade>
            </div>
            <div className="detailstory__approach__content__right">
              <Fade>
                <h1>The Results</h1>
                <ul>
                  <li>BRI’s Sabrina chatbot is another way to say ‘Smart BRI New Assistant’, it serve as a virtual assistant that can help BRI customers access information about banking and financial service.</li>
                  <li>Sabrina can help users find the location of the nearest BRI branch and ATM, provide information regarding BRI’s products and promotions, and handle customer complaints.</li>
                  <li>User can interact with Sabrina via Facebook Messenger, Telegram, and WhatsApp. Also could be accessed through natural conversations in Bahasa Indonesia.</li>
                  <li>Sabrina could deliver personalized product and service offers to customers, based on their profile data without being too pushy or annoying. </li>
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

