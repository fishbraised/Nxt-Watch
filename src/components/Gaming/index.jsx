import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import GamingVideoItem from "../GamingVideoItem";

import {
  GamingContainer,
  ResponsiveContainer,
  MainContainer,
  CategoryContainer,
  IconContainer,
  CategoryHeading,
  MainContent,
  GamingVideoList,
  FailureContainer,
  FailureImage,
  FailureText,
  LoaderContainer,
} from "./StyledComponents";

import Cookies from "js-cookie";
import { SiYoutubegaming } from "react-icons/si";
import { PuffLoader } from "react-spinners";
import { Component } from "react";

import "./StyledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "INPROGRESS",
};

class Gaming extends Component {
  state = { apiStatus: apiStatusConstants.initial, videoData: [] };

  renderSuccessView = () => {
    const { videoData } = this.state;

    return (
      <MainContent>
        <GamingVideoList>
          {videoData.map((eachObj) => (
            <GamingVideoItem key={eachObj.id} gamingVideoInfo={eachObj} />
          ))}
        </GamingVideoList>
      </MainContent>
    );
  };

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742306194/Nxt%20Watch/error-picture.png" />
      <FailureText>An error in obtaining server data has occurred.</FailureText>
    </FailureContainer>
  );

  renderLoader = () => (
    <LoaderContainer>
      <PuffLoader size="100px" color="rgb(230, 48, 42)" />
    </LoaderContainer>
  );

  renderSwitch = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoader();
    }
  };

  getGamingVideosData = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const jwtToken = Cookies.get("jwt_token");
    const URL = `https://apis.ccbp.in/videos/gaming`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(URL, options);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const formattedVideoData = data.videos.map((eachObj) => ({
        id: eachObj.id,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }));

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formattedVideoData,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  componentDidMount() {
    this.getGamingVideosData();
  }

  render() {
    return (
      <GamingContainer>
        <Navbar />

        <ResponsiveContainer>
          <SidebarMenu />

          <MainContainer>
            <CategoryContainer>
              <IconContainer>
                <SiYoutubegaming color="rgb(230, 48, 42)" size="100%" />
              </IconContainer>

              <CategoryHeading>Gaming</CategoryHeading>
            </CategoryContainer>

            {this.renderSwitch()}
          </MainContainer>
        </ResponsiveContainer>
      </GamingContainer>
    );
  }
}

export default Gaming;
