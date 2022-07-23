import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVT1,
      name: "Ernest Achiever",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distincti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinct Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctiblanditiis necessitatibus nam nostrum nobis cupiditate temporibu sesse facere nulla quisquam maior",
    },
    {
      avatar: AVT2,
      name: "Ernest Achiever 2",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distincti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinct Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctiblanditiis necessitatibus nam nostrum nobis cupiditate temporibu sesse facere nulla quisquam maior",
    },
    {
      avatar: AVT3,
      name: "Ernest Achiever 3",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distincti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinct Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctiblanditiis necessitatibus nam nostrum nobis cupiditate temporibu sesse facere nulla quisquam maior",
    },
    {
      avatar: AVT4,
      name: "Ernest Achiever 4",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distincti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinct Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctiblanditiis necessitatibus nam nostrum nobis cupiditate temporibu sesse facere nulla quisquam maior",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide key={name} className="testimonials">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
