import * as React from 'react';
import Container from './Section';
import Link from 'next/link';
import classnames from 'classnames';


interface States {
  isHidden: boolean;
}


class NavigationBar extends React.Component<States> {
  state = {
    isHidden: true,
  };
  componentDidMount() {
    this.setState({
      isHidden: true,
    });
  }
  computeLinksClass() {
    return classnames('navigation-bar__menu-mobile  ', this.state.isHidden && 'navigation-bar__menu-mobile--hidden');
  }

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
          <nav className="pull-right navigation-bar__burger" onClick={this.handleNav}>
            <a onClick={this.handleNav} ><img src="/static/images/icons/menu-icn-light.svg" className="" onClick={this.handleNav} /></a>

          </nav>
          <nav className="pull-right navigation-bar__menu">

            <ul>
              <li>
                <Link href="/enterprise">
                  <a >
                    Solutions
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
              <li>
                <Link href="/partnership">
                  <a>Partnership </a>
                </Link>

              </li>
              <li className="navigation-bar__have-child">
                Resources
                <ul>
                  <li>
                    <Link href="https://blog.kata.ai">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://medium.com/kata-engineering">
                      <a>Kata Engineering</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/research">
                      <a>Research</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://docs.kata.ai">
                      <a>Documentations</a>
                    </Link>
                  </li>

                </ul>
              </li>
              <li>
                Company
                  <ul>
                  <li>
                    <Link href="https://blog.kata.ai">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
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
          <div className={this.computeLinksClass()}>
            <img src="/static/images/icons/close-icn.svg" alt="" onClick={this.handleClose} className="pull-right" />
            <div>
              <ul>
                <li>
                  <Link href="/enterprise">
                    <a >
                      Solutions
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
                <li>
                  <Link href="/partnership">
                    <a>Partnership </a>
                  </Link>

                </li>
                <li className="navigation-bar__have-child">
                  Resources
                <ul>
                    <li>
                      <Link href="https://blog.kata.ai">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://medium.com/kata-engineering">
                        <a>Kata Engineering</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/research">
                        <a>Research</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://docs.kata.ai">
                        <a>Documentations</a>
                      </Link>
                    </li>

                  </ul>
                </li>
                <li>
                  Company
                  <ul>
                    <li>
                      <Link href="https://blog.kata.ai">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/career">
                        <a>Careers</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div >
    );
  }

  handleNav = () => {

    this.setState({ isHidden: false });
  }
  handleClose = () => {
    this.setState({ isHidden: true });
  }
}
export default NavigationBar;