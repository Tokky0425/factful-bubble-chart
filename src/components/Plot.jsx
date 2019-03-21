import React, {useRef} from 'react';

const Plot = ({data, zIndex, onPlotMouseEnter, onPlotMouseLeave, onPlotClick}) => {
  const circle = useRef(null);
  return (
    <div style={{
      position: 'absolute',
      top: `${data.positionY}px`,
      left: `${data.positionX}px`,
      width: '1px',
      height: '1px',
      transition: 'top .3s linear, left .3s linear',
      zIndex: zIndex,
    }}>
      <svg style={{
        position: 'absolute',
        width: `${Math.ceil(data.r * 2 + 1)}px`,
        height: `${Math.ceil(data.r * 2 + 1)}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'all .3s linear',
      }}>
        <circle
          ref={circle}
          r={data.r}
          cx={'50%'}
          cy={'50%'}
          fill={data.groupColor.fill ? data.groupColor.fill : '#dcdcdc'}
          stroke={data.groupColor.stroke ? data.groupColor.stroke : '#333'}
          strokeWidth={'0.5px'}
          data-plot-group={data.group ? data.group : ''}
          onMouseEnter={() => onPlotMouseEnter(circle.current, data)}
          onMouseLeave={() => onPlotMouseLeave(circle.current, data)}
          onClick={() => onPlotClick(circle.current, data)}
          style={{transition: 'all .3s linear'}}
        />
      </svg>
    </div>
  )
};

export default Plot;
