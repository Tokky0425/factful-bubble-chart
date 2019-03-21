import React, {Fragment, useEffect, useRef, useState} from 'react'
import X from './X';
import Y from './Y';
import PlotWrapper from './PlotWrapper';
import ChartTime from './ChartTime';

const ChartFrame = ({config, data, timeKey}) => {
  const chartFrame = useRef(null);
  const [chartWidth, setChartWidth] = useState(null);
  const {
    x,
    y,
    chartHeight = 480,
    chartFrameStyle = {},
    chartTimeVisible = true,
    chartTimeStyle = {},
    axisColor = '#333',
    onChartDidMount = () => {},
    onChartDidUpdate = () => {},
  } = config;

  // Error handling
  if (!x || !y) {
    console.error('Parameter x and y are required.');
    return '';
  }
  if (typeof x.min !== 'number' || typeof x.max !== 'number' || typeof x.interval !== 'number' || typeof y.min !== 'number' || typeof y.max !== 'number'|| typeof y.interval !== 'number') {
    console.error('Parameter min, max and interval for both x and y are required.');
    return '';
  }

  useEffect(() => { // for the first time only
    setChartWidth(chartFrame.current.clientWidth);
    window.addEventListener('resize', () => setChartWidth(chartFrame.current.clientWidth));
    onChartDidMount(chartFrame.current, timeKey);
  }, []);

  useEffect(() => {
    if (!chartWidth) return;
    onChartDidUpdate(chartFrame.current, timeKey);
  });

  const style = {
    position: 'relative',
    width: '100%',
    maxWidth: `${config.chartWidth ? `${config.chartWidth}px` : '100%'}`,
    height: `${chartHeight}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
    ...chartFrameStyle,
  };

  return (
    <Fragment>
      <div className={'factful-bubble-chart-frame'} ref={chartFrame} style={style}>
        {chartWidth && (
          <Fragment>
            {chartTimeVisible && <ChartTime chartTimeStyle={chartTimeStyle} timeKey={timeKey}/>}
            <PlotWrapper chartWidth={chartWidth} chartHeight={chartHeight} config={config} data={data} timeKey={timeKey}/>
            <X x={x} axisColor={axisColor}/>
            <Y y={y} axisColor={axisColor}/>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
};

export default ChartFrame;
