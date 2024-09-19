import './App.css';
import not_show from './not_show.png'
import show from './show.png'

function clearForm(id,error_id,error){
  if(id !== ""){
    document.getElementById(id).value="";
  }
  document.getElementById(error_id).style.display = "block";
  document.getElementById(error_id).innerHTML=error;
}

function clearError(error_id){
  document.getElementById(error_id).style.display = "none";
  document.getElementById(error_id).innerHTML="";
}

function submitForm(){
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const confi_pass = document.getElementById("confi-pass").value;
  let val = 1;
  if(email === ""){
    val = 0;
    clearForm("email","error-email","Enter your IITGOA Email");
  }
  else if(email.substring(email.length-13) !== "@iitgoa.ac.in"){
    clearForm("","error-email","Enter your IITGOA Email");
    val = 0;
  }
  if(name === ""){
    clearForm("name","error-name","Enter your Name");
    val = 0;
  }
  if(password === ""){
    clearForm("password","error-pass","Enter a Password");
    val = 0;
  }
  if(confi_pass === ""){
    clearForm("confi-pass","error-confi-pass","Confirm your Password");
    val = 0;
  }
  else if(password !== confi_pass){
    clearForm("confi-pass","error-confi-pass","Password is not matching");  
    // eslint-disable-next-line
    val = 0;  
  }
}

function switchPassword(id,id_img){
  let type = document.getElementById(id_img);
  if(type.src ===not_show){
      document.getElementById(id).setAttribute('type','text');
      type.src = show;
  }
  else{
      document.getElementById(id).setAttribute('type','password');
      type.src = not_show;
  }
}

function App() {
  return (
    <div className="container">
      <div className="left-section">
        <div className="content">
          <h2>Find 3D Objects, Mockups and Illustrations here.</h2>
          <div className="graphics"></div>
        </div>
      </div>
      <div className="right-section">
        <div className="signup-form">
          <h2>Create Account</h2>
          <form>
            <input
              id="email"
              type="email"
              placeholder="IITGOA Email"
              required
              onClick={() => clearError('error-email')}
            />
            <span className="error-message" id="error-email">
              Email is required
            </span>

            <input
              id="name"
              type="text"
              placeholder="Full Name"
              required
              onClick={() => clearError('error-name')}
            />
            <span className="error-message" id="error-name">
              Full Name is required
            </span>

            <div className="password-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                onClick={() => clearError('error-pass')}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => switchPassword('password', 'switch-pass')}
              >
                <img
                  id="switch-pass"
                  src= {not_show}
                  alt="Password Visibility"
                />
              </button>
            </div>
            <span className="error-message" id="error-pass">
              Password is required
            </span>

            <div className="password-container">
              <input
                type="password"
                id="confi-pass"
                placeholder="Confirm Password"
                required
                onClick={() => clearError('error-confi-pass')}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => switchPassword('confi-pass', 'switch-confi-pass')}
              >
                <img
                  id="switch-confi-pass"
                  src= {not_show}
                  alt="Password Visibility"
                />
              </button>
            </div>
            <span className="error-message" id="error-confi-pass">
              Please confirm your password
            </span>

            <button type="button" className="submit-btn" onClick={submitForm}>
              Create Account
            </button>
          </form>
          <p>
             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
