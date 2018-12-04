import * as React from 'react';
import Container from './Section';
import Link from 'next/link';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="navigation-bar__inner">
          <div className="pull-left navigation-bar__logo">
            <Link href="/">
              <a>
                <img src="/static/images/icons/kata-logo.svg" alt="" />
              </a>
            </Link>
          </div>
          {/* <div className="navigation-bar__locale">
            <a href="/set-locale?locale=uk" target="_self">
              EN
              </a>
            <span className="divider divider__inherit divider__small">|</span>
            <a href="/set-locale?locale=id" target="_self">
              ID
              </a>
          </div> */}
          <nav className="pull-right navigation-bar__menu">

            <ul>
              <li>
                <Link href="/enterprise">
                  <a >
                    Solution
                    </a>
                </Link>
              </li>
              <li>
                <Link href="/platform">
                  <a >
                    Feature & Tech
                  </a>
                </Link>
                {/* <ul>
                    <li>
                      <Link href="/enterprise">
                        <a>{this.props.localeService.dictionary.nav.enterprise}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platform">
                        <a>{this.props.localeService.dictionary.nav.platform}</a>
                      </Link>
                    </li>
                  </ul> */}
              </li>
              {/* <li>
                <Link href="/partnership">
                  <a>Partnership </a>
                </Link>

              </li> */}
              <li>
                Resources
                <ul>
                  <li>
                    <Link href="https://blog.kata.ai">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/research">
                      <a>Research</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://docs.kata.ai">
                      <a>Docs</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/company">
                  <a>Company</a>
                </Link>
              </li>
            </ul>



            <div className="navigation-bar__locale">

              <a href="/set-locale?locale=uk">
                CONTACT
              </a>
              <span className="divider">|</span>
              <a href="https://platform.kata.ai">
                LOGIN
              </a>
            </div>

          </nav>
        </div>
      </div >
    );
  }
}