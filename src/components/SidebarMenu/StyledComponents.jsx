import styled from "styled-components";

export const SidebarMenuContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 82.5vh;
  padding: 0em 2.25em 4em 2.25em;
  background-color: rgb(25, 25, 25);
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const ContactHeading = styled.h3`
  margin: 0;
  margin-top: 1.25em;
  color: rgb(251, 251, 250);
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 102.5px;
  margin: 0;
  margin-top: 1.25em;
`;

export const ContactPlatform = styled.img`
  width: 27.5px;
`;

export const FooterDescription = styled.p`
  margin: 0;
  margin-top: 1.25em;
  color: rgb(251, 251, 250);
  font-size: 1.6rem;
  font-family: "Roboto";
`;
