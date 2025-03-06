import { IoMdHome } from "react-icons/io";
// import { HiFire } from "react-icons/hi";
// import { SiYoutubegaming } from "react-icons/si";
// import { MdOutlinePlaylistAdd } from "react-icons/md";

import { MenuTabContainer, TabHeading } from "./StyledComponents";

// props

const MenuTab = () => {
  // const { tabInfo } = props;
  // const { icon, displayText } = tabInfo;

  return (
    <MenuTabContainer>
      <IoMdHome color="rgb(96, 96, 96)" size="22.5px" />

      <TabHeading>Home</TabHeading>
    </MenuTabContainer>
  );
};

export default MenuTab;

{
  /* <FaHome color="rgb(96, 96, 96)" size="22.5px" /> */
}
