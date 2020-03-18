import React, { Component } from 'react'

class Search extends Component {
    render() {
        return <input onChange={this.props.onSearch} className="input-search" placeholder="Enter Search Term" type="text"/>
    }
}

export default Search
