import React, {Fragment} from 'react';
import Plot from './Plot';

const PlotWrapper = ({chartWidth, chartHeight, config, data, timeKey}) => {
  const {
    x,
    y,
    maxPlotSize = 40,
    minPlotSize = 1.5,
    groupColor = {},
    onPlotMouseEnter = () => {},
    onPlotMouseLeave = () => {},
    onPlotClick = () => {}
  } = config;
  const ratioX = chartWidth / (x.max - x.min);
  const ratioY = chartHeight / (y.max - y.min);
  const xOffset = x.min * ratioX;
  const yOffset = y.max * ratioY;

  // data to be passed to child Plot component
  const processedData = data.map(datum => {
    if (!datum.content[String(timeKey)]) return;
    const {x, y, normalizedSize} = datum.content[String(timeKey)];
    const {name, group} = datum;
    return {
      data: {
        name,
        group,
        x,
        y,
        r: normalizedSize <= minPlotSize / maxPlotSize ? minPlotSize : normalizedSize * maxPlotSize,
        positionX: Math.round(ratioX * x - xOffset),
        positionY: -Math.round(ratioY * y - yOffset),
        groupColor: groupColor[group] ? groupColor[group] : {},
      },
      normalizedSize,
      onPlotMouseEnter,
      onPlotMouseLeave,
      onPlotClick,
    };
  });

  // ordered array of names that defines z-index of plots
  const orderedName = processedData.slice().sort((a, b) => {
    return b.normalizedSize - a.normalizedSize;
  }).map(data => data.data.name);

  return (
    <Fragment>
      <div style={{position: 'relative', width: '100%', height: '100%', zIndex: '2'}}>
        {processedData.map(args => {
          if (!args) {
            console.error(`Data cannot be found. timeKey: ${timeKey}`);
            return;
          }
          return (
            <Plot
              key={args.data.name}
              data={args.data}
              zIndex={orderedName.indexOf(args.data.name)}
              onPlotMouseEnter={args.onPlotMouseEnter}
              onPlotMouseLeave={args.onPlotMouseLeave}
              onPlotClick={args.onPlotClick}
            />
          )
        })}
      </div>
    </Fragment>
  )
};

export default PlotWrapper;
