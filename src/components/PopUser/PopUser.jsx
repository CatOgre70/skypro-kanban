import {useRef} from "react";

function PopUser() {

    const userRef = useRef(null);

    const onClick = () => {
        if (userRef.current) {
            if(userRef.current.display === 'none') {
                userRef.current.display='block';
            } else {
                userRef.current.display='none';
            }
        }
    }

    return(
        <div>
            <a href="#user-set-target" className="header__user _hover02" onClick={onClick}>Ivan Ivanov</a>
            <div className="header__pop-user-set pop-user-set" id="user-set-target" ref={userRef}>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input type="checkbox" className="checkbox" name="checkbox"/>
                </div>
                <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
            </div>
        </div>
    );
}

export default PopUser;