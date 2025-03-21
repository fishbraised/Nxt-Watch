import styled from "styled-components";

export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(15, 15, 15);
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
  height: 84.5vh;
  width: 81.5%;
  overflow: auto;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25em 2.25em;
  margin-right: 1em;
  background-color: rgb(33, 33, 33);
`;

export const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 1em;
  margin-right: 1.5em;
  border-radius: 50%;
  background-color: rgb(15, 15, 15);
`;

export const CategoryHeading = styled.h1`
  color: rgb(251, 251, 250);
  font-size: 2rem;
  font-family: "Roboto";
`;

export const MainContent = styled.div`
  padding: 1.125em 2.125em;
`;

export const TrendingVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
`;
