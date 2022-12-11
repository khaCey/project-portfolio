import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 3;
    overflow: hidden;
    box-shadow: 10px 10px 64px -4px rgba(0,0,0,1) inset;
    -webkit-box-shadow: 10px 10px 64px -4px rgba(0,0,0,1) inset;
    -moz-box-shadow: 10px 10px 64px -4px rgba(0,0,0,1) inset;
`;
const VectorContainerA = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(35deg) translate(-69.25vh, 55vh);
`;

const VectorContainerAA = styled.div`
    width: 50%;
    height: 80vh;
    position: relative;
    display: flex;
    overflow: hidden;
    box-shadow: 10px 10px 20px 16px rgba(0,0,0,0.5);
    -webkit-box-shadow: 10px 10px 20px 16px rgba(0,0,0,0.5);
    -moz-box-shadow: 10px 10px 20px 16px rgba(0,0,0,0.5);
`;

const VectorA1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgb(245,113,41);
    background: linear-gradient(0deg, rgba(245,113,41,1) 0%, rgba(225,140,49,1) 100%);
`;
const VectorA2= styled.div`
    position: absolute;
    width: 100%;
    height: 120vh;
    background: rgb(178,96,40);
    background: linear-gradient(0deg, rgba(252,164,58,1) 0%, rgba(252,164,58,1) 50%, rgba(178,96,40,1) 100%);
    transform: rotate(15deg) translate(-17.1vh, -10vh);
`;

const VectorContainerB = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(65deg) translate(-149.1vh, -40vh);
`;

const VectorContainerBA = styled.div`
    width: 50%;
    height: 200vh;
    position: relative;
    display: flex;
    overflow: hidden;
    box-shadow: 10px 10px 50px 50px rgba(0,0,0,0.49);
    -webkit-box-shadow: 10px 10px 50px 50px rgba(0,0,0,0.49);
    -moz-box-shadow: 10px 10px 50px 50px rgba(0,0,0,0.49);
`;

const VectorB1 = styled.div`
    position: absolute;
    width: 100%;
    height: 200vh;
    background: #17325d;
`;
const VectorB2= styled.div`
    position: absolute;
    width: 100%;
    height: 220vh;
    background: #112a50;
    transform: rotate(7deg) translate(-13.9vh, -10vh);
`;

const VectorContainerA1 = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(50deg) translate(-235.4vh, -77vh);
`;
const VectorContainerB1 = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(75deg) translate(-363.5vh, -63.5vh);
`;
const Vector = () => {

    return (
        <>
        <Container>
        </Container>
            <VectorContainerA>
                <VectorContainerAA>
                    <VectorA1></VectorA1>
                    <VectorA2></VectorA2>
                </VectorContainerAA>
            </VectorContainerA>
            <VectorContainerB>
                <VectorContainerBA>
                    <VectorB1></VectorB1>
                </VectorContainerBA>
            </VectorContainerB>
            <VectorContainerA1>
                <VectorContainerAA>
                    <VectorA1></VectorA1>
                    <VectorA2></VectorA2>
                </VectorContainerAA>
            </VectorContainerA1>
            <VectorContainerB1>
                <VectorContainerBA>
                    <VectorB1></VectorB1>
                    <VectorB2></VectorB2>
                </VectorContainerBA>
            </VectorContainerB1>
        </>
    );
}
export default Vector;