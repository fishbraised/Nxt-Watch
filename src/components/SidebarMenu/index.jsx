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

import { IoMdHome } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";

import { Component } from "react";

const MenuTabsData = [
  {
    id: "HOME",
    link: "/",
    icon: <IoMdHome size="22.5px" />,
    displayText: "Home",
  },
  {
    id: "TRENDING",
    link: "/trending",
    icon: <HiFire size="22.5px" />,
    displayText: "Trending",
  },
  {
    id: "GAMING",
    link: "/gaming",
    icon: <SiYoutubegaming size="22.5px" />,
    displayText: "Gaming",
  },
  {
    id: "SAVEDVIDEOS",
    link: "/saved-videos",
    icon: <MdOutlinePlaylistAdd size="22.5px" />,
    displayText: "Saved videos",
  },
];

class SidebarMenu extends Component {
  state = { activeTab: MenuTabsData[0].id };

  onUpdateActiveTab = (clickedTabId) => {
    this.setState({ activeTab: clickedTabId });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <SidebarMenuContainer>
        <MenuList>
          {MenuTabsData.map((eachObj) => (
            <MenuTab
              key={eachObj.id}
              tabInfo={eachObj}
              activeTab={activeTab}
              onUpdateActiveTab={this.onUpdateActiveTab}
            />
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
  }
}

export default SidebarMenu;
