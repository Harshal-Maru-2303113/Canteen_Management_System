import { Link } from "react-router-dom";
import "../CSS/LoginPage.css";
import not_show from "../images/not_show.png";
import show from "../images/show.png";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Login(props) {
  const navigate = useNavigate();
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
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
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
      // eslint-disable-next-line
      val = 0;
    }
    if (val === 1) {
        axios.post('http://localhost:5000/login',{email,password})
        .then(res => {if (res.status === 200) {
          // On success, redirect to the homepage
          navigate('/home');  }// or whatever your homepage route is
          else{
            console.error(res.json().error);
          }
      }
    
    )
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
    <div className="container">
      <div className="left-section">
        <div className="content">
          <h2>lorem ispum random text here for testing</h2>
          <div className="graphics"></div>
        </div>
      </div>
      <div className="right-section">
        <div className="signup-form">
          <h2>Login</h2>
          <form>
            <input
              id="email"
              type="email"
              placeholder="IITGOA Email"
              required
              onClick={() => clearError("error-email")}
            />
            <span className="error-message" id="error-email">
              Email is required
            </span>

            <div className="password-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                onClick={() => clearError("error-pass")}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => switchPassword("password", "switch-pass")}
              >
                <img
                  id="switch-pass"
                  src={not_show}
                  alt="Password Visibility"
                />
              </button>
            </div>
            <span className="error-message" id="error-pass">
              Password is required
            </span>

            <button type="button" className="submit-btn" onClick={submitForm}>
              Login
            </button>
          </form>
          <p>
            Don't Have a Account?
            <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
