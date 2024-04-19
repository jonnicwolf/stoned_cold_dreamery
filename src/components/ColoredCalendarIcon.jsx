import React from 'react';

const ColoredCalendarIcon = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill={color} d="M19 3h-1V2a1 1 0 00-1-1h-2a1 1 0 00-1 1v1H10V2a1 1 0 00-1-1H7a1 1 0 00-1 1v1H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3zM5 8h14v2H5V8zm14 12H5v-8h14v8zm0-12H5V6h1v1a1 1 0 001 1h2a1 1 0 001-1V6h4v1a1 1 0 001 1h2a1 1 0 001-1V6h1v2z"/>
    </svg>
  );
};

export default ColoredCalendarIcon;
