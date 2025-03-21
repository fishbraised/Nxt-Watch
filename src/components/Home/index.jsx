import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import PremiumBanner from "../PremiumBanner";
import HomeVideoItem from "../HomeVideoItem";

import {
  HomeContainer,
  ResponsiveContainer,
  MainContainer,
  MainContent,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideoList,
  FailureContainer,
  FailureImage,
  FailureText,
  LoaderContainer,
} from "./StyledComponents";

import Cookies from "js-cookie";

import { IoIosSearch } from "react-icons/io";
import { Component } from "react";
import { Watch } from "react-loader-spinner";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "INPROGRESS",
};

class Home extends Component {
  state = {
    searchValue: "",
    apiStatus: apiStatusConstants.initial,
    videoData: [],
    displayBanner: true,
  };

  closeBanner = () => {
    this.setState({ displayBanner: false });
  };

  conductSearch = (event) => {
    event.preventDefault();
    this.getVideoData();
  };

  updateSearchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  };

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

  renderSuccessView = () => {
    const { videoData } = this.state;

    return (
      <HomeVideoList>
        {videoData.map((eachObj) => (
          <HomeVideoItem key={eachObj.id} videoInfo={eachObj} />
        ))}
      </HomeVideoList>
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
      <Watch width="80px" height="80px" color="rgb(230, 48, 42)" />
    </LoaderContainer>
  );

  getVideoData = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const { searchValue } = this.state;
    const jwtToken = Cookies.get("jwt_token");

    const URL = `https://apis.ccbp.in/videos/all?search=${searchValue}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(URL, options);

    if (response.ok) {
      const data = await response.json();
      const formattedVideoData = data.videos.map((eachObj) => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        id: eachObj.id,
        publishedAt: eachObj.published_at,
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

  componentDidMount = () => {
    this.getVideoData();
  };

  render() {
    const { searchValue, displayBanner } = this.state;

    return (
      <HomeContainer>
        <Navbar />

        <ResponsiveContainer>
          <SidebarMenu />

          <MainContainer>
            {displayBanner && <PremiumBanner closeBanner={this.closeBanner} />}

            <MainContent>
              <SearchContainer onSubmit={this.conductSearch}>
                <SearchInput
                  onChange={this.updateSearchValue}
                  value={searchValue}
                  placeholder="Search"
                />

                <SearchButton type="submit">
                  <IoIosSearch color="rgb(96, 96, 96)" size="20px" />
                </SearchButton>
              </SearchContainer>

              {this.renderSwitch()}
            </MainContent>
          </MainContainer>
        </ResponsiveContainer>
      </HomeContainer>
    );
  }
}

export default Home;
