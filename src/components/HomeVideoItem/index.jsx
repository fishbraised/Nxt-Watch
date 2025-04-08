import {
  HomeVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  ChannelProfile,
  TextInfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const HomeVideoItem = (props) => {
  const { videoInfo } = props;
  const { channel, id, publishedAt, thumbnailUrl, title, viewCount } =
    videoInfo;
  const { name, profileImageUrl } = channel;

  return (
    <Link to={`/videos/${id}`}>
      <HomeVideoItemContainer>
        <ThumbnailImage src={thumbnailUrl} />

        <InfoContainer>
          <ChannelProfile src={profileImageUrl} />

          <TextInfoContainer>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>

            <ViewsDateContainer>
              <ViewsDateText>{viewCount} views</ViewsDateText>
              <ViewsDateText>•</ViewsDateText>
              <ViewsDateText>{publishedAt}</ViewsDateText>
            </ViewsDateContainer>
          </TextInfoContainer>
        </InfoContainer>
      </HomeVideoItemContainer>
    </Link>
  );
};

export default HomeVideoItem;
