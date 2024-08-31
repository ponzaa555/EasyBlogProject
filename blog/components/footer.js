import React from 'react';
import { ImFacebook2,ImYoutube,ImTwitter } from "react-icons/im";
import Link from 'next/link';
import Newsletter from './_child/newletter';

const Footer = () => {

    const bg = {
        backgroundImage:"url('/images/footer.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"bottom left"
    }
    return (
        <footer className='bg-gray-50' style={bg}>
            <Newsletter></Newsletter>

            <div className=' container mx-auto flex justify-center py-12'>
                <div className='py-5'>
                    <div className=' flex gap-6 justify-center'>
                        <Link href={"/"}><ImFacebook2 color='#0000FF' /></Link>
                        <Link href={"/"}><ImTwitter color='#87CEEB' /></Link>
                        <Link href={"/"}><ImYoutube color='#db0000' /> </Link>
                    </div>

                    <p className=' py-5 text-gray-400'>Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
                    <p className=' text-gray-400 text-center'>Terms & Conditions</p>
                </div>
            </div>

        </footer>
    );
}
export default Footer;
