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
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={6}>
                    <img src="/static/png/career/amanda.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Amanda - Associate Product Manager
                    </h6>
                    <p>
                      “I’m really happy to be a part of Kata.ai’s team. The work environment in here is very flexible, and we always have an opportunity to learn something new.”
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={6}>
                    <img src="/static/png/career/titih.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Titih - Project Manager
                    </h6>
                    <p>
                      “I feel very lucky to be a part of this cool team, working in a smart environment that helps me grow to become a valuable member of the team.”
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={6}>
                    <img src="/static/png/career/selly.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Selly - Finance Manager
                    </h6>
                    <p>
                      “Of course, I’m so happy to work in here, I always have an opportunity to learn something new. Although, I am in Finance & Accounting division, but I am able to learn about business and product. Its helps my role and develop my skills further.”
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>

              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={6}>
                    <img src="/static/png/career/tri.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Tri - Senior UI/UX Designer
                    </h6>
                    <p>
                      “Working in Kata.ai is really challenging for me, because we have to improve quickly in handling every problem. But the perk is I could work with amazing coworkers and great team, last but not least our hard work is always well appreciated.”
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