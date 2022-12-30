import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useNav } from "../../../hooks/useNav";

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
    border: 1px solid #878787;
    background-color: #878787;
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
    box-shadow: 10px 30px 24px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
    &:hover{
        transform: translate(0, -1.25em);
        transition: transform 0.5s ease;
        box-shadow: 10px 30px 24px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 30px 24px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 30px 24px 0px rgba(0,0,0,0.75);
    }
    &:hover .label{
        color: #fca838;
        transform: translate(0, 3.25em);
        transition: transform 0.5s ease;
    }
`;
const ItemLink = styled.a`
    outline: 1px solid white;
    height: 100%;
    width: 100%;
    background-color: white;
    -webkit-border-top-right-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-topright: 10px;
    -moz-border-radius-bottomleft: px;10
    border-top-right-radius: 10px
    border-bottom-left-radius: 10px;
    z-index: 1;
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
            "link" : "https://api.khaceyslanaitheoir.com",
            "icon" : ""
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
                <ItemLink href={content.link} className="labelLink">
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