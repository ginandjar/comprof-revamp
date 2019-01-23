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

export default class GetChatbot extends React.Component {

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

      <Section className="site-container--white benefit enterprise__how-to">
        <Grid>
          <Row>
            <h1>How to Get Your Chatbot</h1>
          </Row>
          <Row className="benefit__nav-bar">
            <Nav bsStyle="pills" activeKey={0} onSelect={this.handleSelect}>
              <NavItem eventKey={0}>
                <img src={index == 0 ? "/static/png/enterprise/icochat_selected.svg" : "/static/png/enterprise/icochat.svg"} />
              </NavItem>
              <NavItem eventKey={1} >
                <img src={index == 1 ? "/static/png/enterprise/icoconn_selected.svg" : "/static/png/enterprise/icoconn.svg"} />
              </NavItem>
              <NavItem eventKey={2} >
                <img src={index == 2 ? "/static/png/enterprise/icocode_selected.svg" : "/static/png/enterprise/icocode.svg"} />
              </NavItem>
              <NavItem eventKey={3} >
                <img src={index == 3 ? "/static/png/enterprise/icohand_selected.svg" : "/static/png/enterprise/icohand.svg"} />
              </NavItem>
              <NavItem eventKey={4} >
                <img src={index == 4 ? "/static/png/enterprise/icobrain_selected.svg" : "/static/png/enterprise/icobrain.svg"} />
              </NavItem>
              <NavItem eventKey={5} >
                <img src={index == 5 ? "/static/png/enterprise/icophone_selected.svg" : "/static/png/enterprise/icophone.svg"} />
              </NavItem>
              <NavItem eventKey={6} >
                <img src={index == 6 ? "/static/png/enterprise/icorocket_selected.svg" : "/static/png/enterprise/icorocket.svg"} />
              </NavItem>
              <NavItem eventKey={7} >
                <img src={index == 7 ? "/static/png/enterprise/icotools_selected.svg" : "/static/png/enterprise/icotools.svg"} />
              </NavItem>

            </Nav>
          </Row>
          <Row className="benefit__nav__content enterprise__how-to__content">
            <Carousel
              controls={false}
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
              indicators={false}
            >
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Get in touch
                  </h6>
                <h6>
                  Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Concept Plan
                  </h6>
                <h6>
                  We begin to gather information, then formulate the best strategy that will act as the blueprint of the project.
                  </h6>


              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Try POC
                  </h6>
                <h6>
                  We'll develop a custom proof of concept with our chatbot platform for you. So, you can try how far the capabilities is, values, and benefits of our chatbot solutions for your business.
                  </h6>
              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Kick-off
                  </h6>
                <h6>
                  After present project plans and objectives, the next phase is kickoff meeting. It'll take place after contracts have been signed and there's agreement on the statement of work, costs, and timeline.
                  </h6>
              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Chatbot development
                  </h6>
                <h6>
                  After understanding all the aspects of the project, we start designing and develop your chatbot. Starting with interior functionality, and then delving into chatbot personality, the bot scripts are coded and developed cumulatively.
                  </h6>
              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Testing and Review
                  </h6>
                <h6>
                  Test the bot and provide feedback as to where the bot got confused or stuck. This step also includes the final QA of the bot, to ensure your bot saying the right thing at the right time.
                  </h6>
              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Launch
                  </h6>
                <h6>
                  Once the bot is tested and deployed, we'll orchestrate the smooth launch of your an intelligent assistant.
                  </h6>
              </Carousel.Item>
              <Carousel.Item className="benefit__nav__content__slider">
                <h6>
                  Continuous Support
                  </h6>
                <h6>
                  Whether you're having additional features, planning on retention campaign, or simply need to discuss about chatbot best practices, we will always be there every step of the way
                  </h6>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Grid>
      </Section >
    );
  }

}