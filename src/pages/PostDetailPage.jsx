import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";


export default function PostDetailPage()
{
    const[post, setPost] = useState({});
    const params = useParams();
    const url =`https://crud-test-c836c-default-rtdb.firebaseio.com/posts/${params.id}.json`;
    const navigate = useNavigate();

useEffect(() => {
    async function getPost() {
        const response = await fetch (url);
        const postData = await response.json ();
        console.log(postData);
        setPost(postData);
    }
    getPost();
}, [url]);

function navigateToUpdate() {
    navigate(`/posts/${params.id}/update`);
}



    return(
        <section className="page" id="post-page">
       <div className="container">
        <h1>{post.caption}</h1>
        <PostCard post={post}/>
        <div className="btns">
            <button className="btn-cancel">Delete Post</button>
            <button onClick ={navigateToUpdate}>Update Post</button>
        </div>
       </div>
       </section>
    );
}