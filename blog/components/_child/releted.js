import Image from "next/image"
import Link from "next/link"
import Author from "./author"
import Fetcher from "@/lib/fetcher"
import Spinner from "./spinner"
import Error from "./error"
export default function releted() {
    const {data,isLoading,isError} = Fetcher(`api/posts`)
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>
    return (
        <section className="pt-20">
            <h1 className=" font-bold text-3xl py-10 ">Releted</h1>

            <div className=" flex flex-col gap-6">
                {/* each releted post */}
                {data.map((value ,index) =>
                    <Post key={index} {...value}/>

                )}
            </div>
        </section>
    )
}

function Post({id,title,catagory,img, published,author}) {
    console.log(title);
    return (
        <div className=" flex gap-5">
            {/* Img */}
            <div className=" images flex flex-col justify-start">
                <Image src={img || "/"} width={300} height={200} className=" rounded" />
            </div>
            {/* Info */}
            <div className="Info ">
                {/* Cat */}
                <Link href={"/"} className=' text-sm cursor-pointer text-orange-600 hover:text-orange-800'>{catagory}</Link>
                <Link href={"/"} className=' text-sm cursor-pointer text-gray-800 hover:text-gray-600'>-{published}</Link>
                {/* Title */}
                <div className="title">
                <Link href={"/"} className=' text-xl  font-bold text-gray-800 hover:text-gray-600'> {title} </Link>
                </div>
                {author ? <Author {...author}/> : <></>}
            </div>
        </div>
    )
} 