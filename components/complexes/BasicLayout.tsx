import React from 'react';
import './BasicLayout.scss';

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

export const BasicPageHeader = () => (
    <div className="BasicPageHeader">
      <div className="ui-container">
        <a href="/">Pomolife</a>
      </div>
    </div>
);

export const BasicPageBody: React.FC = (props) => (
    <div className="BasicPageBody ui-container">
      {props.children}
    </div>
);

export const BasicPageFooter = () => (
    <div className="BasicPageFooter">
      <div className="ui-container">
        Footer
      </div>
    </div>
);
