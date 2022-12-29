import styled from "styled-components";
import background from "../../../assets/Background.png";
import { useNav } from "../../../hooks/useNav";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #282c34;
    z-index: 0;
`;

const IntroContainer = styled.div` 
    position: absolute;
    top: 0;
    outline: 1px solid white;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;
    background-position: left;
    z-index: 0;
`;

const Div = styled.div`
    width: 85%;
    height: 100vh;
    padding-top: 7em;
    color: #878787;
    font-size: 1.25em;
    display: flex;
    justify-content: flex-end;
`;

const TextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(0, 50px);
`;




const Introduction = () => {
    const introRef = useNav("Introduction");
    return (
        <div ref={introRef} id="introduction">
            <Container>
                <IntroContainer>
                    <Div>
                        <TextContainer>
                        </TextContainer>
                    </Div>
                </IntroContainer>
            </Container>
        </div>
    );
}
export default Introduction