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

export default class SuccessStory extends React.Component {

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
              indicators={true}
              prevIcon={<img className="glyphicon glyphicon-chevron-left testimoni__prev" src='/static/png/career/prev.svg' />}
              nextIcon={<img className="glyphicon glyphicon-chevron-right testimoni__next" src='/static/png/career/next.svg' />}
            >
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={12}>
                    <div className="enterprise__success-story__item__img">
                      <img src="/static/png/enterprise/veronika.png"></img>
                    </div>
                    <div className="enterprise__success-story__item__button">
                      <ButtonLink modifier="light" href="/story/veronika">
                        Read About Veronika
                    </ButtonLink>
                    </div>
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={12}>
                    <div className="enterprise__success-story__item__img">
                      <img src="/static/png/enterprise/jemma.png"></img>
                    </div>
                    <div className="enterprise__success-story__item__button">
                      <ButtonLink modifier="light" href="/story/jemma">
                        Read About Jemma
                      </ButtonLink>
                    </div>
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={12}>
                    <div className="enterprise__success-story__item__img">
                      <img src="/static/png/enterprise/shalma.png"></img>
                    </div>
                    <div className="enterprise__success-story__item__button">
                      <ButtonLink modifier="light" href="/story/shalma">
                        Read About Shalma
                    </ButtonLink>
                    </div>
                  </Col>
                </Media>
              </Carousel.Item>
              <Carousel.Item>
                <Media className="media-section testimoni__slider">

                  <Col md={12}>
                    <div className="enterprise__success-story__item__img">
                      <img src="/static/png/enterprise/sabrina.png"></img>
                    </div>
                    <div className="enterprise__success-story__item__button">
                      <ButtonLink modifier="light" href="/story/sabrina">
                        Read About Sabrina
                    </ButtonLink>
                    </div>
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