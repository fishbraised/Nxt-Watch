import {
  VideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  ChannelProfile,
  TextInfoContainer,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewsText,
  DateText,
} from "./StyledComponents";

const VideoItem = (props) => {
  const { videoInfo } = props;
  const { channel, publishedAt, thumbnailUrl, title, viewCount } = videoInfo;
  const { name, profileImageUrl } = channel;

  return (
    <VideoItemContainer>
      <ThumbnailImage src={thumbnailUrl} />

      <InfoContainer>
        <ChannelProfile src={profileImageUrl} />

        <TextInfoContainer>
          <VideoTitle>{title}</VideoTitle>

          <ChannelName>{name}</ChannelName>

          <ViewsDateContainer>
            <ViewsText>{viewCount}</ViewsText>
            <DateText> • {publishedAt}</DateText>
          </ViewsDateContainer>
        </TextInfoContainer>
      </InfoContainer>
    </VideoItemContainer>
  );
};

export default VideoItem;
