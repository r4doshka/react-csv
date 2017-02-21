import React from 'react'
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import DistanceSlider from './RangeSlider.scss';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const marks = {
  0: '',
  10: '',
  20: '',
  30: '',
  40: '',
  50: '',
  60: '',
  70: '',
  80: '',
  90: '',
  100: ''
};

import 'rc-slider/assets/index.css';

export default class RangeSlider extends React.Component {
  render() {
    return <Range defaultValue={[10,20]} pushable={10} marks={marks}/>
  }
}
