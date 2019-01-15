import * as React from 'react';
import FooterMenu from './FooterMenu';
import Link from 'next/link';
import LocaleSolver from '../locale/LocaleSolver';
import Container from './Container';
import { Grid, Row, Col } from 'react-bootstrap';

interface Props {
  localeService: LocaleSolver;
}

export default class Footer extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Grid>
            <Row>
              <Col>
                <div className="footer__company">
                  <div className="footer__company__logo">
                    <img src="/static/png/footer/logo.png" alt="" />
                  </div>
                  <div className="company-info--name">PT. YesBoss Group Indonesia</div>
                  <address className="company-info--address">
                    Graha Tirtadi<br />
                    Jln. Pangeran Antasari 18A<br />
                    Jakarta 12410, Indonesia<br />
                  </address>
                  <div className="company-info--contacts">
                    <div>
                      <a href="mailto:business@kata.ai">
                        <img src="/static/images/icons/email-icn.svg" /> business@kata.ai
                  </a>
                    </div>
                    <div>
                      <a href="tel:02175917294">
                        <img src="/static/images/icons/phone-icn.svg" /> (021) 75917294
                  </a>
                    </div>
                  </div>
                  <div className="company-info--socials">
                    <a href="https://www.facebook.com/katadotai/" target="_blank">
                      <img src="/static/png/footer/facebook.png" alt="" />
                    </a>
                    <a href="https://twitter.com/katadotai" target="_blank">
                      <img src="/static/png/footer/twitter.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/katadotai/" target="_blank">
                      <img src="/static/png/footer/instagram.png" alt="" />
                    </a>
                    <a href="https://medium.com/kata-engineering" target="_blank">
                      <img src="/static/png/footer/medium.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/yesboss/" target="_blank">
                      <img src="/static/png/footer/linkedin.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCrud2GevnuhBNM7C7RjakVg" target="_blank">
                      <img src="/static/png/footer/youtube.png" alt="" />
                    </a>
                  </div>

                </div>
              </Col>
              <Col>
                <div className="footer__sitemap">
                  <div className="footer-menu">
                    <div className="footer-menu__item">
                      <h6 className="footer-menu--title">
                        Solutions
                      </h6>

                      <ul className="footer-menu--nav">

                        <li>
                          <Link href="/enterprise">
                            <a>Chatbot Solutions</a>
                          </Link>
                        </li>
                      </ul>

                    </div>
                    <div className="footer-menu__item">
                      <h6 className="footer-menu--title">
                        Product
                      </h6>

                      <ul className="footer-menu--nav">

                        <li>
                          <a href="/platform">Kata Platform</a>
                        </li>

                      </ul>

                    </div>
                    <div className="footer-menu__item">
                      <h6 className="footer-menu--title">
                        Partnership
                      </h6>

                      <ul className="footer-menu--nav">

                        <li>
                          <Link href="/partnership">
                            <a>Kata Partner</a>
                          </Link>
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div className="footer-menu">
                    <div className="footer-menu__item">
                      <h6 className="footer-menu--title">
                        Resources


                      </h6>

                      <ul className="footer-menu--nav">

                        <li>
                          <a href="https://blog.kata.ai">Blog</a>
                        </li>
                        <li>
                          <a href="https://medium.com/kata-engineering">Kata Engineering</a>
                        </li>
                        <li>
                          <a href="https://docs.kata.ai">Documentations</a>
                        </li>
                        <li>
                          <a href="/research">Research</a>
                        </li>

                      </ul>

                    </div>
                    <div className="footer-menu__item">
                      <h6 className="footer-menu--title">
                        Company

                      </h6>

                      <ul className="footer-menu--nav">

                        <li>
                          <Link href="/company">
                            <a>About Us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/career">
                            <a href="#">Careers</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact-us">
                            <a>Get in Touch</a>
                          </Link>
                        </li>

                      </ul>

                    </div>
                  </div>

                </div>
              </Col>
            </Row>
          </Grid>

        </footer>

      </React.Fragment>
    );
  }
}
