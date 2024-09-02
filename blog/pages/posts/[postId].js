import Format from "@/layout/format"
import Author from "@/components/_child/author"
import Image from "next/image"
import Releted from "@/components/_child/releted"
import getPost  from "@/lib/helper"
import Fetcher from "@/lib/fetcher"
import Spinner from "@/components/_child/spinner"
import Error from "@/components/_child/error"
import { useRouter } from "next/router"
import { SWRConfig  } from "swr"

export default function Page({fallback }){

    const router = useRouter()
    const {postId} = router.query;

    const {data , isLoading , isError} = Fetcher(`api/posts/${postId}`)

    if(isLoading){
        return(
            <Spinner/>
        )
    }
    if(isError) return <Error/>

    return (
    <SWRConfig value={{fallback}}>
        <Article {...data} />
    </SWRConfig>
    )
}

function Article({title , img , subtitle , description , author}) {
    return (
        <Format>
            <section className=" container mx-auto md:px-2 py-16 w-1/2">
                <div className=" flex justify-center">
                    {author ? <Author /> : <></>}
                </div>
                {/* Post */}
                <div className="Post py-10">
                    <h1 className="Title font-bold text-4xl text-center pb-5">
                        {title || "No title"}
                    </h1>
                    <p className=" text-gray-500 text-xl text-center ">
                        {subtitle || "Subtitle"}
                    </p>
                    <div className=" py-10">
                        <Image src={img || "/"} width={900} height={600} />
                    </div>

                    {/* Content */}
                    <div className="Content text-gray-600 text-lg flex flex-col gap-4">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <Releted/>
            </section>
        </Format>
    )
}
// getp propoty
// params เป็นชื่อ fill ใน getStaticPaths()
export async function getStaticProps({params}) {
    const posts = await getPost(params.postId);

    //Cache Data
    return{
        props:{
            fallback:{
                'api/posts':posts
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPost();

    const paths = posts.map(value => {
        return{
            params:{
                postId:value.id.toString()
            }
        } 
    })
    return {
        paths: paths,
        fallback: false
    }
}
//swuConfig  Store Data in Case for you don't have to fetch data everytime