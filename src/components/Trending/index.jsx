import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import TrendingVideoItem from "../TrendingVideoItem";

import {
  TrendingContainer,
  ResponsiveContainer,
  MainContainer,
  CategoryContainer,
  IconContainer,
  CategoryHeading,
  MainContent,
  TrendingVideoList,
} from "./StyledComponents";

import { HiFire } from "react-icons/hi";

import "./StyledComponents";

const Trending = () => {
  return (
    <TrendingContainer>
      <Navbar />

      <ResponsiveContainer>
        <SidebarMenu />

        <MainContainer>
          <CategoryContainer>
            <IconContainer>
              <HiFire color="rgb(230, 48, 42)" size="100%" />
            </IconContainer>

            <CategoryHeading>Trending</CategoryHeading>
          </CategoryContainer>

          <MainContent>
            <TrendingVideoList>
              <TrendingVideoItem />
              <TrendingVideoItem />
              <TrendingVideoItem />
            </TrendingVideoList>
          </MainContent>
        </MainContainer>
      </ResponsiveContainer>
    </TrendingContainer>
  );
};

export default Trending;
