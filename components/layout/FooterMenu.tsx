import * as React from 'react';
import { Glyphicon, Collapse } from 'react-bootstrap';
import Link from 'next/link';

interface States {
  isOpen: boolean;
}
interface Props {
  title: string;
  link: { label: string; to: string }[];
}

export default class FooterMenu extends React.Component<Props, States> {
  state = {
    isOpen: false
  };
  componentDidMount() {
    if (screen.width >= 768) {
      this.setState({
        isOpen: true
      });
    }
  }
  render() {
    return (
      <div className="footer-menu">
        <h6 className="footer-menu--title">
          {this.props.title}
          <span>
            <img
              className="footer-menu--arrow"
              src="/static/images/icons/arrow-down.svg"
              alt=""
              onClick={this.toggleIsOpen}
            />
          </span>
        </h6>
        <Collapse in={this.state.isOpen}>
          <ul className="footer-menu--nav">
            {this.props.link.map(link => (
              <li key={link.to}>
                <Link href={link.to}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    );
  }
  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
