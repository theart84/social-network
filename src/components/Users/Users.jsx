import React from 'react'
import users from './Users.module.css'


const Users = (props) => {
  return (
    <div className={users.wrapper}>
      <h2 className={users.section_title}>Users</h2>
      {
        props.users.map(user => (
          <div className={users.wrapper_block}>
            <div className={users.avatar_button}>
              <div className={users.img}>
                <img src={user.avatarURL} alt=""/>
              </div>
              <div className={users.btn}>
                {user.followed ? <button onClick={() => props.unfollow(user.id)}>FOLLOW</button>
                               : <button onClick={() => props.follow(user.id)}>UNFOLLOW</button>
                }
              </div>
            </div>
            <div className={users.block_info}>
              <h3 className={user.name}>{user.firsName}</h3>
              <span className={users.country}>{user.location.country}</span>
              <br/>
              <span className={users.cityname}>{user.location.cityName}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Users;

