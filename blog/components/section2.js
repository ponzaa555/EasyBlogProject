import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Author from './_child/author';
import fetcher from '@/lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';

// getPost().then(res => console.log(res))
const baseURl = process.env.baseURL
console.log(`BaseURL : ${baseURl}`)
console.log(process.env.baseURL);


const Section2 = () => {
    const {data,isLoading,isError} = fetcher('api/posts')
    console.log(data);
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>
    return (
        <section className=' container mx-auto md:px-20 py-10 '>
            <h1 className=' font-bold text-4xl py-12 text-center'>Lasted Post</h1>

            {/* grid Columns */}
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {data.map((value,Index) => (
                    <Blog data={value} key={Index}></Blog>
                ))}
            </div>
        </section>
    );
}
export default Section2;

function Blog({data}) {
    const {id,title,subtitle,category,img,published,author} = data
    return (
        <div className=' item '>
            <div className='images'>
                <Link href={"/"}><Image src={img || "/"} width={500} height={350} className=' rounded' /></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={"/"} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>{category || "Unknown"}</Link>
                    <Link href={"/"} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-{published || "Unknown"}</Link>
                </div>
                <div className='title'>
                    <Link href={"/"} className=' text-xl font-bold text-gray-800 hover:text-gray-600'>{title}</Link>
                </div>
                <p className=' text-gray-500 py-3 text-sm'>{subtitle}</p>
                {author ? <Author/> : <></>}
            </div>
        </div>
    )
}


