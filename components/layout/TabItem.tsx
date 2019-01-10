import * as React from 'react';
import classnames from 'classnames';
import { AnyMxRecord } from 'dns';




interface TabItemProps {
  item: any;
  modifier?: string;
  index?: any;
  onClick?: any;

}

export default class TabItem extends React.Component<TabItemProps> {

  render() {
    const { modifier, item, index, onClick, ...ext } = this.props;
    return (

      <li {...ext} key={index} className={classnames("tab-item ", this.props.modifier)} onClick={onClick}>
        <div className="tab-item__block">
          <p className="tab-tem__text"> {this.props.item}</p>
        </div>

      </li>

    );
  }

}