import * as React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentProps,
  NextDocumentContext
} from 'next/document';
// import * as ReactGA from 'react-ga';

const { extractCritical } = require('emotion-server');

export default class CustomDocument extends Document {
  constructor(props: DocumentProps) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  static getInitialProps({ renderPage }: NextDocumentContext) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta property="og:image" content="http://kata.ai/static/images/meta.jpg" />
          <link rel="stylesheet" href="/_next/static/style.css" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.2/css/swiper.min.css" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />

          <NextScript>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.2/js/swiper.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.2/js/swiper.min.js"></script>]
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>
            <script>
              var Alert = ReactBootstrap.Alert;
            </script>
          </NextScript>
        </body>
      </html>
    );
  }
}
