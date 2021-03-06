import React, {Fragment, useState} from 'react';
import FactfulBubbleChart from '../../src';
import Title from './Title';
import TimeSlider from './TimeSlider';
import ChartInfo from './ChartInfo';

const Sample4 = ({config, rawData, dataSelected}) => {
  const timeMin = 1970;
  const timeMax = 2015;
  const [timeKey, setTimeKey] = useState(timeMin);

  return (
    <Fragment>
      <Title title={'Average income & Median age'}/>
      <div style={{position: 'relative'}}>
        <FactfulBubbleChart config={config} rawData={rawData} timeKey={Math.round(timeKey)}/>
        <ChartInfo config={config} dataSelected={dataSelected}/>
      </div>
      <TimeSlider min={timeMin} max={timeMax} val={timeKey} setVal={setTimeKey}/>
    </Fragment>
  )
};

export default Sample4;
