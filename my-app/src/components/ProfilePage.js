import React, { useEffect } from 'react';
import Profilepage from '../CSS/ProfilePage.module.css'; // Keeping the original import name
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  let Navigate = useNavigate();
  useEffect(() => {
    axios.post('http://localhost:5000/login', {}, {
      withCredentials: 'include'
    })
      .then(res => {
        if (res.data.message !== "") {
          return Navigate('/login');
        }
      })
      .catch(err => {
        return Navigate('/login');
      });
  });
  const editName = () => {
    // Function to handle editing name
    console.log('Edit Name clicked');
  };

  const editEmail = () => {
    // Function to handle editing email
    console.log('Edit Email clicked');
  };

  const signOut = () => {
    axios.post("http://localhost:5000/logout", {}, { withCredentials: 'include' })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className={Profilepage.body}>
      <div className={Profilepage['container']}>
        <div className={Profilepage['profile-card']}>
          <div className={Profilepage['profile-header']}>
            <div className={Profilepage['profile-pic']}>
              <img src="https://via.placeholder.com/100" alt="Profile" />
            </div>
            <div className={Profilepage['profile-name']}>
              <h2>John Doe</h2>
            </div>
          </div>
          <div className={Profilepage['profile-info']}>
            <div className={Profilepage['info-item']}>
              <label>Name:</label>
              <span id="profile-name">John Doe</span>
              <button className={`${Profilepage.btn} ${Profilepage['icon-btn']}`} onClick={editName}>
                ✏️
              </button>
            </div>
            <div className={Profilepage['info-item']}>
              <label>Email:</label>
              <span id="profile-email">john.doe@example.com</span>
              <button className={`${Profilepage.btn} ${Profilepage['icon-btn']}`} onClick={editEmail}>
                ✏️
              </button>
            </div>
          </div>
          <div className={Profilepage['profile-actions']}>
            <button className={`${Profilepage.btn} ${Profilepage['signout-btn']}`} onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
