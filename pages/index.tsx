import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import Link from 'next/link';


interface Props {

}

class Home extends React.Component<Props> {
  public static async getInitialProps(ctx: NextContext) {

  }

  render() {
    const { localeService, posts } = this.props;
  

    return (
      <div>
        <h1>Hello Next.js 👋</h1>
        <Link href='/about'><a>About</a></Link>
      </div>
    );
  }

}
export default withLocaleService(Home);

