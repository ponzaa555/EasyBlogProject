import Header from "../components/header.js"
import Footer from "../components/footer.js";
import Head from "next/head.js";
export default function format({children}){
    return(
        <>
        <Head>
            <title>Blog</title>
        </Head>
         <Header/>
         <main>{children}</main>
         <Footer/>
        </>
    )
}
