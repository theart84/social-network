import React from 'react'
import users from './Users.module.css'
import * as axios from 'axios'
import userAvatar from '../../../src/img/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => this.props.setUser(response.data.items))
  }

  render() {
    return (<div className={users.wrapper}>
      <h2 className={users.section_title}>Users</h2>
      {
        this.props.users.map(user => (
          <div key={user.id} className={users.wrapper_block}>
            <div className={users.avatar_button}>
              <div className={users.img}>
                <img src={user.photos.small !== null ? user.photos.small : userAvatar} alt=""/>
              </div>
              <div className={users.btn}>
                {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>FOLLOW</button>
                  : <button onClick={() => this.props.follow(user.id)}>UNFOLLOW</button>
                }
              </div>
            </div>
            <div className={users.block_info}>
              <h3 className={users.name}>{user.name}</h3>
              <span className={users.country}>{'user.location.country'}</span>
              <br/>
              <span className={users.cityname}>{'user.location.cityName'}</span>
            </div>
          </div>
        ))
      }
    </div>)
  }
}

export default Users;

