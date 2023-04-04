import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import './Content.css';
import i1 from './1.jpg'
import i2 from './2.jpg'
import i3 from './3.jpg'
import i4 from './4.jpg'
import i5 from './4.webp';

import ItemCard from '../ItemCard/ItemCard';

const Content = () => {
    const cards = [i1, i2, i3, i4, i5, i1, i2, i3, i4, i5];
    return (
        <div className={'content_container'}>
            <div>
                <h2>Content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque, deserunt
                    doloribus
                    eaque, earum eum facilis illum in laudantium minus mollitia nulla rem repudiandae similique unde vel
                    veritatis voluptates!</p>
            </div>
            <div className={'items_slider'}>
                <Swiper
                    autoHeight={true}
                    slidesPerView={4}
                    spaceBetween={10}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        '@1.25': {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    loop={true}
                    autoplay={{ delay: 4500, disableOnInteraction: false, }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={'item_slider'}
                >
                    {
                        cards.map((card, index) => <SwiperSlide key={index}><ItemCard image={card}/></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Content;