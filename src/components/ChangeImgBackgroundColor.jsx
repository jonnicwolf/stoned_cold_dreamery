import React, { useEffect } from 'react'

const ChangeImgBackgroundColor = ({ path, fillStyleColor }) => {
  useEffect(() => {
    const img = new Image();
    img.src = path
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.fillStyle = fillStyleColor;
      ctx.fillRect(0,0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'destination-atop';
      ctx.drawImage(img, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
      document.getElementById('root').appendChild(canvas);
    }
  },[]);

  return (
    <canvas id='canvas' />
  );
};

export default ChangeImgBackgroundColor;
