import React from 'react';

export default function Profile() {
  return (
    <div className="profile-container">
    <h2>Profile</h2>
    <div className="profile-info">
      <label htmlFor="username">Username:</label>
      <p>{currentUser?.email}</p>
      {/* Add more profile details here */}
    </div>
  </div>
  );
}
