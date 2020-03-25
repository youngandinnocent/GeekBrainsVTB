import React from 'react';

const Profile = (props) => {
  const {name, lastname, hobby} = props;
    return (
      <div className="profile">
        <div className="profile__name">{name}</div>
        <div className="profile__name">{lastname}</div>
        <div className="profile__name">{hobby}</div>
      </div>);
}

export default Profile;
