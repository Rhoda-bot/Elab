import React from 'react';

interface Circle {
    text: string,
}
function CircleBg({ text }: Circle) {
  return (
    <span className="circleBg ps-3 pb-5 pe-1">{text}</span>
  );
}
export default CircleBg;
