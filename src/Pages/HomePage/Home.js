import styled from "styled-components";
import Navigation from './Components/Navigation.js';
import Introduction from './Components/Introduction.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';

const Div = styled.div`
  display : flex;
  flex-direction: column;
`;
function Home() {
  
  return (
    <Div>
      <Navigation></Navigation>
      
      <Introduction></Introduction>
      
      <About></About>

      <Projects></Projects>

      <Contact></Contact>
    </Div>
  );
}

export default Home;
