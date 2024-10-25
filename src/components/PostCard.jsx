import UserAvatar from "./UserAvatar";
import {useNavigate} from "react-router-dom";

export default function PostCard({ post }) {
  const navigate =useNavigate();

function handleClick() {
  navigate(`/posts/${post.id}`);
}

  return (
    <article className="post-card" onClick={handleClick}>
						<UserAvatar uid={post.uid} />
            <img src={post.image} alt={post.caption} />
            <h2>{post.caption}</h2>
        </article>
  );
}
