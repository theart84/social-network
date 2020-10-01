import React from 'react'
import friends from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => { 
    let friendsElements = props.data.friend.map(e => <FriendItem name={e.name} avatar={e.avatar}/>)   
    return (
        <div className={friends.wrapper}>
        <h2 className={friends.section_title}>Friends</h2>
        {friendsElements}
        </div>
    )
}

export default Friends;