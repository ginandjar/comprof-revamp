import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ImageCaption from './ImageCaption';
import Link from 'next/link';



export default class AboutCompany extends React.Component {

  render() {
    return (
      <Section className="site-container--white business">
        <Grid>
          <Row>

            <h3>About The Company</h3>
            <p>
              We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human conversation so we can improve the way humans collaborate with technology to be more productive and empowered. Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and Retail.
            </p>
          </Row>
          <Row>
            <ImageCaption
              md="4"
              src="/static/png/group2130.svg"
              caption="We provide powerful conversational AI technology" />
            <ImageCaption
              md="4"
              src="/static/png/group2132.svg"
              caption="Your brand can build an engaging interaction with customers" />
            <ImageCaption
              md="4"
              src="/static/png/group2134.svg"
              caption="For better sales, superior customer service, or effective marketing campaign" />
          </Row>
        </Grid>
      </Section>
    );
  }

}