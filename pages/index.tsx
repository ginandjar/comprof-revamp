import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import Footer from "../components/layout/Footer";
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Business from '../components/layout/Business';
import Platform from '../components/layout/Platform';


interface Props {

}

class Home extends React.Component<Props> {
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
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
          <link href="https://unpkg.com/basscss-responsive-margin@1.1.0/css/responsive-margin.css" rel="stylesheet"></link>
          <link href="https://unpkg.com/basscss-responsive-padding@1.1.0/css/responsive-padding.css" rel="stylesheet"></link>

        </Head>
        <NavigationBar localeService={this.props.localeService} />

        <Business />
        <Platform />
        <Footer />




      </div>

    );
  }

}
export default withLocaleService(Home);

