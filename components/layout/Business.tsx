import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ImageCaption from './ImageCaption';
import Link from 'next/link';



export default class Business extends React.Component {

  render() {
    return (
      <Section className="site-container--grey business">
        <Grid>
          <Row>
            <h1>See what chatbots can do for your business</h1>
          </Row>
          <Row>
            <ImageCaption
              md="4"
              src="/static/png/group2101.svg"
              title="Cost-efficient customer support"
              caption="Create a chatbot that can automate your customer support process, reducing the cost of your call-center operation" />
            <ImageCaption
              md="4"
              src="/static/png/group2102.svg"
              title="Interactive customer experience"
              caption="The chatbot can also offer an instant and interactive way for customers to interact with your brands. Offering transaction capability or even product recommendation." />
            <ImageCaption
              md="4"
              src="/static/png/group2103.svg"
              title="Better conversion rate"
              caption="With better experience for your customer, it’s easier to convert their interest into leads or purchases." />
          </Row>
        </Grid>
      </Section>
    );
  }

}