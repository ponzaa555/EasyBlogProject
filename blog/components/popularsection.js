import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';
import fetcher from '@/lib/fetcher';
import Spinner from './_child/spinner';
import Error from 'next/error';

const Popularsection = () => {
    const { data, isLoading, isError } = fetcher('api/popular')
    // console.log(data);
    if (isLoading) return <Spinner />
    if (isError) return <Error />
    return (
        <section className=' container mx-auto md:px-20 py-16'>
            <h1 className=' font-bold text-4xl py-12 text-center'>Most Popular</h1>

            {/* Swiper */}
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}>
                {
                    data.map((value, index) => (
                        // ชื้อ data ต้องตรงกับ function PopularBlog({data}) ไม่ตรงหาไม่เจอ
                        <SwiperSlide key={index}><PopularBlog data={value}></PopularBlog></SwiperSlide>
                    ))
                }
            </Swiper>
        </section >
    );
}

export default Popularsection;

function PopularBlog({ data }) {
    const { id, title, description, category, img, published, author, subtitle } = data
    return (
        <div className=' grid mx-4'>
            <div className='images'>
                <Link href={`/posts/${id}`}><Image src={img || "/"} width={600} height={400} /></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={`/posts/${id}`} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>{category}</Link>
                    <Link href={`/posts/${id}`} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-{published}</Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`} className=' text-3xl md:text-4xl  font-bold text-gray-800 hover:text-gray-600'>{title}</Link>
                </div>
                <p className=' text-gray-500 py-3 text-sm'>
                    {description}
                </p>
                {author ? <Author {...author} /> : <></>}
            </div>
        </div>
    )
}
