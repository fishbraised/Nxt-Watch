import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import SavedVideosItem from "../SavedVideosItem";

import {
  SavedVideosContainer,
  ResponsiveContainer,
  MainContainer,
  CategoryContainer,
  IconContainer,
  CategoryHeading,
  MainContent,
  SavedVideosList,
} from "./StyledComponents";

import { MdOutlinePlaylistAdd } from "react-icons/md";

import VideosContext from "../../context/VideosContext.jsx";

import "./StyledComponents";

const SavedVideos = () => {
  return (
    <VideosContext.Consumer>
      {(value) => {
        const { savedVideos } = value;

        return (
          <SavedVideosContainer>
            <Navbar />

            <ResponsiveContainer>
              <SidebarMenu />

              <MainContainer>
                <CategoryContainer>
                  <IconContainer>
                    <MdOutlinePlaylistAdd
                      color="rgb(230, 48, 42)"
                      size="100%"
                    />
                  </IconContainer>

                  <CategoryHeading>Saved Videos</CategoryHeading>
                </CategoryContainer>

                <MainContent>
                  <SavedVideosList>
                    {savedVideos.map((eachObj) => (
                      <SavedVideosItem
                        key={eachObj.id}
                        savedVideoInfo={eachObj}
                      />
                    ))}
                  </SavedVideosList>
                </MainContent>
              </MainContainer>
            </ResponsiveContainer>
          </SavedVideosContainer>
        );
      }}
    </VideosContext.Consumer>
  );
};

export default SavedVideos;
