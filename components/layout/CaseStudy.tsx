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

export default class CaseStudy extends React.Component {

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

      <Section className="site-container--white case-study">
        <Grid>
          <Row>
            <h1>Meet our chatbots</h1>
          </Row>
          <Row className="case-study__nav-bar">
            <Nav bsStyle="tabs" activeKey={0} onSelect={this.handleSelect}>
              <NavItem eventKey={0}>
                Customer Service
             </NavItem>
              <NavItem eventKey={1} >
                Bank Assistant
              </NavItem>
              <NavItem eventKey={2} >
                Consumer Engagement
              </NavItem>
              <NavItem eventKey={3} >
                Costumer Loyality
              </NavItem>
            </Nav>
          </Row>
          <Row>
            <Carousel
              controls={false}
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
              indicators={false}
            >
              <Carousel.Item>
                <Media
                  className="media-section"
                  title="Veronika"
                  description="Intelligent customer support for Telco"
                  image="/static/png/casestudy/group2105.svg"
                >
                  <Col md={6}>
                    <h1>
                      Veronika
                    </h1>
                    <p>
                      Intelligent customer support for Telco
                    </p>
                    <ButtonLink modifier="light" href="/enterprise">
                      Button
                   </ButtonLink>
                  </Col>
                  <Col md={6}>
                    <img src="/static/png/casestudy/group2105.svg" alt="" />
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media
                  className="media-section"
                  title="Sabrina"
                  description="Smart assistant for Banking"
                  image="/static/png/casestudy/group2105.svg"
                >
                  <Col md={6}>
                    <h1>
                      Sabrina
                    </h1>
                    <p>
                      Smart assistant for Banking
                    </p>
                    <ButtonLink modifier="light" href="/enterprise">
                      Button
                   </ButtonLink>
                  </Col>
                  <Col md={6}>
                    <img src="/static/png/casestudy/group2105.svg" alt="" />
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media
                  className="media-section"
                  title="Jemma"
                  description="Virtual friend for personalized consumer engagement"
                  image="/static/png/casestudy/group2105.svg"
                >
                  <Col md={6}>
                    <h1>
                      Jemma
                    </h1>
                    <p>
                      Virtual friend for personalized consumer engagement
                    </p>
                    <ButtonLink modifier="light" href="/enterprise">
                      Button
                   </ButtonLink>
                  </Col>
                  <Col md={6}>
                    <img src="/static/png/casestudy/group2105.svg" alt="" />
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media
                  className="media-section"
                  title="Shalma"
                  description="Virtual friends for personalized consumer engagement"
                  image="/static/png/casestudy/group2105.svg"
                >
                  <Col md={6}>
                    <h1>
                      Shalma
                    </h1>
                    <p>
                      Virtual friend for personalized consumer engagement
                    </p>
                    <ButtonLink modifier="light" href="/enterprise">
                      Button
                   </ButtonLink>
                  </Col>
                  <Col md={6}>
                    <img src="/static/png/casestudy/group2105.svg" alt="" />
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