import Image from "next/image";

export default function error() {
    return (
        <div className="text-center py-10 justify-center">
            <h1 className=" text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1>
            <div className=" flex w-full justify-center">
                <Image src={"/images/not_found.png"} width={300} height={300} />
            </div>
        </div>
    )
}