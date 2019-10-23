import Tone from 'tone'
import React from 'react'

export default class Octaves extends React.Component {
  constructor(props) {
    super(props)

    let { value } = this.props

    this.state = {
      value
    }
  }

  render() {
    let { value, min, max, changeOct } = this.props

    return (
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={changeOct}
      />
    )
  }
}
