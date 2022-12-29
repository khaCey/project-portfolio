import styled from "styled-components";
import { useNav } from "../../../hooks/useNav";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #282c34;
    z-index: 2;
    overflow: hidden;
`;
const Projects = () => {
    const projectRef = useNav("Projects");
    return (
        <div ref={projectRef} id="projects">
            <Container>
            </Container>
        </div>
    );
}
export default Projects