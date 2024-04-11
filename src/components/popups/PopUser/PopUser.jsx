import {useState} from "react";
import {
    HeaderPopUserSet,
    HeaderUserHover02, PopUserSetButton,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme, PopUserSetThemeInput, PopUserSetThemeP
} from "./PopUser.styled.js";

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
                            <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
                            <PopUserSetThemeInput type="checkbox" name="checkbox"/>
                        </PopUserSetTheme>
                        <PopUserSetButton type="button"><a href="#popExit">Выйти</a></PopUserSetButton>
                    </HeaderPopUserSet>
                )
            }
        </div>
    );
}

export default PopUser;