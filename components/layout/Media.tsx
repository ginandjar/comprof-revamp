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
  title?: string;
  description?: string;
  image?: string;


}

const Media: React.SFC<MediaProps> = ({ children, className, title }) => (
  <Grid className={className} >
    <Row>
      {children}
    </Row>
  </Grid>
);

export default Media;