import React from 'react';
import { shallow } from 'enzyme';
import ArtistCard from './ArtistCard';

describe('ArtistCard component', () => {
  it('renders ArtistCard', () => {
    const wrapper = shallow(<ArtistCard id={'test string'} country={'test string'} name={'test string'} tags={[
      {
        'count': 18,
        'name': 'rock'
      },
      {
        'count': 0,
        'name': 'progressive rock'
      },
      {
        'count': -1,
        'name': '70s'
      },
      {
        'count': -1,
        'name': '80s'
      },
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
