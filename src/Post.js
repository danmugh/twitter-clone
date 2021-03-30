import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {

        return (
            <div className="post" >
                <div className="post__avatar">
                    <Avatar src="https://pbs.twimg.com/profile_images/1370689153982214147/VB4Cbhib_400x400.jpg" />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                Dan Mugisho{" "}
                                <span className="post__headerSpecial">
                                    <VerifiedUserIcon className="post__badge" /> @M_DanMugisho
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <img src="https://blog.sciencemuseum.org.uk/wp-content/uploads/2019/07/giphy-2.gif" alt="" />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        );
    }

export default Post;