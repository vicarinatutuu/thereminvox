import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class FeedbackDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'feedbackDelay'
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
        <h1>Delay</h1>

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
            <h2>Max Delay</h2>
            <Slider
              name={name}
              min="0"
              max="100"
              value={effect.maxDelay}
              handleValueChange={changeFeedbackDelayValue}
            />
          </div>
          <ToggleSwitch value="Delay" current={on} handleClick={toggleEffect} />
        </div>
      </div>
    )
  }
}
