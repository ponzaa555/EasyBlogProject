import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Author from './_child/author';

const Section2 = () => {
    return (
        <section className=' container mx-auto md:px-20 py-10 '>
            <h1 className=' font-bold text-4xl py-12 text-center'>Lasted Post</h1>

            {/* grid Columns */}
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {Blog()}
                {Blog()}
                {Blog()}
                {Blog()}
            </div>
        </section>
    );
}
export default Section2;

function Blog() {
    return (
        <div className=' item '>
            <div className='images'>
                <Link href={"/"}><Image src={"/images/img1.jpg"} width={500} height={350} className=' rounded' /></Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={"/"} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>Business,Travel</Link>
                    <Link href={"/"} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-July3,2022</Link>
                </div>
                <div className='title'>
                    <Link href={"/"} className=' text-xl font-bold text-gray-800 hover:text-gray-600'> You most unhappy customers are your grestest source of learning </Link>
                </div>
                <p className=' text-gray-500 py-3 text-sm'>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
                        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author/>
            </div>
        </div>
    )
}


