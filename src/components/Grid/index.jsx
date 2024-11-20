import React from 'react';
import { Column } from '../Column/Column';
import './grid.css';

// Import status icons
import backlogIcon from '../../assets/Backlog.svg';
import todoIcon from '../../assets/To-do.svg';
import inProgressIcon from '../../assets/in-progress.svg';
import doneIcon from '../../assets/Done.svg';
import canceledIcon from '../../assets/Cancelled.svg';

// Import priority icons
import noPriorityIcon from '../../assets/No-priority.svg';
import lowPriorityIcon from '../../assets/Img - Low Priority.svg';
import mediumPriorityIcon from '../../assets/Img - Medium Priority.svg';
import highPriorityIcon from '../../assets/Img - High Priority.svg';
import urgentPriorityIcon from '../../assets/SVG - Urgent Priority grey.svg';

// Define priority order with icons
const priorityOrder = [
  { title: 'no priority', display: 'No Priority', icon: noPriorityIcon },
  { title: 'low', display: 'Low', icon: lowPriorityIcon },
  { title: 'medium', display: 'Medium', icon: mediumPriorityIcon },
  { title: 'high', display: 'High', icon: highPriorityIcon },
  { title: 'urgent', display: 'Urgent', icon: urgentPriorityIcon },
];

// Define status order with icons
const statusOrder = [
  { title: 'Backlog', icon: backlogIcon },
  { title: 'Todo', icon: todoIcon },
  { title: 'In progress', icon: inProgressIcon },
  { title: 'Done', icon: doneIcon },
  { title: 'Canceled', icon: canceledIcon },
];

export const Grid = ({ groupedData, grouping, userData }) => {
  // Ensure missing priority or status keys are represented
  if (grouping === 'priority') {
    priorityOrder.forEach((priority) => {
      if (!groupedData[priority.title]) {
        groupedData[priority.title] = []; // Add empty array for missing priorities
      }
    });
  } else if (grouping === 'status') {
    statusOrder.forEach((status) => {
      if (!groupedData[status.title]) {
        groupedData[status.title] = []; // Add empty array for missing statuses
      }
    });
  }

  // Determine the keys to render
  const keys =
    grouping === 'status'
      ? statusOrder // Use fixed order for statuses with icons
      : grouping === 'priority'
      ? priorityOrder // Use fixed order for priorities with icons
      : Object.keys(groupedData); // Use dynamic keys for other groupings

  return (
    <div className="grid">
      {keys.map((key) => {
        const title =
          grouping === 'userId' && userData[key]
            ? userData[key].name // Use user names for userId grouping
            : grouping === 'status' || grouping === 'priority'
            ? key.title || key.display // Use display name for statuses or priorities
            : key; // Default to the key for other groupings

        const icon =
          grouping === 'status' || grouping === 'priority' ? key.icon : null; // Use icons for statuses and priorities

        return (
          <Column
            key={title}
            title={title}
            tickets={groupedData[key.title || key] || []} // Ensure grouped tickets exist
            userData={userData}
            icon={icon} // Pass the icon to the Column component
          />
        );
      })}
    </div>
  );
};
