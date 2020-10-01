import React from 'react';
import frienditem from './FriendItem.module.css'

const FriendItem = (props) => {  
  return (
    <div className={frienditem.wrapper}>
      <div>
        <img className={frienditem.avatar} src={props.avatar} alt='post_avatar'></img>
      </div>
  <div className={frienditem.title}>{props.name}</div> 
    </div>
  )
}
export default FriendItem;