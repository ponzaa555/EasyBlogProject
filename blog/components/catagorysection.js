import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import fetcher from '@/lib/fetcher';
import Spinner from './_child/spinner';
import Error from 'next/error';

const Catagorysection = () => {
    const {data,isLoading,isError} = fetcher('api/popular')
    // console.log(data);
    if(isLoading) return <Spinner/> 
    if(isError) return <Error/>
    return (
        <section className=' container mx-auto md:px-20 py-16'>
            <div className=' grid xl:grid-cols-2'>
                <div className=' item'>
                    <h1 className=' font-bold text-4xl py-12'>Business</h1>
                    <div className=' flex flex-col gap-6'>
                        {/* // อันนี้ต่างไปเนื่องจากไม่ได้ map แต่แต่เช็คแต่ละตัวว่ามีไหม เพราะ map มันจะ map ออกมาหมด */}
                        {/* Post */}
                        {data[0] ? <Post data = {data[0]}></Post> : <></>}
                        {data[1] ? <Post data = {data[1]}></Post> : <></>}
                        {data[2] ? <Post data = {data[2]}></Post> : <></>}
                    </div>
                </div>
                <div className=' item '>
                    <h1 className=' font-bold text-4xl py-12'>Travel</h1>
                    <div className=' flex flex-col gap-6'>
                        {/* Post */}
                        {data[3] ? <Post data = {data[3]}></Post> : <></>}
                        {data[4] ? <Post data = {data[4]}></Post> : <></>}
                        {data[5] ? <Post data = {data[5]}></Post> : <></>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catagorysection;

function Post({data}) {
    const {id,title,description,category,img,published,author,subtitle} = data
    return (
        
        <div className=' flex gap-5'>
            <div className='images flex flex-col justify-start'>
                <Link href={"/"}><Image src={img || "/"} width={300} height={250} className="rounded " /></Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={"/"} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>{category}</Link>
                    <Link href={"/"} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-{published}</Link>
                </div>
                <div className='title'>
                    <Link href={"/"} className=' text-xl  font-bold text-gray-800 hover:text-gray-600'>{title}</Link>
                </div>
                {author ? <Author {...author}/> : <></>}
            </div>
        </div>
    )
}