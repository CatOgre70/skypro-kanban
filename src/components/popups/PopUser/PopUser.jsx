import {useState} from "react";
import {
    HeaderPopUserSet,
    HeaderUserHover02, PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme
} from "./PopUser.styled.js";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../data.js";

function PopUser() {

    const [isVisible, setIsVisible] = useState(false);

    const onClick = () => {
        setIsVisible((prevState) => !prevState);
    }

    return(
        <div>
            <HeaderUserHover02 href="#user-set-target" onClick={onClick}>Ivan Ivanov</HeaderUserHover02>
            { isVisible && (
                    <HeaderPopUserSet id="user-set-target">
                        <PopUserSetName>Ivan Ivanov</PopUserSetName>
                        <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
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