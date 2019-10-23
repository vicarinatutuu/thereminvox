import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'reverb'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeReverbValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Reverb</h1>

        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Wet</h2>
            <Slider
              name={name}
              min="0"
              max="1"
              value={wet}
              handleValueChange={changeEffectWetValue}
            />
          </div>
          <div className="controlsRow">
            <h2>Reverb</h2>
            <Slider
              name={name}
              min="0"
              max="10"
              on={on}
              value={effect.decay}
              handleValueChange={changeReverbValue}
            />
          </div>
          <ToggleSwitch
            value="Reverb"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}

// name={name}
// property="decay"
// min="0"
// max="10"
// value={effect.decay}
// handleValueChange={changeEffectValue}
