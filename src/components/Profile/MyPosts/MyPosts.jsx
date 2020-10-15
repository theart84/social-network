import React from 'react';
import myposts from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postsElements = props.posts.map(e => <Post message={e.message} like_counter={e.likesCounter}/>);
  let newPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  let onUpdateTextarea = () => {
    let text = newPost.current.value;
    props.updateTextarea(text);
  }
  return (
    <div>
      <article className={myposts.posts}>
        <h2 className={myposts.article_title}>My post</h2>
        <textarea onChange={onUpdateTextarea}
                  ref={newPost}
                  className={myposts.post_field}
                  placeholder='your text...'
                  value={props.newPostText}/>
        <button onClick={onAddPost} className={myposts.send_btn}>Send</button>
      </article>
      {postsElements}
    </div>
  )
}
export default MyPosts;