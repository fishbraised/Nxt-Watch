import {
  LoginContainer,
  LoginContent,
  LoginForm,
  WebsiteLogo,
  LoginInput,
  CheckboxContainer,
  CheckboxInput,
  CheckboxText,
  LoginButton,
  LoginText,
  LoginSpan,
} from "./StyledComponents";

import { Component } from "react";

class Login extends Component {
  state = { username: "", password: "" };

  submitLogin = async (event) => {
    event.preventDefault();

    const URL = "https://apis.ccbp.in/login";
    const { username, password } = this.state;

    const userDetails = {
      username,
      password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(URL, options);
    const data = await response.json();

    console.log("response: ", response);
    console.log("data: ", data);
  };

  updateUsernameInput = (event) => {
    this.setState({ username: event.target.value });
  };

  updatePasswordInput = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <LoginContainer>
        <LoginContent>
          <LoginForm onSubmit={this.submitLogin}>
            <WebsiteLogo src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096340/Nxt%20Watch/nxt-watch-logo-dark-theme.png" />
            <LoginInput
              onChange={this.updateUsernameInput}
              value={username}
              type="text"
              placeholder="Username"
            />
            <LoginInput
              onChange={this.updatePasswordInput}
              value={password}
              type="text"
              placeholder="Password"
            />

            <CheckboxContainer>
              <CheckboxInput type="checkbox" />
              <CheckboxText>Show Password</CheckboxText>
            </CheckboxContainer>

            <LoginButton type="submit">Login</LoginButton>
            <LoginText>
              {`Dont have an account?`}
              <LoginSpan>{`Sign up, it's free!`}</LoginSpan>
            </LoginText>
          </LoginForm>
        </LoginContent>
      </LoginContainer>
    );
  }
}

export default Login;
