import {
  GamingVideoItemContainer,
  ThumbnailImage,
  InfoContainer,
  VideoTitle,
  ViewsDateText,
} from "./StyledComponents";

import { Link } from "react-router-dom";

const GamingVideoItem = (props) => {
  const { gamingVideoInfo } = props;
  const { id, thumbnailUrl, title, viewCount } = gamingVideoInfo;

  return (
    <Link to={`/videos/${id}`}>
      <GamingVideoItemContainer>
        <ThumbnailImage src={thumbnailUrl} />

        <InfoContainer>
          <VideoTitle>{title}</VideoTitle>

          <ViewsDateText>{viewCount} Watching Worldwide</ViewsDateText>
        </InfoContainer>
      </GamingVideoItemContainer>
    </Link>
  );
};

export default GamingVideoItem;
