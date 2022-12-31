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
    align-items: center;
    user-select: none;
`;
const I = styled.div`
  border-radius: 50%;
  color: black;
  font-size: 0.75em;
  width: 1em;
  height: 1em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
`;
function Banner() {
  return (
    <Construction>
      <I>i</I>Site is under construction.
    </Construction>
  )
}

export default Banner