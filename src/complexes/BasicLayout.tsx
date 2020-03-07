import React from 'react';
import './BasicLayout.css';

type BasicLayoutProps = React.ComponentPropsWithRef<'div'>;

export const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <div className="BasicLayout" {...restProps}>
      <BasicPageHeader />
      <BasicPageBody>{children}</BasicPageBody>
      <BasicPageFooter />
    </div>
  );
};

export const BasicPageHeader = () => {
  return (
    <div className="BasicPageHeader">
      <div className="ui-container">
        <a href="/">Header</a>
      </div>
    </div>
  );
};

export const BasicPageBody: React.FC = (props) => {
  return (
    <div className="BasicPageBody ui-container">
      {props.children}
    </div>
  );
};

export const BasicPageFooter = () => {
  return (
    <div className="BasicPageFooter">
      <div className="ui-container">
        Footer
      </div>
    </div>
  );
};
