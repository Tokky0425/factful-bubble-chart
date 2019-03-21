import React, {Fragment} from 'react';
import {getDivisionNum} from "../functions/axisFunction";

const Y = ({y, axisColor}) => {
  const {item, min, max, interval, unit} = y;
  const divisionNum = getDivisionNum(min, max, interval);

  return (
    <Fragment>
      <div className={'factful-bubble-chart-y-axis'}>
        {item && <span className={'factful-bubble-chart-y-item'}>{item}</span>}
        <ul className={'factful-bubble-chart-y-division'}>
          {[...Array(divisionNum)].map((i, index) => (
            <li style={{ bottom: `${index / (divisionNum - 1) * 100}%` }} key={index}>
              {index * interval + min}
            </li>
          ))}
        </ul>
        <div>
          {[...Array(divisionNum)].map((i, index) => (
            <span className={'factful-bubble-chart-y-scale'} style={{ bottom: `${index / (divisionNum - 1) * 100}%` }} key={index}/>
          ))}
        </div>
        {unit && <div className={'factful-bubble-chart-y-unit'}>({unit})</div>}
      </div>
      <style jsx>
        {`
          .factful-bubble-chart-y-axis {
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
            background-color: ${axisColor};
          }
          .factful-bubble-chart-y-item {
            position: absolute;
            top: 50%;
            transform: translate(calc(-50% - 55px),-50%) rotate(-90deg);
            white-space: nowrap;
          }
          .factful-bubble-chart-y-division {
            position: absolute;
            height: 100%;
            margin: 0;
            padding: 0;
            font-size: 10px;
            list-style: none;
          }
          .factful-bubble-chart-y-division li {
            position: absolute;
            transform: translate(calc(-100% - 6px), 50%);
            transform: translate(calc(-100% - 6px), 50%);
          }
          .factful-bubble-chart-y-scale:not(:first-child) {
            position: absolute;
            right: 0;
            display: block;
            width: 4px;
            height: 1px;
            background-color: ${axisColor};
            transform: translateY(1px);
          }
          .factful-bubble-chart-y-unit {
            position: absolute;
            bottom: calc(100% + 10px);
            font-size: 10px;
            white-space nowrap;
            transform: translateX(-50%);
          }
        `}
      </style>
    </Fragment>
  );
};

export default Y;
