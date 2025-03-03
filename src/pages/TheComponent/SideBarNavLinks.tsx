import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 2px 10px;
  border-radius: 10px;
  &:hover {
    background-color: #ffffff24;
  }
  &:active {
    background-color: #ffffff;
    color: #4297ff;
    transition: all 0.4s ease;
  }
`;
const Icon = styled.div`
margin-right:14px;



`;

const SideBarBtns = ({ to, icon, title }) => {
  return (
    <li>
      <StyledNavLink 
      strict="true" 
      to={{
       pathname:  to
      }}
      >
        {icon} {title}
      </StyledNavLink>
    </li>
  );
};

export default SideBarBtns;