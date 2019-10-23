import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class AutoFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const typeSet = ['sine', 'square', 'triangle', 'sawtooth']

    let name = 'autoFilter'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoFilterValue,
      changeAutoFilter1Value,
      changeFrequencyAutoFilter
    } = this.props

    return (
      <div className="Effect2">
        <h1>FL-2a フィルタ</h1>

        <div className="controlsContainer">
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
              <h2>Freq</h2>
              <h2 className="hoho">10</h2>
            </div>
            <Slider
              name={name}
              min="0"
              max="100"
              on={on}
              value={effect.baseFrequency}
              handleValueChange={changeAutoFilterValue}
            />
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
            value="AutoFilter"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}
