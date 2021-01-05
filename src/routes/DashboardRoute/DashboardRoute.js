import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

import TokenService from '../../services/token-service';
import Config from '../../config';

class DashboardRoute extends Component {
  state = {
    language: {},
    words: [],
    error: null,
  };
  componentDidMount() {
    fetch(`${Config.API_ENDPOINT}/language`, {
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
        this.setState({ language: data.language, words: data.words });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <section>
        <h2 className='dashboard-title'>{this.state.language.name}</h2>
        <Dashboard
          passedWords={this.state.words}
          totalCount={this.state.language.total_score}
        />
        <p>Total Score: {this.state.language.total_score}</p>
      </section>
    );
  }
}

export default DashboardRoute;
