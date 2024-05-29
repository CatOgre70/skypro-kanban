import {useEffect, useState} from "react";
import {
    HeaderPopUserSet,
    HeaderUserHover02, PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme
} from "./PopUser.styled.js";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../data.js";
import {
    getUserDataFromLocalStorage,
    setUserGlobalData, userGlobalData,
} from "../../../localstorageops.js";

function PopUser() {

    const [isVisible, setIsVisible] = useState(false);
    const [localToken, setLocalToken] = useState("");
    const [localName, setLocalName] = useState("");
    const [localLogin, setLocalLogin] = useState("");

    // const [userLocalData, setUserLocalData] = useState(userGlobalData);

    // Вот тут вообще непонятно, как сделать перерисовку компонета при смене пользователя
    useEffect(() => {
       const userData = getUserDataFromLocalStorage();
       console.log(userData);
       setLocalToken(() => userData.token);
       setLocalName(() => userData.name);
       setLocalLogin(() => userData.login);
       setUserGlobalData(userData);
       console.log(userGlobalData);
    }, [localToken, localName, localLogin]);
    // Конец непоняток

    const onClick = () => {
        setIsVisible((prevState) => !prevState);
    }

    return(
        <div>
            <HeaderUserHover02 href="#user-set-target" onClick={onClick}>{localName}</HeaderUserHover02>
            { isVisible && (
                    <HeaderPopUserSet id="user-set-target">
                        <PopUserSetName>{localName}</PopUserSetName>
                        <PopUserSetMail>{localLogin}</PopUserSetMail>
                        <PopUserSetTheme>
                            <p>Темная тема</p>
                            <input type="checkbox" name="checkbox"/>
                        </PopUserSetTheme>
                        <PopUserSetButton type="button"><Link to={AppRoutes.LOGOUT}>Выйти</Link></PopUserSetButton>
                    </HeaderPopUserSet>
                )
            }
        </div>
    );
}

export default PopUser;