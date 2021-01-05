import React, { Component } from 'react';

import LearningPage from '../../components/LearningPage/LearningPage';
import Config from '../../config';
import TokenService from '../../services/token-service';

class LearningRoute extends Component {
  state = {
    word: {},
    error: null,
  };

  componentDidMount() {
    fetch(`${Config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ word: data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  componentDidUpdate() {
    fetch(`${Config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ word: data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <section>
        <LearningPage wordData={this.state.word} />
      </section>
    );
  }
}

export default LearningRoute;
