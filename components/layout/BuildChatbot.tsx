import * as React from 'react';
import Section from './Section';
import ButtonLink from '../links/ButtonLink';
import Col from 'react-bootstrap/lib/Col';
import Media from './Media';



export default class BuildChatbot extends React.Component {

  render() {
    return (
      <Section className="site-container--white build-chat-bot">

        <h1>
          Ready to build your chatbot
        </h1>
        <ButtonLink modifier="light" href="/enterprise">
          Get Started
        </ButtonLink>
      </Section >
    );
  }

}