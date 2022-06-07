import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./HomePage.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        width={400}
        spaceBetween={80}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://proprikol.ru/wp-content/uploads/2020/06/kartinki-zavtrak-39.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://phonoteka.org/uploads/posts/2021-05/1620734375_10-phonoteka_org-p-sushi-pitstsa-fon-11.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i8.photo.2gis.com/images/branch/11/1548112411929079_1b65.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i6.photo.2gis.com/images/branch/11/1548112411929091_b07a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinkin.net/uploads/posts/2021-07/1627417252_44-kartinkin-com-p-pitstsa-sushi-kola-yeda-krasivo-foto-65.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i0.photo.2gis.com/images/branch/52/7318349405231253_1ec9.jpg"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://proprikol.ru/wp-content/uploads/2020/06/kartinki-zavtrak-39.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://phonoteka.org/uploads/posts/2021-05/1620734375_10-phonoteka_org-p-sushi-pitstsa-fon-11.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://eda.yandex/images/3502490/97c5627e3fbbff1e32439ee0e58f5336-1100x825.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://eda.yandex/images/3502490/97c5627e3fbbff1e32439ee0e58f5336-1100x825.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinkin.net/uploads/posts/2021-07/1627417202_16-kartinkin-com-p-pitstsa-sushi-kola-yeda-krasivo-foto-21.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinkin.net/uploads/posts/2021-07/1627417202_16-kartinkin-com-p-pitstsa-sushi-kola-yeda-krasivo-foto-21.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
