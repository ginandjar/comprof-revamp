import * as React from 'react';
import Container from './Container';
import Link from 'next/link';

export default class TextImageCard extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row text-image-card">
          <div className="col-md-6 text-image-card__text">
            <h1>AI & Chatbot solution for smarter <span className="text-image-card__moving-text">Customer support</span></h1>
          </div>

          <div className="col-md-6 text-image-card__image">
            <img src="/static/png/cover/alfa.png" alt="" />
            <img src="/static/png/cover/bri.png" alt="" />
            <img src="/static/png/cover/simpati.png" alt="" />
            <img src="/static/png/cover/uni.png" alt="" />
          </div>
        </div>
      </div>
    );
  }

}