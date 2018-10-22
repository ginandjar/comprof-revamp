import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import ImageCaption from './ImageCaption';
import Link from 'next/link';
import ButtonLink from '../links/ButtonLink';

interface MediaProps {
  className: string;
  title: string;
  description: string;
  image: string;

}



export default class Media extends React.Component<MediaProps> {

  render() {
    return (
      <Grid className={this.props.className} >
        <Row>
          <Col md={6}>
            <h1>
              {this.props.title}
            </h1>
            <p>
              {this.props.description}
            </p>
            <ButtonLink modifier="default" href="/enterprise">
              Button
            </ButtonLink>
          </Col>
          <Col md={6}>
            <img src={this.props.image} alt="" />
          </Col>
        </Row>
      </Grid>
    );
  }

}