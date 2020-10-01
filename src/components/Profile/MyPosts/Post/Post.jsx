import React from 'react';
import post from './Post.module.css'
import {faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
  return (
    <article className={post.post}>
      <div className={post.wrapper}>
        <img className={post.post_avatar} src={require('../../art_ava.jpg')} alt='post_avatar'></img>
        <div className={post.post_field}>{props.message}</div>
        <div className={post.hr_setting}></div>
        <button className={post.like_btn}><span><FontAwesomeIcon icon={faHeart} />   </span><span>{props.like_counter}</span></button>
      </div>
    </article>
  )
}
export default Post;