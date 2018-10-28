import * as React from 'react';
import Section from './Section';
import ButtonLink from '../links/ButtonLink';
import Col from 'react-bootstrap/lib/Col';
import Media from './Media';



export default class ExplorePlatform extends React.Component {

  render() {
    return (
      <Section className="site-container--white explore-platform">
        <Media
          className="media media--full-width"
          title="Kata Platform The Technology Behind The Chatbots"
          description="An integrated platform to build the best chatbot for any chat / messaging apps (even inside your own apps/website!)"
          image="/static/png/group2122.png"
        >
          <Col md={6}>
            <h1>
              Kata Platform The Technology Behind The Chatbots
            </h1>
            <p>
              An integrated platform to build the best chatbot for any chat / messaging apps (even inside your own apps/website!)
            </p>
            <ButtonLink modifier="default" href="/enterprise">
              Explore more
           </ButtonLink>
          </Col>
          <Col md={6}>
            <img src="/static/png/group2122.png" alt="" />
          </Col>
        </Media>
      </Section>
    );
  }

}