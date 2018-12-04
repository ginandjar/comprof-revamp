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
            Multi-Task Active Learning for Neural Semantic Role Labeling on Low Resource Conversational Corpus
          </div>
          <div className="researchdetail__descr">
            <Fade>
              <p>Publication year: 2018</p>
              <p>Written by : Fariz Ikhwantri & Samuel Louvan & Kemal Kurniawan & Bagas Abisena & Valdi Rachman & Alfan Farizki Wicaksono & Rahmad Mahendra</p>
            </Fade>
            <hr />
          </div>
          <HeroCard title="Abstract" className="researchdetail__abstract">
            <p className="researchdetail__abstract__detail">
              Most Semantic Role Labeling (SRL) approaches are supervised methods which require a significant amount of annotated corpus, and the annotation requires linguistic expertise. In this paper, we propose a Multi-Task Active Learning framework for Semantic Role Labeling with Entity Recognition (ER) as the auxiliary task to alleviate the need for extensive data and use additional information from ER to help SRL. We evaluate our approach on Indonesian conversational dataset. Our experiments show that multi-task active learning can outperform single-task active learning method and standard multi-task learning. According to our results, active learning is more efficient by using 12% less of training data compared to passive learning in both single-task and multi-task setting. We also introduce a new dataset for SRL in Indonesian conversational domain to encourage further research in this area.
            </p>
            <ButtonLink modifier="default" href="http://aclweb.org/anthology/W18-3406">
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

