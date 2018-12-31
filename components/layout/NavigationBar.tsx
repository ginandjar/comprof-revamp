import * as React from 'react';
import Container from './Section';
import Link from 'next/link';
import classnames from 'classnames';
import { throws } from 'assert';


interface States {
  isHidden: boolean;
  isResMob: boolean;
  isComMob: boolean;
}


class NavigationBar extends React.Component<States> {
  state = {
    isHidden: true,
    isResMob: false,
    isComMob: false,
  };
  componentDidMount() {
    this.setState({
      isHidden: true,
      isResMob: false,
      isComMob: false,
    });
  }
  computeLinksClass() {
    return classnames('navigation-bar__menu-mobile  ', this.state.isHidden && 'navigation-bar__menu-mobile--hidden');
  }
  computeResMobClass() {
    return classnames('', this.state.isResMob && 'navigation-bar__menu-mobile--display');
  }

  computeComMobClass() {
    return classnames('', this.state.isComMob && 'navigation-bar__menu-mobile--display');
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
                    <Link href="/company">
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

              <a href="/contact-us">
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
                <li className="navigation--child" onClick={this.handelResMob}>
                  <a>
                    Resources
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="6px" viewBox="0 0 10 6">
                      <g stroke="none" stroke-width="1" fill="white" fill-rule="evenodd">
                        <path d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025"></path>
                      </g></svg>
                  </a>
                  <ul className={this.computeResMobClass()}>
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
                <li onClick={this.handelComMob}>
                  <a>
                    Company
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="6px" viewBox="0 0 10 6">
                      <g stroke="none" stroke-width="1" fill="white" fill-rule="evenodd">
                        <path d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025"></path>
                      </g></svg>
                  </a>

                  <ul className={this.computeComMobClass()}>
                    <li>
                      <Link href="/company">
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

  handelResMob = () => {
    this.setState({ isResMob: !this.state.isResMob });
  }

  handelComMob = () => {
    this.setState({ isComMob: !this.state.isComMob });
  }
}
export default NavigationBar;