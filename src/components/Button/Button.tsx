import React, { Component } from 'react';

import classNames from 'classnames';
//import './Button.scss';

export interface IButtonProps {
  text?: string;
  variant: 'primary' | 'secondary' | 'default';
  rounded?: boolean;
  state?: 'warning' | 'alert';
}

class Button extends Component<IButtonProps> {
  static defaultProps: IButtonProps = {
    variant: 'default',
  };

  render() {
    const { variant, state, rounded, ...otherProps } = this.props;
    const btnCls: string = classNames(
      'btn',
      variant,
      state && `st-${state}`,
      rounded && 'rounded'
    );

    return (
      <button className={btnCls} type='button' {...otherProps}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
