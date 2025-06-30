import React, { useEffect, useState } from 'react';
import '../styles/Account.css'; // Optional CSS styling

const Account = ({ userName, onLogout }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInEmail = localStorage.getItem('loggedInUser');
    const foundUser = users.find(u => u.email === loggedInEmail);
    setUser(foundUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    onLogout();
    window.location.href = '/';
  };

  if (!user) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>You are not logged in.</h2>
      </div>
    );
  }

  return (
    <div className="account-page" style={{ padding: '40px' }}>
      <h2>Account Details</h2>
      <table className="account-info-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.firstName} {user.lastName}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Pending</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Delivered</th>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <button className="submit-btn" onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default Account;
