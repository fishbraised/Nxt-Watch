import {
  PremiumBannerContainer,
  InfoContainer,
  WebsiteLogo,
  PremiumBannerDescription,
  PremiumBannerButton,
  CloseBannerButton,
} from "./StyledComponents.jsx";

import { IoMdClose } from "react-icons/io";

const PremiumBanner = () => {
  return (
    <PremiumBannerContainer>
      <InfoContainer>
        <WebsiteLogo src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096368/Nxt%20Watch/nxt-watch-logo-light-theme.png" />
        <PremiumBannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PremiumBannerDescription>
        <PremiumBannerButton>GET IT NOW</PremiumBannerButton>
      </InfoContainer>

      <CloseBannerButton>
        <IoMdClose />
      </CloseBannerButton>
    </PremiumBannerContainer>
  );
};

export default PremiumBanner;
