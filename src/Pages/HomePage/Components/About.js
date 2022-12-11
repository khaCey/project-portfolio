import styled from "styled-components";
import { SkillBar } from 'react-skillbars';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.75) inset;
    z-index: 3;
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

    return (
        <div id="about">
            <Container>
                <SkillContainer>
                    <SkillBar skills={skills} colors={colors} height={25}/>
                </SkillContainer>
            </Container>
        </div>
    );
}
export default Projects