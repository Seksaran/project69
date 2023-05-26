import styled from "@emotion/styled";
import { NavLink as BaseNavLink } from "react-router-dom";

export const WrapperSidebar = styled.div`
    width: 257px;
    background-color: #c2d9bd;
    padding: 40px 20px;
    height: 100vh;
    position: fixed;
`;

export const ButtonNav = styled(BaseNavLink)`
display: inline-block;
width: 100%;
height: 50px;
background-color: #ffffff;
border-radius: 24px;
transition: 3ms;
padding: 0px;
font-size: 17px;
cursor: pointer;
color: #000000;
margin-bottom: 25px;
border: 1px solid #000000;
&:hover {
    background-color: #ffffffe5;
}
&.active{
    background-color: #ffffff;
    border: 1px solid red;
    color: red;
}
`;