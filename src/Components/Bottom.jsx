import React from "react";
import video from "./videos.json";
import "./Bottom.css";
const Bottom = () => {
  return (
    <div className="bottomContainer">
      <div className="listTime">
      {video.map((item) => (
        <div className="listAll" key={item.id}>
          <div className="listTitle">{item.title}</div>
          <div className="listAllTag">
            {item.tag.map((item,index) => (
              <div className="listTag" key={index}>{item}</div>
             
            ))}
          </div>
          <div className="listLikeCount">{item.likeCount}</div>
          <div className="listCommentCount">{item.commentCount}</div>
          <div className="listshareCount">{item.shareCount}</div>
          <div className="listauthor">{item.author}</div>
        </div>
      ))}
    </div>
    <div className="listQuantity">
      {video.map((item) => (
        <div className="listAll" key={item.id}>
          <div className="listTitle">{item.title}</div>
          <div className="listAllTag">
            {item.tag.map((item,index) => (
              <div className="listTag" key={index}>{item}</div>
             
            ))}
          </div>
          <div className="listLikeCount">{item.likeCount}</div>
          <div className="listCommentCount">{item.commentCount}</div>
          <div className="listshareCount">{item.shareCount}</div>
          <div className="listauthor">{item.author}</div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Bottom;
