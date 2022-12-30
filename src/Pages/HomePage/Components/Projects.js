import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useNav } from "../../../hooks/useNav";

const OuterContainer = styled.div`
    height: 105vh;
    width: 100%;
    background: #282c34;
    position: relative;
`;

const Container = styled.div`
    height: 105vh;
    width: 100%;
    background: #282c34;
    display: flex;
    position: relative;
    ${props => props.fixed && css`
    position: fixed;
    top: 0;
    `};
`;

const Projects = () => {
    const projectRef = useNav("Projects");
    const [fixedPosition, setFixedPosition] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setFixedPosition(window.scrollY > (window.innerHeight * 2) );
        }
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div ref={projectRef} id="projects">
            <OuterContainer>
                <Container fixed={fixedPosition}>

                </Container>
            </OuterContainer>
        </div>
    );
}
export default Projects