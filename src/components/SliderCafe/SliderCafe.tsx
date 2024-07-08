import React from 'react';

const SliderCafe: React.FC = () => {
  return (
    <section className="slider">
      <div className="container slider__container">
        <div className="slider__top">
          <h2 className="slider__title">Places are nearby</h2>

          <span className="slider__view">View all</span>
        </div>

        <ul className="slider__list"></ul>
      </div>
    </section>
  );
};

export default SliderCafe;
