import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import termsFrPath from './README.md'

class Report extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(termsFrPath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
        <div className="readme">
        <ReactMarkdown source={this.state.terms} />
        <a href="https://github.com/corgisout/jsramverk">Github repo</a>
        </div>

  )
  }
}

export default Report;
