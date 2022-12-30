import styled from "styled-components";
import background from "../../../assets/Background.png";
import { useNav } from "../../../hooks/useNav";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #282c34;
`;

const IntroContainer = styled.div` 
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;
    background-position: left;
    position: fixed;
`;

const Div = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.p`
    user-select: none;
    font-family: 'Lovers Quarrel', cursive;
    font-size: 15em;
    color: white;
    &:hover{
        cursor: pointer;
    }
`;
const H2 = styled.p`
    user-select: none;
    font-family: 'Roboto Mono', monospace;
    font-size: 2em;
    color: white;
    transform: translate(-1em, -10em);
`;



const Introduction = () => {
    const introRef = useNav("Introduction");
    return (
        <div ref={introRef} id="introduction">
            <Container>
                <IntroContainer>
                    <Div>
                        <TextContainer>
                            <H1>Khacey</H1>
                            <H2>Web Developer</H2>
                        </TextContainer>
                    </Div>
                </IntroContainer>
            </Container>
        </div>
    );
}
export default Introduction