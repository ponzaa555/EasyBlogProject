import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,{Autoplay}from 'swiper/core'

SwiperCore.use([Autoplay]);
const Section1 = () => {

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition : "right"
    }
    return (
        <section className='py-16' style={bg}>
            <div className=' container mx-auto md:px-20'>
                <h1 className=' font-bold text-4xl pb-12 text-center'>Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay = {{
                        delay:2000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Section1;

function Slide() {
    return (
        <div className=' grid md:grid-cols-2 gap-x-10'>
            <div className='image'>
                <Link href={"/"} className=' cursor-pointer'><Image src={"/images/img1.jpg"} width={600} height={600} /></Link>
            </div>
            <div className='info  flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={"/"} className=' cursor-pointer text-orange-600 hover:text-orange-800'>Business,Travel</Link>
                    <Link href={"/"} className=' cursor-pointer text-gray-800 hover:text-gray-600'>-July3,2022</Link>
                </div>
                <div className='Title'>
                    <Link href={"/"} className=' text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'> You most unhappy customers are your grestest source of learning </Link>
                </div>
                    <p className=' text-gray-500 py-3'>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
                        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                    <Author />
            </div> 
        </div>
    )
}