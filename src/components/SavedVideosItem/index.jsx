import {
  SavedVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const SavedVideosItem = (props) => {
  const { savedVideoInfo } = props;
  const { channel, id, publishedAt, thumbnailUrl, title, viewCount } =
    savedVideoInfo;
  const { name, profileImageUrl } = channel;

  return (
    <Link to={`/videos/${id}`}>
      <SavedVideoItemContainer>
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
      </SavedVideoItemContainer>
    </Link>
  );
};

export default SavedVideosItem;
