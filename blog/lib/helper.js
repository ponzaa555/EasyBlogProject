

const baseURl = "http://localhost:3000/"
//endpointinit : http://localhost:3000/api/posts
export default async function getPost() {
    const res = await fetch(`${baseURl}/api/posts`)
    const posts = await res.json();

    return posts
}