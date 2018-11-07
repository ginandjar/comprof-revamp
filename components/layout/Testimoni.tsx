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
                <Media className="media">

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
                <Media className="media">

                  <Col md={6}>
                    <img src="/static/png/management/rizki.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Ahmad Rizqi Meydiarso
                    </h6>
                    <p>
                      Rizqi is the CTO and Co-Founder of Kata.ai. In his role, he is the brain and mastermind who leads the development of the company’s AI platform. His goal is to drive his team in creating a state-of-the-art Natural Language Provessing (NLP) platform. He gained both his M.Sc and B.Sc. in Computer Science in Engineering from Technical University of Hamburg as part of a program sponsored by Airbus, starting his career at the company where he worked as a System Engineer until 2015 - the moment he decided to join the other co-founders of Kata.ai to start their own company. His strength is the ability to understand complex problem and decompose it to smaller blocks that can be tackled independently, and his ability to create elegant piece of platform design that is extensible, reusable, and flexible.
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>



              <Carousel.Item>
                <Media className="media">

                  <Col md={6}>
                    <img src="/static/png/management/wahyu.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Wahyu Wrehasnaya
                    </h6>
                    <p>
                      Wahyu Wrehasnaya is the Co-Founder and Chief Financial Officer of Kata.ai, the pioneer of Artificial Intelligence in Indonesia that successfully built one of the first Natural Language Understanding of Bahasa Indonesia. Before pivoting to focus on the development of AI technology for B2B markets, the company offers a personal virtual assistant service under the name of YesBoss. At YesBoss, Wahyu help the role of Co-Founder and Chief Customer Officer, leading the service & operational team in Indonesia. Prior to that, Wahyu, Co-Founded Rumah Diaspora, an Air bnb like for Indonesian Diaspora overseas and was working at Nasdaq OMX Germany, focusing on corporate service departments. As an entrepreneur at heart, Wahyu believes that FAITH (Fast, Ask Why, Innovation, Though, Humble) are the key values that every entrepreneur should hold on to. Wahyu holds a B.Sc, in Business Economics from the University of Martin Luther.
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>

              <Carousel.Item>
                <Media className="media">

                  <Col md={6}>
                    <img src="/static/png/management/rey.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Reynir Fauzan
                    </h6>
                    <p>
                      Reynir is the CMO and Co-Founder of Kata.ai, the leading B2B Artificial Intelligence solution in Indonesia, previously operated as YesBoss. Other than leading the marketing division, his main responsibility is to drive the growth of Kata’s sales and business development. Before he sells bots for a living, Reynir has worked in banking and financial services industry. He also holds a degree in Marketing from BINUS International University, and a degree in International Trade from Cologne Business School Germany. With his fellow co-founders and amazing team, Reynir is helping business to understand their customer better by humanizing digital interactions.
                    </p>
                  </Col>
                </Media>
              </Carousel.Item>

              <Carousel.Item>
                <Media className="media">

                  <Col md={6}>
                    <img src="/static/png/management/pria.png" alt="" />
                  </Col>
                  <Col md={6}>
                    <h6>
                      Pria Purnama
                    </h6>
                    <p>
                      Pria Purnama is the VP of Product & Engineering of Kata.ai. In Kata.ai, he is in charge of managing product and engineering team in delivering all of Kata.ai’s products. Prior to this role, he started out his career by developing websites for Water & Stone, Ogilvy Sydney. He then pivoted to building mobile applications at Ice House and Bridestory, where he discovered that he loves working with engineers and building product. Finally, before becoming a VP at Kata.ai, Pria served as VP of Product and Engineering C88 Financial Technologies (CekAja).
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