import { Link } from 'react-router-dom';
import SignUpPage from '../CSS/SignUpPage.module.css'; // Import CSS module as 'SignUpPage'
import not_show from '../images/not_show.png';
import show from '../images/show.png';
import axios from 'axios';

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
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const confi_pass = document.getElementById("confi-pass").value;
  let val = 1;
  if (email === "") {
    val = 0;
    clearForm("email", "error-email", "Enter your IITGOA Email");
  } else if (email.substring(email.length - 13) !== "@iitgoa.ac.in") {
    clearForm("", "error-email", "Enter your IITGOA Email");
    val = 0;
  }
  if (name === "") {
    clearForm("name", "error-name", "Enter your Name");
    val = 0;
  }
  if (password === "") {
    clearForm("password", "error-pass", "Enter a Password");
    val = 0;
  }
  if (confi_pass === "") {
    clearForm("confi-pass", "error-confi-pass", "Confirm your Password");
    val = 0;
  } else if (password !== confi_pass) {
    clearForm("confi-pass", "error-confi-pass", "Password is not matching");
    val = 0;
  }
  if (val === 1) {
    axios.post('http://localhost:5000/signup', { email, name, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}

function switchPassword(id, id_img) {
  let type = document.getElementById(id_img);
  if (type.src === not_show) {
    document.getElementById(id).setAttribute('type', 'text');
    type.src = show;
  } else {
    document.getElementById(id).setAttribute('type', 'password');
    type.src = not_show;
  }
}

export default function SignUp() {
  return (
    <div className={SignUpPage.body}>
      <div className={SignUpPage.container}>
        <div className={SignUpPage['left-section']}>
          <div className={SignUpPage.content}>
            <h2>Lorem Ipsum random text here for testing</h2>
            <div className={SignUpPage.graphics}></div>
          </div>
        </div>
        <div className={SignUpPage['right-section']}>
          <div className={SignUpPage['signup-form']}>
            <h2>Create Account</h2>
            <form className={SignUpPage.form}>
              <input 
                id="email"
                type="email"
                placeholder="IITGOA Email"
                required
                onClick={() => clearError('error-email')}
                className={SignUpPage.input} // Ensure input SignUpPage are managed
              />
              <span className={SignUpPage['error-message']} id="error-email">
                Email is required
              </span>

              <input
                id="name"
                type="text"
                placeholder="Full Name"
                required
                onClick={() => clearError('error-name')}
                className={SignUpPage.input} // Ensure input SignUpPage are managed
              />
              <span className={SignUpPage['error-message']} id="error-name">
                Full Name is required
              </span>

              <div className={SignUpPage['password-container']}>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onClick={() => clearError('error-pass')}
                  className={SignUpPage.input} // Ensure input SignUpPage are managed
                />
                <button
                  type="button"
                  className={SignUpPage['toggle-password']}
                  onClick={() => switchPassword('password', 'switch-pass')}
                >
                  <img
                    id="switch-pass"
                    src={not_show}
                    alt="Password Visibility"
                  />
                </button>
              </div>
              <span className={SignUpPage['error-message']} id="error-pass">
                Password is required
              </span>

              <div className={SignUpPage['password-container']}>
                <input
                  type="password"
                  id="confi-pass"
                  placeholder="Confirm Password"
                  required
                  onClick={() => clearError('error-confi-pass')}
                  className={SignUpPage.input} // Ensure input SignUpPage are managed
                />
                <button
                  type="button"
                  className={SignUpPage['toggle-password']}
                  onClick={() => switchPassword('confi-pass', 'switch-confi-pass')}
                >
                  <img
                    id="switch-confi-pass"
                    src={not_show}
                    alt="Password Visibility"
                  />
                </button>
              </div>
              <span className={SignUpPage['error-message']} id="error-confi-pass">
                Please confirm your password
              </span>

              <button type="button" className={SignUpPage['submit-btn']} onClick={submitForm}>
                Create Account
              </button>
            </form>
            <p>
              Already Have an Account?
              <Link to={"/login"}> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
