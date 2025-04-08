import styled from "styled-components";

export const GamingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2em;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const VideoTitle = styled.p`
  margin: 0;
  margin-top: 1em;
  color: rgb(251, 251, 250);
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const ViewsDateText = styled.p`
  margin: 0;
  margin-top: 0.5em;
  color: rgb(148, 163, 184);
  font-size: 1.2rem;
  font-family: "Roboto";
`;
