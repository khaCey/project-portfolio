import styled from "styled-components";
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBModalDialog,
    MDBModalContent,
  } from 'mdb-react-ui-kit';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #282c34;
    z-index: 3;
`;
const Projects = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

    return (
        <div id="projects">
            <Container>
        
            </Container>
        </div>
    );
}
export default Projects