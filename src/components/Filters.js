import React from 'react'

class Filters extends React.Component {
  constructor() {
    super()

    this.state = {
      type: 'all'
      }
    }
  }

  handleChange = event => {
    this.setState({type: event.target.value});
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" selected={this.state.type} onChange={event => this.handleChange(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick} >Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
