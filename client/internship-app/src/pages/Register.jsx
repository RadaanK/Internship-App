import React, {useState, setState} from 'react';
import './Register.css'
import { useNavigate } from "react-router-dom"; 
function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [student, setStudent] = useState(null);
    const [employer, setEmployer] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "student"){
        setStudent(value);
      }
      if(id === "employer"){
        setEmployer(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit  = () => {
    console.log(firstName,lastName,student,employer,email,password,confirmPassword);
    navigate("/login");
}

    return(
      <div className="form">
        <h1>Register</h1>
          <div className="form-body">
              <div className="username">
                  
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/> 
              </div>
              <div className="lastname">
                  
                  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
              </div>
              <div className="role">
                  <input className = "student" type="radio" id="student" name="role" value={student} onChange = {(e) => handleInputChange(e)}/>
                  <label>Student</label>
                  <input className = "student" type="radio" id="employer" name="role" value={employer} onChange = {(e) => handleInputChange(e)}/>
                  <label>Employer</label>
              </div>
              <div className="email">
                  
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                 
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
            <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
          </div>
      </div>      
    )       
}
export default Register;