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
          <div className="flex-item__left detailstory__intro__content">
            <div className="detailstory__intro__text">
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
            <input type="text" name="name" placeholder="Search by keyword" className="research__input-search" />
            <div>
              <ButtonLink modifier="light" href="/enterprise">
                Research Area
                <img src="/static/images/icons/platform-circle.svg" />
              </ButtonLink>
            </div>

          </HeroCard>
          <div className="research__research-content">
            <div className="research__research-content__image">
              <img src="/static/jpg/career.jpg" />
            </div>
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </div>
                <div className="research__research-content__research-area">
                  Research area : Machine Learning
                </div>
                <div className="research__research-content__writen-by">
                  Writen by : Kemal Maulana
                </div>
              </div>
              <div className="research__research-content__read-more" href="/researchdetail">
                Read more
              </div>
            </div>
          </div>
          <div className="research__research-content">
            <div className="research__research-content__image">
              <img src="/static/jpg/career.jpg" />
            </div>
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </div>
                <div className="research__research-content__research-area">
                  Research area : Machine Learning
                </div>
                <div className="research__research-content__writen-by">
                  Writen by : Kemal Maulana
                </div>
                <div className="research__research-content__read-more" href="/researchdetail">
                  Read more
                </div>
              </div>
            </div>
          </div>
          <div className="research__research-content">
            <div className="research__research-content__image">
              <img src="/static/jpg/career.jpg" />
            </div>
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </div>
                <div className="research__research-content__research-area">
                  Research area : Machine Learning
                </div>
                <div className="research__research-content__writen-by">
                  Writen by : Kemal Maulana
                </div>
                <div className="research__research-content__read-more" href="/researchdetail">
                  Read more
                </div>
              </div>
            </div>
          </div>
          <div className="research__research-content">
            <div className="research__research-content__image">
              <img src="/static/jpg/career.jpg" />
            </div>
            <div className="research__research-content__descr">
              <div className="research__research-content__title">
                <div className="research__research-content__title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </div>
                <div className="research__research-content__research-area">
                  Research area : Machine Learning
                </div>
                <div className="research__research-content__writen-by">
                  Writen by : Kemal Maulana
                </div>
                <div className="research__research-content__read-more" href="/researchdetail">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

    );
  }

}
export default withLocaleService(Research);

