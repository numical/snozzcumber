import React from 'react';
import ReactJson from 'react-json-view';

const RawModel = (props) => {
  const { model } = props;
  return (
    <div>
      <ReactJson src={model} />
    </div>
  );
};

export default RawModel;
