import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import './Main.css';
import Slider from '../Slider/Slider';
import FakeItem from '../FakeItem/FakeItem';

const Main = () => {
    const cards = [
        'https://www.pmi.com/resources/images/default-source/default-album/tobacco-economics-thumbnail.jpg?sfvrsn=b7ce42b4_2&imwidth=600&imdensity=1',
        'https://www.pmi.com/resources/images/default-source/default-album/tobacco-economics-thumbnail.jpg?sfvrsn=b7ce42b4_2&imwidth=600&imdensity=1',
        'https://www.pmi.com/resources/images/default-source/default-album/tobacco-economics-thumbnail.jpg?sfvrsn=b7ce42b4_2&imwidth=600&imdensity=1',
        'https://www.pmi.com/resources/images/default-source/default-album/tobacco-economics-thumbnail.jpg?sfvrsn=b7ce42b4_2&imwidth=600&imdensity=1',
        'https://www.pmi.com/resources/images/default-source/default-album/tobacco-economics-thumbnail.jpg?sfvrsn=b7ce42b4_2&imwidth=600&imdensity=1'
    ];
    return (
        <>
            <Slider/>
            <div className={'content_container'}>
                <div>
                    <h2>Content</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto atque, deserunt
                        doloribus
                        eaque, earum eum facilis illum in laudantium minus mollitia nulla rem repudiandae similique unde
                        vel
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
                            cards.map((card, index) => <SwiperSlide key={index}><FakeItem image={card}/></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Main;