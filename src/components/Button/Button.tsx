import React, { Component } from 'react';

import classNames from 'classnames';

export type ButtonProps = {
  text?: string;
  variant?: 'primary' | 'secondary';
  rounded?: boolean;
  state?: 'warning' | 'alert';
};

class Button extends Component<ButtonProps> {
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
