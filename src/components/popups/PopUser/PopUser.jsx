import {useContext, useState} from "react";
import {
    HeaderPopUserSet,
    HeaderUserHover02, PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme
} from "./PopUser.styled.js";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../data.js";
import {UserContext} from "../../../contexts/user.js";

function PopUser() {

    const {user} = useContext(UserContext);
    const [isVisible, setIsVisible] = useState(false);

    const onClick = () => {
        setIsVisible((prevState) => !prevState);
    }

    return(
        <div>
            <HeaderUserHover02 href="#user-set-target" onClick={onClick}>{user == null ? "" : user.name}</HeaderUserHover02>
            { isVisible && (
                    <HeaderPopUserSet id="user-set-target">
                        <PopUserSetName>{user == null ? "" : user.name}</PopUserSetName>
                        <PopUserSetMail>{user == null ? "" : user.login}</PopUserSetMail>
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