import * as React from 'react';
import Section from './Section';
import Hero from './Hero';
import FlexBox from './FlexBox';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';

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
            <Fade>
              <h1>
                {this.props.title}
              </h1>
            </Fade>
            <Fade>
              <p>
                {this.props.caption}
              </p>
            </Fade>
          </div>

          <Fade>
            <div className="hero-card__content">
              {this.props.children}
            </div>
          </Fade>


        </Hero>
      </Section >
    );
  }

}