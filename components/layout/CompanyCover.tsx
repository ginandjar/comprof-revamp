import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ImageCaption from './ImageCaption';
import Link from 'next/link';



export default class CompanyCover extends React.Component {

  render() {
    return (
      <Section className="site-container--white company-cover">
        <Grid>
          <Row>
            <h1>We are making AI technology accessible to everyone</h1>

            <img src="/static/png/group1406.svg" alt="" />
          </Row>
        </Grid>


      </Section>
    );
  }

}