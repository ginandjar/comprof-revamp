import * as React from 'react';
import Section from './Section';
import Hero from './Hero';
import FlexBox from './FlexBox';
import classnames from 'classnames';

interface IntroProps {
  children: any;
  className?: string;

}

export default class Intro extends React.Component<IntroProps> {
  render() {

    return (

      <Section className={classnames('intro', this.props.className)}>
        <Hero className="hero__center-container">
          <FlexBox className="flex">
            {this.props.children}

          </FlexBox>
        </Hero>
      </Section >
    );
  }

}