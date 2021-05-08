import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SidebarMenu from "./SidebarMenu";
import FlipMove from "react-flip-move";
import TwitterIcon from "@material-ui/icons/Twitter";

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

// .orderBy('createdAt', 'desc')

    useEffect(() => {

        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );

        console.log('From Dbase')
    }, []);

    return (
        <div className="feed">
            <div className="navbar">
                <span className="menu__menuIcon" >
                    <MenuIcon
                        onClick={ handleMenu }
                        className="menuIcon"
                        style={{ fontSize: '30px' }} />
                </span>
                <h2>Home</h2>
                <span className="menu__twitterIcon" >
                    <TwitterIcon
                        style={{ fontSize: '30px', display: `${ menu ? 'none' : 'block' }` }}
                        className="twitterIcon" />
                </span>
            </div>
            <div className="adjustment" style={{ paddingBottom: '85px' }} />

            {/*<div className="feed__header">*/}
            {/*        <span className="menu" >*/}
            {/*            <MenuIcon className="menu__icon" style={{ fontSize: '30px' }} />*/}
            {/*        </span>*/}
            {/*    <h2>Home</h2>*/}
            {/*</div>*/}

            <TweetBox />

            <FlipMove >
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
            </FlipMove>

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