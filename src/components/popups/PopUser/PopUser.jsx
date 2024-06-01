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
import {useUserContext} from "../../../contexts/user.js";

function PopUser() {

    const {user} = useUserContext();
    const [isVisible, setIsVisible] = useState(false);

    const onClick = () => {
        setIsVisible((prevState) => !prevState);
    }

    useEffect(() => {

    }, []);

    return(
        <div>
            <HeaderUserHover02 href="#user-set-target" onClick={onClick}>{user.name}</HeaderUserHover02>
            { isVisible && (
                    <HeaderPopUserSet id="user-set-target">
                        <PopUserSetName>{user.name}</PopUserSetName>
                        <PopUserSetMail>{user.login}</PopUserSetMail>
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