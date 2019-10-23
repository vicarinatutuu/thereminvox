import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Convolver extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'convolver'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeFeedbackDelayValue
    } = this.props

    return (
      <div className="Effect">
        <h1>Convolver</h1>

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
            <h2>Max Convolver</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              value={effect.maxDelay}
              handleValueChange={changeConvolverValue}
            />
          </div>
          <ToggleSwitch
            value="Convolver"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}
