import {
  TrendingVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsText,
  DateText,
} from "./StyledComponents";

const TrendingVideoItem = () => {
  return (
    <TrendingVideoItemContainer>
      <ThumbnailImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png" />

      <InfoContainer>
        <VideoTitle>iB Hubs Announcement Event</VideoTitle>
        <ChannelName>IB Hubs</ChannelName>

        <ViewsDateContainer>
          <ViewsText>26K views</ViewsText>
          <DateText>&nbsp;• Nov 29, 2016</DateText>
        </ViewsDateContainer>
      </InfoContainer>
    </TrendingVideoItemContainer>
  );
};

export default TrendingVideoItem;
