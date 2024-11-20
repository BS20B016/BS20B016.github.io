import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Grid } from './components/Grid';
import { Loader } from './components/Loader';
import { groupTickets, sortTickets } from './utils/helpers';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets);
        setUserData(
          data.users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
        );
        setLoading(false);
      });
  }, []);

  const groupedData = groupTickets(sortTickets(tickets, ordering), grouping, userData);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      {loading ? (
        <Loader />
      ) : (
        <Grid groupedData={groupedData} grouping={grouping} userData={userData} />
      )}
    </div>
  );
}

export default App;
