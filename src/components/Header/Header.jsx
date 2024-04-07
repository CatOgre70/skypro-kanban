import PopUser from "../popups/PopUser/PopUser.jsx";

function Header({onCardAdd}) {
    return (<header className="header">
                  <div className="container">
                      <div className="header__block">
                          <div className="header__logo _show _light">
                              <a href="" target="_self"><img src="/logo.png" alt="logo"/></a>
                          </div>
                          <div className="header__logo _dark">
                              <a href="" target="_self"><img src="/logo_dark.png" alt="logo"/></a>
                          </div>
                          <nav className="header__nav">
                              <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={onCardAdd}>
                                  <a>Создать новую задачу</a>
                              </button>
                              <PopUser />
                          </nav>
                      </div>
                  </div>
              </header>);
}

export default Header;