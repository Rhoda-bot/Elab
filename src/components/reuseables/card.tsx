import React from 'react';

interface CardItems {
    title: string,
    text: string
}
function Cards({ title, text }: CardItems) {
  return (
    <div className="cards shadow-sm ">
      <div className="row p-4 ">
        <div className="col-md-4 training__description">
          <img src="/images/ellipse1.png" alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="training__description--title">
            {title}
            {/* Header text for training title stays here */}
          </div>
          <p className="training__description--text">
            {text}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          </p>
          <button className="training__description--btn text-center" type="button">Register</button>
        </div>
      </div>
    </div>
  );
}
export default Cards;
