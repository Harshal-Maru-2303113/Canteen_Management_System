import React,{useEffect} from "react";
import homepage from "../CSS/HomePage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let Navigate = useNavigate();
  var email;
  useEffect(() => {
    axios.get('http://localhost:5000/user',{
      withCredentials: true
    })
    .then(res => {
      email = res.data.email;
      if(email === "")  return Navigate('/login');
    })
    .catch(err => console.log(err));
  },[Navigate]);
  return (
    <div className={homepage.mainHomepageContainer}>
    </div>
  );
}
