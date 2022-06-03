import React from "react"
import s from "./Post.module.css"

const Post = (props) => {
return (   
    <div className={s.item}>
      <img src="https://static.independent.co.uk/2022/03/17/20/newFile-1.jpg?width=1200" alt="" />
       {props.message}
       <br />
       <div>
          <span>{props.name}, {props.age} <br /> likes: {props.likesCount} </span>
          <br />
          <br />
       </div>   
    </div>
         
 );
}

export default Post;