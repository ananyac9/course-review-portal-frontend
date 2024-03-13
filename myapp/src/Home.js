import { useEffect, useState } from "react";
import img1 from "../src/Components/images/main title.png";
import img2 from "../src/Components/images/bg login illustration.png";
import img3 from "../src/Components/images/bglogin.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import { Hidden } from "@mui/material";

function Home() {
  const [ldapid, setldapid] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handlename = (event) =>{
    setldapid(event.target.value);
  }
  const handlepassword =(event) =>{
    setpassword(event.target.value);
  }
  const handlehomepage =(()=>{
    navigate("/homepage");
  })
    

 /* const handlelogin =(e)=>{
    e.preventDefault();
    axios.post(" " , {
      'ldapid':ldapid,
      password:password
    }) 
    .then((response=>{
      console.log(response.data)
      alert("success")
      //there comes login into home page
      localStorage.setItem('token',response.data.token)
      //saving token on local storage
      navigate('/')  ; // link of page1 by aman
      setpassword("");
      setldapid("");  }))

    .catch((error=>{
      console.log(" there is error " , error )
    }))
    
  }
    const handleLogin = (e) => {
        e.preventDefault();
        if (!ldap-is || !password ) {
            alert("Please enter name, email, and password to login.");
            return; // Prevent API call if fields are empty
        }
        axios.post(" ", {
            'ldapid':ldapid,
            password:password
    }) 
        
       .then((response)=>{
        console.log(response);
        const users  = response.data;
        if(users){
          const user = users.find(use=>use.ldapid === ldapid && use.password === password );
            if(user){
              navigate('');
            }
            else{
              alert("enter correct credentials ");
            }
          }
          else{
            alert("there is error logging in ")
          }
        }
       )
        .catch((error) => {
            console.error("Error submitting data:", error);
            alert("There was an error logging in");
        });
    }
    */
  return (
    <>
    <div className="loginpage">
      <div className="dfinal">
        <div className="d1">
          <img className="img1" src={img1}></img>
        </div>
        <div className="dnet">
          <div className="d2">
            <img className="img2" src={img2}></img>
          </div>
          <div className="d3">
          <form className="form1" >
              <label htmlFor="uername">LDAP-ID</label>
              <br />
              <input
                id="ldapid"
                type="text"
                value={ldapid}
                onChange={handlename}
                name="ldapid"
                placeholder="enter ldap-id here "
              />
              <br />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handlepassword}
                placeholder="enter password here"
              />
              <input type="checkbox" /> remember me on the device <br />
              <br />
              <button type="submit" className="btn btn-primary " style={{textDecoration:'none' , color:'white'}} onClick={handlehomepage}  >
               Log in
              </button>
              <br />
              <br />
              <h14>
               
              <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
                  forget password ?
                </Link>
              </h14>
              <br />
            </form>
          </div>
        </div>
        <div className="d4">
          <img className="img3" src={img3}></img>
        </div>
      </div>
    <div/>
    </div>
    </>
  );
}
export default Home;
