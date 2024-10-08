

const baseURl = "http://localhost:3000/"
//endpointinit : http://localhost:3000/api/posts
export default async function getPost(id) {
    const res = await fetch(`${baseURl}/api/posts`)
    const posts = await res.json();

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts
}