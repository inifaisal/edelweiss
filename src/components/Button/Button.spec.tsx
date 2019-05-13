import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
  const actual = shallow(
    <Button variant='primary' text='test button' rounded />
  );

  expect(actual).toMatchSnapshot();
});
