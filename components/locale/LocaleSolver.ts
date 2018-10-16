import Uk from './dictionary/Uk';
import Id from './dictionary/Id';

import Base from './dictionary/Base';
import * as React from 'react';

const Cookies = require('universal-cookie');
import * as JsCookie from 'js-cookie';

export default class LocaleSolver {
  locale: string;
  dictionary: Base;

  constructor(locale: string) {
    this.locale = locale;
    if (this.locale === 'uk') {
      this.dictionary = Uk;
    } else {
      this.dictionary = Id;
    }
  }
}

export function withLocaleService<P = {}>(builder: React.ComponentType<any> & P) {
  return class LocaleServiceProvider extends React.Component<{
    localeService: LocaleSolver;
    getInitialProps: any;
  }> {
    static async getInitialProps(props: any) {
      const composedInitialProps = (builder as any).getInitialProps
        ? await (builder as any).getInitialProps(props)
        : {};

      if (typeof props.req !== 'undefined') {
        const parser = new Cookies(props.req.headers.cookie);
        const cookie = parser.get('locale');

        return { ...composedInitialProps, localeService: new LocaleSolver(cookie) };
      } else {
        const cookie = JsCookie.get('locale') || 'id';
        return { ...composedInitialProps, localeService: new LocaleSolver(cookie) };
      }
    }

    render() {
      return React.createElement(builder, { ...this.props });
    }
  };
}
