import styled from "styled-components";

export const PremiumBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 220px;
  padding: 2em 3em;
  background-size: cover;
  background-image: url("https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742044730/Nxt%20Watch/nxt-watch-banner-bg.png");
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 0.5em;
`;

export const PremiumBannerDescription = styled.p`
  margin-bottom: 4em;
  color: rgb(30, 41, 59);
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const PremiumBannerButton = styled.button`
  all: unset;

  align-self: flex-start;
  padding: 0.75em 1.5em;
  border: 1px solid rgb(24, 24, 24);
  color: rgb(24, 24, 24);
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const CloseBannerButton = styled.button`
  all: unset;

  align-self: flex-start;
  font-size: 1.8rem;
  cursor: pointer;
`;
