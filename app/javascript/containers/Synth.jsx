import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../components/PlaySwitch'
import ToggleSwitch from '../components/ToggleSwitch'
import Slider from '../components/Slider'
import Knob from '../components/Knob'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    // EFFECTS

    let autoWah = new Tone.AutoWah({
      baseFrequency: 100,
      octaves: 5,
      sensitivity: 2,
      Q: 2,
      gain: 4,
      follower: {
        attack: 2,
        release: 3
      }
    })

    let distortion = new Tone.Distortion({
      distortion: 0,
      oversample: 'none'
    })

    autoWah.wet.value = 0
    distortion.wet.value = 0

    let synth = new Tone.Synth()

    synth.chain(autoWah, distortion, Tone.Master)

    let loop = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('C2', '8n', time)
    }, '4n')

    this.state = {
      autoWah: { effect: autoWah, wet: 0, on: false },
      distortion: { effect: distortion, wet: 0, on: false },
      synth: { instrument: synth, on: false },
      loop
    }

    _.bindAll(
      this,
      'toggleSynth',
      'toggleDistortion',
      'changeDistortionWetValue',
      'changeDistortionValue'
    )
  }

  toggleSynth() {
    let { synth, loop } = this.state
    let { instrument, on } = synth

    on == true ? loop.stop() : loop.start('0m')

    this.setState({
      synth: {
        instrument: instrument,
        on: !on
      }
    })

    Tone.Transport.bpm.value = 160
    Tone.Transport.start()
  }

  // TOGGLE

  toggleDistortion() {
    let { effect, wet, on } = this.state.distortion

    effect.wet.value = on == true ? 0 : wet
    on = !on

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    })
  }

  changeDistortionWetValue(value) {
    let { effect, wet, on } = this.state.distortion

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    })
  }

  changeDistortionValue(value) {
    let { effect, wet, on } = this.state.distortion

    effect.distortion = value

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    })
  }

  // RENDER

  render() {
    let { distortion, synth } = this.state

    return (
      <div>
        Toggle Synth
        <PlaySwitch
          name="play"
          value={synth.on}
          handleToggleClick={this.toggleSynth}
        />
        Change Distortion Wet Value
        <Slider
          min="0"
          max="1"
          value={distortion.effect.wet.value}
          handleValueChange={this.changeDistortionWetValue}
        />
        Change Distortion Value
        <Slider
          min="0"
          max="100"
          value={distortion.effect.distortion}
          handleValueChange={this.changeDistortionValue}
        />
        // <Knob min="" max="" handleValueChange={this.changeDistortionValue} />
        Toggle Distortion
        <ToggleSwitch
          value="Distortion"
          current={distortion.on}
          handleClick={this.toggleDistortion}
        />
      </div>
    )
  }
}
