import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import ImageCaption from './ImageCaption';
import Link from 'next/link';



export default class Platform extends React.Component {

  render() {
    return (
      <Section className="site-container--grey platform">
        <Grid>
          <Row>
            <h1>Create the best chatbots with our platform</h1>
          </Row>
          <Row>
            <ImageCaption
              md="4"
              src="/static/png/group2106.svg"
              title="Cost-efficient customer support"
              caption="Create a chatbot that can automate your customer support process, reducing the cost of your call-center operation" />
            <ImageCaption
              md="4"
              src="/static/png/group2107.svg"
              title="Interactive customer experience"
              caption="The chatbot can also offer an instant and interactive way for customers to interact with your brands. Offering transaction capability or even product recommendation." />
            <ImageCaption
              md="4"
              src="/static/png/group2109.svg"
              title="Better conversion rate"
              caption="With better experience for your customer, it’s easier to convert their interest into leads or purchases." />

            <ImageCaption
              md="6"
              src="/static/png/group2111.svg"
              title="Omni Channel Management"
              caption="Easily manage and install your chatbots in any Messaging Channels you choose" />
            <ImageCaption
              md="6"
              src="/static/png/group2114.svg"
              title="On Premise Solution"
              caption="Need the security of your own IT infrastructure to run your chatbots? Just install it on your own system using our On-Premise solution" />
          </Row>
        </Grid>
      </Section>
    );
  }

}