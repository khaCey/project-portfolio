import styled from "styled-components";
import Vector from "./Vectors/Vector";

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

const Title = styled.h2`
    position: relative;
    top: -55px;
`;


const Introduction = () => {

    return (
        <div id="intro">
            <Container>
                <Vector></Vector>
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