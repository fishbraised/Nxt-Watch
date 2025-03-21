import {
  PremiumBannerContainer,
  InfoContainer,
  WebsiteLogo,
  PremiumBannerDescription,
  PremiumBannerButton,
  ModalContainer,
  ModalImage,
  ModalHeading,
  ModalDescription,
  ButtonContainer,
  ModalButton,
  CloseBannerButton,
} from "./StyledComponents.jsx";

import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";

const PremiumBanner = (props) => {
  const { closeBanner } = props;

  const clickCloseBanner = () => {
    closeBanner();
  };

  return (
    <PremiumBannerContainer>
      <InfoContainer>
        <WebsiteLogo src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096368/Nxt%20Watch/nxt-watch-logo-light-theme.png" />
        <PremiumBannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PremiumBannerDescription>

        <Popup
          trigger={<PremiumBannerButton>GET IT NOW</PremiumBannerButton>}
          modal
          nested
        >
          {(close) => (
            <ModalContainer>
              <ModalImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742479117/Nxt%20Watch/payment-card.png" />
              <ModalHeading>PAY NOW</ModalHeading>
              <ModalDescription>
                Buy NxtWatch premium for the price of Rs 999.
              </ModalDescription>

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
                >
                  Confirm
                </ModalButton>
              </ButtonContainer>
            </ModalContainer>
          )}
        </Popup>
      </InfoContainer>

      <CloseBannerButton onClick={clickCloseBanner}>
        <IoMdClose size="18px" />
      </CloseBannerButton>
    </PremiumBannerContainer>
  );
};

export default PremiumBanner;
