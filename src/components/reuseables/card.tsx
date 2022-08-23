import React from 'react';

interface CardItems {
    title: string,
    text: string
}
function Cards({ title, text }: CardItems) {
  return (
    <div className="cards">
      <div className="row p-4 ">
        <div className="col-md-4 cards__description">
          <img src="/images/ellipse1.png" alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="cards__description--title">
            {title}
          </div>
          <p className="cards__description--text">
            {text}
          </p>
          <button className="cards__description--btn text-center" type="button">Register</button>
        </div>
      </div>
    </div>
  );
}
export default Cards;
