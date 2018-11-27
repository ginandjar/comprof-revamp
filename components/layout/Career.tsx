import * as React from 'react';
import Section from './Section';
import ButtonLink from '../links/ButtonLink';
import Col from 'react-bootstrap/lib/Col';
import Media from './Media';



export default class Career extends React.Component {

  render() {
    return (
      <Section className="site-container--white">

        <div className="career">
          <h1>
            Career
        </h1>
          <h3>
            Challenge yourself to build the best AI technology
        </h3>
          <ButtonLink modifier="default" href="/enterprise">
            Discover Career Opportunities
        </ButtonLink>
        </div>

      </Section >
    );
  }

}