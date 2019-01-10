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
          <title>Story Veronika</title>
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
                Veronika
              </h1>
              <h2>
                Intelligent customer support for Telco
              </h2>

            </div>

          </div>
          <div className="flex-item__right detailstory__intro__content__right">

            <img src="/static/png/detailstory/veronika/veronika.png" alt="" />

          </div>

        </Intro>
        <div className="detailstory__container">
          <div className="detailstory__thestory">
            <div>
              <h1>The Story</h1>
            </div>
            <div className="detailstory__thestory__text">
              <p>Today’s customers want more than the traditional one-sided transaction, they want a two-way interaction. And enterprises that are doing this effectively are already discovering the merits of a personal, actionable conversation through higher profit margins and increase rate of loyalty. Therefore, Telkomsel as Indonesia’s largest cellular operator with more than 120 million subscribers are seeking for digital channels that can enrich their engagement and service delivery to the consumers, and these new digital channel need to be able to fulfill two main goals : improving customer service and driving revenue from more transactions.</p>
              <p>Telkomsel collaborates with Kata.ai and Accenture to revive Telkomsel’s Legendary Brand Persona as an AI - powered intelligent assistant. These chatbot can reduce overhead, increase workflow, and most important of all, automate the customer service experience in a way that is less expensive and more simpler than before.  </p>
            </div>
          </div>
          <div className="detailstory__result">
            <div className="detailstory__result__image">
              <Fade>
                <img src="/static/png/detailstory/veronika/approach.png" alt="" />
              </Fade>
            </div>
            <div className="detailstory__result__text">
              <Fade>
                <h1>Our Approach</h1>
                <ul>
                  <li>In every month, the number of phone credits and data package purchases through Veronika always grow with an average increase of 49.06% monthly. </li>
                  <li>The customer inquiries can actually be handled by the chatbot with minimal human interaction, offering a more efficient and quicker solution and resolution for the customer needs.</li>
                  <li>The chatbot also provides an easier way to update the customers with important information.</li>
                  <li>The strategy can be leveraged as a long term project where more improvements and enhancement can be explored to improve customer engagement for Telkomsel.</li>

                </ul>
              </Fade>
            </div>
          </div>
          <div className="detailstory__approach">
            <div className="detailstory__approach__content__left">
              <Fade>
                <img src="/static/png/detailstory/veronika/result.png" alt="" />
              </Fade>
            </div>
            <div className="detailstory__approach__content__right">
              <Fade>
                <h1>The Results</h1>
                <ul>
                  <li>We proposed creating a scalable omni-channel chatbot as a virtual assistant that can assist all the needs of Telkomsel customers.</li>
                  <li>Omni-channel itself means that the virtual assistant can be accessed by the customers through various platforms including LINE and Facebook Messenger. </li>
                  <li>The chatbot will be named Veronika, to provide a persona and name that is already familiar to the customers, capitalizing on their existing brand strength.</li>
                  <li>To ensure top quality and consistency of service, the chatbot is also equipped with seamless handover to human customer service agents that can take over the conversation when the customer inquiries is too complex to be handled by the chatbot. </li>
                  <li>As a comprehensive assistant, Veronika can give the users access to product information, latest promotions, customer service as well as facilitating carious transactions such as buying phone credits, data packages, or bill payment. </li>
                  <li>Beyond that, Veronika can help the customers access a location based service to find the nearest GraPARI (Telkomsel’s brick-and-mortar customer service centre). </li>
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

