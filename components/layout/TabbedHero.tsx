import * as React from 'react';
import Section from './Section';
import Hero from './Hero';
import FlexBox from './FlexBox';
import classnames from 'classnames';

interface IntroProps {
  children: any;
  className?: string;
  title?: string;

}

export default class TabbedHero extends React.Component<IntroProps> {
  render() {

    return (

      <Section className={classnames('tabbed-hero', this.props.className)}>
        <Hero className="hero__center-container">
          <div>
            <div className="tabbed-hero__title">
              <h2>
                {this.props.title}
              </h2>
            </div>

            {this.props.children}
          </div>

        </Hero>
      </Section >
    );
  }

}