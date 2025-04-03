import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react"; // ✅ 加入 useState 來控制漢堡選單

const NavbarContainer = styled.nav`
  width: 100%;
  max-width: 1200px; /* ✅ 限制最大寬度 */
  margin: auto; /* ✅ 讓 Navbar 置中 */
  background-color: blue;
  display: flex;
  justify-content: center; /* ✅ 讓內容在電腦版置中 */
  align-items: center;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")}; /* ✅ 手機版預設隱藏 */
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%); /* ✅ 手機版也置中 */
    width: 80%;
    background-color: rgba(0, 0, 255, 0.9);
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;

  &:hover {
    color: hsl(0, 100%, 40%);
  }
`;

const MenuButton = styled.div`
  display: none; /* ✅ 預設隱藏 */
  font-size: 24px;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block; /* ✅ 手機版顯示 */
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
      <NavLinks open={menuOpen}>
        <StyledLink to="/">首頁</StyledLink>
        <StyledLink to="/shopping">手機商場</StyledLink>
        <StyledLink to="/phonelease">手機租借</StyledLink>
        <StyledLink to="/contact-us">聯絡我們</StyledLink>
        <StyledLink to="/login">會員登入</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
