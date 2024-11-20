
// import React from 'react';
// import { Card } from '../Card';
// import './column.css';

// export const Column = ({ title, tickets, userData, icon }) => (
//   <div className="column">
//     <div className="column-header">
//       {icon && <img src={icon} alt={`${title} Icon`} className="priority-icon" />} {/* Display SVG icon */}
//       <h2>{title}</h2>
//     </div>
//     <div className="tickets">
//       {tickets.length > 0 ? (
//         tickets.map((ticket) => (
//           <Card key={ticket.id} ticket={ticket} user={userData[ticket.userId]} />
//         ))
//       ) : (
//         <p className="empty-column">No tickets available</p>
//       )}
//     </div>
//   </div>
// );

import React from 'react';
import { Card } from '../Card';
import threeDotMenuIcon from '../../assets/3 dot menu.svg';
import addIcon from '../../assets/add.svg';
import './column.css';

export const Column = ({ title, tickets, userData, icon }) => (
  <div className="column">
    <div className="column-header">
      {icon && <img src={icon} alt={`${title} Icon`} className="status-icon" />}
      <h2 className="column-title">
        {title} <span className="task-count">{tickets.length}</span> {/* Task count */}
      </h2>
      <div className="column-actions">
        <img src={addIcon} alt="Add" className="add-icon" />
        <img src={threeDotMenuIcon} alt="Menu" className="menu-icon" />
      </div>
    </div>
    <div className="tickets">
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} user={userData[ticket.userId]} />
        ))
      ) : (
        <p className="empty-column">No tickets available</p>
      )}
    </div>
  </div>
);
