import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './cardsmarquee.css'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import StarRating from './starrating'; // Import the StarRating component

export default function App() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(response => response.json())
      .then(data => setSlides(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 3000 }} // Add autoplay prop with desired delay
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
       {slides.map((slide, index) => (
  <SwiperSlide key={index} className="swiper-slide">
    <p className="slide-description">{slide.description}</p>
    <p className="slide-name"> Name:<b>{slide.title}</b></p>
    <div className="slide-rating">
              <StarRating rating={slide.rating.rate} />
            </div>  </SwiperSlide>
))}

      </Swiper>
    </>
  );
}
