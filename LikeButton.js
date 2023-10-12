import  React ,{useState} from 'react';
const LikeButton=() => {
    const [likeCount, setLikeCount] = useState(0);
const handleLike =() =>{
    setLikeCount(likeCount + 1);
};
return (
    <div>
        <h2>LikeButton</h2>
        <p> Number of Likes: {likeCount}</p>
        <button onClick ={handleLike}>Like</button>
    </div>
);
};

export default LikeButton;