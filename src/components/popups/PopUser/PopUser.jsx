import {useContext, useState} from "react";
import {
    HeaderPopUserSet,
    HeaderUserHover02, PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
} from "./PopUser.styled.js";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../data.js";
import {UserContext} from "../../../contexts/user.js";

function PopUser() {

    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const onClick = () => {
        setIsVisible((prevState) => !prevState);
    }

    function onClick1() {
        navigate(AppRoutes.LOGOUT);
    }

    return(
        <div>
            <HeaderUserHover02 onClick={onClick}>{user == null ? "" : user.name}</HeaderUserHover02>
            { isVisible && (
                    <HeaderPopUserSet>
                        <PopUserSetName>{user == null ? "" : user.name}</PopUserSetName>
                        <PopUserSetMail>{user == null ? "" : user.login}</PopUserSetMail>
                        {/*<PopUserSetTheme>*/}
                        {/*    <p>Темная тема</p>*/}
                        {/*    <input type="checkbox" name="checkbox"/>*/}
                        {/*</PopUserSetTheme>*/}
                        <PopUserSetButton type="button" onClick={onClick1}>Выйти</PopUserSetButton>
                    </HeaderPopUserSet>
                )
            }
        </div>
    );
}

export default PopUser;