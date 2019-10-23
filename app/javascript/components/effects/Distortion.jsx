import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'distortion'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeDistortionValue,
      changeFrequencyAutoFilter
    } = this.props

    return (
      <div className="Effect0">
        <h1>OD-3 歪み</h1>

        <div className="controlsContainer">
          <div className="111">
            <div className="controlsRow">
              <div className="HOHO">
                <h2>Gain</h2>
                <h2 className="hoho">10</h2>
              </div>
              <Slider
                name={name}
                min="0"
                max="1"
                value={wet}
                handleValueChange={changeEffectWetValue}
              />
            </div>
            <div className="controlsRow">
              <div className="HOHO">
                <h2>Dist</h2>
                <h2 className="hoho">10</h2>
              </div>
              <Slider
                name={name}
                min="0"
                max="0.3"
                on={on}
                value={effect.distortion}
                handleValueChange={changeDistortionValue}
              />
            </div>
          </div>
          <div className="Row">
            <div className="Row1">
              <Knob
                min="-50"
                max="50"
                value={effect.octaves}
                handleValueChange={changeFrequencyAutoFilter}
              />
            </div>
            <div className="Row2">
              <Knob
                min="-50"
                max="50"
                value={effect.octaves}
                handleValueChange={changeFrequencyAutoFilter}
              />
            </div>
          </div>
          <ToggleSwitch
            value="Distortion"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}
