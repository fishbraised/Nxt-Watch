import { FaMoon } from "react-icons/fa6";

import {
  NavbarContainer,
  WebsiteLogo,
  RowContainer,
  LightingModeButton,
  ProfileIcon,
  LogoutButton,
} from "./StyledComponents";

const Navbar = () => (
  <NavbarContainer>
    <WebsiteLogo src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096340/Nxt%20Watch/nxt-watch-logo-dark-theme.png" />

    <RowContainer>
      <LightingModeButton>
        <FaMoon color="rgba(251, 251, 250)" size="100%" />
      </LightingModeButton>
      <ProfileIcon src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096682/Nxt%20Watch/default-profile-icon.jpg" />
      <LogoutButton>Logout</LogoutButton>
    </RowContainer>
  </NavbarContainer>
);

export default Navbar;
