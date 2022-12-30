import styled from "styled-components";
import Navigation from './Components/Navigation.js';
import Introduction from './Components/Introduction.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import NavProvider from "../../context/NavContext.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";

const Div = styled.div`
  display : flex;
  flex-direction: column;
`;
function Home() {
  
  return (
    <Div>
      <Banner/>
      <NavProvider>
        <Navigation/>
        <Introduction/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </NavProvider>
    </Div>
  );
}

export default Home;
