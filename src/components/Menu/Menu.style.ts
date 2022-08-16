import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const MenuContainer = styled.div``;

export const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
    display: flex;
`;

export const MenuItem = styled.div`
    padding: 15px;
    display: flex;
    & svg + div {
        margin-left: 10px;
        line-height: 20px;
    }

    & .active {
        color: red;
    }
`;
