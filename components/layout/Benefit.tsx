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
                <img src={index == 0 ? "/static/png/career/benefit/aktif/group2157.svg" : "/static/png/career/benefit/non-aktif/group2150.svg"} />
              </NavItem>
              <NavItem eventKey={1} >
                <img src={index == 1 ? "/static/png/career/benefit/aktif/group2158.svg" : "/static/png/career/benefit/non-aktif/group2151.svg"} />
              </NavItem>
              <NavItem eventKey={2} >
                <img src={index == 2 ? "/static/png/career/benefit/aktif/group2159.svg" : "/static/png/career/benefit/non-aktif/group2152.svg"} />
              </NavItem>
              <NavItem eventKey={3} >
                <img src={index == 3 ? "/static/png/career/benefit/aktif/group2160.svg" : "/static/png/career/benefit/non-aktif/group2153.svg"} />
              </NavItem>
              <NavItem eventKey={4} >
                <img src={index == 4 ? "/static/png/career/benefit/aktif/group2161.svg" : "/static/png/career/benefit/non-aktif/group2154.svg"} />
              </NavItem>
              <NavItem eventKey={5} >
                <img src={index == 5 ? "/static/png/career/benefit/aktif/group2162.svg" : "/static/png/career/benefit/non-aktif/group2155.svg"} />
              </NavItem>
              <NavItem eventKey={6} >
                <img src={index == 6 ? "/static/png/career/benefit/aktif/group2163.svg" : "/static/png/career/benefit/non-aktif/group2156.svg"} />
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
                  Flexible work life
                </p>
                <p>
                  We trust you to know your schedule and work when you feel most productive.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Competitive salary & share options
                </p>
                <p>
                  We value our people. We give competitive salary and provide stock options so that when we win, we’ll win together.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Free lunch, coffee, and foods
                </p>
                <p>
                  Great coffee, snacks, and catered lunches make it easy to stay energized at work. Help yourself to treats throughout the day.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Health Insurance
                </p>
                <p>
                  Our team’s health and wellness comes first. That’s why we provide great health insurances for all members of our team.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Courses to grow your capabilities and skills
                </p>
                <p>
                  Attend talks, conferences, and professional development events that interest you, and benefit your career growth.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Time for personal development
                </p>
                <p>
                  We believe that quality time outside the office is important to our employees’ satisfaction at work. Hence, we offer free time for their personal development, so they can come back refreshed.
                </p>
              </Carousel.Item>

            </Carousel>
          </Row>
        </Grid>
      </Section >
    );
  }

}