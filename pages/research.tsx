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
import Footer from '../components/layout/Footer';

interface Props {

}

class Research extends React.Component<Props> {
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
        <Intro className="research">
          <div className="flex-item__left research__intro__content">
            <div className="research__intro__text">
              <h1>
                Kata.ai’s research team aims to push the development of AI technology in the region. Discovering new ways to bring more impact.
              </h1>
            </div>

          </div>
          <div className="flex-item__right research__intro__img">
            <div className="research__intro__img__content--left">
              <img src="/static/jpg/research/researchone.jpeg" alt="" />
            </div>
            <div className="research__intro__img__content--right">
              <img src="/static/jpg/research/researchtwo.jpeg" alt="" />
            </div>
          </div>
        </Intro>
        <div className="research__research-container">
          <HeroCard title="Recent Publication">

          </HeroCard>

          <div className="research__research-content">
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  <h3>Empirical Evaluation of Character-Based Model on Neural Named-Entity Recognition in Indonesian Conversational Texts</h3>
                </div>
                <div className="research__research-content__writen-by">
                  <h5>Writen by :  Kemal Kurniawan & Samuel Louvan</h5>
                </div>
                <a className="research__research-content__read-more" href="/research/NER">
                  <h5>Read more</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="research__research-content">
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  <h3>Multi-Task Active Learning for Neural Semantic Role Labeling on Low Resource Conversational Corpus</h3>
                </div>
                <div className="research__research-content__writen-by">
                  <h5>Writen by : Fariz Ikhwantri & Samuel Louvan & Kemal Kurniawan & Bagas Abisena & Valdi Rachman & Alfan Farizki Wicaksono & Rahmad Mahendra</h5>
                </div>
                <a className="research__research-content__read-more" href="/research/SRL">
                  <h5>Read more</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="research__research-content">
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  <h3>IndoSum: A New Benchmark Dataset for Indonesian Text Summarization</h3>
                </div>
                <div className="research__research-content__writen-by">
                  <h5>Writen by : Kemal Kurniawan & Samuel Louvan</h5>
                </div>
                <a className="research__research-content__read-more" href="/research/IndoSum">
                  <h5>Read more</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="research__research-content">
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  <h3>LToward a Standardized and More Accurate Indonesian Part-of-Speech Tagging</h3>
                </div>
                <div className="research__research-content__writen-by">
                  <h5>Writen by : Kemal Kurniawan & Samuel Louvan</h5>
                </div>
                <a className="research__research-content__read-more" href="/research/POS">
                  <h5>Read more</h5>
                </a>
              </div>
            </div>
          </div>
        </div>


        <Footer localeService={this.props.localeService} />
      </div>

    );
  }

}
export default withLocaleService(Research);

