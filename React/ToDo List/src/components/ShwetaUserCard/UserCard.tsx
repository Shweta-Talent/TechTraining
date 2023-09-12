import React from "react";
import './UserCard.css'

interface User {
  photo: string;
  userName: string;
  description: string;
  
}

const UserCard = (user: User) => {
  return (
    <div className="user-card">
      <img
        src={user.photo}
        alt={`${user.userName}'s photo`}
        className="user-photo"
      />
      <h2 className="user-name">{user.userName}</h2>
      <p className="user-description">{user.description}</p>
    </div>
  );
};

export default UserCard;
