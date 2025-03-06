import MenuTab from "../Menutab";
import {
  SidebarMenuContainer,
  MenuList,
  FooterContainer,
  ContactHeading,
  ContactContainer,
  ContactPlatform,
  FooterDescription,
} from "./StyledComponents";

const MenuTabsData = [
  {
    id: "HOME",
    icon: "<IoMdHome />",
    displayText: "Home",
  },
  {
    id: "TRENDING",
    icon: "<HiFire />",
    displayText: "Trending",
  },
  {
    id: "GAMING",
    icon: "<SiYoutubegaming />",
    displayText: "Gaming",
  },
  {
    id: "SAVEDVIDEOS",
    icon: "<MdOutlinePlaylistAdd />",
    displayText: "Saved videos",
  },
];

const SidebarMenu = () => (
  <SidebarMenuContainer>
    <MenuList>
      {MenuTabsData.map((eachObj) => (
        <MenuTab key={eachObj.id} tabInfo={eachObj} />
      ))}
    </MenuList>

    <FooterContainer>
      <ContactHeading>CONTACT US</ContactHeading>

      <ContactContainer>
        <ContactPlatform src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
        <ContactPlatform src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
        <ContactPlatform src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
      </ContactContainer>

      <FooterDescription>
        Enjoy! Now to see your channels and recommendations!
      </FooterDescription>
    </FooterContainer>
  </SidebarMenuContainer>
);

export default SidebarMenu;
