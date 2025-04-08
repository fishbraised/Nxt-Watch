import styled from "styled-components";

export const GamingContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(15, 15, 15);
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
  width: 81.5%;
  height: 84.5vh;
  overflow: auto;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25em 2.25em;
  background-color: rgb(33, 33, 33);
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
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
  padding: 3em 6em;
`;

export const GamingVideoList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  gap: 2em;
  list-style-type: none;

  > a {
    width: 30%;
    text-decoration: none;
  }
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 71.5vh;
`;

export const FailureImage = styled.img`
  width: 110px;
`;

export const FailureText = styled.p`
  color: rgb(251, 251, 250);
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 71.5vh;
`;
