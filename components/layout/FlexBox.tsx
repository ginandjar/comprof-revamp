import * as React from 'react';
import classnames from 'classnames';


interface FlexBoxProps {
  className: string;
  title?: string;
  description?: string;
  image?: string;


}

const FlexBox: React.SFC<FlexBoxProps> = ({ children, className }) => (
  <div className={classnames('flexbox', className)}>
    {children}
  </div>
);

export default FlexBox;