import Tone from 'tone'
import React from 'react'

import Octaves from './Octaves'

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
      octave: 3
    }

    this.changeOct = this.changeOct.bind(this)
  }

  changeOct(e) {
    console.log('e', e.target.value)
    this.setState({
      octave: e.target.value
    })
    console.log('state', this.state.octave)
  }

  render() {
    let { handleMouseUp, handleMouseDown } = this.props
    let { notes, octave } = this.state
    let keys = notes.map((note, i) => {
      return note[1] === '#' ? (
        <div
          className="black"
          id={note}
          key={i}
          value={note}
          onMouseDown={() => handleMouseDown(note, octave)}
          onMouseUp={handleMouseUp}
        >
          {note}
        </div>
      ) : (
        <div
          className="white"
          id={note}
          key={i}
          value={note}
          onMouseDown={() => handleMouseDown(note, octave)}
          onMouseUp={handleMouseUp}
        >
          {note}
        </div>
      )
    })

    return (
      <div className="keyboard-container">
        <div className="keyboard">{keys}</div>
      </div>
    )
  }
}
