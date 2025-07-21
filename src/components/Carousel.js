import React from 'react';

function Carousel() {
  return (
    <div id="mainCarousel" className="carousel slide mt-3">
      <div className="carousel-inner rounded shadow">
        <div className="carousel-item active">
          <img
  src="https://via.placeholder.com/1200x400/343a40/ffffff?text=Welcome+to+QuickCart"
  className="d-block w-100"
  alt="Welcome"
/>
        </div>
        <div className="carousel-item">
          <img
  src="https://via.placeholder.com/1200x400/6c757d/ffffff?text=Best+Deals+on+QuickCart"
  className="d-block w-100"
  alt="Deals"
/>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}

export default Carousel;
