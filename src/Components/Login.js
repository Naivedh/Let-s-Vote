import React from "react";
import "../App.css";
import { Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {

  return (
    <div className="login">
      <div className="login-inner">
        <form onSubmit={props.handleSubmit}>
          <p className="heading">Login</p>
          <div className="login-input">
            <div className="login-input-inner">
              <p>Voter ID</p>
              <input
                type="text"
                value={props.state.voter_id}
                onChange={props.onChangevoterid}
              ></input>
            </div>
            <div className="login-input-inner">
              <p>Password</p>
              <input
                type="password"
                value={props.state.password}
                onChange={props.onChangepass}
                autoComplete="on"
              ></input>
            </div>
            <p style= {{ textAlign:"center", color:"#FF3633"}}>{props.state.msg }</p>
            {/* <div className="login-input-small"> 
            <p>New User? <span style ={{ color: "#95B2CF", cursor: "pointer"}}>SignUp</span></p>
          </div> */}
            <div className="login-input-submit">
              <Button type="submit" style={{ fontWeight: "550", margin: "15px" }}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
