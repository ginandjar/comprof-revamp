import * as React from 'react';
import classnames from 'classnames';




interface TabItemProps {
  item: any;
  modifier?: string;

}

export default class TabItem extends React.Component<TabItemProps> {

  render() {
    return (

      <li className={classnames("tab-item ", this.props.modifier)}>
        <div className="tab-item__block">
          <p className="tab-tem__text"> {this.props.item}</p>
        </div>

      </li>

    );
  }

}