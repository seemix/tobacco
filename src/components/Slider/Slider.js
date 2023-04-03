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
                height={1000}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
               // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className={'slider_container'}
                loop={true}
            >
                <SwiperSlide>
                    <img src={slide1} alt={'sl1'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2}  alt={'sl2'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}  alt={'sl3'}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;