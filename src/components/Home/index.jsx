import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import { HomeContainer, HomeContent, MainContainer } from "./StyledComponents";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Navbar />
        <SidebarMenu />

        <MainContainer></MainContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
