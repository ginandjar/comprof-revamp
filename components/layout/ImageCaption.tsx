import * as React from 'react';
import Container from './Section';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Link from 'next/link';

interface ImageCaptionProps {
  title: string;
  caption: string;
  src?: string;
  md?: string


}

export default class ImageCaption extends React.Component<ImageCaptionProps> {

  render() {
    return (
      <Col md={this.props.md} className="image-caption">
        <img src={this.props.src} alt="" />
        <h5 className="image-caption__title">{this.props.title}</h5>
        <p className="image-caption__caption">{this.props.caption}</p>
      </Col>

    );
  }

}