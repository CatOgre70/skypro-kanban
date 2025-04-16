import PopUser from "../popups/PopUser/PopUser.jsx";
import {
  HeaderBlock,
  HeaderBtnMainNewHover01,
  HeaderContainer,
  HeaderLogoDark,
  HeaderLogoImg,
  HeaderNav,
  HeaderStyled,
} from "./Header.styled.js";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../data.js";

const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(AppRoutes.ADD_NEW_CARD);
  }

  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <HeaderLogoImg src="/logo.png" alt="logo" />
            </a>
          </div>
          <HeaderLogoDark>
            <a href="" target="_self">
              <HeaderLogoImg src="/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMainNewHover01 onClick={handleClick}>
              Создать новую задачу
            </HeaderBtnMainNewHover01>
            <PopUser />
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
