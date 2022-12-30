import styled, { css } from "styled-components";
import { SkillBar } from 'react-skillbars';
import { useNav } from "../../../hooks/useNav";
import { useState, useEffect } from "react";

const OuterContainer = styled.div`
    height: 105vh;
    width: 100%;
    background: #171717;
    position: relative;
`;

const Container = styled.div`
    height: 105vh;
    width: 100%;
    background: #171717;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.75) inset;
    position: relative;
    ${props => props.fixed && css`
        position: fixed;
        top: 0;
    `};
`;

const SkillContainer = styled.div`
    width: 75%;
`;

const skills = [
    {type: 'HTML5',             level: 75},
    {type: 'JavaScript',        level: 75},
    {type: 'PHP',               level: 75},
    {type: 'SQL',               level: 85},
    {type: 'Node.JS',           level: 70},
    {type: 'React.JS',          level: 65},
    {type: "API's",             level: 85},
    {type: 'CPanel',            level: 70},
    {type: 'WordPress',         level: 65},
    {type: 'Heroku',            level: 65},
    {type: 'AWS',               level: 65},
    {type: 'MS Office',         level: 65}
]
const colors = {
    bar: "black",
    title: {
      text: "white",
      background: "black"
    }
};
const Projects = () => {
    const aboutRef = useNav("About");
    const [fixedPosition, setFixedPosition] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setFixedPosition(window.scrollY > window.innerHeight);
        }
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div ref={aboutRef}id="about">
            <OuterContainer>
                <Container fixed={fixedPosition}>
                    <SkillContainer>
                        <SkillBar skills={skills} colors={colors} height={25}/>
                    </SkillContainer>
                </Container>
            </OuterContainer>
        </div>
    );
}
export default Projects