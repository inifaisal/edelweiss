import React, { Component } from 'react';
import './TabItem.scss';
import className from 'classnames';

interface TabItemProps {
  title: string;
  active?: boolean;
}
class TabItem extends Component<TabItemProps> {
  render() {
    //const cx = className.bind(styles);
    const { active, title } = this.props;

    const styles = className('tab-item', active && 'active');
    return (
      <div className={styles}>
        <span>{title}</span>
      </div>
    );
  }
}

export default TabItem;
