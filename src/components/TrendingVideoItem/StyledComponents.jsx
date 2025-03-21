import styled from "styled-components";

export const TrendingVideoItemContainer = styled.li`
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
  margin: 0;
  margin: 0.6em 0;
  color: rgb(148, 163, 184);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewsText = styled.p`
  margin: 0;
  color: rgb(148, 163, 184);
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const DateText = styled.p`
  margin: 0;
  color: rgb(148, 163, 184);
  font-size: 1.4rem;
  font-family: "Roboto";
`;
