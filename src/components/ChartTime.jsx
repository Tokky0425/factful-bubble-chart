import React from 'react'

const ChartTime = ({chartTimeStyle, timeKey}) => (
  <div
    className={'factful-bubble-chart-time'}
    style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: '90px',
    color: '#dcdcdc',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    ...chartTimeStyle,
  }}>{timeKey}</div>
);

export default ChartTime;
