import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Link from 'next/link';
import Media from './Media';
import ButtonLink from '../links/ButtonLink';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

export default class LifeKata extends React.Component {



  render() {

    return (

      <Section className="site-container--white lifekata">

        <Media
          className="media" >
          <Col md={6}>
            <h1>
              Life at Kata.AI
                </h1>
            <h5>
              At Kata.ai, we are not only working hard, but we’re also working smart and having fun while doing it. We unite diverse background & perspective, pursue ideas that define the future through the power of technology, and create something that we’re proud of.
            </h5>
            <h5>
              Our office is home for remarkable people whether they are a dreamer, innovator, believer, doer, or an achiever. We help them to grow their current roles, encourage their potential both personally and professionally, and empowering to carve their own path in the company.
            </h5>
            <h5>
              Sounds like the kind of place you’d like to be? Then we’d love to meet you!
            </h5>

          </Col>
          <Col md={6} className="lifekata__image">
            <img src="/static/png/career/4.png" className="lifekata__image--right" alt="" />
            <img src="/static/png/career/7.png" className="lifekata__image--left" alt="" />
            <img src="/static/png/career/5.png" className="lifekata__image--bottom" alt="" />

          </Col>
        </Media>

      </Section >
    );
  }

}