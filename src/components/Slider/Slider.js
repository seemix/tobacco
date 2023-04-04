import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

import slide1 from './1.webp';
import slide2 from './2.webp';
import slide3 from './3.webp';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

const Slider = () => {
    return (
        <div className={'slider_container'}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className={'slider_container'}
                loop={true}
            >
                <SwiperSlide>
                    <div style={{backgroundImage: `url(${slide1})`}} className={'pic'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage: `url(${slide2})`}} className={'pic'}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage: `url(${slide3})`}} className={'pic'}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;