import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const MainContent = styled.div`
  padding: 2.125em;
`;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  height: 32.5px;
  width: 400px;
  border: 2px solid rgb(56, 56, 56);
  border-radius: 0.5em;
`;

export const SearchInput = styled.input`
  all: unset;

  width: 100%;
  padding: 0.5em 1.125em;
  color: rgb(251, 251, 250);
  font-size: 1.4rem;
  font-family: "Roboto";

  &:focus {
    outline: rgb(230, 48, 42);
    border-color: rgb(255, 0, 0);
    box-shadow: 0 0 12px rgba(255, 0, 0, 0.8);
  }
`;

export const SearchButton = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  border-left: 2px solid rgb(56, 56, 56);
  cursor: pointer;

  &:hover {
    background-color: rgba(130, 130, 130, 0.3);
  }
`;

export const HomeVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 2em;
  gap: 2em;
  list-style-type: none;
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 19vh;
`;
