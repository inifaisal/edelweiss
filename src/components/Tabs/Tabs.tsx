import React, { Component } from 'react';

import './Tabs.scss';

interface TabsProps {}
class Tabs extends Component<TabsProps> {
  render() {
    return <div className='tabs'>{this.props.children}</div>;
  }
}

export default Tabs;
