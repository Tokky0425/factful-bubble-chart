import React, {Fragment} from 'react';

const Box = ({children}) => (
  <Fragment>
    <div>
      {children}
    </div>
    <style jsx>
      {`
        div {
          margin-top: 30px;
          padding: 5px 20px;
          background: rgb(248,248,248);
          border-radius: 4px;
          font-size: 0.8em;
        }
      `}
    </style>
  </Fragment>
);

export default Box;
