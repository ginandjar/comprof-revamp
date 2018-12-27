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

export default class Testimoni extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {

    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }


  render() {

    const { index, direction } = this.state;
    return (

      <Section className="site-container--white testimoni">
        <Grid>
          <Row>
            <h1>What our team says about working for Kata.AI</h1>
          </Row>
          <Row>
            <Carousel
              controls={true}
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
              indicators={false}
            >
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={6}>
                    <img src="/static/png/career/yodee.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Yodee - Product Growth Manager
                    </h6>
                    <p>
                      “Working in an advanced technology company like Kata.ai really opens my eyes to the endless possibility of how technology can help to improve our lives. The culture and mentorship at Kata.ai from the founders help me grow to the direction where I want to be in the next few years.”
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>

            </Carousel>
          </Row>
        </Grid>
      </Section >
    );
  }

}