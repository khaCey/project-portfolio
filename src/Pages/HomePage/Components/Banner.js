import styled from "styled-components";

const Construction = styled.div`
    color: white;
    width: 100%;
    position: fixed;
    z-index: 1000;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5em;
    background-color: rgba(255, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
    user-select: none;
`;

function Banner() {
  return (
    <Construction>
        Site is under construction.
    </Construction>
  )
}

export default Banner