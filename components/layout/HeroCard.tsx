import * as React from 'react';
import Section from './Section';
import Hero from './Hero';
import FlexBox from './FlexBox';
import classnames from 'classnames';

interface HeroCardProps {
  children: any;
  className?: string;
  title?: string;
  caption?: string;

}

export default class HeroCard extends React.Component<HeroCardProps> {
  render() {

    return (

      <Section className={classnames('hero-card', this.props.className)}>
        <Hero className="hero__center-container">
          <div className="hero-card__title">
            <h1>
              {this.props.title}
            </h1>
            <p>
              {this.props.caption}
            </p>
          </div>


          <div className="hero-card__content">
            {this.props.children}
          </div>


        </Hero>
      </Section >
    );
  }

}