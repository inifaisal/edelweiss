import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  const actual = shallow(
    <Card>
      <p>card contents</p>
    </Card>
  );

  expect(actual).toMatchSnapshot();
});
