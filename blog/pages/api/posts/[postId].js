import data from "../data"



// api/post/1
export default function handler(req,res){
    const {postId} = req.query
    const {Posts} = data

    if(postId){
        const post = Posts.find(x => x.id == postId);
        return res.status(200).json(post);
    }
    return res.status(404).json({message : "Post Not Found"})
}