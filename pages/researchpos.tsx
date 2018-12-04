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
import Fade from 'react-reveal/Fade';
import Footer from '../components/layout/Footer';
interface Props {

}

class ResearchDetail extends React.Component<Props> {
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
        <div className="researchdetail">

          <div className="researchdetail__title">
            Toward a Standardized and More Accurate Indonesian Part-of-Speech Tagging
          </div>
          <div className="researchdetail__descr">
            <Fade>
              <p>Publication year: 2018</p>
              <p>Written by : Kemal Kurniawan & Samuel Louvan</p>
            </Fade>
            <hr />
          </div>
          <HeroCard title="Abstract" className="researchdetail__abstract">
            <p className="researchdetail__abstract__detail">
              Previous work in Indonesian part-of-speech (POS) tagging are hard to compare as they are not evaluated on a common dataset. Furthermore, in spite of the success of neural network models for English POS tagging, they are rarely explored for Indonesian. In this paper, we explored various techniques for Indonesian POS tagging, including rule-based, CRF, and neural network-based models. We evaluated our models on the IDN Tagged Corpus. A new state-of-the-art of 97.47 F1 score is achieved with a recurrent neural network. To provide a standard for future work, we release the dataset split that we used publicly.
            </p>
            <ButtonLink modifier="default" href="https://arxiv.org/abs/1809.03391">
              Download Full Paper
                {/* <img src="/static/images/icons/arrow-down-light.svg" /> */}
            </ButtonLink>
          </HeroCard>
        </div>

        <Footer localeService={this.props.localeService} />

      </div >

    );
  }

}
export default withLocaleService(ResearchDetail);

