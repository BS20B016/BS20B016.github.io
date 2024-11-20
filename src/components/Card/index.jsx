// import React from 'react';
// import './card.css';

// export const Card = ({ ticket, user }) => (
//   <div className="card">
//     <div className="card-header">
//       <strong>{ticket.id}</strong>
//       <p>{ticket.title}</p>
//     </div>
//     <div className="card-body">
//       <span className="tag">{ticket.tag[0]}</span>
//     </div>
//     <div className="card-footer">
//       <img src={user?.avatar || ''} alt={user?.name || 'Unknown'} />
//       <span>{user?.name || 'Unknown'}</span>
//     </div>
//   </div>
// );
import React from 'react';
import './card.css';

export const Card = ({ ticket, user }) => {
  // Safely get initials from the user's name
  const getUserInitials = (name) => {
    if (!name) return ''; // If name is undefined, return an empty string
    const parts = name.split(' ');
    const firstInitial = parts[0]?.[0]?.toUpperCase() || ''; // First letter of the first word
    const secondInitial = parts[1]?.[0]?.toUpperCase() || ''; // First letter of the second word (if it exists)
    return `${firstInitial}${secondInitial}`;
  };

  return (
    <div className="card">
        <strong>{ticket.id}</strong>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <p className="card-tag">{ticket.tag.join(', ')}</p>
        {user && (
          <div className="user-avatar">
            <span>{getUserInitials(user.name)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
