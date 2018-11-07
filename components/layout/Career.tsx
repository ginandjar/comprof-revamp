import * as React from 'react';
import Section from './Section';
import ButtonLink from '../links/ButtonLink';
import Col from 'react-bootstrap/lib/Col';
import Media from './Media';



export default class Career extends React.Component {

  render() {
    return (
      <Section className="site-container--white career">


        <h2>
          Career
        </h2>
        <h1>
          Challenge yourself to build the best AI technology.
        </h1>
        <ButtonLink modifier="default" href="/enterprise">
          Open Position
        </ButtonLink>
      </Section >
    );
  }

}