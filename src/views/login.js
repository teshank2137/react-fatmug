import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import setGlobalUsername from "../actioncreator/setUsername";
import { loginUser } from "../actioncreator/setToken";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  .modal {
    background-color: white;
    padding: 50px;
    display: flex;
    flex-direction: column;
    width: 400px;
    -webkit-box-shadow: 4px 4px 5px 5px rgba(189, 195, 199, 1);
    box-shadow: 4px 4px 5px 5px rgba(189, 195, 199, 1);
  }
  h1 {
    margin: auto;
  }
  .field {
    border: 2px solid grey;
    margin-top: 40px;
    border-radius: 5px;
  }
  .sup {
    margin-top: 20px;
  }
  .fields sup {
    margin-top: 20px;
  }
  input {
    /* display: block; */
    width: 100%;
    padding: 3%;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  h5 {
    color: grey;
    margin-bottom: 32px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 0;
  }
  .helper-text {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    font-size: 12px;
    padding: 8px 0;
    color: grey;
    cursor: pointer;
  }
  button {
    width: 100px;
    margin: auto;
    margin-top: 30px;
    padding: 8px;
    background-color: #ff6600;
    border-radius: 5px;
    border: None;
    cursor: pointer;
  }
  .error {
    border: 2px solid red;
  }
  .passerror {
    border: 2px solid red;
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 45vh;
  right: 50vw;
  z-index: 10;
`;

export default function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword2] = useState("");
  const [isFlipped, toggleFlipped] = useState(false);
  const [isError, setError] = useState(false);
  const [isPassError, setPassError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function login() {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    const response = await fetch(
      "https://teshank.pythonanywhere.com/accounts/login/",
      requestOptions
    );
    if (response.status === 200) {
      dispatch(setGlobalUsername(username));
      const json = await response.json();
      dispatch(loginUser(json.token));
      window.sessionStorage.setItem("token", json.token);
      window.sessionStorage.setItem("user", username);
      setLoading(false);
      setError(false);
      history.push("/");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  function signup() {
    if (password === password2) {
      setPassError(false);
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      };
      fetch(
        "https://teshank.pythonanywhere.com/accounts/signup/",
        requestOptions
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          dispatch(loginUser(json.token));
          window.sessionStorage.setItem("token", json.token);
          window.sessionStorage.setItem("user", username);
          dispatch(setGlobalUsername(username));
          setLoading(false);
          setError(false);
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setLoading(false);
        });
    } else {
      setPassError(true);
    }
  }

  return (
    <div>
      <StyledDiv className="progress">
        {isLoading ? <CircularProgress /> : null}
      </StyledDiv>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <StyledModal>
          <div className="modal">
            <h5
              onClick={(e) => {
                toggleFlipped(true);
                setEmail("");
                setPassword("");
                setUsername("");
                setError(false);
              }}
            >
              create a new account
            </h5>
            <h1>Login</h1>
            <div className="fields">
              <div className={isError ? "field error" : "field"}>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="Username"
                ></input>
              </div>
              <div className={isError ? "field error" : "field"}>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="helper-text">
              <a href="#username">Forgot Password?</a>

              <a href="#password">Not a Member yet?</a>
            </div>
            <button className="submit" onClick={login}>
              Sign In
            </button>
          </div>
        </StyledModal>

        <StyledModal>
          <div className="modal">
            <h5
              onClick={(e) => {
                toggleFlipped(false);
                setEmail("");
                setPassword("");
                setUsername("");
                setError(false);
              }}
            >
              Already Have an account? Login
            </h5>
            <h1>Signup</h1>
            <div className="fields sup">
              <div className={isError ? "field sup error" : "field sup"}>
                <input
                  type="email"
                  id="emailsup"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                ></input>
              </div>
              <div className={isError ? "field sup error" : "field sup"}>
                <input
                  type="text"
                  id="usernamesup"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="Username"
                ></input>
              </div>
              <div
                className={` ${isError ? "field sup error" : "field sup"} ${
                  isPassError ? "passerror" : null
                }`}
              >
                <input
                  type="password"
                  id="passwordsup"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div
                className={` ${isError ? "field sup error" : "field sup"} ${
                  isPassError ? "passerror" : null
                }`}
              >
                <input
                  type="password"
                  id="password2sup"
                  value={password2}
                  placeholder="Confirm Password"
                  onChange={(e) => setPassword2(e.target.value)}
                ></input>
              </div>
            </div>
            <button className="submit" onClick={signup}>
              Sign Up
            </button>
          </div>
        </StyledModal>
      </ReactCardFlip>
    </div>
  );
}
