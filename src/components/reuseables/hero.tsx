/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import CircleBg from './circleBg';

interface Props {
  title?: string,
  text?: string,
  button?: string,
  circleText?: string,
  bgImage?: string,
  gradient?: string

}
function Hero({
  title, text, button, circleText, bgImage, gradient,
}: Props) {
  return (
    <div
      className="hero "
      style={{
        backgroundImage: `linear-gradient(${gradient},${gradient}),url(${bgImage})`,
      }}
    >
      <div className="container">
        <div className="row mx-auto justify-content-center text-center pt-5 align-items-center mt-4 ">
          <div className="col-md-8 hero--title mt-5">
            {
              circleText && <CircleBg text={circleText} />
            }

            {' '}
            {/*  */}
            { title && title }
          </div>
          <p className="col-md-8 hero--text">
            {/* */}
            {text && text }

          </p>
          <div className="col-md-8 ">
            { button && <button type="button" className="hero--btn col-sm-3">{button}</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
Hero.defaultProps = {
  title: '',
  text: '',
  button: '',
  circleText: '',
  bgImage: '',
  gradient: '',
};
export default Hero;
