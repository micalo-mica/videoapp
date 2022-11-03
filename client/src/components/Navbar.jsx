import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openSideBar, closeSideBar } from "../redux/toggleSlice";
import Tube from "../img/logo.png";
import Upload from "./Upload";
import AppsIcon from "@mui/icons-material/Apps";
import WidgetsIcon from "@mui/icons-material/Widgets";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  width: 100%;
  z-index: 999;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
  position: relative;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    padding: 0px 5px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  gap: 5px;
  font-weight: bold;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const MenuBar = styled.div`
  margin-right: 5px;
  display: none;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: block;
  }
`;

const Img = styled.img`
  height: 25px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Search = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    padding: 5px 5px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-style: 8px;
    font-weight: 300;
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const ToggleBtn = styled.button``;

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const openS = () => {
    dispatch(openSideBar());
  };
  const closeS = () => {
    dispatch(closeSideBar());
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <MenuBar>
              {!isOpen ? (
                <ToggleBtn onClick={openS}>
                  <AppsIcon />
                </ToggleBtn>
              ) : (
                <ToggleBtn onClick={closeS}>
                  <WidgetsIcon />
                </ToggleBtn>
              )}
            </MenuBar>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Img src={Tube} />
            </Link>
          </Logo>

          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
          </Search>

          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {/* {isOpen && <Aside />} */}
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
