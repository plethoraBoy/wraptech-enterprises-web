// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import 'swiper/css/p';
// import 'swiper/css/navigation';

import './cara.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
 

  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    centeredSlides={true}
    zoom={true}

    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide><img src="/assets/navbar/product-development-concept-illustration.png" alt="" /></SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
);
};

export default Carousel;
