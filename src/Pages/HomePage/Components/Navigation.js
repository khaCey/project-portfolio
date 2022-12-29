import { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../../../context/NavContext";


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Nav = styled.nav`
    color: #878787;
    font-size: 1.25em;
    position: fixed;
    top: 5em;
    width: 95%;
    z-index: 10;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NavLink = styled.a`
    position: relative;
    padding: 0.25em;
    &:visited{
        color: #fca838;
    }
    &:link{
        color: #fca838;
    }
    &:hover{
        cursor: pointer;
    }
    &:not(.activeClass)::before{
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: #fca838;
        bottom: 0em;
        transform: scale(0, 1);
        transition: transform 0.25s ease;
        transform-origin: 0 100%;
    }
    
    &:not(.activeClass):hover::before{
        transform: scale(1, 1);
    }
    &.activeClass{
        color: #fca838;
    }
    &.activeClass::before{
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: #fca838;
        bottom: 0em;
    }
`;

const Navigation = () => {
    const { activeLinkID } = useContext(NavContext);
    console.log(activeLinkID);

    const navLinks = ["Introduction", "About", "Projects", "Contact"];
    const renderNavLink = (content) => {
        const scrollToID = `${content.toLowerCase()}`;
        const handleClickNav = () => {
            document.getElementById(scrollToID).scrollIntoView({behavior: "smooth"});
        }
        return (
            <Ul key={content}>
                <li><NavLink 
                    onClick={handleClickNav}
                    className={activeLinkID === content ? "activeClass" : ""}
                >{content}</NavLink></li>
            </Ul>
        );
    }

    return (
        <Container>
            <Nav>            
                {navLinks.map(nav => renderNavLink(nav))}
            </Nav>
        </Container>
        
    )
  }
  export default Navigation