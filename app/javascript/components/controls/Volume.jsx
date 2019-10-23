import React from 'react'

import Slider from '../controls/Slider'

export default class Volume extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { volume, changeVolumeValue } = this.props

    return (
      <div className="Bpm">
        <h1>Change Bpm</h1>
        <div
          className="Slider"
          ref={this.slideArea}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        >
          <div
            className="thumb"
            style={style}
            onMouseDown={this.handleMouseDown}
          />
        </div>
      </div>
    )
  }
}
