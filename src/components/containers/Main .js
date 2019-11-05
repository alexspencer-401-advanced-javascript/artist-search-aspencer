import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artists from '../../components/artists/Artists';
import SearchForm from '../../components/artists/SearchForm';
import { getArtists } from '../../services/api-call';

export default class Main extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    artists: [],
    query: '',
    page: 1
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);
    getArtists(this.state.query, this.state.page)
      .then(artists => {
        this.setState({ artists });
        console.log(this.state.artists);
      });

  }
   
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  decrementPage = () => {
    this.setState(state => ({
      page: state.page - 1
    }));
  }
  incrementPage = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  render() {
    const { artists } = this.state;
    return (
      <>
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query}/>
        <Artists artists={artists} />
      </>
    );
  }

}