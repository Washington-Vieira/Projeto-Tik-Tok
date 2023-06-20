import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({likes, messages, shares}) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    {
      /*QUANDO ESTÁ SOZINHO SIGNIFICA TRUE. E COM ! SIGNIFICA O CONTRÁRIO DO QUE ESTÁ: TRUE = FALSE. FALSE = TRUE*/
    }
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options" onClick={handdleLike}>
        {/*COMO SE FOSSE UM IF, PORÉM OTIMIZADO! SE CHAMA CONDIÇÃO TERNARIA*/}

        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        {/**CONDIÇÃO TERNARIA */}
        <p> {liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSidebar__options">
        <ChatIcon fontSize="large" />
        <p> {messages} </p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="large" />
        <p> {shares} </p>
      </div>
    </div>
  );
}

export default VideoSidebar;
