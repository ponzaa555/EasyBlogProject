import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,{Autoplay}from 'swiper/core'
import fetcher  from '@/lib/fetcher.js';
import Spinner from './_child/spinner.js';
import Error from 'next/error.js';

SwiperCore.use([Autoplay]);
const Section1 = () => {
    const {data,isLoading,isError} = fetcher('api/trending')
    // console.log(data);
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>
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
                    {
                        data.map((value,index) => (
                            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Section1;

function Slide({data}) {
    const {id,title,description,category,img,published,author,subtitle} = data
    return (
        <div className=' grid md:grid-cols-2 gap-x-10'>
            <div className='image'>
                <Link href={"/"} className=' cursor-pointer'><Image src={img || "/"} width={600} height={600} /></Link>
            </div>
            <div className='info  flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={"/"} className=' cursor-pointer text-orange-600 hover:text-orange-800'>{category || "Unknown"}</Link>
                    <Link href={"/"} className=' cursor-pointer text-gray-800 hover:text-gray-600'>-{published || "Unknown"}</Link>
                </div>
                <div className='Title'>
                    <Link href={"/"} className=' text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>{title}</Link>
                </div>
                    <p className=' text-gray-500 py-3'>
                        {description}
                    </p>
                    {author ? <Author/> : <></>}
            </div> 
        </div>
    )
}