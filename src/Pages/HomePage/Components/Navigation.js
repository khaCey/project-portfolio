import styled from "styled-components";

const Nav = styled.nav`
    color: #878787;
    font-size: 1.25em;
    position: fixed;
    top: 5em;
    width: 100%;
    z-index: 10;
    user-select: none;
`;

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: end;
    gap: 2.5em;
    margin-right: 10em;
`;

const NavLink = styled.a`
    padding: 0.25em;
    &:visited{
        color: #fca838;
        text-decoration: none;
    }
    &:link{
        color: #fca838;
        text-decoration: none;
    }
    &:hover{
        color: #d38533;
        text-decoration: none;
        border-bottom: 1px solid #d38533;
    }
`;
const Navigation = () => {
   
    return (
      <Nav>
        <Ul>
            <li><NavLink href="#intro">Introduction</NavLink></li>
            <li><NavLink href="#about">About</NavLink></li>
            <li><NavLink href="#projects">Projects</NavLink></li>
            <li><NavLink href="#contact">Contact</NavLink></li>
        </Ul>
      </Nav>
    );
  }
  export default Navigation