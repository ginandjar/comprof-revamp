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
            Empirical Evaluation of Character-Based Model on Neural Named-Entity Recognition in Indonesian Conversational Texts
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
              Despite the long history of named-entity recognition (NER) task in the natural language processing community, previous work rarely studied the task on conversational texts. Such texts are challenging because they contain a lot of word variations which increase the number of out-of-vocabulary (OOV) words. The high number of OOV words poses a difficulty for word-based neural models. Meanwhile, there is plenty of evidence to the effectiveness of character-based neural models in mitigating this OOV problem. We report an empirical evaluation of neural sequence labeling models with character embedding to tackle NER task in Indonesian conversational texts. Our experiments show that (1) character models outperform word embedding-only models by up to 4 $F_1$ points, (2) character models perform better in OOV cases with an improvement of as high as 15 $F_1$ points, and (3) character models are robust against a very high OOV rate.
            </p>
            <ButtonLink modifier="default" href="https://noisy-text.github.io/2018/pdf/W-NUT201812.pdf ">
              Download Full Paper
                {/* <img src="/static/images/icons/arrow-down-light.svg" /> */}
            </ButtonLink>
          </HeroCard>

        </div>



      </div >

    );
  }

}
export default withLocaleService(ResearchDetail);

