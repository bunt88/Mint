import React from "react";

function Login(props) {

  return (
    <React.Fragment>
        <div className="d-flex m-5 flex-column align-items-center border border-dark rounded" style={{height: "275px", width: "250px", backgroundColor: "rgb(248, 247, 245)"}}>
            <div className="w-100 text-center p-3 font-weight-bold" style={{backgroundColor: "lightgreen"}}>Login</div>
            <div className="w-75">
                <div className="m-3">
                    <input className="w-100" type="text" name="username" placeholder="Email / Username"></input>
                </div>
                <div className="m-3">
                    <input className="w-100" type="text" name="password" placeholder="Password"></input>
                </div>
                <div className="m-3">
                    <button className="w-100" onClick={submit}>Sign In</button>
                </div>
            </div>
            <div>
                <div className="text-center font-weight-light">Don't have an account?</div>
                <p className="text-center" onClick={() => props.setPage("signUp")}>Sign Up</p>
            </div>
        </div>

    </React.Fragment>
  );

  function submit() {
    console.log("test sign in button")
  }
}

export default Login;