import { Link, useNavigate } from "react-router-dom";
import LoginPage from "../CSS/LoginPage.module.css";
import not_show from "../images/not_show.png";
import show from "../images/show.png";
import axios from 'axios';

export default function Login() {
  let Navigate = useNavigate();
  
  function clearForm(id, error_id, error) {
    if (id !== "") {
      document.getElementById(id).value = "";
    }
    document.getElementById(error_id).style.display = "block";
    document.getElementById(error_id).innerHTML = error;
  }

  function clearError(error_id) {
    document.getElementById(error_id).style.display = "none";
    document.getElementById(error_id).innerHTML = "";
  }

  function submitForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let val = 1;
    if (email === "") {
      val = 0;
      clearForm("email", "error-email", "Enter your IITGOA Email");
    } else if (email.substring(email.length - 13) !== "@iitgoa.ac.in") {
      clearForm("", "error-email", "Enter your IITGOA Email");
      val = 0;
    }
    if (password === "") {
      clearForm("password", "error-pass", "Enter a Password");
      val = 0;
    }
    if (val === 1) {
      axios.post("http://localhost:5000/login",{email,password},{
        withCredentials: "include"
      })
      .then(res => {
        const message = res.data.message;
        if(message){
          if(message === "Incorrect Password"){
            return clearForm("password", "error-pass", message);
          }
          if(message === "Email is not registered"){
            return Navigate('/signup',{replace:true});
          }
        }
        return Navigate('/home',{replace:true});
      })
      .catch(err => console.log(err));
    }
  }

  function switchPassword(id, id_img) {
    let type = document.getElementById(id_img);
    if (type.src === not_show) {
      document.getElementById(id).setAttribute("type", "text");
      type.src = show;
    } else {
      document.getElementById(id).setAttribute("type", "password");
      type.src = not_show;
    }
  }

  return (
    <div className={LoginPage.body}>
      <div className={LoginPage.container}>
        <div className={LoginPage['left-section']}>
          <div className={LoginPage.content}>
            <h2>lorem ispum random text here for testing</h2>
            <div className={LoginPage.graphics}></div>
          </div>
        </div>
        <div className={LoginPage['right-section']}>
          <div className={LoginPage['signup-form']}>
            <h2 className={LoginPage.h2}>Login</h2>
            <form className={LoginPage.form}>
              <input className={LoginPage.input}
                id="email"
                type="email"
                placeholder="IITGOA Email"
                required
                onClick={() => clearError('error-email')}
                autoComplete="off"
              />
              <span className={LoginPage['error-message']} id="error-email">
                Email is required
              </span>

              <div className={LoginPage['password-container']}>
                <input className={LoginPage.input}
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onClick={() => clearError('error-pass')}
                  autoComplete="off"
                />
                <button
                  type="button"
                  className={LoginPage['toggle-password']}
                  onClick={() => switchPassword('password', 'switch-pass')}
                >
                  <img id="switch-pass" src={not_show} alt="Password Visibility" />
                </button>
              </div>
              <span className={LoginPage['error-message']} id="error-pass">
                Password is required
              </span>

              <button type="button" className={LoginPage['submit-btn']} onClick={submitForm}>
                Login
              </button>
            </form>
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
