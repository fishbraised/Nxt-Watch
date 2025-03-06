import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 17.5vh;
  padding: 3em 6em;
  background-color: rgb(25, 25, 25);
`;

export const WebsiteLogo = styled.img`
  width: 150px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 195px;
`;

export const LightingModeButton = styled.button`
  all: unset;

  width: 30px;
  height: 30px;
`;

export const ProfileIcon = styled.img`
  width: 30px;
  border-radius: 50%;
`;

export const LogoutButton = styled.button`
  all: unset;

  padding: 0.25em 1em;
  border: 1px solid rgb(251, 251, 250);
  border-radius: 0.125em;
  color: rgb(251, 251, 250);
  font-size: 1.6rem;
  cursor: pointer;
`;
