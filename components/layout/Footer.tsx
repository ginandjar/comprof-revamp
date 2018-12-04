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
                  <img
                    className="company-info--logo"
                    src="/static/images/icons/kata-logo-grads.svg"
                    alt="Kata Logo"
                  />
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
                      <img src="/static/images/icons/facebook.svg" alt="" />
                    </a>
                    <a href="https://twitter.com/katadotai" target="_blank">
                      <img src="/static/images/icons/twitter.svg" alt="" />
                    </a>
                    <a href="https://www.instagram.com/katadotai/" target="_blank">
                      <img src="/static/images/icons/instagram.svg" alt="" />
                    </a>
                    <a href="https://medium.com/kata-engineering" target="_blank">
                      <img src="/static/images/icons/medium.svg" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/yesboss/" target="_blank">
                      <img src="/static/images/icons/linkedin.svg" alt="" />
                    </a>
                  </div>

                </div>
              </Col>
              <Col>
                <div className="footer__sitemap">
                  <div className="footer-menu">
                    <h6 className="footer-menu--title">
                      Solution
                    </h6>

                    <ul className="footer-menu--nav">

                      <li>
                        <a>Chatbot Solutions</a>
                      </li>
                      <li><a>Success Story</a></li>

                    </ul>

                  </div>
                  <div className="footer-menu">
                    <h6 className="footer-menu--title">
                      Technology
                    </h6>

                    <ul className="footer-menu--nav">

                      <li>
                        <a href="https://platform.kata.ai">Kata Platform</a>
                      </li>

                    </ul>

                  </div>
                  <div className="footer-menu">
                    <h6 className="footer-menu--title">
                      Resources


                    </h6>

                    <ul className="footer-menu--nav">

                      <li>
                        <a href="https://blog.kata.ai">Blog</a>
                      </li>
                      <li>
                        <a href="https://docs.kata.ai">Documentation</a>
                      </li>
                      <li>
                        <a href="/research">Research</a>
                      </li>

                    </ul>

                  </div>

                  <div className="footer-menu">
                    <h6 className="footer-menu--title">
                      Company

                    </h6>

                    <ul className="footer-menu--nav">

                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="/research">Get in Touch</a>
                      </li>

                    </ul>

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
