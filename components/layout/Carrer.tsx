import * as React from 'react';
import Section from './Section';
import ButtonLink from '../links/ButtonLink';
import Col from 'react-bootstrap/lib/Col';
import Media from './Media';



export default class Carrer extends React.Component {

  render() {
    return (
      <Section className="site-container--white carrer">


        <h2>
          Carrer
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