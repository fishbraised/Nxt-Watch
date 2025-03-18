import { MenuTabContainer, TabHeading } from "./StyledComponents";
import { Link } from "react-router-dom";

const MenuTab = (props) => {
  const { tabInfo, activeTab, onUpdateActiveTab } = props;
  const { id, link, icon, displayText } = tabInfo;
  // variable = if its active button: red color, else white color

  const tabIconColor =
    activeTab === id ? "rgb(230, 48, 42)" : "rgb(96, 96, 96)";
  const tabBgColor = activeTab === id ? "rgb(49, 49, 49)" : "rgb(24, 24, 24)";
  const tabTextFontWeight = activeTab === id ? "500" : "400";

  const updateActiveTab = () => {
    onUpdateActiveTab(id);
  };

  return (
    <Link style={{ textDecoration: "none" }} to={link}>
      <MenuTabContainer
        color={tabIconColor}
        bgColor={tabBgColor}
        onClick={updateActiveTab}
      >
        {icon}

        <TabHeading tabTextFontWeight={tabTextFontWeight}>
          {displayText}
        </TabHeading>
      </MenuTabContainer>
    </Link>
  );
};

export default MenuTab;
