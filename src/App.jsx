import React from 'react';
import useFetchData from './hooks/useFetchData';
import './App.css';

function App() {
  const { tickets, users } = useFetchData();

  // if (loading) {
  //   return <div className="App">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="App">Error: {error.message}</div>;
  // }

  return (
    <div className="App">
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <strong>Title:</strong> {ticket.title} <br />
            <strong>Status:</strong> {ticket.status} <br />
            <strong>Priority:</strong> {ticket.priority} <br />
            <strong>User ID:</strong> {ticket.userId}
          </li>
        ))}
      </ul>
      
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Available:</strong> {user.available ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
