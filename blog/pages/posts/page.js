import Format from "@/layout/format"
import Author from "@/components/_child/author"
import Image from "next/image"
import Releted from "@/components/_child/releted"

export default function Page() {
    return (
        <Format>
            <section className=" container mx-auto md:px-2 py-16 w-1/2">
                <div className=" flex justify-center">
                    <Author />
                </div>
                {/* Post */}
                <div className="Post py-10">
                    <h1 className="Title font-bold text-4xl text-center pb-5">
                        Your most unhappy customers are your greatest source of learning
                    </h1>
                    <p className=" text-gray-500 text-xl text-center ">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <div className=" py-10">
                        <Image src={"/images/img1.jpg"} width={900} height={600} />
                    </div>

                    {/* Content */}
                    <div className="Content text-gray-600 text-lg flex flex-col gap-4">
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <Releted/>
            </section>
        </Format>
    )
}