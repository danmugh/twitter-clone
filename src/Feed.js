import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SidebarMenu from "./SidebarMenu";

function Feed() {

    const [posts, setPosts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
        setBackdrop(!backdrop)
    };

    const handleCloseBackdrop = () => {
        handleMenu()
    };

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            <div className="navbar">
                <span className="menu" >
                        <MenuIcon
                            onClick={ handleMenu }
                            className="menu__icon"
                            style={{ fontSize: '30px' }} />
                </span>
                <h2>Home</h2>
            </div>
            <div className="adjustment" style={{ paddingBottom: '85px' }} />

            {/*<div className="feed__header">*/}
            {/*        <span className="menu" >*/}
            {/*            <MenuIcon className="menu__icon" style={{ fontSize: '30px' }} />*/}
            {/*        </span>*/}
            {/*    <h2>Home</h2>*/}
            {/*</div>*/}

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


            <div>
                <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'  >
                        <li className='navbar-toggle'>
                            <a href="#">
                                <CloseIcon onClick={handleMenu}
                                           className='close-icon'
                                           style={{ color: 'var(--twitter-color)', fontSize: '35px'}} />
                            </a>
                        </li>

                        <SidebarMenu />
                    </ul>
                </nav>
            </div>
            <div
                onClick={handleCloseBackdrop}
                className={ backdrop ? "backdrop" : "" }
            />

        </div>
    );
}

export default Feed;