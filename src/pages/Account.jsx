import React from 'react';
import '../styles/Account.css';

const AccountPopup = ({ onClose, userName, onLogout }) => {
 const phone = 'not given';
  const email = 'not given';


  return (
    <div className="modal-overlay">
      <div className="auth-popup">
        <button className="close-btn" onClick={onClose}>✖</button>

        <table className="account-info-table">
          <thead>
            <tr>
              <th>Name</th>
               <td>{userName}</td>
              
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Phone Number</th>
               <td>{phone}</td>
           
            </tr>
          </thead>
          <thead>
            <tr>
                 <th>Email</th>
                   <td>{email}</td>
         
            </tr>
          </thead>
                <thead>
            <tr>
                <th>Pending</th>
                    <td>0</td>
         
            </tr>
          </thead>
          <thead>
            <tr>    
              <th>Delivered</th>
              <td>0</td>
            </tr>
         </thead>
         
        </table>
        <button className="submit-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPopup;
