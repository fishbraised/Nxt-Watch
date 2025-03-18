import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import PremiumBanner from "../PremiumBanner";
import VideoItem from "../VideoItem";

import {
  HomeContainer,
  HomeContent,
  ResponsiveContainer,
  MainContainer,
  MainContentContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideoList,
} from "./StyledComponents";

import Cookies from "js-cookie";

import { IoIosSearch } from "react-icons/io";
import { Component } from "react";

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
      <VideoList>
        {videoData.map((eachObj) => (
          <VideoItem key={eachObj.id} videoInfo={eachObj} />
        ))}
      </VideoList>
    );
  };

  renderFailureView = () => {
    console.log("Failure.");
  };

  renderLoader = () => {
    console.log("Loading");
  };

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
    const data = await response.json();

    console.log(response);
    console.log(data);

    if (response.ok) {
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

      console.log("Format: ", formattedVideoData);

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
    const { searchValue } = this.state;

    return (
      <HomeContainer>
        <HomeContent>
          <Navbar />

          <ResponsiveContainer>
            <SidebarMenu />

            <MainContainer>
              <PremiumBanner />

              <MainContentContainer>
                <SearchContainer>
                  <SearchInput
                    onChange={this.updateSearchValue}
                    value={searchValue}
                    placeholder="Search"
                  />

                  <SearchButton>
                    <IoIosSearch color="rgb(96, 96, 96)" size="20px" />
                  </SearchButton>
                </SearchContainer>

                {this.renderSwitch()}
              </MainContentContainer>
            </MainContainer>
          </ResponsiveContainer>
        </HomeContent>
      </HomeContainer>
    );
  }
}

export default Home;
