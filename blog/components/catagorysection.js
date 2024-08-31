import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';

const Catagorysection = () => {
    return (
        <section className=' container mx-auto md:px-20 py-16'>
            <div className=' grid xl:grid-cols-2'>
                <div className=' item'>
                    <h1 className=' font-bold text-4xl py-12'>Business</h1>
                    <div className=' flex flex-col gap-6'>
                        {/* Post */}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
                <div className=' item '>
                    <h1 className=' font-bold text-4xl py-12'>Travel</h1>
                    <div className=' flex flex-col gap-6'>
                        {/* Post */}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catagorysection;

function Post() {
    return (
        <div className=' flex gap-5'>
            <div className='images flex flex-col justify-start'>
                <Link href={"/"}><Image src={"/images/img1.jpg"} width={300} height={250} className="rounded " /></Link>
            </div>
            <div className='info flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={"/"} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>Business,Travel</Link>
                    <Link href={"/"} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-July3,2022</Link>
                </div>
                <div className='title'>
                    <Link href={"/"} className=' text-xl  font-bold text-gray-800 hover:text-gray-600'> You most unhappy customers are your grestest source of learning </Link>
                </div>
                <Author />
            </div>
        </div>
    )
}