import React from 'react';
import profile from './ProfileInfo.module.css';
import art_ava from './art_ava.jpg';

const ProfileInfo = (props) => {
    return (
      <div className={profile.user_profile}>
      <div className={profile.user_avatar}>
        <img src={art_ava} alt="avatar" />
      </div>
      <div className={profile.user_desc}>
        <h1 className={profile.username}>Ivanychev Artem</h1>
        <div className={profile.profile_row}>
          <div className={profile.desc_label}>Date of Birth:</div>
          <div>14 december 1984</div>
        </div>
        <div className={profile.profile_row}>
          <div className={profile.desc_label}>City:</div>
          <div>Chelyabinsk</div>
        </div>
        <div className={profile.profile_row}>
          <div className={profile.desc_label}>Education:</div>
          <div>CHIPS`04</div>
        </div>
        <div className={profile.profile_row}>
          <div className={profile.desc_label}>Site:</div>
          <div>http://willow-art.ru</div>
        </div>
      </div>
    </div>
    )
  }
  export default ProfileInfo;