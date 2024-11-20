// Function to group tickets
// export function groupTickets(tickets, grouping, userData) {
//     return tickets.reduce((acc, ticket) => {
//       let key = ticket[grouping];
  
//       // Replace user ID with user name if grouping by userId
//       if (grouping === 'userId' && userData[key]) {
//         key = userData[key].name || 'Unknown User';
//       }
  
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(ticket);
//       return acc;
//     }, {});
//   }

// export function groupTickets(tickets, grouping) {
//     const grouped = {};
  
//     tickets.forEach((ticket) => {
//       let key;
//       if (grouping === 'priority') {
//         // Ensure the keys match the fixed priority titles
//         key =
//           ticket.priority === 0
//             ? 'no priority'
//             : ticket.priority === 1
//             ? 'low'
//             : ticket.priority === 2
//             ? 'medium'
//             : ticket.priority === 3
//             ? 'high'
//             : 'urgent';
//       } else {
//         key = ticket[grouping];
//       }
  
//       if (!grouped[key]) {
//         grouped[key] = [];
//       }
//       grouped[key].push(ticket);
//     });
  
//     return grouped;
//   }
  

export function groupTickets(tickets, grouping) {
    const grouped = {};
  
    tickets.forEach((ticket) => {
      let key;
      if (grouping === 'status') {
        key = ticket.status; // Use the ticket's status
      } else if (grouping === 'priority') {
        key =
          ticket.priority === 0
            ? 'no priority'
            : ticket.priority === 1
            ? 'low'
            : ticket.priority === 2
            ? 'medium'
            : ticket.priority === 3
            ? 'high'
            : 'urgent';
      } else {
        key = ticket[grouping]; // Group by other properties like `userId`
      }
  
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
    });

    console.log('Grouping By:', grouping);
  
    console.log('Grouped Data:', grouped);
    return grouped;
  }
  


  // Function to sort tickets
  export function sortTickets(tickets, ordering) {
    if (ordering === 'priority') {
      // Sort tickets by priority in descending order
      return [...tickets].sort((a, b) => b.priority - a.priority);
    }
  
    if (ordering === 'title') {
      // Sort tickets alphabetically by title
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
  
    return tickets; // Return tickets unsorted if no valid ordering is provided
  }
  