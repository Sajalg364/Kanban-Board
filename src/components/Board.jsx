import React from 'react';
import Ticket from './Ticket';
import '../App.css';
import { menu, add } from '../assets';
import { iconSelector } from './icons';

const priorityLabels = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {

  const groupTickets = (tickets, groupBy) => {
    let grouped = {};
    if (groupBy === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        const key = ticket.status;
        if (!acc[key]) acc[key] = [];
        acc[key].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'user') {
      const userMap = users.reduce((map, user) => {
        map[user.id] = user.name;
        return map;
      }, {});

      grouped = tickets.reduce((acc, ticket) => {
        const userName = userMap[ticket.userId] || ticket.userId;
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'priority') {
      grouped = tickets.reduce((acc, ticket) => {
        const priorityLabel = priorityLabels[ticket.priority];
        if (!acc[priorityLabel]) acc[priorityLabel] = [];
        acc[priorityLabel].push(ticket);
        return acc;
      }, {});
    }

    return grouped;
  };

  const sortTickets = (tickets, sortBy) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedTickets = Object.keys(groupedTickets).reduce((acc, key) => {
    acc[key] = sortTickets(groupedTickets[key], sortBy);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map((key) => (
        <div key={key} className="column">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex' }}>
              <img src={iconSelector(key)} alt="Priority Icon" className="priority-icon" />
              <h4 style={{ marginLeft: '1rem' }}>{key} <span className='text-muted'>{sortedTickets[key].length}</span></h4>
            </div>
            <div style={{ display: 'flex' }}>
              <img src={add} alt="Priority Icon" className='mr' />
              <img src={menu} alt="Priority Icon" />
            </div>
          </div>

          {sortedTickets[key].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} isIcon1={groupBy === 'status'} isIcon2={groupBy === 'priority'} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
