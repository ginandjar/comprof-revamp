import * as React from 'react';
import Section from './Section';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ImageCaption from './ImageCaption';
import Link from 'next/link';
import Media from './Media';



export default class ExplorePlatform extends React.Component {

  render() {
    return (
      <Section className="site-container--white explore-platform">
        <Media
          className="media media--full-width"
          title="Kata Platform The Technology Behind The Chatbots"
          description="An integrated platform to build the best chatbot for any chat / messaging apps (even inside your own apps/website!)"
          image="/static/png/group2122.png"
        />
      </Section>
    );
  }

}