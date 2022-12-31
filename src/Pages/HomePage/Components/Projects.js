import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useNav } from "../../../hooks/useNav";
import MiseBackground from "../../../assets/Mise.png";

const OuterContainer = styled.div`
    height: 110vh;
    width: 100%;
    background: #282c34;
    position: relative;
`;

const Container = styled.div`
    height: 110vh;
    width: 100%;
    background: #282c34;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props => props.fixed && css`
        position: fixed;
        top: 0;
    `};
`;

const Gallery = styled.ul`
    min-width: 65%;
    max-width: 75%;
    height: 69%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1em;
`;

const GalleryItem = styled.li`
    width: 18em;
    height: 9em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    color: #fca838;
    cursor: pointer;
    -webkit-border-top-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-topright: 10px;
    -moz-border-radius-bottomleft: px;10
    border-top-right-radius: 10px
    border-bottom-left-radius: 10px;
    &:hover{
        transform: translate(0, -1.25em);
        transition: transform 0.5s ease;
    }
    &:hover .label{
        color: #fca838;
        transform: translate(0, 3.25em);
        transition: transform 0.5s ease;
    }
`;
const ItemLink = styled.a`
    height: 100%;
    width: 100%;
    -webkit-border-top-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-topright: 10px;
    -moz-border-radius-bottomleft: px;10
    border-top-right-radius: 10px
    border-bottom-left-radius: 10px;
    z-index: 1;
    background-size: cover;
    background-position: center;
`;
const Label = styled.h3`
    font-family: 'Roboto Mono', monospace;
    color:  #fca838;
    position: fixed;
    z-index: 0;
`;

const Projects = () => {
    const projectRef = useNav("Projects");
    const [fixedPosition, setFixedPosition] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setFixedPosition(window.scrollY > (window.innerHeight * 2) );
        }
        window.addEventListener("scroll", handleScroll);
    }, []);
    const galleryItems = [
        {
            "name" : "Mise", 
            "link" : "https://khaceyslanaitheoir.com",
            "background" : MiseBackground
        },
        {
            "name" : "Scoile", 
            "link" : "",
            "icon" : ""
        },
        {
            "name" : "UXUI", 
            "link" : "",
            "icon" : ""
        },
        {
            "name" : "Project-L", 
            "link" : "",
            "icon" : ""
        },
        {
            "name" : "Project-Beta", 
            "link" : "",
            "icon" : ""
        },
        {
            "name" : "Project-Alpha", 
            "link" : "",
            "icon" : ""
        },
        {
            "name" : "Project-Lambda", 
            "link" : "",
            "icon" : ""
        }
    ];
    const renderGalleryItems = (content) => {
        return (
            <>
            <GalleryItem>
                <ItemLink href={content.link} className="labelLink" style={{ backgroundImage: 'url('+ content.background + ')' }}>
                </ItemLink>
                <Label className="label">
                    {content.name}
                </Label>
            </GalleryItem>
            </>
        );
    }
    return (
        <div ref={projectRef} id="projects">
            <OuterContainer>
                <Container fixed={fixedPosition}>
                    <Gallery>
                        {galleryItems.map(nav => renderGalleryItems(nav))}
                    </Gallery>
                </Container>
            </OuterContainer>
        </div>
    );
}
export default Projects