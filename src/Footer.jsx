import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1200px;  /* ✅ 限制最大寬度 */
  margin: auto;
  background-color: hsl(0, 0%, 50%);
  text-align: center;
  padding: 10px 20px; /* ✅ 增加 padding，讓內容不會緊貼邊界 */
  border-radius: 5px; /* ✅ 讓 footer 角落更圓潤 */
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center; /* ✅ 讓連結置中 */
  gap: 20px; /* ✅ 增加間距，取代 margin-right */
  flex-wrap: wrap; /* ✅ 手機版換行 */
  padding-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: hsl(0, 100%, 40%);
  }
`;

const FooterText = styled.p`
  color: white;
  font-size: 14px; /* ✅ 讓版權聲明更小，避免影響視覺 */
`;

function Footer() {
  return (
    <StyledFooter>
      <NavLinks>
        <StyledLink to="/">首頁</StyledLink>
        <StyledLink to="/shopping">手機商場</StyledLink>
        <StyledLink to="/phonelease">手機租借</StyledLink>
        <StyledLink to="/contact-us">聯絡我們</StyledLink>
      </NavLinks>
      <FooterText>版權所有 © 2024</FooterText>
    </StyledFooter>
  );
}

export default Footer;
