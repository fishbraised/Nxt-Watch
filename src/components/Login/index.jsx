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

// onSubmit={}

const Login = () => (
  <LoginContainer>
    <LoginContent>
      <LoginForm>
        <WebsiteLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" />
        <LoginInput type="text" placeholder="Email" />
        <LoginInput type="text" placeholder="Password" />

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

export default Login;
