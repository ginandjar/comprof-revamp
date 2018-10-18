import * as React from 'react';
import Container from './Container';
import Link from 'next/link';

interface ImageCaptionProps {
  title: string;
  caption: string;
  src?: string;


}

export default class ImageCaption extends React.Component<ImageCaptionProps> {

  render() {
    return (
      <div className="image-caption">
        <img src={this.props.src} alt="" />
        <div>
          <h5 className="image-caption__title">{this.props.title}</h5>
          <p className="image-caption__caption">{this.props.caption}</p>
        </div>
      </div>
    );
  }

}