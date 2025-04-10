import {
  TrendingVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const TrendingVideoItem = (props) => {
  const { trendingVideoInfo } = props;
  const { channel, id, publishedAt, thumbnailUrl, title, viewCount } =
    trendingVideoInfo;
  const { name, profileImageUrl } = channel;

  return (
    <Link to={`/videos/${id}`}>
      <TrendingVideoItemContainer>
        <ThumbnailImage src={thumbnailUrl} />

        <InfoContainer>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name}</ChannelName>

          <ViewsDateContainer>
            <ViewsDateText>{viewCount} views</ViewsDateText>
            <ViewsDateText>•</ViewsDateText>
            <ViewsDateText>{publishedAt}</ViewsDateText>
          </ViewsDateContainer>
        </InfoContainer>
      </TrendingVideoItemContainer>
    </Link>
  );
};

export default TrendingVideoItem;
