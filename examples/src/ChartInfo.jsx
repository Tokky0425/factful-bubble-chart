import React, {Fragment} from 'react';

const ChartInfo = ({config, dataSelected}) => {
  return (
    <Fragment>
      <div className={'data-selected'}>
        <p className={'data-selected-name'}>{dataSelected.name}</p>
        <table className={'data-selected-table'}>
          <tbody>
           <tr>
             <th>{config.x.item}</th><td>{dataSelected.x} {dataSelected.x ? `${config.x.unit ? `(${config.x.unit})` : ''}` : ''}</td>
           </tr>
           <tr>
             <th>{config.y.item}</th><td>{dataSelected.y} {dataSelected.y ? `${config.y.unit ? `(${config.y.unit})` : ''}` : ''}</td>
           </tr>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .data-selected {
            position: absolute;
            top: 0;
            right: 0;
            min-width: 190px;
            padding: 5px 15px;
            background-color: rgba(220,220,220,.5);
            border-radius: 4px;
          }
          .data-selected-name {
            margin: 0;
            line-height: 2;
            font-size: 12px;
            color #333;
            text-align: center;
            font-weight: bold;
          }
          .data-selected-table {
            font-size: 10px;
            color #333:
            text-align: center;
          }
          .data-selected-table td {
            padding-left: 15px;
          }
        `}
      </style>
    </Fragment>
  )
};

export default ChartInfo;
