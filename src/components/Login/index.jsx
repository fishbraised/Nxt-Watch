import {
  LoginContainer,
  LoginContent,
  LoginForm,
  WebsiteLogo,
  LoginInput,
  CheckboxContainer,
  CheckboxInput,
  CheckboxParagraph,
  LoginButton,
  LoginParagraph,
  LoginSpan,
} from "./StyledComponents";

import { Component } from "react";

class Login extends Component {
  state = { email: "", password: "" };

  submitLogin = async (event) => {
    event.preventDefault();

    const URL = "https://apis.ccbp.in/login";
    const { email, password } = this.state;

    const userDetails = {
      email,
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

  updateEmailInput = (event) => {
    this.setState({ email: event.target.value });
  };

  updatePasswordInput = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginContainer>
        <LoginContent>
          <LoginForm onSubmit={this.submitLogin}>
            <WebsiteLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" />
            <LoginInput
              onChange={this.updateEmailInput}
              value={email}
              type="text"
              placeholder="Email"
            />
            <LoginInput
              onChange={this.updatePasswordInput}
              value={password}
              type="text"
              placeholder="Password"
            />

            <CheckboxContainer>
              <CheckboxInput type="checkbox" />
              <CheckboxParagraph>Show Password</CheckboxParagraph>
            </CheckboxContainer>

            <LoginButton type="submit">Login</LoginButton>
            <LoginParagraph>
              {`Dont have an account?`}
              <LoginSpan>{`Sign up, it's free!`}</LoginSpan>
            </LoginParagraph>
          </LoginForm>
        </LoginContent>
      </LoginContainer>
    );
  }
}

export default Login;
