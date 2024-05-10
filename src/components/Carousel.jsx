// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

// import images
import img1 from '../assets/images/carousel1.jpg';
import img2 from '../assets/images/carousel2.jpg';
import img3 from '../assets/images/carousel3.jpg';

export default function Carousel() {
    return (
        <div className='mb-12 mt-6'>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
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
                    <Slide image={img1} text='Get your web development projects done in minutes'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img2} text='Get your web development projects done in minutes'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img3} text='Get your web development projects done in minutes'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
