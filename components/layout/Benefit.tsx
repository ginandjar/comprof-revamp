import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

import Media from './Media';
import ButtonLink from '../links/ButtonLink';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

export default class Benefit extends React.Component {

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

      <Section className="site-container--white benefit">
        <Grid>
          <Row>
            <h1>Perks & benefits for our team</h1>
            <p>Our perks and benefits are part of the culture that inspires our team to work better, wherever they are.</p>
          </Row>
          <Row className="benefit__nav-bar">
            <Nav bsStyle="pills" activeKey={0} onSelect={this.handleSelect}>
              <NavItem eventKey={0}>
                <img src="/static/png/career/benefit/aktif/group2157.svg" />
              </NavItem>
              <NavItem eventKey={1} >
                <img src="/static/png/career/benefit/aktif/group2158.svg" />
              </NavItem>
              <NavItem eventKey={2} >
                <img src="/static/png/career/benefit/aktif/group2159.svg" />
              </NavItem>
              <NavItem eventKey={3} >
                <img src="/static/png/career/benefit/aktif/group2160.svg" />
              </NavItem>
              <NavItem eventKey={4} >
                <img src="/static/png/career/benefit/aktif/group2161.svg" />
              </NavItem>
              <NavItem eventKey={5} >
                <img src="/static/png/career/benefit/aktif/group2162.svg" />
              </NavItem>
              <NavItem eventKey={6} >
                <img src="/static/png/career/benefit/aktif/group2163.svg" />
              </NavItem>

            </Nav>
          </Row>
          <Row className="benefit__nav__content">
            <Carousel
              controls={false}
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
              indicators={false}
            >
              <Carousel.Item className="benefit__nav__content__slider">
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>

              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Working remotely / Work from Home (WFH)
                </p>
                <p>
                  Flexibility is really important to us. Hence, we offer working remotely or working from home (WFH) for max 2 days in a week.
                </p>
              </Carousel.Item>

            </Carousel>
          </Row>
        </Grid>
      </Section >
    );
  }

}