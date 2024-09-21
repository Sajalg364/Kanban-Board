import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import KanbanBoard from './components/Board';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleGroupChange = (groupOption) => setGroupBy(groupOption);
  const handleSortChange = (sortOption) => setSortBy(sortOption);

  return (
    <div className="App">
      <Header onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;

