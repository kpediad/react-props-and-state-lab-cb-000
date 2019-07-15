import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let url = "/api/pets";
    if (this.state.filters.type !== "all") {
      url = `/api/pets?type={this.state.filters.type}`;
    }
    fetch('http://example.com/movies.json')
      .then(function(response) {
          return response.json();
      })
      .then(function(myJson) {
          console.log(JSON.stringify(myJson));
      });
    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={type => this.setState({filters: {type: type}});} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
