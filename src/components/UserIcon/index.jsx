import React from 'react';
import './usericon.css';

export const UserIcon = ({ avatar, name }) => (
  <div className="user-icon">
    <img src={avatar} alt={name} />
    <span>{name}</span>
  </div>
);
