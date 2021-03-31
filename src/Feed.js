import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import MenuIcon from '@material-ui/icons/Menu';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            <div className="navbar">
                <div className="feed__header">
                <span className="menu" >
                    <MenuIcon className="menu__icon" style={{ fontSize: '30px' }} />
                </span>
                    <h2>Home</h2>
                </div>
            </div>


            <TweetBox />

            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}

            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}

            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}

        </div>
    );
}

export default Feed;