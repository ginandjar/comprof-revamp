import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ImageCaption from './ImageCaption';
import Link from 'next/link';
import Media from './Media';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

export default class CaseStudy extends React.Component {

  render() {
    return (

      <Section className="site-container--white case-study">
        <Grid>
          <Row>
            <h1>Meet our chatbots</h1>
          </Row>
          <Row className="case-study__nav-bar">
            <Nav bsStyle="tabs" activeKey={1} >
              <NavItem eventKey={1}>
                Customer Service
          </NavItem>
              <NavItem eventKey={2} >
                Bank Assistant
          </NavItem>
              <NavItem eventKey={3} >
                Consumer Engagement
          </NavItem>
              <NavItem eventKey={4} >
                Costumer Loyality
          </NavItem>
            </Nav>
          </Row>
          <Row>
            <Carousel
              controls={false}
            >
              <Carousel.Item>
                <Media
                  className="media"
                  title="Veronika"
                  description="Intelligent customer support for Telco"
                  image="/static/png/casestudy/group2105.svg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Media
                  className="media"
                  title="Sabrina"
                  description="Smart assistant for Banking"
                  image="/static/png/casestudy/group2105.svg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Media
                  className="media"
                  title="Jemma"
                  description="Virtual friend for personalized consumer engagement"
                  image="/static/png/casestudy/group2105.svg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Media
                  className="media"
                  title="Shalma"
                  description="Virtual friends for personalized consumer engagement"
                  image="/static/png/casestudy/group2105.svg"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Grid>
      </Section>
    );
  }

}