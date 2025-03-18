import {
  NavbarContainer,
  WebsiteLogo,
  RowContainer,
  LightingModeButton,
  HamburgerButton,
  ProfileIcon,
  LogoutIconButton,
  LogoutButton,
  ModalContainer,
  ModalHeading,
  ButtonContainer,
  ModalButton,
} from "./StyledComponents";

import { FaMoon } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import Popup from "reactjs-popup";

import Cookies from "js-cookie";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
  const onLogoutClick = () => {
    const { history } = props;

    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <NavbarContainer>
      <Link to="/">
        <WebsiteLogo src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096340/Nxt%20Watch/nxt-watch-logo-dark-theme.png" />
      </Link>

      <RowContainer>
        <LightingModeButton>
          <FaMoon color="rgba(251, 251, 250)" size="100%" />
        </LightingModeButton>

        <HamburgerButton>
          <GiHamburgerMenu color="rgba(251, 251, 250)" size="100%" />
        </HamburgerButton>
        <ProfileIcon src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096682/Nxt%20Watch/default-profile-icon.jpg" />

        <Popup
          trigger={
            <LogoutIconButton>
              <FiLogIn color="rgba(251, 251, 250)" size="100%" />
            </LogoutIconButton>
          }
          modal
          nested
        >
          {(close) => (
            <ModalContainer>
              <ModalHeading>Do you really intend to log out?</ModalHeading>

              <ButtonContainer>
                <ModalButton
                  borderColor="rgb(126, 133, 142)"
                  color="rgb(126, 133, 142)"
                  bgColor="none"
                  onClick={close}
                >
                  Cancel
                </ModalButton>
                <ModalButton
                  borderColor="none"
                  color="rgb(251, 251, 250)"
                  bgColor="rgb(230, 48, 42)"
                  onClick={onLogoutClick}
                >
                  Confirm
                </ModalButton>
              </ButtonContainer>
            </ModalContainer>
          )}
        </Popup>

        <Popup trigger={<LogoutButton>Logout</LogoutButton>} modal nested>
          {(close) => (
            <ModalContainer>
              <ModalHeading>Do you really intend to log out?</ModalHeading>

              <ButtonContainer>
                <ModalButton
                  borderColor="rgb(126, 133, 142)"
                  color="rgb(126, 133, 142)"
                  bgColor="none"
                  onClick={close}
                >
                  Cancel
                </ModalButton>
                <ModalButton
                  borderColor="none"
                  color="rgb(251, 251, 250)"
                  bgColor="rgb(230, 48, 42);"
                  onClick={onLogoutClick}
                >
                  Confirm
                </ModalButton>
              </ButtonContainer>
            </ModalContainer>
          )}
        </Popup>
      </RowContainer>
    </NavbarContainer>
  );
};

export default withRouter(Navbar);
