import React, {Fragment} from 'react';
import Slider from '@material-ui/lab/Slider';

const TimeSlider = ({min, max, val, setVal}) => {
  return (
    <Fragment>
      <div className={'slider-wrapper'}>
        <Slider min={min} max={max} value={val} onChange={(e, val) => setVal(val)}/>
      </div>
      <style jsx>
        {`
          .slider-wrapper {
            width: 100%;
            padding: 30px 0;
            margin: 70px auto 0;
            box-sizing: border-box;
          }
        `}
      </style>
    </Fragment>
  )
};

export default TimeSlider;
