import { useState } from "react";
import img1 from "./images/main title.png";
import img2 from "./images/bg login illustration.png";
import img3 from "./images/bglogin.png";
function Home() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  function handlename(event) {
    setusername(event.target.value);
  }

  function handlepassword(event) {
    setpassword(event.target.value);
  }

  function handleLogin() {
    console.log("username:", username);
    console.log("Password:", password);
    setpassword("");
    setusername("");
  }
  return (
    <>
      <div className="dfinal">
        <div className="d1">
          <img className="img1" src={img1}></img>
        </div>
        <div className="dnet">
          <div className="d2">
            <img className="img2" src={img2}></img>
          </div>
          <div className="d3">
            <form className="form1">
              <label htmlFor="uername">LDAP ID</label>
              <br />
              <input
                id="username"
                type="text"
                value={username}
                onChange={handlename}
                name="username"
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
              <button type="submit" className="btn btn-primary ">
                Log in
              </button>
              <br />
              <br />
              <h14>
                {" "}
                <a href="" style={{ color: "black", textDecoration: "none" }}>
                  forget password ?
                </a>
              </h14>
              <br />
            </form>
          </div>
        </div>
        <div className="d4">
          <img className="img3" src={img3}></img>
        </div>
      </div>
    </>
  );
}
export default Home;