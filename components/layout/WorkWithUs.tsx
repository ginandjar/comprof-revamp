import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ImageCaption from './ImageCaption';
import Link from 'next/link';



export default class WorkWithUs extends React.Component {

  render() {
    return (
      <Section className="site-container--white work-with-us">
        <Grid>
          <Row>
            <h1>Work with us to build the best chatbots for any industry</h1>
          </Row>
          <Row>
            <ImageCaption
              md="3"
              src="/static/png/group2121.svg"
              title="Define your needs" />
            <ImageCaption
              md="3"
              src="/static/png/group2117.svg"
              title="View our solutions" />
            <ImageCaption
              md="3"
              src="/static/png/group2119.svg"
              title="Drop us a line" />
            <ImageCaption
              md="3"
              src="/static/png/group2120.svg"
              title="Schedule demo" />
          </Row>
        </Grid>
      </Section>
    );
  }

}