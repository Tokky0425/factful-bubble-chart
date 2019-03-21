import React, {useState, useEffect, memo} from 'react';
import ChartFrame from './components/ChartFrame';
import {normalize} from './functions/dataProcessor';

const FactfulBubbleChart = memo(({config, rawData, timeKey}) => {
  const [data, initData] = useState(null);
  useEffect(() => { // for the first time only
    initData(normalize(rawData, config.normalizeType))
  }, []);

  return (
    <div className={'factful-bubble-chart'}>
      {data && <ChartFrame config={config} data={data} timeKey={timeKey}/>}
    </div>
  );
}, (prevProps, nextProps) => {
  // prevent rendering if timeKey was not changed
  return prevProps.timeKey === nextProps.timeKey
});

export default FactfulBubbleChart;
