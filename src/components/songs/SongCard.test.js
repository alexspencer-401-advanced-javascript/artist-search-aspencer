import React from 'react';
import { shallow } from 'enzyme';
import SongCard from './SongCard';

describe('SongCard component', () => {
  it('renders SongCard', () => {
    const wrapper = shallow(<SongCard id={'test string'} title={'test string'} name={'test string'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
