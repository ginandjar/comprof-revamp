import * as React from 'react';
import Section from './Section';
import ButtonLink from '../links/ButtonLink';
import Col from 'react-bootstrap/lib/Col';
import Media from './Media';


interface TabProps {
  children: any;


}

export default class Tab extends React.Component<TabProps> {

  render() {
    return (
      <div className="tab">
        <ul className="tab__ul">
          {this.props.children}
        </ul>
      </div>
    );
  }

}