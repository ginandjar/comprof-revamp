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
            IndoSum: A New Benchmark Dataset for Indonesian Text Summarization
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
              Automatic text summarization is generally considered as a challenging task in the NLP community. One of the challenges is the publicly available and large dataset that is relatively rare and difficult to construct. The problem is even worse for low-resource languages such as Indonesian. In this paper, we present IndoSum, a new benchmark dataset for Indonesian text summarization. The dataset consists of news articles and manually constructed summaries. Notably, the dataset is almost 200x larger than the previous Indonesian summarization dataset of the same domain. We evaluated various extractive summarization approaches and obtained encouraging results which demonstrate the usefulness of the dataset and provide baselines for future research. The code and the dataset are available online under permissive licenses.
            </p>
            <ButtonLink modifier="default" href="https://arxiv.org/abs/1810.05334">
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

