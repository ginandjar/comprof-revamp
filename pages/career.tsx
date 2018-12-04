import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Testimoni from '../components/layout/Testimoni';
import LifeKata from '../components/layout/LifeKata';
import CoverCarrer from '../components/layout/CoverCareer';
import Benefit from '../components/layout/Benefit';
import { Col, Grid, Row } from 'react-bootstrap';
import ButtonLink from '../components/links/ButtonLink';
interface Props {

}

class Career extends React.Component<Props> {
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
        <CoverCarrer />
        <LifeKata />
        <Testimoni />
        <Benefit />
        <Grid>
          <Row className="career__see-jobs">
            <Col>
              <h1>
                Open Positions
                </h1>
              <p>
                Are you great product-builder or a passionate hustler? We have all types of opportunities and career paths for you. If you think you want to create remarkable legacy in Southeast Asia’s technology industry, then it’s your chance to be a part of our family.
                </p>
              <ButtonLink modifier="default" href="https://careers.smartrecruiters.com/Kataai">
                See Jobs
                </ButtonLink>
            </Col>
          </Row>
        </Grid>




      </div>

    );
  }

}
export default withLocaleService(Career);

