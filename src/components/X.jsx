import React, {Fragment} from 'react';
import {getDivisionNum} from '../functions/axisFunction';

const X = ({x, axisColor}) => {
  const {item, min, max, interval, unit} = x;
  const divisionNum = getDivisionNum(min, max, interval);

  return (
    <Fragment>
      <div className={'factful-bubble-chart-x-axis'}>
        {item && <span className={'factful-bubble-chart-x-item'}>{item}</span>}
        <ul className={'factful-bubble-chart-x-division'}>
          {[...Array(divisionNum)].map((i, index) => (
            <li style={{ left: `${index / (divisionNum - 1) * 100}%` }} key={index}>
              {index * interval + min}
            </li>
          ))}
        </ul>
        <div>
          {[...Array(divisionNum)].map((i, index) => (
            <span className={'factful-bubble-chart-x-scale'} style={{ left: `${index / (divisionNum - 1) * 100}%` }} key={index}/>
          ))}
        </div>
        {unit && <div className={'factful-bubble-chart-x-unit'}>({unit})</div>}
      </div>
      <style jsx>
        {`
          .factful-bubble-chart-x-axis {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: ${axisColor};
          }
          .factful-bubble-chart-x-item {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 40px);
          }
          .factful-bubble-chart-x-division {
            position: absolute;
            width: 100%;
            margin: 0;
            padding: 0;
            font-size: 10px;
            list-style: none;
          }
          .factful-bubble-chart-x-division li {
            position: absolute;
            transform: translate(-50%, 5px);
          }
          .factful-bubble-chart-x-scale:not(:first-child) {
            position: absolute;
            display: block;
            width: 1px;
            height: 4px;
            background-color: ${axisColor};
            transform: translateX(-1px);
          }
          .factful-bubble-chart-x-unit {
            position: absolute;
            top: 0;
            left: calc(100% + 10px);
            font-size: 10px;
            white-space: nowrap;
            transform: translateY(-50%);
          }
        `}
      </style>
    </Fragment>
  );
};

export default X;
