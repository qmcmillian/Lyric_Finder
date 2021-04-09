import React from 'react';
import spinGif from '../spinner/spinnerGif.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinGif}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};
export default Spinner;