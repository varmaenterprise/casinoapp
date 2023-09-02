import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './cardsmarquee.css';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import StarRating from './starrating';
import data from './dummyapi.json'; // Import the JSON data

export default function App() {
  const [slides, setSlides] = useState(data.bettingAppReviews); // Access the data using the correct key

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <p className="slide-description">{slide.comment}</p>
            <p className="slide-name"><b>{slide.reviewer_name}</b></p>
            <div className="slide-rating">
              <StarRating rating={slide.rating} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
