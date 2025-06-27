import React from 'react';
import '../styles/DeliveryLocation.css';

const DeliveryLocation = () => {
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Puducherry',
    'Chandigarh', 'Ladakh', 'Jammu & Kashmir', 'Andaman & Nicobar Islands',
    'Dadra & Nagar Haveli', 'Daman & Diu', 'Lakshadweep'
  ];

  const rows = [];
  for (let i = 0; i < states.length; i += 3) {
    rows.push(states.slice(i, i + 3));
  }

  return (
    <div className="delivery-location-page">
      <h1 className="delivery-heading">Delivery Locations</h1>
      <table className="state-table">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((state, colIndex) => (
                <td key={colIndex}>{state}</td>
              ))}
              {row.length < 3 && [...Array(3 - row.length)].map((_, i) => (
                <td key={`empty-${i}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryLocation;
