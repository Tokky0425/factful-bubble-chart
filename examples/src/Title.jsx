import React, {Fragment} from 'react';

const Title = ({title}) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <style jsx>
        {`
          h1 {
            font-size: 24px;
            text-align: center;
            margin-bottom: 30px;
          }
        `}
      </style>
    </Fragment>
  )
};

export default Title;
