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
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </div>
          <div className="researchdetail__descr">
            <p>Publication year: 2018</p>
            <p>Writen by: Kemal Maulana</p>
            <hr />
          </div>
          <HeroCard title="Abstract" className="researchdetail__abstract">
            <p className="researchdetail__abstract__detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <ButtonLink modifier="default" href="/enterprise">
              Research Area
                <img src="/static/images/icons/arrow-down-light.svg" />
            </ButtonLink>
          </HeroCard>
          <HeroCard title="Related Content" className="researchdetail__related-content">
            <div className="researchdetail__related-content-list">
              <div className="researchdetail__related-content-list__title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
              <div>
                <p>Publication year: 2018</p>
                <p>Writen by: Kemal Maulana</p>
              </div>
            </div>
            <div className="researchdetail__related-content-list">
              <div className="researchdetail__related-content-list__title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
              <div>
                <p>Publication year: 2018</p>
                <p>Writen by: Kemal Maulana</p>
              </div>
            </div>

          </HeroCard>
        </div>



      </div>

    );
  }

}
export default withLocaleService(ResearchDetail);

