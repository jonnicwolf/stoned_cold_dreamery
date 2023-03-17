import React from 'react';

const Cloud = (size, animation) => {
  return (
    <div style={size} className={animation}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default Cloud;
