import React from 'react';
import { shallow } from 'enzyme';
import AlbumCard from './AlbumCard';

describe('AlbumCard component', () => {
  it('renders AlbumCard', () => {
    const wrapper = shallow(<AlbumCard id={'test string'} title={'test string'} image={'test string'} name={'test string'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
