import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar></HeaderAvatar>
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="search #PAPA_FAM" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  background-color: var(--slack-color);
  color: #fff;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  opacity: 1;
  flex: 0.4;
  display: flex;
  color: gray;
  padding: 0 50px;
  border-radius: 6px;
  border: 1px solid gray;
  text-align: center;
  background-color: #421f44;

  > input {
    background-color: transparent;
    outline: none;
    border: 0;
    color: white;
    min-width: 30vh;
    text-align: center;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
