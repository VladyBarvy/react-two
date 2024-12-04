import React, { useState } from 'react';

const TableComp = ({ data, onRemove }) => {


  return (
    // <dl>
    //   {data.map((item) =>
    //     <React.Fragment key={item.id}>
    //       <dt>{item.dt}</dt>
    //       <dd>{item.dd}</dd>
    //     </React.Fragment>
    //   )}
    // </dl>
    <>
      <div>
        <button type="button" onClick={onRemove}>DELETE</button>
      </div>

      <div>
        {data}
      </div>
    </>

  );
};

export default TableComp;
