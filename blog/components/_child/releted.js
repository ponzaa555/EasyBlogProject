import Image from "next/image"
import Link from "next/link"
import Author from "./author"

export default function releted() {
    return (
        <section className="pt-20">
            <h1 className=" font-bold text-3xl py-10 ">Releted</h1>

            <div className=" flex flex-col gap-6">
                {/* each releted post */}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className=" flex gap-5">
            {/* Img */}
            <div className=" images flex flex-col justify-start">
                <Image src={"/images/img2.jpg"} width={300} height={200} className=" rounded" />
            </div>
            {/* Info */}
            <div className="Info ">
                {/* Cat */}
                <Link href={"/"} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>Business,Travel</Link>
                <Link href={"/"} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-July3,2022</Link>
                {/* Title */}
                <div className="title">
                <Link href={"/"} className=' text-xl  font-bold text-gray-800 hover:text-gray-600'> You most unhappy customers are your grestest source of learning </Link>
                </div>
                <Author/>
            </div>
        </div>
    )
}