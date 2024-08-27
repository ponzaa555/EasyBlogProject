import React from 'react';
import { ImFacebook2,ImYoutube,ImTwitter } from "react-icons/im";
import Link from 'next/link';

const Header = () => {
    return (
        <header className='bg-gray-50'>
            <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
                <div className=' md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                    <input type='text' placeholder='Search.....' 
                    className='input-text'/>
                </div>
                <div className=' shrink w-2 order-2 sm:order-2'>
                    <Link href={"/"}>
                        <div className=' font-bold uppercase text-3xl'>Design</div>
                    </Link>
                </div>
                <div className=' w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                        <Link href={"/"}><ImFacebook2 color='#0000FF' /></Link>
                        <Link href={"/"}><ImTwitter color='#87CEEB'/></Link>
                        <Link href={"/"}><ImYoutube color= '#db0000'/> </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
