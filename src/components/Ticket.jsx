import React from 'react';
import '../App.css';
import { user } from '../assets'
import { getPriorityIcon, iconSelector } from './icons';

const Ticket = ({ ticket, users, isIcon1, isIcon2 }) => {

  return (
    <div className="ticket">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p className='text-muted'>{ticket.id}</p>
        </div>
        <div>
          <img src={user} alt="user Icon" className='mr' />
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '0.4rem' }}>
        <div>
          {isIcon1 || <img src={iconSelector(ticket.status)} alt="Priority Icon" className="priority-icon" style={{ marginRight: '10px' }} />}
        </div>
        <div style={{ width: '90%' }}>
          <h4>{ticket.title}</h4>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: '0.8rem', alignItems: 'center' }}>
        {isIcon2 ||
          <div className='shadow mr'>
            <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" className="priority-icon" />
          </div>
        }
        <div className='shadow'>
          <div className='rounded'></div>
          <div>
            <p className='text-muted'>{ticket.tag}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Ticket;
