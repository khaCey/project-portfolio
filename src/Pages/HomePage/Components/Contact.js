import styled from "styled-components";

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background: #171717;
    z-index: -1;
    overflow: hidden;
`;

const Vector1 = styled.div`  
    position: absolute;
    top:-250px; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: white;
    transform: rotate(-53.5deg) translate(-1200px, 450px);
    z-index: -5;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector2 = styled.div` 
    position: absolute;
    top:-250px; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(-53deg) translate(-1180px, 430px);
    z-index: -6;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector3 = styled.div` 
    position: absolute;
    top:-250px; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(-51.5deg) translate(-1160px, 410px);
    z-index: -7;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector4 = styled.div`   
    position: absolute;
    top:-250px; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(-51deg) translate(-1140px, 390px);
    z-index: -8;
    filter: drop-shadow(5px 1px 3px #000);
`;

const Vector5 = styled.div`
    position: absolute;
    top:-250px; 
    width: 100%;
    height: 150%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%);
    transform: rotate(-41deg) translate(-900px, 900px);
    z-index: -9;
    filter: drop-shadow(5px 1px 3px #000);
`;
const Projects = () => {

    return (
        <div id="contact">
            <Container>
                <Vector1></Vector1>
                <Vector2></Vector2>
                <Vector3></Vector3>
                <Vector4></Vector4>
                <Vector5></Vector5>
            </Container>
        </div>
    );
}
export default Projects