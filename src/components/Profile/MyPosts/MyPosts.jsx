import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id:1, name: "Alex", age: "32", message: "Hi, how are you?", likesCount: "27"},
    {id:2, name: "Alexey", age: "34", message: "When we go out?", likesCount: "2"},
    {id:3, name: "Pasha", age: "32", message: "Sent you a postbox", likesCount: "21"},
    {id:4, name: "Dimych", age: "31", message: "Hi, how is your success?", likesCount: "26"},
    {id:5, name: "Vanka", age: "35", message: "Shisha was nice", likesCount: "1"}
    ];

    let postsElements = posts
    .map(p => <Post name={p.name} id={p.id} age={p.age} message={p.message} likesCount={p.likesCount}/>)
    

return (   
  <div className={s.postsBlock}>
    <h3>My posts</h3>
      <div>
         <div>
            <textarea name="" id="" cols="15" rows="5"></textarea> 
        </div>  
        <div>
             <button>Add post</button>
        </div>  
         
      </div> 
      <div className={s.posts}>
          {postsElements}
      </div>
  </div>
 );
}

export default MyPosts;