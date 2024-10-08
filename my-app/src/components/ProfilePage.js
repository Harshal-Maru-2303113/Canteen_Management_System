import React, {useEffect, useState} from 'react';
import Profilepage from '../CSS/ProfilePage.module.css'; // Keeping the original import name
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  let Navigate = useNavigate();
  const [email,setemail] = useState("");
  const [name,setname]  = useState('');

  useEffect(() => {
    axios.get('https://canteen-management-system-xi.vercel.app/:5000/user',{
      withCredentials: "include"
    })
    .then(res => {
      const getemail = res.data.email;
      if(getemail === "")  return Navigate('/login');
      setemail(getemail);
      setname(res.data.name);
    })
    .catch(err => console.log(err));
  },[Navigate]);

  const editName = () => {
    // Function to handle editing name
    console.log('Edit Name clicked');
  };

  const editEmail = () => {
    // Function to handle editing email
    console.log('Edit Email clicked');
  };

  const signOut = () => {
    axios.get('https://canteen-management-system-xi.vercel.app/:5000/logout',{
      withCredentials: "include",
    })
    .then(res => Navigate('/'))
    .catch(err => Navigate('/'));
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
              <h2>{name}</h2>
            </div>
          </div>
          <div className={Profilepage['profile-info']}>
            <div className={Profilepage['info-item']}>
              <span id="profile-name">{name}</span>
              <button className={`${Profilepage.btn} ${Profilepage['icon-btn']}`} onClick={editName}>
                ✏️
              </button>
            </div>
            <div className={Profilepage['info-item']}>
              <span id="profile-email">{email}</span>
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
