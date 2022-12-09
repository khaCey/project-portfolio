import styled from "styled-components";
import khacey from "../../../assets/khacey.svg"

const Container = styled.div` 
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Div = styled.div`
    position: fixed;
    width: 85%;
    height: 100vh;
    padding-top: 7em;
    color: #878787;
    font-size: 1.25em;
    display: flex;
    justify-content: flex-end;
    z-index: -1;
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
const VectorContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 1080px;
    overflow: hidden;
    z-index: -1;
`;

const Vector1 = styled.div`  
    position: fixed;
    top:0;
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: white;
    transform: rotate(36.5deg) translate(-1200px, 450px);
    z-index: -5;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector2 = styled.div` 
    position: fixed;
    top:0;
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(37deg) translate(-1180px, 430px);
    z-index: -6;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector3 = styled.div` 
    position: fixed;
    top:0; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(38.5deg) translate(-1160px, 410px);
    z-index: -7;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector4 = styled.div`   
    position: fixed;
    top:0; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(39deg) translate(-1140px, 390px);
    z-index: -8;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector5 = styled.div`
    position: fixed;
    top:0; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(49deg) translate(-900px, 900px);
    z-index: -9;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Introduction = () => {

    return (
        <div id="intro">
            <Container>
                <VectorContainer>
                    <Vector1></Vector1>
                    <Vector2></Vector2>
                    <Vector3></Vector3>
                    <Vector4></Vector4>
                    <Vector5></Vector5>
                </VectorContainer>
                <Div>
                    <TextContainer>
                        <h1>Khacey Salvador</h1>
                        <Title>Web Developer</Title>
                    </TextContainer>
                </Div>
            </Container>
        </div>
    );
}
export default Introduction