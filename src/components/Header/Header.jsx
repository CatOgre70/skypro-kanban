import PopUser from "../popups/PopUser/PopUser.jsx";
import {
    HeaderBlock, HeaderBtnMainNewA,
    HeaderBtnMainNewHover01,
    HeaderContainer,
    HeaderLogoDark,
    HeaderLogoImg,
    HeaderNav,
    HeaderStyled
} from "./Header.styled.js";

const Header = ({onCardAdd}) => (
    <HeaderStyled>
        <HeaderContainer>
            <HeaderBlock>
                <div className="header__logo _show _light">
                    <a href="" target="_self"><HeaderLogoImg src="/logo.png" alt="logo"/></a>
                </div>
                <HeaderLogoDark>
                    <a href="" target="_self"><HeaderLogoImg src="/logo_dark.png" alt="logo"/></a>
                </HeaderLogoDark>
                <HeaderNav>
                    <HeaderBtnMainNewHover01 id="btnMainNew" onClick={onCardAdd}>
                        <HeaderBtnMainNewA>Создать новую задачу</HeaderBtnMainNewA>
                    </HeaderBtnMainNewHover01>
                    <PopUser />
                </HeaderNav>
            </HeaderBlock>
        </HeaderContainer>
    </HeaderStyled>
)

export default Header;