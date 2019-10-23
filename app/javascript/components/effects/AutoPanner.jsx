import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class AutoPanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'autoPanner'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoPannerValue
    } = this.props

    return (
      <div className="Effect">
        <h1>AutoPanner</h1>

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
            <h2>AutoPanner</h2>
            <Slider
              name={name}
              min="0"
              max="1000"
              on={on}
              value={effect.depth.value}
              handleValueChange={changeAutoPannerValue}
            />
          </div>
          <ToggleSwitch
            value="AutoPanner"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}
