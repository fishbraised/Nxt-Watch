import styled from "styled-components";

export const SavedVideoItemContainer = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 2em;
`;

export const ThumbnailImage = styled.img`
  width: 31%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 69%;
  padding: 1em 2em;
`;

export const VideoTitle = styled.p`
  margin: 0;
  color: rgb(251, 251, 250);
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const ChannelName = styled.p`
  margin: 0.6em 0;
  color: rgb(148, 163, 184);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const ViewsDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`;

export const ViewsDateText = styled.p`
  margin: 0;
  color: rgb(148, 163, 184);
  font-size: 1.4rem;
  font-family: "Roboto";
`;
