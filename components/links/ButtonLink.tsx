import * as React from 'react';
import Link, { LinkState } from 'next/link';

interface Props extends LinkState {
  children: any;
  modifier?: 'ghost' | 'light' | 'default';
  block?: boolean;
  target?: string;
}

export default class ButtonLink extends React.Component<Props> {
  render() {
    const { target, modifier, block, ...ext } = this.props;
    return (
      <Link {...ext}>
        <a target={target} className={this.computeButtonClassName(modifier, block)}>
          {this.props.children}
        </a>
      </Link>
    );
  }

  computeButtonClassName(modifier: 'ghost' | 'light' | 'default' = 'default', block?: boolean) {
    let baseClass = 'button button__' + modifier;
    if (block) {
      baseClass += ' button__block';
    }
    return baseClass;
  }
}
