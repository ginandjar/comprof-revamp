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

export default class Cover extends React.Component {



  render() {

    return (

      <Section className="site-container--white cover">

        <Media
          className="media" >
          <Col md={6}>
            <h1>
              AI & Chatbot solution for smarter
                </h1>
            <p>
              Create an intelligent assistant to serve your customer better
                </p>
            <ButtonLink modifier="default" href="/enterprise">
              Find Out More
                </ButtonLink>
          </Col>
          <Col md={6} className="cover__image">
            <img src="/static/png/cover/simpati.png" className="cover__image--simpati" alt="" />
            <img src="/static/png/cover/uni.png" className="cover__image--uni" alt="" />
            <img src="/static/png/cover/alfa.png" className="cover__image--alfa" alt="" />
            <img src="/static/png/cover/bri.png" className="cover__image--bri" alt="" />
          </Col>
        </Media>

      </Section >
    );
  }

}